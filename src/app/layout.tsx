import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#00E6D3",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://regenevise.com"),
  title: {
    default: "Regenevise – A Way to Ease Pain | Advanced Regenerative Medicine Matchmaking",
    template: "%s | Regenevise",
  },
  description:
    "Connecting individuals seeking advanced regenerative medicine with trusted, board-certified medical specialists. Discover personalized cellular therapies for joint restoration, knee pain relief, sports injuries, and chronic care.",
  keywords: [
    "Regenevise",
    "Stem Cell Therapy",
    "Regenerative Medicine",
    "Knee Pain Relief",
    "Joint Restoration",
    "Cartilage Repair",
    "Arthritis Treatment",
    "Mesenchymal Stem Cells",
    "Sports Injury Recovery",
    "Musculoskeletal Relief",
    "Chronic Pain Specialist",
    "Regenerative Care Network",
    "Cellular Therapy Consultation",
    "Non-Surgical Joint Relief",
    "Orthopedic Regeneration",
  ],
  authors: [{ name: "Regenevise LLC", url: "https://regenevise.com" }],
  creator: "Regenevise LLC",
  publisher: "Regenevise LLC",
  applicationName: "Regenevise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://regenevise.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://regenevise.com",
    siteName: "Regenevise",
    title: "Regenevise – A Way to Ease Pain | Regenerative Medicine Matchmaking",
    description:
      "Connecting patients with board-certified regenerative medicine specialists. Discover personalized cellular therapies designed to relieve chronic pain and restore vitality.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Regenevise – Driven by Innovation, Dedicated to Connection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regenevise – A Way to Ease Pain | Regenerative Medicine",
    description:
      "Connecting patients with board-certified regenerative medicine specialists for knee pain relief, joint restoration, and chronic care.",
    images: ["/images/og-image.jpg"],
    creator: "@Regenevise",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Regenevise",
    legalName: "REGENEVISE LLC",
    url: "https://regenevise.com",
    logo: "https://regenevise.com/images/regenevise-brand-logo.png",
    image: "https://regenevise.com/images/og-image.jpg",
    description:
      "Independent patient matchmaking and referral service connecting patients with qualified, board-certified regenerative medicine specialists.",
    telephone: "+1-208-867-1733",
    email: "info@regenevise.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1309 Coffeen Avenue STE 1200",
      addressLocality: "Sheridan",
      addressRegion: "WY",
      postalCode: "82801",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    medicalSpecialty: [
      "Regenerative Medicine",
      "Stem Cell Therapy",
      "Orthopedics",
      "Chronic Pain Management",
    ],
    sameAs: [
      "https://facebook.com",
      "https://instagram.com",
      "https://linkedin.com",
      "https://twitter.com",
      "https://youtube.com",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-gray-800 bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
