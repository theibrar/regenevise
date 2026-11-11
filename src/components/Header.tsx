"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ChevronDown, Menu, X, BookmarkCheck } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const serviceItems = [
    { name: "Musculoskeletal Relief", href: "/services#musculoskeletal" },
    { name: "Injury Recovery", href: "/services#injury" },
    { name: "Advanced Chronic Care", href: "/services#chronic" },
    { name: "Cartilage & Joint Restoration", href: "/services#cartilage" },
    { name: "Bone & Tissue Regeneration", href: "/services#bone" },
    { name: "Neurological & Autoimmune Support", href: "/services#neurological" },
    { name: "List all Services", href: "/services", highlight: true },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm transition-all duration-200">
      {/* Top Cyan Stripe */}
      <div className="h-1.5 w-full bg-[#00E6D3]" />

      {/* Top Bar with Info (Responsive: shows on mobile as well with compact styling) */}
      <div className="bg-white border-b border-gray-100 py-1.5 px-3 sm:px-4 text-[11px] sm:text-xs md:text-sm text-gray-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 font-medium text-center">
          <span className="hidden sm:inline">Schedule Your Virtual Consultation</span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            href="tel:+12088233308"
            className="flex items-center gap-1 hover:text-[#00E6D3] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#00E6D3] shrink-0" />
            <span>Phone: +1 (208) 823-3308</span>
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="mailto:info@regenevise.com"
            className="flex items-center gap-1 hover:text-[#00E6D3] transition-colors"
          >
            <Mail className="w-3 h-3 text-[#00E6D3] shrink-0" />
            <span>Email: info@regenevise.com</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Fixed aspect ratio & full uncropped logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-9 sm:h-12 w-32 sm:w-44">
              <Image
                src="/images/regenevise-brand-logo.png"
                alt="Regenevise - A Way to Ease Pain"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 130px, 180px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-[15px] font-medium text-gray-700">
            <Link
              href="/"
              className="text-[#00E6D3] hover:text-[#00E6D3] transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-[#00E6D3] transition-colors"
            >
              Our Company
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 hover:text-[#00E6D3] transition-colors py-2"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#00E6D3] transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {servicesDropdown && (
                <div className="absolute left-0 mt-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`block px-5 py-2.5 text-sm transition-colors ${
                        item.highlight
                          ? "text-[#00E6D3] font-semibold border-t border-gray-100 mt-1 hover:bg-cyan-50/50"
                          : "text-gray-700 hover:text-[#00E6D3] hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#testimonials"
              className="hover:text-[#00E6D3] transition-colors"
            >
              Testimonial&apos;s
            </Link>

            <Link
              href="/faqs"
              className="hover:text-[#00E6D3] transition-colors"
            >
              FAQ&apos;s
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#00E6D3] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://stemcells.regenevise.com/begin-your-healing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#00E6D3] hover:bg-[#00c7b7] text-white font-semibold text-xs xl:text-sm px-5 xl:px-6 py-2.5 xl:py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 shrink-0"
            >
              <BookmarkCheck className="w-4 h-4 text-white" />
              <span>Book FREE Consultation</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            <a
              href="https://stemcells.regenevise.com/begin-your-healing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00E6D3] text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm"
            >
              Free Consult
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-gray-700 hover:text-[#00E6D3] focus:outline-none rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 sm:px-6 py-5 space-y-3.5 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#00E6D3] py-1"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-800 hover:text-[#00E6D3] py-1"
          >
            Our Company
          </Link>
          <div className="space-y-1.5 pl-3 border-l-2 border-[#00E6D3]/40 py-1">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-gray-900 hover:text-[#00E6D3] pb-1"
            >
              All Services
            </Link>
            {serviceItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-xs py-1 transition-colors ${
                  item.highlight
                    ? "text-[#00E6D3] font-semibold"
                    : "text-gray-600 hover:text-[#00E6D3]"
                }`}
              >
                • {item.name}
              </Link>
            ))}
          </div>
          <Link
            href="/#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-800 hover:text-[#00E6D3] py-1"
          >
            Testimonial&apos;s
          </Link>
          <Link
            href="/faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-800 hover:text-[#00E6D3] py-1"
          >
            FAQ&apos;s
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-800 hover:text-[#00E6D3] py-1"
          >
            Contact Us
          </Link>

          <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-gray-500">
            <a
              href="tel:+12088233308"
              className="flex items-center gap-2 text-gray-700 hover:text-[#00E6D3]"
            >
              <Phone className="w-3.5 h-3.5 text-[#00E6D3]" />
              <span>+1 (208) 823-3308</span>
            </a>
            <a
              href="mailto:info@regenevise.com"
              className="flex items-center gap-2 text-gray-700 hover:text-[#00E6D3]"
            >
              <Mail className="w-3.5 h-3.5 text-[#00E6D3]" />
              <span>info@regenevise.com</span>
            </a>
          </div>

          <a
            href="https://stemcells.regenevise.com/begin-your-healing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#00E6D3] text-white font-semibold text-sm py-3 rounded-full mt-3 shadow-md"
          >
            <BookmarkCheck className="w-4 h-4" />
            <span>Book FREE Consultation</span>
          </a>
        </div>
      )}
    </header>
  );
}
