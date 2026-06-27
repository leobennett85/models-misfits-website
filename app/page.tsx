"use client";

import { useState } from "react";

import AnimatedLogoIntro from "@/components/logo/AnimatedLogoIntro";

import Hero from "@/components/hero/Hero";
import FeaturedServices from "@/components/services/FeaturedServices";
import AboutSection from "@/components/about/AboutSection";
import BridalSection from "@/components/bridal/BridalSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import GallerySection from "@/components/gallery/GallerySection";
import ContactCTA from "@/components/contact/ContactCTA";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && (
        <AnimatedLogoIntro
          onComplete={() => setIntroComplete(true)}
        />
      )}

      <Hero showContent={introComplete} />

      <FeaturedServices />
      <AboutSection />
      <BridalSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactCTA />
    </>
  );
}