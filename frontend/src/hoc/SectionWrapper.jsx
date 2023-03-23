import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// Considered HOC because it is a function that will be returning another function

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()} //animate
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName} > 
            &nbsp; {/* scroll to invisible span */}
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;