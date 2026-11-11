import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Award,
  CheckCircle2,
  BookmarkCheck,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import FloatingConsultationCard from "@/components/FloatingConsultationCard";
import VideoPlayerSection from "@/components/VideoPlayerSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
  const serviceCards = [
    {
      title: "Musculoskeletal Relief",
      image: "/images/service-musculoskeletal.jpg",
      href: "/services#musculoskeletal",
    },
    {
      title: "Injury Recovery",
      image: "/images/service-injury.jpg",
      href: "/services#injury",
    },
    {
      title: "Advanced Chronic Care",
      image: "/images/service-chronic.jpg",
      href: "/services#chronic",
    },
    {
      title: "Cartilage & Joint Restoration",
      image: "/images/service-cartilage.jpg",
      href: "/services#cartilage",
    },
    {
      title: "Bone & Tissue Regeneration",
      image: "/images/service-bone.jpg",
      href: "/services#bone",
    },
    {
      title: "Neurological & Autoimmune Support",
      image: "/images/service-neurological.jpg",
      href: "/services#neurological",
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* =========================================================================
          SECTION 1: HERO SECTION (Screenshot 1)
         ========================================================================= */}
      <section className="relative min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Teal Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Regenerative Medical Facility"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00E6D3]/60 via-[#008f83]/50 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-20 sm:pb-32 space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md leading-tight">
            Driven by Innovation, <br />
            Dedicated to Connection.
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/95 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow px-2 sm:px-0">
            At Regenevise, we bridge the gap between patients seeking advanced
            regenerative options and trusted medical professionals who provide
            them. Our team is focused on helping individuals discover the right
            specialist for their unique wellness goals. With a thoughtful and
            clear approach, we guide every step of the connection process —
            making regenerative care more accessible, informed, and
            personalized.
          </p>

          <div className="pt-1 sm:pt-2">
            <a
              href="https://stemcells.regenevise.com/begin-your-healing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-800 hover:text-[#00E6D3] font-semibold text-xs sm:text-sm md:text-base px-6 py-3 sm:px-8 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Floating 3-Pillar Card Overlapping Bottom of Hero (Screenshot 1) */}
      <FloatingConsultationCard />

      {/* =========================================================================
          SECTION 2: REGENEVISE - WHY WE? (Screenshot 2)
         ========================================================================= */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column: 3-Photo Collage */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[340px] sm:h-[440px] lg:h-[500px]">
              {/* Left tall image */}
              <div className="relative rounded-2xl overflow-hidden shadow-md h-full">
                <Image
                  src="/images/why-crutches.jpg"
                  alt="Patient recovering mobility with crutches"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>

              {/* Right column with 2 stacked images */}
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

            {/* Right Column: Mission, Vision & Copy */}
            <div className="space-y-4 sm:space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
                REGENEVISE – WHY WE?
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Passion for Innovation, <br />
                Commitment to Healing.
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Our experienced team delivers advanced regenerative solutions
                that restore function and improve quality of life. Every patient
                is matched with the specialist best suited for their unique
                health needs. Discover what personalized care means with our
                proven method and expert support guiding each step.
              </p>

              {/* Vision & Mission Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
                {/* Vision Box */}
                <div className="flex items-start gap-3 sm:gap-3.5 bg-gray-50/70 p-3 sm:p-0 rounded-xl sm:bg-transparent">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00E6D3] flex items-center justify-center shrink-0 text-white shadow-sm">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                      Vision Statement
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                      To be the most trusted source connecting people with the
                      right specialists quickly and confidently.
                    </p>
                  </div>
                </div>

                {/* Mission Box */}
                <div className="flex items-start gap-3 sm:gap-3.5 bg-gray-50/70 p-3 sm:p-0 rounded-xl sm:bg-transparent">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00E6D3] flex items-center justify-center shrink-0 text-white shadow-sm">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                      Mission Statement
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                      Our mission is to connect people with qualified specialists
                      through clear information, rapid support, and a smooth
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <Link
                  href="/about"
                  className="inline-block bg-[#00E6D3] hover:bg-[#00c7b7] text-white font-semibold text-xs sm:text-sm px-7 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: VIDEO SECTION (Screenshot 3)
         ========================================================================= */}
      <VideoPlayerSection />

      {/* =========================================================================
          SECTION 4: OUR SERVICES (Screenshot 4)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Subtle Watermark on the right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 opacity-5 pointer-events-none">
          <Image
            src="/images/bg-pattern.png"
            alt="Pattern Watermark"
            fill
            sizes="(max-width: 640px) 256px, 384px"
            className="object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: 2-Photo Collage with "Excellent" Badge */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[480px]">
              {/* Main Top Image */}
              <div className="relative w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services-senior.jpg"
                  alt="Senior in wheelchair in modern clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
                {/* Cyan Badge "Excellent" in top left */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#00E6D3] text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-md shadow">
                  Excellent
                </div>
              </div>

              {/* Smaller Overlapping Bottom-Right Image */}
              <div className="absolute right-0 bottom-0 w-3/5 h-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/services-child.jpg"
                  alt="Pediatric and family clinical support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 60vw, 30vw"
                />
              </div>
            </div>

            {/* Right: Content & 6 Pill Buttons */}
            <div className="space-y-4 sm:space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
                OUR SERVICES
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Support That Helps You <br />
                Move Forward with Confidence.
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                We offer a simple and efficient way to connect with specialists
                by providing clear information, helpful support, and a smooth
                overall experience.
              </p>

              {/* 2x3 Grid of 6 Rounded Pills (Screenshot 4) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
                {[
                  "Quality Service",
                  "Clear Communication",
                  "Flexible Scheduling",
                  "Easy Access Options",
                  "Proven Experience",
                  "Personalized Support",
                ].map((pill, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-100 shadow-sm rounded-xl py-2.5 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 text-center hover:border-[#00E6D3] hover:text-[#00E6D3] transition-colors"
                  >
                    {pill}
                  </div>
                ))}
              </div>

              <div className="pt-2 sm:pt-4">
                <a
                  href="https://stemcells.regenevise.com/begin-your-healing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#00E6D3] hover:bg-[#00c7b7] text-white font-semibold text-xs sm:text-sm px-7 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Book Appointment Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE US (Screenshot 5)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
        {/* Dot Matrix Pattern Background */}
        <div className="absolute left-0 top-0 bottom-0 w-60 sm:w-80 opacity-20 pointer-events-none">
          <Image
            src="/images/bg-pattern.png"
            alt="Pattern Background"
            fill
            sizes="(max-width: 640px) 240px, 320px"
            className="object-cover object-left"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left 7 Columns: Text and 4 Feature Blocks */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
                WHY CHOOSE US
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Support Designed for Every <br />
                Step of Your Journey
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
                We provide a simple and reliable way to connect with independent
                specialists who match your needs. Our team ensures you receive
                clear information, helpful support, and a smooth experience from
                start to finish.
              </p>

              {/* 4 Feature Items */}
              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <div className="space-y-0.5 sm:space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">
                    Expert Providers Focused on Your Experience
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Every specialist in our network is selected for
                    professionalism, skill, and quality service—so you can feel
                    confident in your next step.
                  </p>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">
                    Comprehensive Options for Your Needs
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Get access to a wide range of specialists and services,
                    giving you more choices and clearer direction for whatever
                    you’re looking for.
                  </p>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">
                    Flexible Scheduling That Works for You
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Appointments are available with convenience in mind, making
                    it easier to find times that fit your life.
                  </p>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">
                    Personalized Plans Built Around You
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Your recommendations are tailored to your goals and
                    preferences, helping you move forward with clarity and
                    confidence.
                  </p>
                </div>
              </div>

              {/* Direct Assistance CTA */}
              <div className="pt-2">
                <a
                  href="tel:2088671733"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00E6D3] hover:underline"
                >
                  <span>Need more help? Call (208) 867-1733</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Arch-Shaped Photo (Screenshot 5) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 lg:w-80 h-[360px] sm:h-[440px] lg:h-[500px] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                <Image
                  src="/images/why-choose-arch.jpg"
                  alt="Doctor with patient in wheelchair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 30vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHAT WE OFFER (Screenshot 6)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-2 sm:space-y-3 mb-10 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
              WHAT WE OFFER
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Proven Track Record of Patient <br className="hidden sm:inline" />
              Satisfaction and Results.
            </h2>
          </div>

          {/* 6 Cards Grid (Screenshot 6) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {serviceCards.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Cyan bottom line accent on image container */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00E6D3]" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#00E6D3] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5 sm:mt-1">Regenevise</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#00E6D3] font-semibold">
                    <Link href={service.href} className="hover:underline">
                      Learn More
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Button at bottom (Screenshot 6) */}
          <div className="mt-10 sm:mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 bg-[#00E6D3] hover:bg-[#00c7b7] text-white font-semibold text-xs sm:text-sm px-7 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <ChevronsRight className="w-4 h-4" />
              <span>List all Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INNOVATION & EXPERIENCE BANNER (Screenshot 7)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden">
        {/* Dot Matrix Pattern Background */}
        <div className="absolute left-0 top-0 bottom-0 w-60 sm:w-80 opacity-20 pointer-events-none">
          <Image
            src="/images/bg-pattern.png"
            alt="Pattern Background"
            fill
            sizes="(max-width: 640px) 240px, 320px"
            className="object-cover object-left"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left 6 Columns: Image with Overlapping Floating Card (Screenshot 7) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/doctor-bed.jpg"
                  alt="Doctor with patient in hospital bed"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Overlapping Card (Mobile responsive: sits cleanly without clipping) */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:right-6 lg:right-8 bg-white rounded-2xl p-4 sm:p-5 shadow-xl sm:shadow-2xl border border-gray-100 max-w-xs mx-auto sm:max-w-[240px] text-center space-y-2 z-20">
                <div className="relative h-8 w-32 mx-auto">
                  <Image
                    src="/images/regenevise-brand-logo.png"
                    alt="Regenevise - A Way to Ease Pain"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
                <p className="text-[11px] text-gray-500 font-medium">
                  Book Now for Free
                </p>
                <a
                  href="https://stemcells.regenevise.com/begin-your-healing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#00E6D3] hover:bg-[#00c7b7] text-white text-xs font-semibold py-2 px-4 rounded-full shadow-sm transition-colors"
                >
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Right 6 Columns: Text & CTA Button */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 pt-4 lg:pt-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Years of Experience, Groundbreaking Innovation, and
                Patient-Centered Support.
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Connect with leaders in regenerative treatment, each bringing
                extensive experience and a commitment to improving quality of
                life. Regenevise helps patients discover qualified, independent
                providers, while those providers offer their own clinical insight
                and patient guidance. Our role is to make the process of finding
                the right specialist more accessible, informed, and
                personalized.
              </p>

              <div className="pt-2">
                <a
                  href="https://stemcells.regenevise.com/begin-your-healing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00E6D3] hover:bg-[#00c7b7] text-white font-semibold text-xs sm:text-sm px-7 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <BookmarkCheck className="w-4 h-4" />
                  <span>Book FREE Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: PATIENT SUCCESS STORIES (Screenshot 8)
         ========================================================================= */}
      <TestimonialsSection />
    </div>
  );
}
