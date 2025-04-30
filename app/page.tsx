import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <Header />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
