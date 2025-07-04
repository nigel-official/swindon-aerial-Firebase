import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

const GallerySection = () => {
  const { ref, isInView } = useInView();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      src: gallery1,
      alt: 'Digital TV aerial installation on residential roof',
      caption: 'Professional digital TV aerial installation'
    },
    {
      src: gallery2,
      alt: 'Satellite dish installation on house exterior',
      caption: 'Expert satellite dish installation'
    },
    {
      src: gallery3,
      alt: 'TV wall mounting in modern living room',
      caption: 'Professional TV wall mounting service'
    },
    // Additional placeholder images
    {
      src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      alt: 'Happy customer with new installation',
      caption: 'Satisfied customer with new aerial system'
    },
    {
      src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      alt: 'Professional installation equipment',
      caption: 'Professional grade installation equipment'
    },
    {
      src: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
      alt: 'Modern home entertainment setup',
      caption: 'Complete home entertainment installation'
    }
  ];

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  return (
    <section id="gallery" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isInView ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-section-title">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See examples of our professional aerial and satellite installations across Swindon and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group cursor-pointer ${isInView ? 'fade-in visible' : 'fade-in'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-sm">
                      {image.caption}
                    </p>
                    <p className="text-white/80 text-xs mt-1">
                      Click to enlarge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={closeCarousel}
          >
            <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center" onClick={(e) => e.stopPropagation()}>
              
              {/* Close button - responsive positioning */}
              <button
                onClick={closeCarousel}
                className="absolute top-2 right-2 sm:-top-16 sm:right-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              {/* Previous button - responsive positioning */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 sm:-left-16 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              {/* Next button - responsive positioning */}
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 sm:-right-16 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              {/* Image frame */}
              <div className="relative w-full h-full bg-white/5 border border-white/20 rounded-lg p-2 sm:p-4 backdrop-blur-sm mx-12 sm:mx-0">
                <img
                  src={galleryImages[selectedImageIndex].src}
                  alt={galleryImages[selectedImageIndex].alt}
                  className="w-full h-full object-contain rounded-lg"
                />
                
                {/* Image counter - inside frame, bottom center */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm backdrop-blur-sm">
                  {selectedImageIndex + 1} / {galleryImages.length}
                </div>
                
                {/* Image caption - inside frame, bottom */}
                <div className="absolute bottom-8 sm:bottom-16 left-4 right-4 sm:left-8 sm:right-8 text-center">
                  <p className="text-white font-medium drop-shadow-lg text-sm sm:text-base">
                    {galleryImages[selectedImageIndex].caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className={`mt-16 text-center ${isInView ? 'fade-in visible' : 'fade-in'} delay-500`}>
          <div className="card-pro max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready for Your Installation?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our satisfied customers across Swindon and surrounding areas. 
              Get your professional aerial or satellite installation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:07528082405" className="btn-hero">
                Call for Free Quote
              </a>
              <a href="#contact" className="btn-outline-pro">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;