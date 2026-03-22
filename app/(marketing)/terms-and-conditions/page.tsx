'use client';

import React from 'react';
import LegalPageLayout, { LegalSection } from '@/components/layouts/LegalPageLayout';
import { FileText } from 'lucide-react';

const sections: LegalSection[] = [
    {
        id: 'introduction',
        title: 'Introduction',
        content: (
            <p>
                Welcome to <strong>UPENDRA REDDY & CO LLP</strong>. By accessing or using our website, services, tools, or digital platforms including but not limited to{' '}
                <a href="https://www.bookmycacs.in" className="text-blue-600 font-semibold hover:underline">BookMyCACS.in</a>,
                you agree to be legally bound by these Terms and Conditions, along with our Privacy Policy and Refund Policy.
                These terms govern your access to our professional consultancy services, which include advisory for government schemes, subsidy facilitation, MSME support, IPO enablement, licensing, export-import documentation, and public finance consulting.
            </p>
        ),
    },
    {
        id: 'nature-of-services',
        title: 'Nature of Services',
        content: (
            <div className="space-y-4">
                <p>
                    <strong>UPENDRA REDDY & CO LLP</strong> offers knowledge-driven, process-based consulting solutions for:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        'Access to Central & State government schemes',
                        'Business & financial subsidies',
                        'MSME/Startup certifications',
                        'FSSAI, IEC, UDYAM, GEM & other registrations',
                        'Project & export finance',
                        'SME-IPO advisory and documentation',
                        'Green business transformation',
                        'Strategic growth solutions for sustainable businesses',
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                            <span className="text-sm">{item}</span>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-slate-500 mt-4 italic">
                    We operate through a national platform connecting urban and rural enterprises with scheme-based funding, policy advisory, and equity/debt linkages. None of the information on our website constitutes legal advice or professional certification unless explicitly stated in the engagement letter or agreement.
                </p>
            </div>
        ),
    },
    {
        id: 'no-advertisement',
        title: 'No Advertisement or Solicitation',
        content: (
            <p>
                This website is not intended to advertise, solicit, or promote services in jurisdictions where such activities are restricted or unlawful. Users access the site voluntarily and at their own discretion.
            </p>
        ),
    },
    {
        id: 'intellectual-property',
        title: 'Intellectual Property Rights',
        content: (
            <div className="space-y-4">
                <p>
                    All content on this website — including logos, text, infographics, service formats, presentations, and software — is the intellectual property of <strong>UPENDRA REDDY & CO LLP</strong>.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <p className="text-red-800 text-sm font-medium">
                        ⚠️ No part of this website may be copied, reused, modified, or republished without prior written consent. Violators will be prosecuted under the <strong>Indian Copyright Act, 1957</strong> and <strong>Trade Marks Act, 1999</strong>.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: 'permitted-use',
        title: 'Permitted Use',
        content: (
            <div className="space-y-4">
                <p>
                    You may access the website and download material for personal, non-commercial use only. You may <strong>not</strong>:
                </p>
                <ul className="space-y-3 list-none">
                    <li className="flex items-start gap-3">
                        <span className="shrink-0 text-red-500 font-bold mt-0.5">✕</span>
                        <span>Use content to compete or misrepresent our offerings</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="shrink-0 text-red-500 font-bold mt-0.5">✕</span>
                        <span>Misuse the site for unlawful purposes</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="shrink-0 text-red-500 font-bold mt-0.5">✕</span>
                        <span>Bypass security features or inject harmful code</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="shrink-0 text-red-500 font-bold mt-0.5">✕</span>
                        <span>Collect or mine data from the platform without permission</span>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: 'professional-engagement',
        title: 'Professional Engagement Disclaimer',
        content: (
            <div className="space-y-4">
                <p>
                    Engaging with <strong>UPENDRA REDDY & CO LLP</strong> through this website or platform does not establish a consultant-client relationship unless confirmed through a formal engagement process, including service selection, payment, onboarding call, and signed deliverables scope.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <p className="text-amber-800 text-sm">
                        Advisory results, funding success, and IPO outcomes are subject to due diligence, policy changes, client cooperation, documentation readiness, and government approval. <strong>We do not guarantee results beyond professional diligence.</strong>
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: 'refunds-revisions',
        title: 'Refunds, Revisions & Disputes',
        content: (
            <div className="space-y-4">
                <p>
                    Refunds are governed by our <a href="/refund-policy" className="text-blue-600 font-semibold hover:underline">Refund Policy</a>. Refund requests must be made in writing within <strong>7 days</strong> of payment.
                </p>
                <p>
                    Revisions to deliverables are limited to those explicitly included in the scope of service. Any dispute shall be addressed first through amicable resolution and, failing that, through arbitration as per Indian Arbitration laws.
                </p>
            </div>
        ),
    },
    {
        id: 'limitation-of-liability',
        title: 'Limitation of Liability',
        content: (
            <div className="space-y-4">
                <p className="font-medium text-slate-700">UPENDRA REDDY & CO LLP shall not be liable for:</p>
                <ul className="space-y-3 list-none">
                    <li className="flex items-start gap-3">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                        <span>Delays or rejections by government bodies or regulators</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                        <span>Client-side delays, errors, or non-disclosures</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                        <span>Force majeure events (natural disasters, cyber-attacks, policy changes)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                        <span>Loss of business or opportunity arising from use of our services</span>
                    </li>
                </ul>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <p className="text-slate-700 text-sm font-medium">
                        Total liability, if any, shall not exceed the total amount paid for the specific service in question.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: 'external-links',
        title: 'External Links & Third-Party Tools',
        content: (
            <p>
                The website may contain links to third-party platforms, APIs, or references to government portals. <strong>UPENDRA REDDY & CO LLP</strong> does not control or endorse the content or policies of these sites. Use them at your own risk and discretion.
            </p>
        ),
    },
    {
        id: 'data-privacy',
        title: 'Data Privacy & Security',
        content: (
            <p>
                We are committed to safeguarding your data in accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. Please refer to our{' '}
                <a href="/privacy-policy" className="text-blue-600 font-semibold hover:underline">Privacy Policy</a> for full details.
            </p>
        ),
    },
    {
        id: 'indemnification',
        title: 'Indemnification',
        content: (
            <p>
                You agree to indemnify and hold harmless <strong>UPENDRA REDDY & CO LLP</strong>, its partners, affiliates, and employees against all claims, liabilities, losses, and legal costs arising from your breach of these terms or misuse of our services.
            </p>
        ),
    },
    {
        id: 'governing-law',
        title: 'Governing Law & Jurisdiction',
        content: (
            <p>
                These terms are governed by the laws of India. Any legal dispute shall fall under the exclusive jurisdiction of courts in <strong>Hyderabad, Telangana</strong>.
            </p>
        ),
    },
    {
        id: 'client-obligations',
        title: 'Client Obligations',
        content: (
            <p>
                The Client agrees to provide all necessary documents, information, and clarifications in a timely, accurate, and complete manner as requested by <strong>UPENDRA REDDY & CO LLP</strong>. The Client shall fully cooperate during audits, inspections, or queries from relevant authorities. Any penalties, delays, or rejections arising from false, incomplete, or delayed submission of information shall be the sole responsibility of the Client.
            </p>
        ),
    },
    {
        id: 'payment-terms',
        title: 'Payment Terms',
        content: (
            <p>
                All payments shall be made within the timelines specified in the invoice, via accepted modes of payment such as bank transfer, UPI, or other approved methods. Payment terms may be structured as advance payments or milestone-based payments, as agreed in writing. Any delay in payment shall attract interest or penalty charges as specified in the invoice.
            </p>
        ),
    },
    {
        id: 'confidentiality',
        title: 'Confidentiality & Non-Disclosure',
        content: (
            <div className="space-y-4">
                <p>
                    Both parties agree to maintain strict confidentiality regarding any internal strategies, pricing, contacts, or proprietary information shared during the engagement. <strong>UPENDRA REDDY & CO LLP</strong> will maintain confidentiality over all client documents and sensitive business information, except where disclosure is required by law.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <p className="text-blue-800 text-sm">
                        <strong>Note:</strong> UPENDRA REDDY & CO LLP shall not be liable for any delay or failure in performance caused by events beyond its reasonable control, including but not limited to natural disasters, cyber-attacks, policy changes, epidemics, pandemics, strikes, lockouts, and prolonged internet or server downtime not attributable to UPENDRA REDDY & CO LLP.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: 'government-approval',
        title: 'Government Approval Disclaimer',
        content: (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-amber-800 text-sm leading-relaxed">
                    All government approvals, subsidies, licenses, or benefits are granted solely at the discretion of the relevant authorities. <strong>UPENDRA REDDY & CO LLP</strong> does not provide any guarantee of approval, irrespective of the fulfilment of requirements, and shall not be liable for any rejection, delay, or policy change by such authorities.
                </p>
            </div>
        ),
    },
    {
        id: 'dispute-resolution',
        title: 'Dispute Resolution (Arbitration)',
        content: (
            <p>
                Any dispute arising under these Terms & Conditions shall be resolved through arbitration in accordance with the <strong>Arbitration and Conciliation Act, 1996</strong>. The arbitration shall be conducted by a sole arbitrator or three arbitrators, as agreed, in the English language, with the seat of arbitration being <strong>Jaipur, Rajasthan</strong>. Efforts shall be made to complete the arbitration process within six months from the date of initiation.
            </p>
        ),
    },
    {
        id: 'third-party-platforms',
        title: 'Third-Party Platforms',
        content: (
            <p>
                <strong>UPENDRA REDDY & CO LLP</strong> may use third-party platforms, APIs, or government portals (e.g., UDYAM, DGFT) to provide services. The Company shall not be responsible for downtime, errors, or policy changes in such platforms, and any resulting delay in project timelines shall not constitute a breach of contract.
            </p>
        ),
    },
    {
        id: 'mission',
        title: 'Our Mission & Social Commitment',
        content: (
            <div className="space-y-4">
                <ul className="space-y-3 list-none">
                    {[
                        'Democratize access to public incentives',
                        'Retain national capital by offering world-class consulting on-shore',
                        'Bridge the MSME funding gap across rural and underserved regions',
                        'Enable IPO-ready businesses and long-term compliance',
                        'Support Green Business and Sustainability Transformation',
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="shrink-0 text-green-500 font-bold mt-0.5">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-slate-500 italic mt-4">
                    We believe in impact-driven consulting that builds jobs, capital, and compliance across Bharat.
                </p>
            </div>
        ),
    },
    {
        id: 'why-choose-upra',
        title: 'Why Choose UPRA',
        content: (
            <div className="space-y-4">
                <p>
                    We started UPRA to solve the awareness-access gap that prevents most Indian enterprises from claiming their rightful benefits under public incentive policies. We are not just consultants — we are <strong>policy evangelists and growth enablers</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {[
                        'Expert team with CAs, PhDs, CS, CFA, Advocates, CHAs',
                        'Proprietary database of 500+ Central/State schemes',
                        'On-ground support via DICs, SIDBI, NSIC, NABARD, Atal Innovation',
                        'SME/Startup IPO execution via SEBI-registered partners',
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-blue-50 rounded-xl px-4 py-3 border border-blue-100">
                            <span className="shrink-0 text-blue-500 font-bold mt-0.5">★</span>
                            <span className="text-sm text-blue-900">{item}</span>
                        </div>
                    ))}
                </div>
                <p className="text-center font-semibold text-slate-700 mt-6">
                    A one-stop growth partner from concept to capital.
                </p>
                <p className="text-center text-slate-500 text-sm italic">
                    Our vision is to make &quot;scheme support as easy as online shopping&quot; — simple, reliable, and result-driven.
                </p>
            </div>
        ),
    },
    {
        id: 'contact-us',
        title: 'Contact Us',
        content: (
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 p-6">
                <h4 className="font-bold text-lg text-slate-900 mb-4">UPENDRA REDDY & CO LLP GROUP</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</span>
                            <p className="text-sm text-slate-700 mt-1">Villa number 45, Shikhara Villas, Bachupally, Hyderabad - 500090</p>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</span>
                            <p className="text-sm mt-1">
                                <a href="mailto:cacssirigalaupendrareddy@gmail.com" className="text-blue-600 hover:underline">cacssirigalaupendrareddy@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Website</span>
                            <p className="text-sm mt-1">
                                <a href="https://www.bookmycacs.in" className="text-blue-600 hover:underline">www.bookmycacs.in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

export default function TermsAndConditionsPage() {
    return (
        <LegalPageLayout
            title="Terms & Conditions"
            subtitle="These terms govern your access to our professional consultancy services. Please read carefully before using our platform."
            effectiveDate="March 2025"
            icon={<FileText className="w-8 h-8 text-blue-400" />}
            sections={sections}
        />
    );
}
