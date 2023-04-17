import { useEffect, useRef } from 'react';

import './MenuIcon.css';

const MenuIcon = ({ color, active, className }) => {
  const ref = useRef();

  useEffect(() => {
    const toggleElement = ref.current;
    active
      ? toggleElement.classList.add('open')
      : toggleElement.classList.remove('open');
  }, [active]);
    
  return (
    <div ref={ref} className={`menu-icon ${className}`}>
      <span style={{ background: color }}></span>
      <span style={{ background: color }}></span>
      <span style={{ background: color }}></span>
      <span style={{ background: color }}></span>
    </div>
  );
};

export default MenuIcon;
