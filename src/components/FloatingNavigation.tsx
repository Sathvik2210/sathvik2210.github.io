import { useState, useEffect } from "react";

interface FloatingNavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const FloatingNavigation = ({ activeSection, scrollToSection }: FloatingNavigationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <nav className="floating-nav">
      <div className="bg-card/90 backdrop-blur-sm border border-border rounded-full p-3 shadow-lg">
        {sections.map((section) => (
          <div key={section.id} className="group relative">
            <div
              className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
              title={section.label}
            />
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-foreground text-background px-2 py-1 rounded text-xs whitespace-nowrap">
                {section.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNavigation;