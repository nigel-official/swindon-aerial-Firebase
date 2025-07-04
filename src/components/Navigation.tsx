import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { Moon } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-background/90'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="SASI Logo" className="w-10 h-10" />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-primary">SASI</div>
              <div className="text-xs text-muted-foreground">Aerial Installations</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:07528082405"
              className="btn-cta text-sm"
            >
              Call Now
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              <Moon className="w-4 h-4 text-foreground" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              <Moon className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 bg-foreground transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`} />
                <span className={`block h-0.5 bg-foreground transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block h-0.5 bg-foreground transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:07528082405"
                className="btn-cta text-center block mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;