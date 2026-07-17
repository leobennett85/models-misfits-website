import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Models + Misfits Salon + Spa | Hair Salon in St. John's, NL",

  description:
    "Models + Misfits Salon + Spa specializes in vivid color transformations, bridal styling, extensions, blonding, and luxury beauty services in St. John's, Newfoundland.",

  keywords: [
    "hair salon st johns",
    "hair salon st john's",
    "bridal hair st john's",
    "bridal stylist newfoundland",
    "hair color st john's",
    "vivid hair color",
    "balayage st john's",
    "hair extensions st john's",
    "models and misfits salon",
    "salon newfoundland",
  ],

  openGraph: {
    title: "Models + Misfits Salon + Spa",
    description:
      "Luxury salon experiences specializing in vivid color, bridal beauty, blonding, and extensions.",

    images: ["/logos/MMLogo-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#f8f4ef]">
    
  <LocalBusinessSchema />
  

  <Navbar />

  <main className="flex-1">
    {children}
  </main>

  <Footer />

</body>
    </html>
  );
}