import { useEffect, useState } from 'react';

export const useMediaQuery = () => {
  // Define a state variable to track whether the user is on a mobile device or not
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    // Init value of `isMobile`
    setIsMobile(mediaQuery.matches);
    // Define a callback to handle changes to the media query
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    // Add the callback as a listener when the component is mounted
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    // Remove the callback as a listener when the component is unmounted
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);
  return isMobile;
};
