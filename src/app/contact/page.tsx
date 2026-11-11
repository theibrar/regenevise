"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Clock,
  Phone,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    condition: "Knee / Joint Pain",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.firstName) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          condition: "Knee / Joint Pain",
          message: "",
        });
      }, 6000);
    }
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero-bg.jpg"
            alt="Contact Medical Support"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Need any help or have questions regarding specialist matching? Reach
            out to our patient support team today.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Info Cards + Interactive Form */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left 5 Columns: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00E6D3]">
                  DIRECT REACH
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
                  We&apos;re Here to Guide You
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                  Connect directly with our care coordinators. We respond to all
                  inquiries within 24 business hours.
                </p>
              </div>

              {/* Address Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00E6D3]/15 flex items-center justify-center shrink-0 text-[#00E6D3]">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E6D3]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                    Corporate Address
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    1309 Coffeen Avenue STE 1200 <br />
                    Sheridan, Wyoming 82801, USA
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00E6D3]/15 flex items-center justify-center shrink-0 text-[#00E6D3]">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E6D3]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                    Phone Numbers
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Helpline:{" "}
                    <a
                      href="tel:2088671733"
                      className="text-[#00E6D3] font-semibold hover:underline"
                    >
                      (208) 867-1733
                    </a>
                    <br />
                    Toll-Free:{" "}
                    <a
                      href="tel:+12088233308"
                      className="text-[#00E6D3] font-semibold hover:underline"
                    >
                      +1 (208) 823-3308
                    </a>
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00E6D3]/15 flex items-center justify-center shrink-0 text-[#00E6D3]">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E6D3]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                    Email Inquiries
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    <a
                      href="mailto:info@regenevise.com"
                      className="text-[#00E6D3] font-semibold hover:underline"
                    >
                      info@regenevise.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00E6D3]/15 flex items-center justify-center shrink-0 text-[#00E6D3]">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E6D3]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                    Operating Hours
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Monday – Friday: 08:00 – 18:00 (MST)
                    <br />
                    Saturday – Sunday: Closed (Emergency routing only)
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Send Us a Message Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-md">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  Send us a message
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Please send us any questions or inquiry details below.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 text-center bg-cyan-50 border border-cyan-200 rounded-2xl space-y-3">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#00E6D3] mx-auto" />
                  <h4 className="text-base sm:text-lg font-bold text-gray-900">
                    Message Received!
                  </h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    Thank you, {formData.firstName}. A Regenevise care
                    coordinator will review your message and contact you within
                    24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00E6D3] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00E6D3] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(208) 867-1733"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00E6D3] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="someone@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00E6D3] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase mb-1">
                      Primary Condition / Area of Concern
                    </label>
                    <select
                      value={formData.condition}
                      onChange={(e) =>
                        setFormData({ ...formData, condition: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00E6D3] focus:bg-white transition-colors"
                    >
                      <option>Knee / Joint Pain</option>
                      <option>Hip Pain / Osteoarthritis</option>
                      <option>Shoulder / Rotator Cuff</option>
                      <option>Chronic Back or Neck Pain</option>
                      <option>Sports Injury / Tendon Tear</option>
                      <option>Autoimmune / Neuropathy</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please share any relevant symptoms, previous treatments, or imaging..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00E6D3] focus:bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#00E6D3] hover:bg-[#00c7b7] text-white font-bold text-xs sm:text-sm py-3 sm:py-3.5 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Now</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
