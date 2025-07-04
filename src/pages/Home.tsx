import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import ServicesSection from '@/sections/ServicesSection';
import TvServicesSection from '@/sections/TvServicesSection';
import GallerySection from '@/sections/GallerySection';
import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <TvServicesSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;