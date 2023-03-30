import { useRef, useEffect } from 'react';
import './GlowButton.css'

const GlowButton = ({ text, color, bgColor }) => {
  const ref = useRef();

  useEffect(() => {
    const buttonElement = ref.current;
    console.log(buttonElement);   
  }, []);
  return (
    <>
      <a ref={ref} className='glow-btn' href='#contact' style={{'--clr': color, '--bgClr': bgColor}}>
        <span>{text}</span>
        <i></i>
      </a>
    </>
  );
};

export default GlowButton;
