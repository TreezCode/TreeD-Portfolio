// external imports
import { useRef, useState, useEffect } from 'react';
// internal imports
import { useMediaQuery } from '../../../utils/hooks/useMediaQuery';
import './GlowButton.css';

const GlowButton = ({ type, text, href, color, bgColor, onClick, className }) => {
  const btnRef = useRef();
  const iRef = useRef();
  const [animation, setAnimation] = useState(false);
  const isMobile = useMediaQuery();

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
    const button = btnRef.current;
    if (isMobile) {
      button.classList.add('mobile-glow-btn')
      button.classList.remove('desktop-glow-btn')
    } else {
      button.classList.add('desktop-glow-btn')
      button.classList.remove('mobile-glow-btn')
    }
  }, [isMobile])
  
  useEffect(() => {
    const buttonElement = btnRef.current;
    const iElement = iRef.current;
    if (animation) {
      buttonElement.classList.add('mobile-glow-btn-active');
      iElement.classList.add('mobile-glow-btn-i-active');
    } else {
      buttonElement.classList.remove('mobile-glow-btn-active');
      iElement.classList.remove('mobile-glow-btn-i-active');
    }
  }, [animation]);

  return (
    <>
      <button
        ref={btnRef}
        className={`glow-btn ${className ? className : ''}`}
        type={type || 'button'}
        href={`#${href}`}
        style={{'--clr': color, '--bgClr': bgColor}}
        onPointerDown={handlePointerEvent}
        onClick={onClick}
      >
        <span className='flex items-center justify-center'>{text}</span>
        <i ref={iRef}></i>
      </button>
    </>
  );
};

export default GlowButton;
