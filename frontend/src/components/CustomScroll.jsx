import { useEffect, useState } from 'react';

const CustomScroll = () => {
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const height = document.documentElement.scrollHeight;
      setCurrentScrollPos(scrollPos);
      setTotalHeight(height);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const halfwayPoint = totalHeight / 2 + totalHeight * 0.02;
  
  currentScrollPos > halfwayPoint
    ? document.body.classList.add('scroll-half')
    : document.body.classList.remove('scroll-half');

  return null;
};

export default CustomScroll;
