import { useRef, useState, useEffect } from 'react';
import './GlowButton.css';

const GlowButton = ({ type, text, href, color, bgColor, onClick, loading }) => {
  const btnRef = useRef();
  const iRef = useRef();
  const [isTouch, setIsTouch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handlePointerEvent = ({ pointerType }) => {
    if (pointerType === 'touch' && isMobile) {
      setIsTouch(true);
      setTimeout(() => {
        setIsTouch(false);
      }, 1000);
    } else{
      setIsTouch(false);
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
    isMobile
      ? button.classList.add('mobile-btn')
      : button.classList.remove('mobile-btn')
  }, [isMobile])
  
  useEffect(() => {
    const buttonElement = btnRef.current;
    const iElement = iRef.current;

    if (isTouch) {
      buttonElement.classList.add('mobile-btn-active');
      iElement.classList.add('mobile-btn-i-active');
    } else {
      buttonElement.classList.remove('mobile-btn-active');
      iElement.classList.remove('mobile-btn-i-active');
    }
  }, [isTouch]);

  return (
    <>
      <button
        ref={btnRef}
        className='glow-btn'
        type={type || 'button'}
        href={`#${href}`}
        style={{ '--clr': color, '--bgClr': bgColor }}
        onPointerDown={(e) => handlePointerEvent(e)}
        onClick={onClick}
      >
        <span>{text}</span>
        <i ref={iRef}></i>
      </button>
    </>
  );
};

export default GlowButton;
