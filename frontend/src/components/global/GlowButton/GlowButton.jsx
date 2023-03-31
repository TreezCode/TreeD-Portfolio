import { useRef, useState, useEffect } from 'react';
import './GlowButton.css';

const GlowButton = ({ type, text, href, color, bgColor, onClick }) => {
  const btnRef = useRef();
  const iRef = useRef();
  const [animation, setAnimation] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handlePointerEvent = () => {
    if (isMobile) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 1000);
    } else{
      setAnimation(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const button = btnRef.current;
    if (isMobile) {
      button.classList.add('mobile-btn')
      button.classList.remove('desktop-btn')
    } else {
      button.classList.add('desktop-btn')
      button.classList.remove('mobile-btn')
    }
  }, [isMobile])
  
  useEffect(() => {
    const buttonElement = btnRef.current;
    const iElement = iRef.current;
    if (animation) {
      buttonElement.classList.add('mobile-btn-active');
      iElement.classList.add('mobile-btn-i-active');
    } else {
      buttonElement.classList.remove('mobile-btn-active');
      iElement.classList.remove('mobile-btn-i-active');
    }
  }, [animation]);

  return (
    <>
      <button
        ref={btnRef}
        className='glow-btn'
        type={type || 'button'}
        href={`#${href}`}
        style={{ '--clr': color, '--bgClr': bgColor }}
        onPointerDown={handlePointerEvent}
        onClick={onClick}
      >
        <span>{text}</span>
        <i ref={iRef}></i>
      </button>
    </>
  );
};

export default GlowButton;
