import { useRef, useState, useEffect } from 'react';
import './GlowButton.css';

const GlowButton = ({ type, text, href, color, bgColor, onClick, loading }) => {
  const btnRef = useRef();
  const iRef = useRef();
  const [isTouch, setIsTouch] = useState(false);

  const handlePointerEvent = ({ pointerType }) => {
    if (pointerType === 'touch') {
      setIsTouch(true);
      setTimeout(() => {
        setIsTouch(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const buttonElement = btnRef.current;
    const iElement = iRef.current;

    if (isTouch) {
      buttonElement.classList.add('active-btn-touch');
      iElement.classList.add('active-btn-i-touch');
    } else {
      buttonElement.classList.remove('active-btn-touch');
      iElement.classList.remove('active-btn-i-touch');
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
        onPointerEnter={(e) => handlePointerEvent(e)}
        onClick={onClick}
      >
        <span>{text}</span>
        <i ref={iRef}></i>
      </button>
    </>
  );
};

export default GlowButton;
