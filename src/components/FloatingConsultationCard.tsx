import React from "react";
import { UserCheck, CalendarClock, Activity } from "lucide-react";

export default function FloatingConsultationCard() {
  const items = [
    {
      icon: UserCheck,
      title: "Expert Specialists",
      description:
        "Experts with track record of success in advanced therapies and exceptional patient satisfaction.",
    },
    {
      icon: CalendarClock,
      title: "Flexible Scheduling",
      description:
        "Convenient appointment options designed to fit your needs with exceptional support.",
    },
    {
      icon: Activity,
      title: "Personalized Treatment",
      description:
        "Customized treatment options designed to support your unique needs with exceptional care.",
    },
  ];

  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4 -mt-10 sm:-mt-16 md:-mt-20">
      <div className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-full shadow-2xl border border-gray-100 py-5 sm:py-6 px-5 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`flex items-start gap-3.5 sm:gap-4 ${
                idx > 0 ? "pt-4 md:pt-0 md:pl-6" : ""
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00E6D3]/15 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E6D3]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
