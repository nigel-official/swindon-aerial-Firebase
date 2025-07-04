import { useInView } from '@/hooks/useInView';
import { Phone, Bell } from 'lucide-react';
import heroBackground from '@/assets/hero-background-colorful.jpg';

const HeroSection = () => {
  const { ref, isInView } = useInView();

  const values = [
    'PROFESSIONAL',
    'HONEST', 
    'RELIABLE',
    'CUSTOMER SERVICE',
    '2 YEARS GUARANTEE'
  ];

  return (
    <section 
      id="home" 
      ref={ref} 
      className="min-h-screen flex items-center pt-16 relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className={`space-y-8 ${isInView ? 'fade-in visible' : 'fade-in'}`}>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                SWINDON-AERIAL-SATELLITE-INSTALLATIONS
              </h1>
              
              {/* Values Badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {values.map((value, index) => (
                  <span
                    key={value}
                    className={`px-4 py-2 bg-white/20 text-white border border-white/30 rounded-full text-sm font-semibold backdrop-blur-sm ${
                      isInView ? 'fade-in visible' : 'fade-in'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {value}
                  </span>
                ))}
              </div>

              <div className="prose prose-lg text-white max-w-2xl mx-auto mb-8">
                <p className="text-lg text-white">
                  I am <strong className="text-white">Stefan Endmann</strong>, a trained and self-employed aerial installer since 2012. 
                  No upselling, honest advice, clear communication, 2-year guarantee on all work and parts.
                </p>
              </div>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <a 
                href="tel:07528082405"
                className="flex flex-col items-center space-y-3 p-6 bg-white/20 text-white border border-white/30 rounded-lg font-semibold backdrop-blur-sm hover:bg-white/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-white/90">Mobile</div>
                  <div className="font-semibold text-white">07528 082405</div>
                </div>
              </a>
              
              <a 
                href="tel:01793205045"
                className="flex flex-col items-center space-y-3 p-6 bg-white/20 text-white border border-white/30 rounded-lg font-semibold backdrop-blur-sm hover:bg-white/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-white/90">Landline</div>
                  <div className="font-semibold text-white">01793 205045</div>
                </div>
              </a>
              
              <a 
                href="mailto:multipointaerials@gmail.com"
                className="flex flex-col items-center space-y-3 p-6 bg-white/20 text-white border border-white/30 rounded-lg font-semibold backdrop-blur-sm hover:bg-white/30 transition-all group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-white/90">Email</div>
                  <div className="font-semibold text-white break-all">multipointaerials@gmail.com</div>
                </div>
              </a>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <a
                href="#contact"
                className="btn-cta inline-block"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;