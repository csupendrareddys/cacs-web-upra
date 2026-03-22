'use client';

import React from 'react';
import LegalPageLayout, { LegalSection } from '@/components/layouts/LegalPageLayout';
import { RotateCcw } from 'lucide-react';

const sections: LegalSection[] = [
    {
        id: 'introduction',
        title: 'Introduction',
        content: (
            <p>
                We sincerely thank you for choosing <strong>UPENDRA REDDY & CO LLP</strong> for your legal and professional service needs through our website{' '}
                <a href="https://www.bookmycacs.in" className="text-blue-600 font-semibold hover:underline">www.bookmycacs.in</a>.
                We request you to carefully read this Refund Policy along with our Terms and Conditions, as they outline your rights and obligations as our valued customer concerning any purchase of services or products made through our platform.
            </p>
        ),
    },
    {
        id: 'commitment',
        title: 'Our Commitment',
        content: (
            <p>
                At <strong>UPENDRA REDDY & CO LLP</strong>, we are committed to delivering all services as per the timelines and specifications mentioned on our website. However, if we are unable to fulfil your service or deliver the product as promised, you may be eligible for a refund, subject to the following conditions.
            </p>
        ),
    },
    {
        id: 'eligibility',
        title: 'Refund Eligibility',
        content: (
            <div className="space-y-5">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <p className="text-amber-800 text-sm font-medium">
                        ⚠️ Refunds will only be considered in cases where there is a clear, demonstrable deficiency in the service or product provided by UPENDRA REDDY & CO LLP.
                    </p>
                </div>
                <ul className="space-y-4 list-none">
                    <li className="flex items-start gap-3">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                        <span>If a customer decides to cancel the service solely due to a <strong>change of mind</strong> and no fault, delay, or deficiency is attributable to UPENDRA REDDY & CO LLP, such refund requests <strong>shall not be accepted</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></span>
                        <span>Once the service has been rendered or the work has been shared with you, a refund will not be applicable in the case of a change of mind. However, we may allow you to utilise the paid amount towards any other service of equivalent value offered by UPENDRA REDDY & CO LLP. The amount paid can be adjusted fully or partially against the new service chosen.</span>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: 'time-limits',
        title: 'Time Limits for Refund Requests',
        content: (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 font-bold text-lg">!</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-red-800 mb-2">30-Day Deadline</h4>
                        <p className="text-red-700 text-sm leading-relaxed">
                            Any refund request raised more than <strong>30 (thirty) days</strong> after the purchase of the service or product — especially after a communication has been sent confirming completion of the work — shall be considered invalid and will not be processed.
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: 'refund-process',
        title: 'Refund Process',
        content: (
            <div className="space-y-5">
                <p>
                    If your refund request is reviewed and approved by <strong>UPENDRA REDDY & CO LLP</strong>, we will notify you via email.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                        <div className="text-3xl font-extrabold text-blue-600 mb-1">15</div>
                        <div className="text-sm font-semibold text-blue-800">Business Days</div>
                        <p className="text-xs text-blue-600 mt-2">Maximum processing time for approved refunds</p>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                        <div className="text-3xl font-extrabold text-green-600 mb-1">100%</div>
                        <div className="text-sm font-semibold text-green-800">Direct Credit</div>
                        <p className="text-xs text-green-600 mt-2">Refunded directly to your bank account</p>
                    </div>
                </div>
                <p className="text-sm text-slate-500 italic">
                    We strive to handle all refund matters promptly and professionally to ensure that your payment is returned as soon as possible.
                </p>
            </div>
        ),
    },
];

export default function RefundPolicyPage() {
    return (
        <LegalPageLayout
            title="Refund Policy"
            subtitle="Our refund policy outlines your rights and obligations regarding service purchases through our platform."
            effectiveDate="March 2025"
            icon={<RotateCcw className="w-8 h-8 text-blue-400" />}
            sections={sections}
        />
    );
}
