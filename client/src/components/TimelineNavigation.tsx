import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineNavigationProps {
  sections: string[];
}

const TimelineNavigation = ({ sections }: TimelineNavigationProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find which section is currently in view
      const sectionElements = sections.map(id => document.getElementById(id));
      
      sectionElements.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sections[index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Get the color for a section
  const getSectionColor = (section: string) => {
    if (section === 'intro') return '#1A365D';
    if (section === 'future') return '#45C7B3';
    if (section === 'present') return '#3D87CB';
    return '#0A2342'; // past or default
  };

  // Get the display name for a section
  const getSectionDisplayName = (section: string) => {
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  return (
    <>
      {/* Mobile Timeline Navigation (Top) */}
      <div className="md:hidden timeline-nav-mobile fixed z-50 top-4 left-0 right-0 flex justify-center">
        <div className="bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-6">
          {sections.map((section, index) => (
            <a 
              key={section}
              href={`#${section}`}
              className="relative p-2"
            >
              <div
                className={`section-marker ${
                  activeSection === section 
                    ? 'w-4 h-4 active' 
                    : 'w-3 h-3 opacity-70'
                } rounded-full border-2 border-white transition-all duration-300`}
                style={{ backgroundColor: getSectionColor(section) }}
              />
              {activeSection === section && (
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium whitespace-nowrap">
                  {getSectionDisplayName(section)}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
      
      {/* Desktop Timeline Navigation (Right Side) */}
      <div className="hidden md:flex timeline-nav fixed z-50 right-10 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-16">
        <div className="timeline-indicator h-full absolute left-1/2 transform -translate-x-1/2 z-0"></div>
        
        {sections.map((section, index) => (
          <div key={section} className="flex items-center">
            <div className="relative">
              <AnimatePresence>
                {activeSection === section && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute right-full mr-2 whitespace-nowrap text-white text-sm font-medium bg-black/40 px-2 py-1 rounded"
                  >
                    {getSectionDisplayName(section)}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <a 
                href={`#${section}`}
                className={`section-marker relative z-10 block ${
                  activeSection === section 
                    ? 'w-4 h-4 active' 
                    : 'w-3 h-3 opacity-70'
                } rounded-full border-2 border-white transition-all duration-300 hover:scale-125`}
                style={{ backgroundColor: getSectionColor(section) }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimelineNavigation;
