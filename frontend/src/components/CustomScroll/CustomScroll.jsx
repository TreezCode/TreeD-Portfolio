import { useEffect, useState } from 'react';

import './CustomScroll.css';

const CustomScroll = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      let scrollDirection;
      scrollPos > prevScrollPos
        ? (scrollDirection = 'down')
        : (scrollDirection = 'up');

      setPrevScrollPos(scrollPos);

      if (scrollDirection === 'down') {
        document.body.classList.add('scroll-down');
      } else {
        document.body.classList.remove('scroll-down');
      }

      return scrollDirection;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return null;
};

export default CustomScroll;
