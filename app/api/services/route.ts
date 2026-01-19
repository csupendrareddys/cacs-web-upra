import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (id) {
            const service = await prisma.documentService.findUnique({
                where: { id }
            });

            if (!service) {
                return NextResponse.json({ error: 'Service not found' }, { status: 404 });
            }

            // Mocking requirements until we have a dedicated table
            let requiredDocuments: { name: string }[] = [];

            const name = service.documentType || '';

            if (name.includes('Partnership')) {
                requiredDocuments = [
                    { name: 'PAN Card of All Partners' },
                    { name: 'Aadhar Card of All Partners' },
                    { name: 'Partnership Deed Draft (if available)' },
                    { name: 'Address Proof of Business' },
                    { name: 'Passport Size Photos' }
                ];
            } else if (name.includes('GST')) {
                requiredDocuments = [
                    { name: 'PAN Card' },
                    { name: 'Aadhar Card' },
                    { name: 'Bank Account Details' },
                    { name: 'Address Proof' }
                ];
            } else if (name.includes('Company')) {
                requiredDocuments = [
                    { name: 'Director ID Proofs' },
                    { name: 'Address Proof' },
                    { name: 'DIN (Director Identification Number)' },
                    { name: 'DSC (Digital Signature Certificate)' }
                ];
            } else {
                requiredDocuments = [
                    { name: 'Standard ID Proof' },
                    { name: 'Related Legal Documents' }
                ];
            }

            return NextResponse.json({
                service: {
                    document_id: service.id,
                    document_type: service.documentType,
                    state: service.state,
                    is_active: service.isActive,
                    requirements: requiredDocuments
                }
            }, { status: 200 });
        }

        const services = await prisma.documentService.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' }
        });

        const formattedServices = services.map(s => ({
            document_id: s.id,
            document_type: s.documentType,
            state: s.state,
            is_active: s.isActive
        }));

        return NextResponse.json({ services: formattedServices }, { status: 200 });
    } catch (error: unknown) {
        console.error("Failed to fetch services:", error);
        const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
