import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Delicious_Handrawn, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/smooth-scroll";

const runde = localFont({
  variable: "--font-runde",
  display: "swap",
  src: [
    { path: "../public/fonts/OpenRunde-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/OpenRunde-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/OpenRunde-Semibold.woff2", weight: "600", style: "normal" },
  ],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const handrawn = Delicious_Handrawn({
  variable: "--font-handrawn",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kushal  — Aspiring backend Developer",
  description:
    "Kushal — B.tech CSE Student. Aspiring Backend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${runde.variable} ${geist.variable} ${handrawn.variable} ${instrument.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-black-1">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
