'use client';

import React, { useState, useEffect, useRef } from 'react';
import MainLayout from './MainLayout';
import { Footer } from '../ui/footer';
import Link from 'next/link';
import { useOrderStore } from '@/store/orderStore';
import { ChevronRight, Clock, Shield, FileText, ArrowUp } from 'lucide-react';

export interface LegalSection {
    id: string;
    title: string;
    content: React.ReactNode;
}

interface LegalPageLayoutProps {
    title: string;
    subtitle: string;
    effectiveDate: string;
    icon: React.ReactNode;
    sections: LegalSection[];
    accentColor?: string;
}

export default function LegalPageLayout({
    title,
    subtitle,
    effectiveDate,
    icon,
    sections,
    accentColor = 'blue',
}: LegalPageLayoutProps) {
    const { user } = useOrderStore();
    const [mounted, setMounted] = useState(false);
    const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);

            // Find which section is currently in view
            let currentSection = sections[0]?.id || '';
            for (const section of sections) {
                const el = sectionRefs.current[section.id];
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        currentSection = section.id;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (id: string) => {
        const el = sectionRefs.current[id];
        if (el) {
            const yOffset = -100;
            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    if (!mounted) return null;

    return (
        <MainLayout user={user}>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="text-blue-400 font-medium">{title}</span>
                    </nav>

                    <div className="flex items-start gap-6">
                        <div className="hidden md:flex w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 items-center justify-center shrink-0">
                            {icon}
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                                {title}
                            </h1>
                            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-6">
                                {subtitle}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-slate-300 px-4 py-2 rounded-full">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    Effective: {effectiveDate}
                                </span>
                                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-slate-300 px-4 py-2 rounded-full">
                                    <FileText className="w-4 h-4 text-blue-400" />
                                    {sections.length} Sections
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Sidebar - Table of Contents */}
                        <aside className="lg:w-72 shrink-0">
                            <div className="lg:sticky lg:top-24">
                                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                                        Table of Contents
                                    </h3>
                                    <nav className="space-y-1">
                                        {sections.map((section, idx) => (
                                            <button
                                                key={section.id}
                                                onClick={() => scrollToSection(section.id)}
                                                className={`w-full text-left flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group ${
                                                    activeSection === section.id
                                                        ? 'bg-blue-50 text-blue-700 font-semibold shadow-sm'
                                                        : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                                                }`}
                                            >
                                                <span className={`shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                                                    activeSection === section.id
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                                                }`}>
                                                    {idx + 1}
                                                </span>
                                                <span className="leading-snug">{section.title}</span>
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                {/* Quick Contact Card */}
                                <div className="mt-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                                    <h4 className="font-bold text-lg mb-2">Have Questions?</h4>
                                    <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                                        Contact us for any queries regarding our policies.
                                    </p>
                                    <a
                                        href="mailto:cacssirigalaupendrareddy@gmail.com"
                                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-sm font-semibold px-4 py-2.5 rounded-xl"
                                    >
                                        Email Us
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </aside>

                        {/* Content Sections */}
                        <main className="flex-1 min-w-0">
                            <div className="space-y-8">
                                {sections.map((section, idx) => (
                                    <div
                                        key={section.id}
                                        id={section.id}
                                        ref={(el) => { sectionRefs.current[section.id] = el; }}
                                        className="scroll-mt-24 group"
                                    >
                                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
                                            <div className="flex items-start gap-4 mb-6">
                                                <span className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight pt-1">
                                                    {section.title}
                                                </h2>
                                            </div>
                                            <div className="text-slate-600 leading-relaxed text-[15px] pl-14">
                                                {section.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Disclaimer */}
                            <div className="mt-12 bg-slate-50 rounded-2xl border border-slate-100 p-8 text-center">
                                <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
                                    This document is an electronic record under the Information Technology Act, 2000.
                                    For the latest version, please visit our website at{' '}
                                    <a href="https://www.bookmycacs.in" className="text-blue-600 font-semibold hover:underline">
                                        www.bookmycacs.in
                                    </a>
                                </p>
                                <p className="text-xs text-slate-400 mt-4">
                                    © {new Date().getFullYear()} UPENDRA REDDY & CO LLP. All rights reserved.
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all flex items-center justify-center hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>
            )}

            <Footer />
        </MainLayout>
    );
}
