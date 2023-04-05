// external imports
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
// internal imports
import { ComputersCanvas } from '../../components/canvas';
import { heroContent } from '../../common/constants';
import { styles } from '../../styles';

const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const subTextRef = useRef(null);
  const headTextRef = useRef(null);
  // Create reference to store the Typed instance itself
  const typedSubText = useRef(null);
  const typedHeadText = useRef(null);

  useEffect(() => {
    const subOptions = {
      strings: heroContent.subText,
      typeSpeed: 40,
      backSpeed: 40,
      startDelay: 2500,
      backDelay: 1500,
      loop: true,
      loopCount: Infinity,
    };
    const headOptions = {
      strings: heroContent.headText,
      typeSpeed: 50,
      showCursor: false,
    };
    typedSubText.current = new Typed(subTextRef.current, subOptions);
    typedHeadText.current = new Typed(headTextRef.current, headOptions);

    return () => {
      // destroy Typed instance during cleanup to prevent memory leaks
      typedSubText.current.destroy();
      typedHeadText.current.destroy();
    };
  }, []);

  return (
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <section className='relative w-full h-screen mx-auto' data-section='hero'>

        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-start gap-4`}>
          <div className='flex flex-col justify-center items-center mt-5 z-40'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-60 violet-gradient' />
          </div>
          <div className='z-40 min-w-[75%] max-w-xl'>
            <h1 className={`${styles.heroHeadText} text-white`}>
              <span ref={headTextRef} />
            </h1>
            <div className='typed-container w-full'>
              <span className={`${styles.heroSubText} mt-2 w-full`} ref={subTextRef} />
            </div>
          </div>
        </div>

        <div className={`${styles.paddingX} absolute xs:top-[300px] top-[270px] w-full xs:h-[60%] h-[40%]`}>
          <ComputersCanvas />
        </div>

        <div className='absolute xs:bottom-6 bottom-24 w-full flex justify-center items-center hero-mouse'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>

      </section>
    </div>
  );
};

export default Hero;
