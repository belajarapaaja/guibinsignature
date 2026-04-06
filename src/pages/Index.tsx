import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import FeaturedMenu from '@/components/landing/FeaturedMenu';
import GallerySection from '@/components/landing/GallerySection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import ReservationSection from '@/components/landing/ReservationSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import RedCurtain from '@/components/ornaments/RedCurtain';

const Index = () => {
  return (
    <RedCurtain>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedMenu />
      <GallerySection />
      <TestimonialsSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </RedCurtain>
  );
};

export default Index;
