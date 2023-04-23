import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const useTyped = (heroContent) => {
  // Create reference to store the DOM element containing the animation
  const headTextRef = useRef(null);
  const subTextRef = useRef(null);
  // Create reference to store the Typed instance itself
  const typedHeadText = useRef(null);
  const typedSubText = useRef(null);

  useEffect(() => {
      const headTextOptions = {
        strings: heroContent.headText,
        typeSpeed: 50,
        startDelay: 2000,
        showCursor: true,
        cursorChar: '&nbsp;', // take up space when empty
        onComplete: (self) => {
          self.cursor.remove();
        },
      };
      const subTextOptions = {
        strings: heroContent.subText,
        typeSpeed: 40,
        backSpeed: 20,
        startDelay: 4500,
        backDelay: 2500,
        loop: false,
        loopCount: Infinity,
      };
      typedHeadText.current = new Typed(headTextRef.current, headTextOptions);
      typedSubText.current = new Typed(subTextRef.current, subTextOptions);

      return () => {
        // destroy Typed instance during cleanup to prevent memory leaks
        typedHeadText.current.destroy();
        typedSubText.current.destroy();
      };
  }, []);

  return { headTextRef, subTextRef };
};
