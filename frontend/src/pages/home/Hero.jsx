// external imports
import { motion } from 'framer-motion';
// internal imports
import { ComputersCanvas } from '../../components/canvas';
import { useTyped } from '../../utils/useTyped';
import { heroContent } from '../../common/constants';
import { styles } from '../../styles';

const Hero = () => {
  const { headTextRef, subTextRef } = useTyped(heroContent);

  return (
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <section className='relative w-full h-screen mx-auto' data-section='hero'>

        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-4`}>
          <div className='flex flex-col justify-center items-center mt-2 z-40'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-60 violet-gradient' />
          </div>
          <div className='z-40 w-full'>
            <div className='typed-container'>
              <span className={`${styles.heroHeadText} text-white`} ref={headTextRef} />
            </div>
            <div className='typed-container'>
              <span className={`${styles.heroSubText} mt-2`} ref={subTextRef} />
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
