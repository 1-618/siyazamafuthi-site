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
