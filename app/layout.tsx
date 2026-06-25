import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

const display = localFont({
  src: [
    { path: "./fonts/SpaceGrotesk-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/SpaceGrotesk-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/SpaceGrotesk-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display-face",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "./fonts/Inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-body-face",
  display: "swap",
});

const mono = localFont({
  src: [
    { path: "./fonts/SpaceMono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SpaceMono-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-spacemono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Siyazama Futhi | Energy Management, HES & MDMS Software, South Africa",
    template: "%s | Siyazama Futhi",
  },
  description:
    "Energy management platforms, HES/MDMS integration, and data engineering for municipalities and enterprises. EUI, carbon tracking, and metering at scale — built in South Africa.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Siyazama Futhi — Energy intelligence, built for scale",
    description:
      "Energy management platforms, HES/MDMS integration, and data engineering for municipalities and enterprises.",
    url: SITE_URL,
    siteName: "Siyazama Futhi",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siyazama Futhi — Energy intelligence, built for scale",
    description:
      "Energy management platforms, HES/MDMS integration, and data engineering for municipalities and enterprises.",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Siyazama Futhi",
  legalName: "Siyazama Futhi (Pty) Ltd",
  url: SITE_URL,
  logo: `${SITE_URL}/apple-icon.png`,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Energy monitoring software solutions for public and private sector clients in South Africa.",
  // foundingDate: "20XX",  //
  address: {
    "@type": "PostalAddress",
    addressLocality: "Durban",
    addressRegion: "KwaZulu-Natal",
    addressCountry: "ZA",
  },
  areaServed: { "@type": "Country", name: "South Africa" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@siyazamafuthi.co.za",
    telephone: "+27000000000",
    areaServed: "ZA",
    availableLanguage: ["en", "zu"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/motion.js" />
        <script src="/gradient.js" defer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
