import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Phone, Bell } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  const { ref, isInView } = useInView();
  const [selectedPostcode, setSelectedPostcode] = useState('');

  const serviceAreas = [
    { code: 'SN1', name: 'Swindon Central', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39692.26190251523!2d-1.8370394918802206!3d51.55418293672498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48714381b264fbe1%3A0x74e45141d5f2db40!2sSwindon%20SN1!5e0!3m2!1sen!2suk!4v1751639784464!5m2!1sen!2suk' },
    { code: 'SN2', name: 'Swindon South', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39671.476518746786!2d-1.830657591528023!3d51.577998738123966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48714154abe9253f%3A0xce2836aafeacfdcd!2sSwindon%20SN2!5e0!3m2!1sen!2suk!4v1751639951541!5m2!1sen!2suk' },
    { code: 'SN3', name: 'Swindon West', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79359.61601303815!2d-1.812656043880416!3d51.568453499327966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871443fa75620db%3A0x3a6f9fd74539bc6c!2sSwindon%20SN3!5e0!3m2!1sen!2suk!4v1751640462553!5m2!1sen!2suk' },
    { code: 'SN4', name: 'Wootton Bassett', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79468.35817453825!2d-1.8832003476114894!3d51.506130484745306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48714212ae3c6207%3A0xdb83c08eb6bfc458!2sSwindon%20SN4!5e0!3m2!1sen!2suk!4v1751640491385!5m2!1sen!2suk' },
    { code: 'SN5', name: 'Swindon West', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79333.79264182813!2d-1.962811792994443!3d51.58324565280916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48714106bbabb695%3A0xf575fa8929af3add!2sSwindon%20SN5!5e0!3m2!1sen!2suk!4v1751640519472!5m2!1sen!2suk' },
    { code: 'SN6', name: 'Highworth', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158581.37407506612!2d-1.9370675490661131!3d51.607930677231444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487137c28922c829%3A0x4c5a8e9e94061ef!2sSwindon%20SN6!5e0!3m2!1sen!2suk!4v1751640576951!5m2!1sen!2suk' },
    { code: 'SN7', name: 'Faringdon', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79253.69089751638!2d-1.658439290246183!3d51.629110313651886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871350e053cdf6b%3A0x4db97021befcb876!2sFaringdon%20SN7!5e0!3m2!1sen!2suk!4v1751640612447!5m2!1sen!2suk' },
    { code: 'SN8', name: 'Marlborough', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159319.375435592!2d-1.8602154509429323!3d51.39634333019389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48714d8754ae74cd%3A0x725b475f758fdb47!2sMarlborough%20SN8!5e0!3m2!1sen!2suk!4v1751640634741!5m2!1sen!2suk' },
    { code: 'SN9', name: 'Pewsey', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79809.37880135699!2d-1.8734981093129675!3d51.31033158982036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487157ee9d5af31b%3A0xa5f1ca7e30db5657!2sPewsey%20SN9!5e0!3m2!1sen!2suk!4v1751640655922!5m2!1sen!2suk' },
    { code: 'SN10', name: 'Devizes', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159584.90526894922!2d-2.1203772696108216!3d51.32006246070404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48715fce46aa505d%3A0x8d95d089af6efbc7!2sDevizes%20SN10!5e0!3m2!1sen!2suk!4v1751640680938!5m2!1sen!2suk' },
    { code: 'SN11', name: 'Calne', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79582.68324238445!2d-2.0657596015342077!3d51.44054956954784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48715d891d1c79e7%3A0x82871517348b8f!2sCalne%20SN11!5e0!3m2!1sen!2suk!4v1751640711699!5m2!1sen!2suk' },
    { code: 'SN12', name: 'Melksham', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79706.78420763384!2d-2.224475755792486!3d51.3692930532067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487162a4efed7b33%3A0x73102411dbae7179!2sMelksham%20SN12!5e0!3m2!1sen!2suk!4v1751640855902!5m2!1sen!2suk' },
    { code: 'SN13', name: 'Corsham', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39806.622410501644!2d-2.2547474438182684!3d51.42300822910886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487178b45a112c2f%3A0xfcb112f82a460bd2!2sCorsham%20SN13!5e0!3m2!1sen!2suk!4v1751640883106!5m2!1sen!2suk' },
    { code: 'SN14', name: 'Chippenham', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79472.67927521151!2d-2.33424254775972!3d51.50365283416839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48716fd045c6cbc5%3A0x60878060f3c9d4c7!2sChippenham%20SN14!5e0!3m2!1sen!2suk!4v1751640916819!5m2!1sen!2suk' },
    { code: 'SN15', name: 'Malmesbury', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159043.87210821733!2d-2.2038270315754103!3d51.475403753080585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871630088ddd45d%3A0xd2e786888a15b92d!2sChippenham%20SN15!5e0!3m2!1sen!2suk!4v1751640940574!5m2!1sen!2suk' },
    { code: 'SN16', name: 'Malmesbury', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79308.2595411025!2d-2.1655657921183775!3d51.597868556258064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48716a2a0dcb10bb%3A0x46d4b0ec813d2408!2sMalmesbury%20SN16!5e0!3m2!1sen!2suk!4v1751641061675!5m2!1sen!2suk' },
    { code: 'SN25', name: 'Swindon North', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39652.224128425725!2d-1.8361106912017058!3d51.60005103942378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871413f6312a65f%3A0x34ce20d2adc607e0!2sSwindon%20SN25!5e0!3m2!1sen!2suk!4v1751641089001!5m2!1sen!2suk' },
    { code: 'SN26', name: 'Swindon Northeast', embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39637.45794361582!2d-1.8328972909514354!3d51.61696014042338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48714137ac3b5123%3A0xadf83f17cf276256!2sSwindon%20SN26!5e0!3m2!1sen!2suk!4v1751641122813!5m2!1sen!2suk' }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: 'Mobile',
      value: '07528 082405',
      href: 'tel:07528082405',
      description: '24/7 Emergency Service'
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: 'Landline',
      value: '01793 205045',
      href: 'tel:01793205045',
      description: 'Office Hours'
    },
    {
      icon: <Bell className="w-5 h-5 text-primary" />,
      title: 'Email',
      value: 'multipointaerials@gmail.com',
      href: 'mailto:multipointaerials@gmail.com',
      description: 'Free Quotes'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isInView ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-section-title">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Available 24/7 for emergency service across Swindon and surrounding areas. 
            Contact me today for honest advice and professional installation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className={`space-y-8 ${isInView ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <div>
              <h3 className="text-subsection mb-6">Contact Methods</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl group-hover:bg-primary/20 transition-colors">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{method.title}</div>
                      <div className="text-primary font-medium">{method.value}</div>
                      <div className="text-sm text-muted-foreground">{method.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isInView ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <div className="card-pro">
              <h3 className="text-subsection mb-6">Send a Message</h3>
              <ContactForm />
              
              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Bell className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quick Response Guarantee</h4>
                    <p className="text-sm text-muted-foreground">
                      I respond to all enquiries within 24 hours. For emergency service, 
                      call my mobile number for immediate assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas & Location Section */}
        <div className={`mt-16 ${isInView ? 'fade-in visible' : 'fade-in'} delay-300`}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service Areas */}
            <div className="space-y-8">
              <div>
                <h3 className="text-subsection mb-6">Service Areas</h3>
                <div className="card-pro">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {serviceAreas.map((area, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedPostcode(area.code)}
                        className="flex items-center space-x-2 p-2 rounded hover:bg-muted/50 transition-colors text-left"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{area.code} - {area.name}</span>
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Main Areas:</strong> Swindon, Faringdon, Marlborough, Pewsey, Devizes, 
                      Calne, Melksham, Corsham, Chippenham, Malmesbury
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-subsection mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary hover:bg-primary-glow text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Bell className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary hover:bg-primary-glow text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <Bell className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-subsection mb-6">Location</h3>
              <div className="card-pro p-0 overflow-hidden">
                <iframe
                  src={selectedPostcode 
                    ? serviceAreas.find(area => area.code === selectedPostcode)?.embedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39772.56848322842!2d-1.8246!3d51.5558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871444c40d6d571%3A0x6a4e92b7e0c0e1b8!2sSwindon%2C%20UK!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39772.56848322842!2d-1.8246!3d51.5558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871444c40d6d571%3A0x6a4e92b7e0c0e1b8!2sSwindon%2C%20UK!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  }
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={selectedPostcode ? `Service area map - ${selectedPostcode}` : "Service area map - Swindon and surrounding areas"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className={`mt-16 ${isInView ? 'fade-in visible' : 'fade-in'} delay-500`}>
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">
              24/7 Emergency Service Available
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Aerial emergencies don't wait for business hours. Lost signal during the big game? 
              Storm damage to your aerial? Call me anytime for urgent repairs and installations.
            </p>
            <a href="tel:07528082405" className="btn-cta text-lg">
              Emergency Line: 07528 082405
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;