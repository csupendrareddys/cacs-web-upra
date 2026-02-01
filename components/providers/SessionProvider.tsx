"use client";

import React from 'react';


export function SessionProvider({ children }: { children: React.ReactNode }) {
    // Optional: We could check session validity with backend here
    // For now, it just renders children, preserving the layout structure.
    return <>{children}</>;
}
