'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Loader2, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        const data = await res.json();
        if (data.services) {
          setServices(data.services);
        }
      } catch (error) {
        console.error("Failed to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Utility Bar */}
      <div className="bg-gray-100 border-b border-gray-200 text-xs py-2">
        <div className="container mx-auto px-4 flex justify-end">
          <Link className="text-gray-600 hover:text-black font-medium" href="/partner-login">Partner Login</Link>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">U</div>
            <span className="text-xl font-bold tracking-tight">UPRA</span>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-black"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav className={`${isNavOpen ? 'absolute top-16 left-0 w-full bg-white border-b border-gray-200 p-4 shadow-lg flex flex-col' : 'hidden'} md:static md:w-auto md:bg-transparent md:border-none md:p-0 md:shadow-none md:flex md:flex-row md:items-center gap-6 text-sm font-medium`}>
            <Link href="#" className="hover:text-purple-600 transition-colors">Startup</Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">Registrations</Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">GST</Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">Income Tax</Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">MCA</Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">Compliances</Link>
            <Link href="#" className="hover:text-purple-600 transition-colors">Global</Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/login" className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900">
              Welcome to UPRA
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Your trusted CA & CS partner for Startup, Registrations, GST, Income Tax, MCA & global compliance services.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/login" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md">
                Get Started
              </Link>
              <button className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Dynamic Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

            {loading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
              </div>
            ) : services.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                  <div key={service.document_id || idx} className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-gray-50/50 group">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">{service.document_type}</h3>
                    <p className="text-gray-600 mb-4 text-sm">Professional assistance for {service.document_type} related requirements.</p>
                    <div className="flex items-center text-sm font-medium text-purple-600">
                      <span>{service.state || 'Global'}</span>
                      <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <p>No active services listed at the moment.</p>
                <p className="text-xs mt-2">Check back soon for updates.</p>
              </div>
            )}

            {/* Fallback Static Cards if DB is empty for demo purposes (Optional, but good for UX) */}
            {!loading && services.length === 0 && (
              <div className="grid md:grid-cols-3 gap-8 mt-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="p-6 border border-gray-100 rounded-2xl shadow-sm bg-gray-50/50">
                  <h2 className="text-xl font-bold mb-3">Startup (Example)</h2>
                  <p className="text-gray-600">Assistance for company formation and registrations.</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-2xl shadow-sm bg-gray-50/50">
                  <h2 className="text-xl font-bold mb-3">GST (Example)</h2>
                  <p className="text-gray-600">End-to-end compliance and filing support.</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-2xl shadow-sm bg-gray-50/50">
                  <h2 className="text-xl font-bold mb-3">Partner Program (Example)</h2>
                  <p className="text-gray-600">Partner with us for referrals and mutual growth.</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 text-sm">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">UPRAFilings</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#" className="hover:underline">About UPRAFilings</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              <li><Link href="#" className="hover:underline">Platforms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Search</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#" className="hover:underline">Business Search</Link></li>
              <li><Link href="#" className="hover:underline">Trademark Search</Link></li>
              <li><Link href="#" className="hover:underline">Filings.AE for UAE</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Usage</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Refund Policy</Link></li>
              <li><Link href="#" className="hover:underline">Legal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">More</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#" className="hover:underline">Confidentiality Policy</Link></li>
              <li><Link href="#" className="hover:underline">Disclaimer Policy</Link></li>
              <li><Link href="#" className="hover:underline">UPRAFilings Review</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <small>© UPRA — All rights reserved</small>
          <div className="mt-2">
            <Link href="/admin-login" className="text-gray-400 hover:text-gray-600 text-xs transition-colors">
              Admin Access
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
