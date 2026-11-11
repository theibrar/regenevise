import React from "react";
import Link from "next/link";
import { Scale, FileText, AlertCircle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Regenevise – Legal Disclaimers & Matchmaking Terms",
  description:
    "Terms and Conditions governing the use of the Regenevise healthcare matchmaking service, medical disclaimers, cancellation policies, and HIPAA obligations.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-[#F8FAFC] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00E6D3] uppercase tracking-wider bg-cyan-50 px-3 py-1 rounded-full">
            <Scale className="w-4 h-4" />
            <span>Binding Legal Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Last Updated: March 2026 • REGENEVISE LLC
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
            Please read these Terms of Service (&quot;Terms&quot;) carefully before
            accessing or using the Regenevise platform (https://regenevise.com).
            By visiting our website or scheduling a matchmaking consultation, you
            agree to be bound by all terms, policies, and notices stated herein.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-10 text-gray-700 text-xs sm:text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              1. Platform Nature: Referral & Matchmaking Role
            </h2>
            <p>
              REGENEVISE LLC is an independent patient matchmaking and clinical
              referral service. Regenevise does not own clinics, administer
              injections, prescribe medication, or provide direct medical care.
              Our sole function is to evaluate individual patient preferences and
              connect them with independent, board-certified healthcare providers
              specializing in cellular and regenerative therapies.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              2. Medical Disclaimer & No Doctor-Patient Relationship
            </h2>
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-amber-900 text-xs space-y-1.5">
              <div className="flex items-center gap-2 font-bold">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>IMPORTANT MEDICAL NOTICE</span>
              </div>
              <p>
                All website text, videos, graphics, and consultation dialogues
                are for educational and referral coordination purposes only. Use
                of this platform does NOT establish a physician-patient
                relationship with REGENEVISE LLC. Always consult your primary care
                physician before initiating, changing, or discontinuing any
                medical treatment.
              </p>
            </div>
            <p>
              Stem cell therapy is considered experimental by the U.S. Food and
              Drug Administration (FDA) and is not FDA-approved for general
              orthopedic or systemic treatment. Individual outcomes vary
              significantly depending on biology, age, and disease severity.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              3. Telehealth & Virtual Consultations
            </h2>
            <p>
              Virtual consultations conducted through our platform comply with
              applicable state telemedicine guidelines (including California
              telehealth consent rules). Users acknowledge the benefits and
              inherent limitations of remote assessments and agree to provide
              accurate, comprehensive medical histories to ensure safe specialist
              matching.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              4. Cancellations, Deposits & Refund Policy
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                <strong>No Clinical Guarantees:</strong> Due to the biological and
                highly individualized nature of regenerative cellular treatments,
                neither Regenevise nor network clinics guarantee specific
                clinical endpoints or recovery milestones.
              </li>
              <li>
                <strong>Virtual Consultation Cancellations:</strong> Free
                initial intake assessments must be cancelled at least 24 hours
                in advance to accommodate clinical staff scheduling.
              </li>
              <li>
                <strong>Procedure Scheduling & Deposits:</strong> For scheduled
                clinical procedures with network specialists, cancellations must
                occur at least 48 hours prior to the appointment. If cancelled
                with 48+ hours notice, deposits are eligible for refund.
                Cancellations within 48 hours without rescheduling forfeit the
                deposit to cover clinical preparation costs.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              5. HIPAA Protections & Health Privacy
            </h2>
            <p>
              Regenevise implements strict electronic and administrative
              safeguards for all Protected Health Information (PHI) under the
              Health Insurance Portability and Accountability Act of 1996 (HIPAA)
              and HITECH. Intake forms, diagnostic images, and communication logs
              are transmitted via encrypted, compliant channels.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, REGENEVISE LLC, its
              officers, directors, and affiliates shall not be liable for any
              indirect, incidental, punitive, or consequential damages arising
              from treatment decisions, clinical care outcomes administered by
              independent third-party physicians, or reliance on informational
              content hosted on this website.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
              7. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and any dispute arising from the use of our website or
              referral services shall be governed by and construed in accordance
              with the internal laws of the State of CALIFORNIA, USA, without
              giving effect to any choice of law or conflict of law principles.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-8 pt-6 border-t border-gray-100 space-y-2">
            <h3 className="text-base font-bold text-gray-900">
              Questions Regarding Terms
            </h3>
            <p className="text-xs text-gray-500">
              For legal inquiries or clarification regarding these Terms of
              Service, contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs text-gray-600 space-y-1">
              <div>
                <strong>REGENEVISE LLC – Legal Department</strong>
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
              <div>Direct Phone: (208) 867-1733</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
