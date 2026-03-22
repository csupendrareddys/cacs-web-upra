'use client';

import React from 'react';
import LegalPageLayout, { LegalSection } from '@/components/layouts/LegalPageLayout';
import { Shield } from 'lucide-react';

const sections: LegalSection[] = [
    {
        id: 'general',
        title: 'General',
        content: (
            <ul className="space-y-4 list-none">
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>This document is an electronic record under the Information Technology Act, 2000 and does not require physical or digital signatures.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>It is published in compliance with Rule 3(1) of the IT (Intermediaries Guidelines) Rules, 2011, requiring publication of terms of use, privacy policy, and rules governing <a href="https://www.bookmycacs.in" className="text-blue-600 font-semibold hover:underline">www.bookmycacs.in</a>.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>The domain <a href="https://www.bookmycacs.in" className="text-blue-600 font-semibold hover:underline">www.bookmycacs.in</a> is owned and operated by <strong>UPENDRA REDDY & CO LLP</strong>, a professional firm registered under the laws of India.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>&quot;You&quot; refers to any individual or entity accessing our website. &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot; refers to <strong>UPENDRA REDDY & CO LLP</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>The User&apos;s use of this Website is governed by this Policy along with the Terms available on <a href="https://www.bookmycacs.in" className="text-blue-600 font-semibold hover:underline">www.bookmycacs.in</a>.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>By accessing the Website, the User agrees to be legally bound by this Policy and Terms.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span><strong>UPENDRA REDDY & CO LLP</strong> reserves the right to amend this Policy without prior notice. Continued use shall constitute acceptance.</span>
                </li>
            </ul>
        ),
    },
    {
        id: 'collection-of-information',
        title: 'Collection of Personal & Other Information',
        content: (
            <ul className="space-y-4 list-none">
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>We collect personal info such as name, address, email, phone, and browsing activity to improve service delivery.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>We may automatically track IP addresses and usage behaviour.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>Transactional data is collected when purchases are made on our platform.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>By providing contact details, you consent to receiving communications even if registered under DND/NCPR.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>Feedback, reviews, and messages submitted may be stored and shared if required legally.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>Certain user data may be shared with third-party services (e.g. payment gateways) for operations.</span>
                </li>
            </ul>
        ),
    },
    {
        id: 'cookies',
        title: 'Cookies',
        content: (
            <ul className="space-y-4 list-none">
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>We use cookies to personalize content, remember preferences, and improve performance.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>Declining cookies may affect certain features and user experience.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>Third-party cookies may also be present; we are not responsible for their policies.</span>
                </li>
            </ul>
        ),
    },
    {
        id: 'sharing-of-information',
        title: 'Sharing of Personal Information',
        content: (
            <ul className="space-y-4 list-none">
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>Information may be shared with affiliated entities to prevent fraud or provide co-branded services.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>Data may be disclosed to comply with legal obligations or enforce Terms.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                    <span>In case of merger, acquisition, or restructuring, data may be transferred to the new entity.</span>
                </li>
            </ul>
        ),
    },
    {
        id: 'security',
        title: 'Security',
        content: (
            <p>
                All transactions are encrypted and secure. <strong>UPENDRA REDDY & CO LLP</strong> does not store your card details. Payments are routed only through authorized gateways.
            </p>
        ),
    },
    {
        id: 'third-party-links',
        title: 'Third-Party Links & Advertising',
        content: (
            <p>
                External websites linked through our platform may have their own policies. We are not responsible for their practices.
            </p>
        ),
    },
    {
        id: 'user-consent',
        title: 'User Consent',
        content: (
            <p>
                By using our website, you consent to the collection, storage, and disclosure of information as outlined in this Policy.
            </p>
        ),
    },
    {
        id: 'google-user-data',
        title: 'Google User Data',
        content: (
            <p>
                We integrate with Google Calendar only for compliance reminders. We do not store or use Google data beyond this purpose.
            </p>
        ),
    },
    {
        id: 'data-retention',
        title: 'Data Retention & Deletion',
        content: (
            <p>
                We retain data only as long as necessary for services. Upon request, synced data will be deleted and no longer accessible.
            </p>
        ),
    },
];

export default function PrivacyPolicyPage() {
    return (
        <LegalPageLayout
            title="Privacy Policy"
            subtitle="Privacy Policy & Terms of Use — UPENDRA REDDY & CO LLP. We respect your privacy and are committed to protecting personal data you share with us."
            effectiveDate="March 2025"
            icon={<Shield className="w-8 h-8 text-blue-400" />}
            sections={sections}
        />
    );
}
