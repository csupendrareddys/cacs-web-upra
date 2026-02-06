import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
        }

        // Fetch user with service provider data
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                serviceProvider: true
            }
        });

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Verify password
        const isValid = await bcrypt.compare(password, user.passwordHash);

        if (!isValid) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Check Role
        if (user.role !== 'PARTNER' && user.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Unauthorized: Not a partner account' }, { status: 403 });
        }

        // Create Session in DB
        const sessionToken = uuidv4();
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

        await prisma.session.create({
            data: {
                sessionToken,
                userId: user.id,
                expires: expiresAt,
            }
        });

        // Prepare Response with HttpOnly Cookie
        const response = NextResponse.json({
            message: 'Partner Login successful',
            user: {
                id: user.id,
                email: user.email,
                name: user.serviceProvider?.fullName,
                role: user.role,
                status: user.serviceProvider?.verificationStatus
            }
        }, { status: 200 });

        response.cookies.set('session_token', sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            expires: expiresAt
        });

        return response;

    } catch (error: unknown) {
        console.error('Partner Login Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
