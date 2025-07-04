import { useInView } from '@/hooks/useInView';
import { Tv, Zap, Users } from 'lucide-react';

const TvServicesSection = () => {
  const { ref, isInView } = useInView();

  const serviceProviders = [
    {
      name: 'BT TV',
      logo: 'bt_tv.png',
      website: 'https://www.bt.com/tv'
    },
    {
      name: 'TalkTalk TV',
      logo: 'TalkTalk.png',
      website: 'https://www.talktalk.co.uk/tv'
    },
    {
      name: 'NOW TV',
      logo: 'NOW-TV-2019-Logo-yellow-RGB.png',
      website: 'https://www.nowtv.com'
    },
    {
      name: 'EE TV',
      logo: 'uk.co.ee.eetv.jpg',
      website: 'https://ee.co.uk/tv'
    }
  ];

  return (
    <section id="tv-services" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isInView ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-section-title">TV Services & Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Call Swindon-Aerial-Satellite-Installations on <a href="tel:01793205045" className="text-primary font-semibold hover:underline">01793 205045</a>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Freeview Section */}
          <div className={`${isInView ? 'fade-in visible' : 'fade-in'} delay-200`}>
            <div className="card-pro h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Tv className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Freeview | Terrestrial TV</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                In order to receive terrestrial TV you need a TV aerial and either a TV with Freeview built in or a TV and a set top box. Freeview provides access and the correct numbering of the channels.
              </p>
              
              <div className="text-center">
                <img 
                  src="/api/placeholder/300/200" 
                  alt="Freeview aerial installation"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                />
                <p className="text-sm text-muted-foreground mt-2">Professional Freeview aerial installation</p>
              </div>
            </div>
          </div>

          {/* YouView Section */}
          <div className={`${isInView ? 'fade-in visible' : 'fade-in'} delay-400`}>
            <div className="card-pro h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">YouView</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                YouView is a hardware and software solution for receiving Freeview. BT and TalkTalk are using YouView set top boxes. Some TVs have YouView built in. If YouView is connected to the internet it also provides smart features such as On Demand, Catch Up and provides access to subscription services such as Netflix, Amazon Prime Video, NOW TV etc.
              </p>
              
              <div className="text-center">
                <img 
                  src="/api/placeholder/300/200" 
                  alt="YouView installation"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                />
                <p className="text-sm text-muted-foreground mt-2">YouView aerial installation service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Providers Section */}
        <div className={`${isInView ? 'fade-in visible' : 'fade-in'} delay-600`}>
          <div className="card-pro">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Service Providers</h3>
            </div>
            
            <p className="text-muted-foreground mb-8">
              BT, TalkTalk, NOW, EE etc. are service providers who put their own spin on the internet based programs and services. Different movie libraries, BT Sport, a whole host of extra TV channels not on Freeview.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {serviceProviders.map((provider, index) => (
                <a 
                  key={provider.name}
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-6 bg-card border border-border rounded-lg hover:shadow-md transition-all group ${isInView ? 'fade-in visible' : 'fade-in'}`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="aspect-video bg-muted/20 rounded-md flex items-center justify-center mb-3 group-hover:bg-muted/30 transition-colors">
                    <span className="text-xs text-muted-foreground">{provider.name}</span>
                  </div>
                  <h4 className="font-semibold text-center text-foreground text-sm">{provider.name}</h4>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`mt-16 text-center ${isInView ? 'fade-in visible' : 'fade-in'} delay-1000`}>
          <div className="card-pro max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need Help Choosing the Right TV Service?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert advice on the best TV solution for your needs. Professional installation and setup included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:01793205045" className="btn-hero">
                Call 01793 205045
              </a>
              <a href="tel:07528082405" className="btn-outline-pro">
                Mobile: 07528 082405
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TvServicesSection;