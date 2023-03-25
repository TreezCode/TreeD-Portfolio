import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5 z-40'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-60 violet-gradient' />
        </div>

        <div className='z-40'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className='text-[#915eff]'>Joey</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            I develop immersive 3D visuals, <br className='sm:block hidden' />
            intuitive user interfaces and dynamic web applications.
          </p>
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
  );
};

export default Hero;
