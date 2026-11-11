"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Phone, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [newsletterName, setNewsletterName] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterName("");
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubmitted(false), 5000);
    }
  };

  return (
    <footer className="relative bg-[#F8FAFC] text-gray-700 border-t border-gray-200">
      {/* Follow Our Social Header Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-6 sm:pb-8">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <div className="h-[1px] bg-gray-200 flex-1 max-w-[100px] sm:max-w-xs" />
          <h3 className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight text-center">
            Follow our social
          </h3>
          <div className="h-[1px] bg-gray-200 flex-1 max-w-[100px] sm:max-w-xs" />
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#00E6D3] hover:border-[#00E6D3] transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#00E6D3] hover:border-[#00E6D3] transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#00E6D3] hover:border-[#00E6D3] transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#00E6D3] hover:border-[#00E6D3] transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#00E6D3] hover:border-[#00E6D3] transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Subtle Background Watermark */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-64 sm:w-96 h-64 sm:h-96">
          <Image
            src="/images/footer-bg.png"
            alt="Medical Laboratory Background"
            fill
            sizes="(max-width: 640px) 256px, 384px"
            className="object-contain object-bottom-right"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
          {/* Column 1: Brand & Contact */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-10 sm:h-12 w-36 sm:w-44">
                <Image
                  src="/images/regenevise-brand-logo.png"
                  alt="Regenevise - A Way to Ease Pain"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 144px, 176px"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Regenevise connects patients experiencing acute or chronic pain
              with vetted, board-certified regenerative medicine specialists. We
              make advanced cellular therapies transparent, accessible, and
              customized to your path to recovery.
            </p>
            <div className="pt-2">
              <span className="text-[11px] sm:text-xs uppercase font-semibold text-gray-400 block tracking-wider">
                Need Help?
              </span>
              <a
                href="tel:2088671733"
                className="text-base sm:text-lg font-bold text-[#00E6D3] hover:underline flex items-center gap-1.5 mt-0.5"
              >
                <Phone className="w-4 h-4 text-[#00E6D3] shrink-0" />
                <span>(208) 867-1733</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <Link
                  href="/services#arthritis"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  Arthritis
                </Link>
              </li>
              <li>
                <Link
                  href="/services#back-pain"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  Back Pain
                </Link>
              </li>
              <li>
                <Link
                  href="/services#sports-injuries"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  Sports Injuries
                </Link>
              </li>
              <li>
                <Link
                  href="/services#rheumatoid-arthritis"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  Rheumatoid Arthritis
                </Link>
              </li>
              <li>
                <Link
                  href="/services#shoulder-pain"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  Shoulder Pain
                </Link>
              </li>
              <li>
                <Link
                  href="/services#muscle-injuries"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  Muscle Injuries
                </Link>
              </li>
              <li>
                <Link
                  href="/services#bone-injuries"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  Bone Injuries
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-[#00E6D3] font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>→ View All Service&apos;s List</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 tracking-wide">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  Testimonial&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  FAQ&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#00E6D3] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 tracking-wide">
              Stay Informed
            </h4>
            <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed mb-3.5">
              Signup our newsletter to get update information, news, insight or
              promotions.
            </p>

            {newsletterSubmitted ? (
              <div className="bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs p-3 rounded-lg flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E6D3] shrink-0" />
                <span>Thank you! You are subscribed to our updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Name"
                  value={newsletterName}
                  onChange={(e) => setNewsletterName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#00E6D3] transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#00E6D3] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-[#00E6D3] hover:bg-[#00c7b7] text-white font-semibold text-xs py-2.5 rounded-md shadow-sm transition-all duration-200"
                >
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal Disclaimer & Scientific Citations */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-gray-200 text-[11px] sm:text-xs text-gray-500 space-y-3.5 leading-relaxed">
          <div>
            <span className="font-bold text-gray-700 uppercase tracking-wider block mb-1">
              DISCLAIMER:
            </span>
            <p>
              Stem cell therapy is considered experimental and is regulated by
              the U.S. Food and Drug Administration (FDA), but is not FDA-approved
              for general regenerative applications. Regenevise does not provide
              medical treatments directly but operates as an independent matching
              service connecting patients with qualified medical specialists in
              our network. No statements made on this website have been evaluated
              or approved by the FDA. This website does not provide medical
              advice. All content is for informational purposes only and is not
              a substitute for professional medical consultation, diagnosis, or
              treatment. Reliance on any information provided by Regenevise, its
              team members, network specialists appearing on this website, or
              other visitors is solely at your own risk. Regenevise is not
              responsible for treatment outcomes as we facilitate connections
              rather than provide direct medical care.
            </p>
          </div>

          <div>
            <span className="font-bold text-gray-700 uppercase tracking-wider block mb-1">
              RESEARCH REFERENCES:
            </span>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                ¹ GlobalRPH. Stem Cell Therapy Success Rates Hit 78%: New Research
                Reveals Breakthrough Results. March 7, 2025.
              </li>
              <li>
                ² PMC (National Center for Biotechnology Information). Current
                state of stem cell-based therapies: an overview.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7367472/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E6D3] hover:underline"
                >
                  https://pmc.ncbi.nlm.nih.gov/articles/PMC7367472/
                </a>
              </li>
              <li>
                ³ Mayo Clinic News Network. 10 Mayo Clinic research advances in
                2024, spanning stem cell therapy in space to growing mini-organs.
                December 30, 2024.
              </li>
              <li>
                ⁴ PMC (National Center for Biotechnology Information).
                Revolutionizing medicine: recent developments and future
                prospects in stem-cell therapy.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11634165/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E6D3] hover:underline"
                >
                  https://pmc.ncbi.nlm.nih.gov/articles/PMC11634165/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-gray-100/80 border-t border-gray-200 py-4 px-4 sm:px-6 lg:px-8 text-[11px] sm:text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
          <p>
            Copyright© 2026 - Regenevise, All rights reserved. Powered by{" "}
            <span className="font-semibold text-gray-700">IbraSoft LLC</span>.
          </p>
        </div>
      </div>

      {/* Floating Back-To-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 bg-[#00E6D3] hover:bg-[#00c7b7] text-white rounded-lg shadow-lg flex items-center justify-center transition-all duration-200 z-40 transform hover:scale-105 active:scale-95"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </footer>
  );
}
