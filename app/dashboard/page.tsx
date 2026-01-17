'use client';

import React, { useEffect, useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import Dashboard from '@/components/pages/Dashboard';
import { useOrderStore } from '@/store/orderStore';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const { user } = useOrderStore();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (mounted && !user) {
            router.push('/login');
        }
    }, [mounted, user, router]);

    if (!mounted) return null;

    if (!user) return null; // Redirecting

    return (
        <MainLayout user={user}>
            <Dashboard />
        </MainLayout>
    );
}
