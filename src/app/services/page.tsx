import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Bone,
  Brain,
  ShieldAlert,
  Sparkles,
  Zap,
  BookmarkCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Regenerative Services | Regenevise – Specialized Clinical Solutions",
  description:
    "Explore our complete range of specialized regenerative solutions: musculoskeletal relief, injury recovery, joint restoration, and autoimmune support.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "musculoskeletal",
      title: "Musculoskeletal Relief",
      subtitle: "Targeted cellular therapies for persistent tendon and muscular pain.",
      image: "/images/service-musculoskeletal.jpg",
      icon: Activity,
      symptoms: [
        "Rotator cuff tears & shoulder impingement",
        "Chronic lower back and cervical spine pain",
        "Tendonitis & myofascial pain syndromes",
        "Degenerative disc disease",
      ],
      description:
        "Musculoskeletal pain often results from chronic micro-trauma or depleted local cellular regeneration. Injections of targeted mesenchymal stem cells (MSCs) and growth factors help downregulate inflammatory cascades while promoting local collagen repair.",
    },
    {
      id: "injury",
      title: "Injury Recovery",
      subtitle: "Accelerated rehabilitation for acute sports injuries and soft tissue tears.",
      image: "/images/service-injury.jpg",
      icon: Zap,
      symptoms: [
        "ACL, MCL, and meniscus sprains/tears",
        "Achilles tendonitis & ankle ligament damage",
        "Tennis/golfer's elbow and wrist strain",
        "Post-surgical recovery enhancement",
      ],
      description:
        "Athletes and active individuals benefit from accelerated cellular signaling. By delivering concentrated biologics directly to injured ligaments and tendons, regenerative protocols significantly shorten recovery windows and reinforce repaired tissue tensile strength.",
    },
    {
      id: "chronic",
      title: "Advanced Chronic Care",
      subtitle: "Comprehensive biologic care for long-standing inflammatory disorders.",
      image: "/images/service-chronic.jpg",
      icon: ShieldAlert,
      symptoms: [
        "Osteoarthritis & degenerative joint wear",
        "Systemic chronic inflammatory responses",
        "Persistent post-operative joint pain",
        "Fibromyalgia-associated joint discomfort",
      ],
      description:
        "Chronic pain traps the body in a cycle of persistent inflammation and structural breakdown. Our network specialists administer advanced biologic formulations that promote immune modulation, reducing reliance on oral NSAIDs or corticosteroids.",
    },
    {
      id: "cartilage",
      title: "Cartilage & Joint Restoration",
      subtitle: "Minimally invasive alternatives to knee and hip replacement surgeries.",
      image: "/images/service-cartilage.jpg",
      icon: Sparkles,
      symptoms: [
        "Bone-on-bone knee osteoarthritis",
        "Hip joint labral tears & joint space narrowing",
        "Shoulder glenohumeral joint degradation",
        "Morning stiffness and reduced range of motion",
      ],
      description:
        "Cartilage has limited natural blood supply, making self-repair difficult. High-viability mesenchymal stem cell therapy introduces active cellular matrices that stimulate chondrocyte proliferation, protecting remaining joint architecture.",
    },
    {
      id: "bone",
      title: "Bone & Tissue Regeneration",
      subtitle: "Stimulating cellular rebuilding for complex bone and deep tissue conditions.",
      image: "/images/service-bone.jpg",
      icon: Bone,
      symptoms: [
        "Delayed union and non-healing fractures",
        "Avascular necrosis (AVN) early stages",
        "Deep muscular tears & scar tissue remodeling",
        "Bunion surgery recovery complications",
      ],
      description:
        "Utilizing multipotent cellular formulations, our network physicians stimulate osteogenesis and vascularization. This encourages natural bone consolidation and healthy matrix remodeling where conventional healing has stalled.",
    },
    {
      id: "neurological",
      title: "Neurological & Autoimmune Support",
      subtitle: "Systemic immunomodulatory support for neuro-inflammatory conditions.",
      image: "/images/service-neurological.jpg",
      icon: Brain,
      symptoms: [
        "Peripheral neuropathy & nerve entrapment",
        "Rheumatoid arthritis and autoimmune flare-ups",
        "Post-viral chronic neuro-fatigue",
        "Nerve sheath micro-inflammation",
      ],
      description:
        "Stem cells secrete potent neurotrophic and immunomodulatory factors (secretomes/exosomes) capable of re-educating dysregulated immune pathways, calming systemic inflammation, and supporting peripheral nerve regeneration.",
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero-bg.jpg"
            alt="Medical Treatment"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
            SPECIALIZED CELLULAR PROTOCOLS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Our Regenerative Services
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Connecting you with board-certified clinicians providing targeted,
            minimally invasive alternatives to invasive surgeries.
          </p>
        </div>
      </section>

      {/* Services List with Detailed Cards */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 relative h-56 sm:h-72 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-md ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00E6D3]" />
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-3 sm:space-y-4 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#00E6D3]/15 flex items-center justify-center text-[#00E6D3]">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00E6D3]" />
                      </div>
                      <span className="text-[11px] sm:text-xs uppercase font-bold text-[#00E6D3] tracking-wider">
                        Regenevise Network
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      {service.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Symptoms Addressed */}
                    <div className="pt-1 sm:pt-2">
                      <span className="text-xs font-bold text-gray-900 block mb-1.5 sm:mb-2">
                        Common Conditions Addressed:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs text-gray-600">
                        {service.symptoms.map((s, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00E6D3] shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center">
                      <a
                        href="https://stemcells.regenevise.com/begin-your-healing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#00E6D3] hover:bg-[#00c7b7] text-white font-semibold text-xs px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm transition-colors text-center"
                      >
                        Book Consultation for {service.title}
                      </a>
                      <a
                        href="tel:2088671733"
                        className="flex items-center justify-center gap-1.5 text-xs text-gray-500 hover:text-[#00E6D3] transition-colors font-medium px-3 py-2 text-center"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>(208) 867-1733</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Flexible Payment Callout */}
      <section className="py-14 sm:py-16 bg-[#00E6D3] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Flexible Payment Options Designed for Your Ultimate Convenience
          </h2>
          <p className="text-xs sm:text-sm text-white/90 max-w-2xl mx-auto leading-relaxed">
            Our network clinics offer various financing alternatives, customized
            payment schedules, and transparent itemized pricing with no hidden
            facility fees.
          </p>
          <div className="pt-2">
            <a
              href="https://stemcells.regenevise.com/begin-your-healing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 hover:text-[#00E6D3] font-bold text-xs sm:text-sm px-7 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg transition-colors"
            >
              <BookmarkCheck className="w-4 h-4 text-[#00E6D3]" />
              <span>Book FREE Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
