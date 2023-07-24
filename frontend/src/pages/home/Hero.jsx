// external imports
import { motion, AnimatePresence } from 'framer-motion';
// internal imports
import { ComputerCanvas, HeroContent } from '../../components';
import { useActiveSection } from '../../utils/hooks/useActiveSection';
import { fadeAnimation } from '../../utils/helpers/motion';

const Hero = () => {
  const activeSection = useActiveSection();
  return (
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <section className='relative w-full h-screen mx-auto' data-section='hero'>
        <AnimatePresence mode={'wait'}>
          <HeroContent key={'heroContent'} />
        </AnimatePresence>
        <motion.div {...fadeAnimation} className={`absolute top-[0px] w-full h-[100%]`}>
          <div className='max-w-full h-full mx-auto'>
            <ComputerCanvas 
              frameloop={activeSection && activeSection === 'hero' ? 'always' : 'demand'}
              enableZoom={true}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
