"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface Testimonial {
  name: string;
  condition: string;
  network: string;
  quote: string;
  avatar: string;
}

interface VideoStory {
  title: string;
  subtitle: string;
  youtubeId: string;
  thumbnail: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Terry Almy",
      condition: "Knee Pain Relief",
      network: "Regenevise's Clinic Network: Advanced Stem Cell Institute",
      quote:
        "\"I really couldn't walk more than like three blocks without it hurting... Before, I would have thought nothing of walking eight blocks. After the stem cell injection, I can just stand up from a chair without using my hands to pull myself up. My back doesn't hurt. Go for it - you don't have anything to lose and you have a whole lot to gain, and you don't have to go through having surgery.\"",
      avatar: "/images/testimonial-terry.webp",
    },
    {
      name: "Sara Soleymani",
      condition: "Knee Pain Relief",
      network: "From Regenevise's Clinic Network",
      quote:
        "\"Going up steps was killing me, my knee felt empty inside like I step on it but couldn't hold me... I'm a lifeguard and swim instructor and I like to be active the whole day. After stem cell therapy, I was back to the pool by the fourth or fifth day. After two weeks I'm lifting weights, doing leg press at 500 pounds. I don't have any more pain.\"",
      avatar: "/images/testimonial-sara.webp",
    },
    {
      name: "Joe Regis",
      condition: "Neck Pain Relief",
      network: "From Regenevise's Clinic Network",
      quote:
        "\"I hurt my neck in a boating incident and was diagnosed with osteoarthritis. I could barely move my neck from left to right, up and down - it was just constant pain. I got my stem cell shots on July 30th and went to the gym for the first time yesterday. I haven't taken an ibuprofen since July 30th. My movement is back almost 70%. My life has changed dramatically.\"",
      avatar: "/images/testimonial-joe.webp",
    },
    {
      name: "Karen Olvera",
      condition: "Bunion Pain Relief",
      network: "From Regenevise's Clinic Network",
      quote:
        "\"I had surgery for my bunions and it wasn't good - I was in a wheelchair. I had terrible pain and couldn't go dancing anymore. With stem cells, it was just two shots in different parts of my bone - no more than 20 minutes and I was able to walk. My recovery was like 2 weeks. I'm actually okay now - I'm in the club twice a week right now!\"",
      avatar: "/images/testimonial-karen.webp",
    },
  ];

  const videoStories: VideoStory[] = [
    {
      title: "Terry Almy - Knee Pain Recovery",
      subtitle: "Full Patient Interview",
      youtubeId: "_K04ylHjWn0",
      thumbnail: "/images/testimonial-terry.webp",
    },
    {
      title: "Successful Neck Pain Relief with Stem Cell Therapy",
      subtitle: "Advanced Stem Cell Institute",
      youtubeId: "9Ku7TRdpNK4",
      thumbnail: "/images/testimonial-joe.webp",
    },
    {
      title: "Successful Stem Cell Therapy for Knee Pain at...",
      subtitle: "Active Recovery Story",
      youtubeId: "ddZlBcMIpnY",
      thumbnail: "/images/testimonial-sara.webp",
    },
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Patient Success Stories
          </h2>
        </div>

        {/* Testimonial Cards Grid (Screenshot 8) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Avatar */}
                <div className="flex justify-center">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#00E6D3]/30">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center italic">
                  {item.quote}
                </p>
              </div>

              {/* Author & Clinic Info */}
              <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                  {item.name} – {item.condition}
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">{item.network}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00E6D3]" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
          <span className="w-2 h-2 rounded-full bg-gray-300" />
        </div>

        {/* 3 YouTube Video Thumbnails Below (Screenshot 8) */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {videoStories.map((video, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video shadow-md group cursor-pointer"
              onClick={() => setActiveVideo(video.youtubeId)}
            >
              {activeVideo === video.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Top Video Header */}
                  <div className="absolute top-2.5 left-3 right-3 z-20 flex items-center justify-between text-white text-xs">
                    <div className="font-semibold truncate max-w-[200px]">
                      {video.title}
                    </div>
                  </div>

                  {/* Red YouTube Play Button Centered */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-12 h-8 sm:w-14 sm:h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom YouTube Label */}
                  <div className="absolute bottom-2 right-3 z-20 text-[10px] sm:text-[11px] text-white/90">
                    Watch on <span className="font-bold">YouTube</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
