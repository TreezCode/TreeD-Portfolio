// external imports
import { useRef, useState, useEffect } from 'react';
// internal imports
import { useMediaQuery } from '../../../utils/useMediaQuery';
import './PrimaryButton.css';

const PrimaryButton = ({ type, text, href, color, bgColor, onClick }) => {
  const btnRef = useRef();
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
      button.classList.add('mobile-primary-btn')
      button.classList.remove('desktop-primary-btn')
    } else {
      button.classList.add('desktop-primary-btn')
      button.classList.remove('mobile-primary-btn')
    }
  }, [isMobile])
  
  useEffect(() => {
    const buttonElement = btnRef.current;
    if (animation) {
      buttonElement.classList.add('mobile-primary-btn-active');
    } else {
      buttonElement.classList.remove('mobile-primary-btn-active');
    }
  }, [animation]);

  return (
    <>
      <button
        ref={btnRef}
        className='primary-btn'
        type={type || 'button'}
        href={`#${href}`}
        style={{ '--clr': color, '--bgClr': bgColor }}
        onPointerDown={handlePointerEvent}
        onClick={onClick}
      >
        <span className='flex items-center justify-center'>{text}</span>
      </button>
    </>
  );
};

export default PrimaryButton;
