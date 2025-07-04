import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Phone, Bell } from 'lucide-react';

const ServicesSection = () => {
  const { ref, isInView } = useInView();
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      title: 'Freeview Digital TV Aerial',
      description: 'Professional installation of high-gain digital TV aerials for crystal-clear Freeview reception.',
      details: 'Complete digital TV aerial installation service including signal testing, optimal positioning, and weatherproofing. Perfect for receiving all Freeview channels in HD quality. Includes cable installation and tuning of your TV or set-top box.',
      icon: <Bell className="w-8 h-8 text-primary" />
    },
    {
      title: 'Freesat, Sky, European Satellite',
      description: 'Expert satellite dish installation for Sky, Freesat, and international programming.',
      details: 'Professional satellite dish installation for all major providers. Includes Sky Q, Sky+, Freesat, and European satellite systems. Full signal alignment, LNB installation, and multi-room setup available.',
      icon: <Bell className="w-8 h-8 text-primary" />
    },
    {
      title: 'TV Wall Mounting',
      description: 'Safe and secure TV wall mounting with professional cable management.',
      details: 'Professional TV wall mounting service for all TV sizes. Includes wall assessment, proper bracket selection, secure mounting, and cable management. Suitable for plasterboard, brick, and cavity walls.',
      icon: <Phone className="w-8 h-8 text-primary" />
    },
    {
      title: 'Fault Finding & Repair',
      description: 'Comprehensive fault diagnosis and repair for all aerial and satellite systems.',
      details: 'Expert troubleshooting and repair service for poor signal, no signal, or intermittent reception issues. Includes aerial realignment, cable replacement, and component testing.',
      icon: <Bell className="w-8 h-8 text-primary" />
    },
    {
      title: 'Advice & Consultation',
      description: 'Honest, professional advice on the best solution for your viewing needs.',
      details: 'Free consultation service to help you choose the right system. No upselling - just honest advice based on your location, viewing preferences, and budget.',
      icon: <Phone className="w-8 h-8 text-primary" />
    },
    {
      title: 'Communal TV Systems',
      description: 'Installation and maintenance of communal aerial systems for apartment blocks.',
      details: 'Professional communal TV system installation for residential and commercial properties. Includes system design, installation, and ongoing maintenance contracts.',
      icon: <Bell className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isInView ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-section-title">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional aerial and satellite installation services across Swindon and surrounding areas.
            All work comes with a 2-year guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-service ${isInView ? 'fade-in visible' : 'fade-in'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              
              {expandedService === index && (
                <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-foreground">
                    {service.details}
                  </p>
                </div>
              )}
              
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="btn-outline-pro text-sm"
                >
                  {expandedService === index ? 'Read Less' : 'Read More'}
                </button>
                
                <a 
                  href="tel:07528082405"
                  className="btn-cta text-sm text-center"
                >
                  Call 07528 082405
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Service Area Notice */}
        <div className={`mt-16 text-center ${isInView ? 'fade-in visible' : 'fade-in'} delay-700`}>
          <div className="card-pro max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              24/7 Emergency Service Available
            </h3>
            <p className="text-muted-foreground mb-6">
              Aerial and satellite emergencies don't wait for business hours. 
              Contact me anytime for urgent repairs and installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:07528082405" className="btn-hero">
                Emergency Call: 07528 082405
              </a>
              <a href="mailto:multipointaerials@gmail.com" className="btn-outline-pro">
                Email for Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;