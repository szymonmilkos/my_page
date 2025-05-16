import { useEffect } from 'react';
import TimelineNavigation from '@/components/TimelineNavigation';
import LandingPage from '@/components/LandingPage';
import FutureSection from '@/components/FutureSection';
import PresentSection from '@/components/PresentSection';
import PastSection from '@/components/PastSection';
import Footer from '@/components/Footer';

const Home = () => {
  useEffect(() => {
    document.title = "Academic Portfolio | Scientific Discovery Research";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Personal academic portfolio focused on revolutionizing scientific discovery through understanding how we discover. Explore past achievements, current projects, and future research directions.';
    document.head.appendChild(metaDescription);
    
    // Add Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Academic Portfolio | Scientific Discovery Research';
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Explore research on scientific discovery processes, breakthrough thinking methodologies, and innovation acceleration techniques.';
    document.head.appendChild(ogDescription);
    
    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);
    
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
    };
  }, []);

  return (
    <div className="relative">
      <TimelineNavigation sections={['intro', 'future', 'present', 'past']} />
      <LandingPage />
      <FutureSection />
      <PresentSection />
      <PastSection />
      <Footer />
    </div>
  );
};

export default Home;
