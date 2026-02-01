'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, Loader2 } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import toast from 'react-hot-toast';

interface LoginProps {
    isDemoMode?: boolean;
}

const Login: React.FC<LoginProps> = ({ isDemoMode = false }) => {
    const router = useRouter();
    const { setUser } = useAuthStore();

    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const endpoint = isSignUp ? '/api/signup' : '/api/login';
            const payload = isSignUp
                ? { fullName: name, email, password }
                : { email, password };

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Authentication failed');
            }

            if (isSignUp) {
                toast.success('Account created! Please log in.');
                setIsSignUp(false);
            } else {
                toast.success('Login successful!');
                // For a real app, we might fetch the full profile here or rely on the simpler response
                // Update store based on successful login (assuming cookie is set)
                // We might need an /api/auth/me endpoint to get full details if login doesn't return them
                // But looking at api/login, it returns role. We define a basic user profile.
                setUser({
                    id: 'temp-id-placeholder', // ideally API returns this
                    email: email,
                    role: data.role as 'CLIENT' | 'PARTNER' | 'ADMIN',
                    name: 'User' // ideally API returns this
                });
                router.push('/dashboard');
            }
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-inter">
            <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl border border-gray-100 relative">
                <button
                    onClick={() => router.push('/')}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
                    title="Close"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-slate-900">{isSignUp ? "Create Account" : "Welcome Back"}</h2>
                    <p className="text-slate-500 mt-2">{isSignUp ? "Sign up to get started" : "Sign in to access your dashboard"}</p>
                    {isDemoMode && <p className="text-xs text-amber-600 mt-2 bg-amber-50 p-2 rounded">Demo Mode Active</p>}
                </div>

                <form onSubmit={handleAuth} className="space-y-6">
                    {isSignUp && (
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (isSignUp ? "Sign Up" : "Login")}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-600 font-bold hover:underline">
                        {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
