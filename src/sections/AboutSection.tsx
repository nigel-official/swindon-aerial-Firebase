import { useInView } from '@/hooks/useInView';
import stefanPhoto from '@/assets/stefan-photo.jpg';

const AboutSection = () => {
  const { ref, isInView } = useInView();

  const stats = [
    { number: '12+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '2 Year', label: 'Guarantee' },
    { number: '24/7', label: 'Emergency Service' }
  ];

  const qualifications = [
    'Fully Trained & Certified Aerial Installer',
    'Self-Employed Since 2012',
    'German-Born, Cotswolds Resident Since 2002',
    'Specialist in Digital TV & Satellite Systems',
    'Trusted by Homes & Businesses Across Swindon'
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isInView ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-section-title">About Stefan Endmann</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted local aerial and satellite installation expert
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`${isInView ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <div className="relative">
              <img
                src={stefanPhoto}
                alt="Stefan Endmann - Professional Aerial Installer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`space-y-8 ${isInView ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div>
              <h3 className="text-subsection">Who I Am</h3>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  I'm Stefan Endmann, a German-born aerial installer who has called the Cotswolds home since 2002. 
                  With over 12 years of experience as a self-employed professional, I've built my reputation on 
                  three core principles: <strong className="text-foreground">honesty, reliability, and exceptional customer service</strong>.
                </p>
                <p>
                  Unlike many in this industry, I believe in providing honest advice without upselling. 
                  My goal is to find the right solution for your needs and budget, backed by clear communication 
                  and a comprehensive 2-year guarantee on all work and parts.
                </p>
              </div>
            </div>

            {/* Qualifications */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Professional Credentials</h4>
              <ul className="space-y-3">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/10">
              <h4 className="text-lg font-semibold text-foreground mb-4">My Promise to You</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>No upselling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Honest advice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Clear communication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>2-year guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Fair pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Quality workmanship</span>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:07528082405" className="btn-hero">
                Call Stefan Today
              </a>
              <a href="mailto:multipointaerials@gmail.com" className="btn-outline-pro">
                Email for Quote
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-20 ${isInView ? 'fade-in visible' : 'fade-in'} delay-700`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center card-pro">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;