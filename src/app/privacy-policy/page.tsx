import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Regenevise – Patient Data & HIPAA Safeguards",
  description:
    "Review the Regenevise Privacy Policy. How we collect, safeguard, and respect your Personally Identifiable Information (PII) and Protected Health Information (PHI).",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#F8FAFC] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00E6D3] uppercase tracking-wider bg-cyan-50 px-3 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Policy Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Last Updated: March 2026 • REGENEVISE LLC
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
            This Privacy Policy describes how REGENEVISE LLC (&quot;Regenevise&quot;, &quot;we&quot;, &quot;us&quot;,
            or &quot;our&quot;) collects, utilizes, stores, and protects Personally
            Identifiable Information (PII) and Protected Health Information (PHI)
            submitted via our website (https://regenevise.com), digital intake
            forms, and patient matchmaking communications.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-10 text-gray-700 text-xs sm:text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              1. Information We Collect
            </h2>
            <p>
              When inquiring about regenerative therapies or scheduling a virtual
              consultation, you may provide us with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
              <li>
                <strong>Contact Identifiers:</strong> Name, personal phone number,
                email address, and mailing address.
              </li>
              <li>
                <strong>Clinical Profile & Health History:</strong> Previous
                diagnoses, symptom descriptions, surgical history, and
                diagnostic imaging reports (e.g., MRI/X-ray summaries) shared to
                assist in specialist evaluation.
              </li>
              <li>
                <strong>Digital Telemetry:</strong> IP address, device browser
                type, referral source, and session cookies used solely to optimize
                website performance.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              2. How Your Information Is Utilized
            </h2>
            <p>We process patient data strictly for the following purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                "Pairing your clinical profile with licensed regenerative specialists",
                "Facilitating free initial virtual intake consultations",
                "Coordinating follow-up care and aftercare inquiries",
                "Improving website accessibility and user experience",
                "Complying with federal and California state regulatory standards",
                "Providing security alerts and appointment confirmations",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00E6D3] shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              3. HIPAA Compliance & Protected Health Information (PHI)
            </h2>
            <div className="bg-cyan-50/60 p-4 rounded-xl border border-cyan-100 text-cyan-900 text-xs">
              <strong>Patient Privacy Guarantee:</strong> Regenevise adheres to
              applicable HIPAA and HITECH privacy standards. We treat medical
              records with strict confidentiality.
            </div>
            <p>
              Under no circumstances does Regenevise sell, lease, or monetize
              identifiable health records to pharmaceutical companies, brokers,
              or advertisers. PHI is only disclosed to accredited clinics and
              physicians with your explicit request and informed consent for
              treatment referral.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              4. Cookies & Web Tracking
            </h2>
            <p>
              Cookies are small files stored on your device that enable our
              platform to remember your preferences and analyze aggregate website
              traffic. You have the right to disable non-essential cookies
              through your browser settings at any time without forfeiting access
              to general website content.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              5. California Privacy Rights (CalOPPA & CCPA)
            </h2>
            <p>
              California residents have the right to request an accounting of
              personal information collected, request correction or deletion of
              inaccurate records, and opt out of any non-essential data
              processing. To exercise these rights, email us at{" "}
              <a
                href="mailto:info@regenevise.com"
                className="text-[#00E6D3] font-semibold hover:underline"
              >
                info@regenevise.com
              </a>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              6. Data Security & Storage Safeguards
            </h2>
            <p>
              We implement industry-grade technical, physical, and administrative
              safeguards, including TLS/SSL encryption for all data in transit,
              restricted role-based database permissions, and routine vulnerability
              scans. While no digital protocol is 100% impenetrable, we
              continuously update our defenses to safeguard patient privacy.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-8 pt-6 border-t border-gray-100 space-y-2">
            <h3 className="text-base font-bold text-gray-900">
              Privacy Officer & Contact Information
            </h3>
            <p className="text-xs text-gray-500">
              If you have questions, complaints, or requests regarding this
              Privacy Policy, contact our privacy administration:
            </p>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs text-gray-600 space-y-1">
              <div>
                <strong>REGENEVISE LLC</strong>
              </div>
              <div>1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801</div>
              <div>
                Email:{" "}
                <a
                  href="mailto:info@regenevise.com"
                  className="text-[#00E6D3] font-semibold"
                >
                  info@regenevise.com
                </a>
              </div>
              <div>Direct Helpline: (208) 867-1733</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
