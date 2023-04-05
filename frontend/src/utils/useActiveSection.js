import { useState, useEffect } from 'react';

// export const useActiveSection = () => {
//   const [activeSection, setActiveSection] = useState(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.dataset.section ?? '');
//         }
//       });
//     }, { rootMargin: '-50% 0px -50% 0px' }); // set rootMargin to trigger intersection when section is 50% visible
//     const sections = document.querySelectorAll('section');
//     sections.forEach((section, i) => {
//       observer.observe(section);
//     });
//     // Remove the observer as soon as the component is unmounted
//     return () => observer.disconnect();
//   }, []);
//   return activeSection;
// };

// 10 line intersection observer hook for the memes
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.dataset.section ?? '')), { rootMargin: '-50% 0px -50% 0px' });
    document.querySelectorAll('section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return activeSection;
};