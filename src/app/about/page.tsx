import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Award,
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "About Us | Regenevise – Dedicated to Connection & Healing",
  description:
    "Learn more about Regenevise, who we are, and how we connect individuals with top-tier, board-certified regenerative medicine specialists.",
};

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Rigorous Specialist Vetting",
      description:
        "Every physician in our referral network undergoes strict verification of board certifications, clinic accreditation, and proven track records in cellular therapies.",
    },
    {
      icon: Stethoscope,
      title: "Evidence-Based Protocols",
      description:
        "We prioritize clinics that adhere to sound regenerative biology principles, utilizing ethically sourced, rigorously processed mesenchymal and cellular biologics.",
    },
    {
      icon: HeartHandshake,
      title: "Patient-First Advocacy",
      description:
        "We are an independent patient matching service. Our recommendations are strictly aligned with your specific condition, budget, and geographic preferences.",
    },
    {
      icon: Clock,
      title: "Continuous 6-Month Support",
      description:
        "Our relationship doesn't end with a consultation. Our care team checks in throughout your treatment and recovery to ensure optimal outcomes and guidance.",
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero-bg.jpg"
            alt="Medical Research"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
            WHO WE ARE & WHAT WE DO
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            About Regenevise
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Bridging the gap between patients seeking advanced regenerative
            treatments and world-class physicians who provide them.
          </p>
        </div>
      </section>

      {/* Core Section: Passion for Innovation, Commitment to Healing */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left 3-Photo Collage */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[340px] sm:h-[440px] lg:h-[480px]">
              <div className="relative rounded-2xl overflow-hidden shadow-md h-full">
                <Image
                  src="/images/why-crutches.jpg"
                  alt="Patient recovering mobility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 h-full">
                <div className="relative rounded-2xl overflow-hidden shadow-md flex-1">
                  <Image
                    src="/images/why-doctor.jpg"
                    alt="Doctor consultation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md flex-1">
                  <Image
                    src="/images/why-wheelchair.jpg"
                    alt="Compassionate patient support"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-4 sm:space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
                REGENEVISE – OUR STORY
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Passion for Innovation, <br />
                Commitment to Healing.
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Navigating regenerative medicine can be overwhelming. With
                emerging cellular therapies, varying clinic standards, and
                misleading online claims, patients suffering from debilitating
                joint, spine, and autoimmune disorders often struggle to find
                clarity.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Regenevise was founded to solve this dilemma. We serve as a
                dedicated, transparent bridge—connecting individuals with
                independent, board-certified medical experts who specialize in
                advanced cellular treatments tailored to each patient&apos;s
                unique medical profile.
              </p>

              {/* Vision & Mission */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
                <div className="flex items-start gap-3 sm:gap-3.5 bg-gray-50/70 p-3 sm:p-0 rounded-xl sm:bg-transparent">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00E6D3] flex items-center justify-center shrink-0 text-white shadow-sm">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                      Our Vision
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed mt-1">
                      To be the most trusted source connecting people with the
                      right regenerative specialists quickly and confidently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-3.5 bg-gray-50/70 p-3 sm:p-0 rounded-xl sm:bg-transparent">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00E6D3] flex items-center justify-center shrink-0 text-white shadow-sm">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                      Our Mission
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed mt-1">
                      To empower patients through evidence-based information,
                      rapid matching, and six months of continuous follow-up
                      care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars / Why Patients Trust Us */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
              OUR STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Patients Trust the Regenevise Network
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              We uphold the highest clinical criteria before recommending any
              specialist or clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-3 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00E6D3]/15 flex items-center justify-center text-[#00E6D3]">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E6D3]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">
                    {v.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 3-Step Matchmaking Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
              HOW IT WORKS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Your Journey to Pain Relief in 3 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100 relative">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#00E6D3]/40">
                01
              </span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-2">
                Free Virtual Consultation
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Connect with our patient care coordinators to discuss your
                medical history, previous treatments, pain levels, and personal
                wellness goals.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100 relative">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#00E6D3]/40">
                02
              </span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-2">
                Curated Specialist Referral
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                We review provider credentials, outcome statistics, and
                treatment protocols to match you with the ideal board-certified
                regenerative clinic.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100 relative">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#00E6D3]/40">
                03
              </span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-2">
                Treatment & 6 Months Aftercare
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Receive targeted cellular therapy from top clinicians, backed by
                six months of dedicated follow-up support from the Regenevise team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-14 sm:py-16 bg-[#00E6D3] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            Schedule your free, confidential consultation today and find the
            right regenerative care specialist for your condition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="https://stemcells.regenevise.com/begin-your-healing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 hover:text-[#00E6D3] font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg transition-colors text-center"
            >
              Book FREE Consultation
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-colors text-center"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
