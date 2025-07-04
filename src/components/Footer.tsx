import { Phone, Mail } from 'lucide-react';

const Footer = () => {

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} SWINDON-AERIAL-SATELLITE-INSTALLATIONS by Stefan Endmann
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Professional • Honest • Reliable • 2 Years Guarantee
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Service Areas</h4>
              <p className="text-sm text-muted-foreground">
                Swindon • Faringdon • Marlborough • Devizes<br />
                Chippenham • Malmesbury • Calne • Corsham
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <a href="tel:07528082405" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 07528 082405
                </a>
                <a href="tel:01793205045" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 01793 205045
                </a>
                <a href="mailto:multipointaerials@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Digital Aerial Installation</div>
                <div>Satellite TV Setup</div>
                <div>Signal Testing & Repairs</div>
                <div>Multi-room Distribution</div>
                <div>Emergency Repairs</div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Monday - Friday: 8AM - 6PM</div>
                <div>Saturday: 9AM - 5PM</div>
                <div>Sunday: Emergency Only</div>
                <div className="text-accent font-medium">24/7 Emergency Service</div>
              </div>
            </div>

            {/* Guarantees */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Guarantee</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>✓ 2 Years Parts & Labour</div>
                <div>✓ Professional Installation</div>
                <div>✓ No Hidden Charges</div>
                <div>✓ Honest Advice</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;