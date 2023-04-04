import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.dataset.section ?? '');
        }
      });
    }, { threshold: 0.25 }); // set threshold to 25% visible

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Remove the observer as soon as the component is unmounted
    return () => observer.disconnect();
  }, []);

  return activeSection;
};

