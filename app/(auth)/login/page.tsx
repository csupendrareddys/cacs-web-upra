'use client';

import React, { useEffect, useState } from 'react';
import Login from '@/components/views/Login';

export default function LoginPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Login />
    );
}
