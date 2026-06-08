import Hero from "@/components/hero/Hero";
import FeaturedServices from "@/components/services/FeaturedServices";
import AboutSection from "@/components/about/AboutSection";
import BridalSection from "@/components/bridal/BridalSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import GallerySection from "@/components/gallery/GallerySection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <AboutSection />
      <BridalSection />
      <TestimonialsSection />
      <GallerySection />
    </>
  );
}