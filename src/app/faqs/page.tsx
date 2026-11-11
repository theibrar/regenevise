"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone, Mail, HelpCircle } from "lucide-react";

export default function FAQsPage() {
  const faqs = [
    {
      category: "Process",
      question: "How does Regenevise help me find stem cell treatment?",
      answer:
        "Regenevise uses a specialized matchmaking system to connect you with the most qualified stem cell clinic and doctor for your specific medical condition, saving you months of research and confusion.",
    },
    {
      category: "Conditions",
      question: "What conditions can stem cell therapy treat?",
      answer:
        "Stem cell therapy covers arthritis, joint pain, knee and shoulder injuries, autoimmune disorders, neurological issues, sports injuries, and many more degenerative conditions.",
    },
    {
      category: "Safety & Regulation",
      question: "Is stem cell therapy FDA-approved?",
      answer:
        "Stem cell therapy is considered experimental in the United States and is regulated by the FDA, but most procedures are not FDA-approved at this time. Network physicians operate under strict clinical guidelines and institutional review protocols.",
    },
    {
      category: "Doctors",
      question: "Who performs the treatment?",
      answer:
        "All matches are made with board-certified physicians specializing in regenerative medicine, based on your specific condition, health profile, and location preferences.",
    },
    {
      category: "Process",
      question: "What kind of support will I receive throughout the process?",
      answer:
        "Regenevise provides expert consultation, custom specialist recommendations, direct clinic introductions, and six months of follow-up care for every patient.",
    },
    {
      category: "Results",
      question: "What results can patients expect?",
      answer:
        "Clinical studies show that over 67% of patients report good to excellent improvement, with many regaining physical function and returning to work or daily active lifestyles without invasive surgery.",
    },
    {
      category: "Safety & Regulation",
      question: "What risks are involved with stem cell therapy?",
      answer:
        "As an experimental treatment, risks vary and depend on your individual health condition. Minimal side effects may include temporary injection site soreness or minor swelling. Consult with your recommended specialist for a full assessment.",
    },
    {
      category: "Process",
      question: "How do I get started?",
      answer:
        "Book a free, private consultation with the Regenevise matchmaking team to assess your unique needs and receive a personalized recommendation.",
    },
    {
      category: "Treatment",
      question: "How do I know which type of stem cell procedure is right for me?",
      answer:
        "The Regenevise expert matchmaking team evaluates your medical condition, medical imaging (MRI/X-rays), and personal preferences to recommend the most suitable treatment and clinic.",
    },
    {
      category: "Safety & Regulation",
      question: "Can I get stem cell therapy if I am already undergoing other medical treatments?",
      answer:
        "A doctor will review your current treatments and medications to determine the best approach. There are generally no known contraindications, but an individual physician assessment is required.",
    },
    {
      category: "Treatment",
      question: "What types of stem cells are typically used?",
      answer:
        "Treatments often use mesenchymal stem cells (MSCs) for autoimmune, cartilage, and inflammatory conditions, and hematopoietic stem cells for deep tissue regeneration.",
    },
    {
      category: "Timeline",
      question: "How quickly can I start treatment after my consultation?",
      answer:
        "Once your medical records are reviewed by our team and the matched physician, you could be scheduled for treatment within 1 to 2 weeks following your initial consultation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Process", "Conditions", "Safety & Regulation", "Treatment", "Results"];

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Structured Data for Google Rich Results (FAQPage Schema)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero-bg.jpg"
            alt="Medical Q&A"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            FAQ&apos;s & Patient Guidance
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Check out our most asked questions regarding stem cell therapy, FDA
            guidelines, doctor qualifications, and the matchmaking process.
          </p>
        </div>
      </section>

      {/* Main Accordion Section */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`text-[11px] sm:text-xs font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all ${
                  activeCategory === cat
                    ? "bg-[#00E6D3] text-white shadow-sm"
                    : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion Items */}
          <div className="space-y-3 sm:space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl sm:rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-4 px-4 sm:py-5 sm:px-8 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-bold text-gray-900 leading-snug">
                      Q: {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#00E6D3] text-white rotate-180"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 pt-1 sm:px-8 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                      <div className="bg-gray-50/70 p-3 sm:p-4 rounded-xl border border-gray-100">
                        <strong className="text-gray-900 block mb-1">
                          Regenevise Matchmaking Answer:
                        </strong>
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm text-center space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00E6D3]/15 rounded-full flex items-center justify-center text-[#00E6D3] mx-auto">
              <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Have More Questions?
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
              Our clinical matchmaking coordinators are available to answer any
              specific questions regarding your medical condition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
              <a
                href="tel:2088671733"
                className="inline-flex items-center justify-center gap-2 bg-[#00E6D3] text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-[#00c7b7] shadow-sm transition-colors text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call (208) 867-1733</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 text-xs font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors text-center"
              >
                <Mail className="w-4 h-4" />
                <span>Message Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
