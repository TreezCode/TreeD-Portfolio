import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// Considered HOC because it is a function that will be returning another function
const SectionWrapper = (Component, idName, viewport, extra, className) =>
  function HOC() {
    return (
      <motion.section
        data-section={idName} // intersection observer api (section tracking)
        variants={staggerContainer()} // animate
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: viewport}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 ${className ? className : ''}`}
      >
        <span className={extra ? `hash-span-extra`: 'hash-span'} id={idName} > 
            &nbsp; {/* scroll to invisible span */}
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
