"use client";

import React, { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VideoPlayerSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-black aspect-video group">
          <video
            ref={videoRef}
            src="/videos/lab-video.mp4"
            className="w-full h-full object-cover"
            controls
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group-hover:scale-105 duration-200 cursor-pointer"
              aria-label="Play Video"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#00E6D3] text-white flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-110">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1 fill-white" />
              </div>
            </button>
          )}
        </div>

        {/* Wide Curved Banner Button underneath (Screenshot 3) */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="w-full max-w-2xl sm:max-w-3xl bg-[#00E6D3] rounded-full py-2.5 sm:py-3 px-6 flex items-center justify-center shadow-md hover:bg-[#00c7b7] transition-colors">
            <a
              href="https://stemcells.regenevise.com/begin-your-healing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-xs sm:text-sm md:text-base tracking-wide text-center"
            >
              Book FREE Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
