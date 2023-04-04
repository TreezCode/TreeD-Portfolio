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
    }, { threshold: 0.15 }); // set initial threshold to 0

    const sections = document.querySelectorAll('section');
    sections.forEach((section, i) => {
      const resizeObserver = new ResizeObserver((entries) => {
        const { height } = entries[0].contentRect;
        const prevThreshold = observer.thresholds[0] || 0;
        const newThreshold = height > window.innerHeight * 0.75 ? 0.25 : height / window.innerHeight;
        if (newThreshold > prevThreshold) {
          observer.unobserve(section);
          observer.observe(section, { threshold: newThreshold });
        }
      });
      resizeObserver.observe(section);
      const height = section.getBoundingClientRect().height;
      const threshold = height > window.innerHeight * 0.75 ? 0.25 : height / window.innerHeight;
      observer.observe(section, { threshold });
    });

    // Remove the observer as soon as the component is unmounted
    return () => observer.disconnect();
  }, []);

  return activeSection;
};

// 10 line hook for the memes
// export const useActiveSection = () => {
//   const [activeSection, setActiveSection] = useState(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.dataset.section ?? '')), { threshold: 0.25 });
//     document.querySelectorAll('section').forEach(section => observer.observe(section));
//     return () => observer.disconnect();
//   }, []);
//   return activeSection;
// };