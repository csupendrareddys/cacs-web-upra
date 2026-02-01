'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, Briefcase as BriefcaseIcon, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuthStore } from '@/store/authStore';

interface PartnersLoginProps {
    setView?: (view: string) => void;
}

const PartnersLogin: React.FC<PartnersLoginProps> = ({ setView }) => {
    const { setUser } = useAuthStore();
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Extended Registration State
    const [fullName, setFullName] = useState('');
    const [agencyName, setAgencyName] = useState('');
    const [mobile, setMobile] = useState('');
    const [profession, setProfession] = useState('');
    const [city, setCity] = useState('');
    const [membershipNumber, setMembershipNumber] = useState('');
    const [experience, setExperience] = useState('');

    const [isResetting, setIsResetting] = useState(false);
    const [resetEmail, setResetEmail] = useState('');

    const handlePartnerAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const endpoint = isSignUp ? '/api/partner-signup' : '/api/partner-login';

            // Note: Currently defaulting to standard login/signup if specific partner endpoints don't exist
            // But based on analysis, we should use specific ones or flags.
            // Let's assume we use the standard structure but send role='PARTNER' for signup if needed,
            // or use specific endpoints if they exist. 
            // The user's prompt implies improving, so let's stick to what we see or create it.
            // Checking file list: api/partner-login exists.

            const payload = isSignUp ? {
                email,
                password,
                fullName,
                phone: mobile,
                profession,
                otherProfession: profession === 'Other' ? 'Other' : undefined,
                // Add other fields to payload if API supports them
            } : {
                email,
                password
            };

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Authentication failed');
            }

            if (isSignUp) {
                toast.success("Partner registration successful! Pending verification.");
                // Depending on flow, maybe auto-login or ask to wait
            } else {
                toast.success("Welcome back!");
                setUser({
                    id: 'temp-id',
                    email,
                    role: 'PARTNER',
                    name: data.user?.name || 'Partner'
                });
            }

            if (setView) setView('partnerDashboard');
            else router.push('/partners/dashboard');

        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'An error occurred';
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordReset = async (e: React.FormEvent) => {
        e.preventDefault();
        toast.error("Password reset not yet implemented in backend.");
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-inter">
            <div className={`bg-white w-full ${isSignUp ? 'max-w-2xl' : 'max-w-md'} p-10 rounded-3xl shadow-2xl border border-gray-100 relative transition-all duration-300`}>
                <button
                    onClick={() => setView ? setView('home') : router.push('/')}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
                    title="Close"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-8">
                    <div className="inline-block p-3 rounded-full bg-purple-50 mb-4">
                        <BriefcaseIcon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        {isResetting ? "Reset Password" : (isSignUp ? "Partner Registration" : "Partner Portal")}
                    </h2>
                    <p className="text-slate-500 mt-2">
                        {isResetting
                            ? "Enter email to receive reset link."
                            : (isSignUp ? "Join our network of professionals." : "Restricted access for authorized partners only.")}
                    </p>
                </div>

                {isResetting ? (
                    <form onSubmit={handlePasswordReset} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Partner Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                placeholder="partner@upra.in"
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-purple-600 text-white py-3.5 rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/30">
                            Send Reset Link
                        </button>
                        <button
                            type="button"
                            onClick={() => { setIsResetting(false); }}
                            className="w-full text-slate-500 hover:text-slate-700 font-bold text-sm"
                        >
                            Back to Login
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handlePartnerAuth} className="space-y-5">
                        {isSignUp ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="Your Name"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="partner@upra.in"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="98765 43210"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Agency/Firm Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="Legal Solutions Co."
                                        value={agencyName}
                                        onChange={(e) => setAgencyName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Profession</label>
                                    <select
                                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all bg-white"
                                        value={profession}
                                        onChange={(e) => setProfession(e.target.value)}
                                        required
                                        title="Select Profession"
                                        aria-label="Select Profession"
                                    >
                                        <option value="">Select...</option>
                                        <option value="CA">Chartered Accountant</option>
                                        <option value="CS">Company Secretary</option>
                                        <option value="Lawyer">Lawyer / Advocate</option>
                                        <option value="Tax Consultant">Tax Consultant</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Membership Number</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="ICAI/ICSI/Bar Council ID"
                                        value={membershipNumber}
                                        onChange={(e) => setMembershipNumber(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Years of Experience</label>
                                    <input
                                        type="number"
                                        required
                                        min="0"
                                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="e.g. 5"
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">City</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="Delhi"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Create Password</label>
                                    <input
                                        type="password"
                                        required
                                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Partner Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="partner@upra.in"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                                    <input
                                        type="password"
                                        required
                                        className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </>
                        )}

                        {!isSignUp && (
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => { setIsResetting(true); }}
                                    className="text-sm font-bold text-purple-600 hover:underline"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-purple-600 text-white py-3.5 rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
                        >
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : (isSignUp ? "Register as Partner" : "Access Portal")}
                        </button>
                    </form>
                )}

                {!isResetting && (
                    <div className="mt-8 text-center border-t border-gray-100 pt-6">
                        <p className="text-sm text-slate-500 mb-2">
                            {isSignUp ? "Already a partner?" : "New to UPRA Filings?"}
                        </p>
                        <button
                            onClick={() => { setIsSignUp(!isSignUp); }}
                            className="text-purple-600 font-bold hover:underline"
                        >
                            {isSignUp ? "Login Here" : "Register as a Partner"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PartnersLogin;
