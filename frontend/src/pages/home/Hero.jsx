// external imports
import { useSnapshot } from 'valtio';
import { motion, AnimatePresence } from 'framer-motion';
// internal imports
import { ComputerCanvas, Customizer, HeroContent } from '../../components';
import { state } from '../../store/store';
import { fadeAnimation } from '../../utils/motion';

const Hero = () => {
  const snap = useSnapshot(state);
  return (
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <section className='relative w-full h-screen mx-auto' data-section='hero'>
        <AnimatePresence mode={'wait'}>
          {!snap.customizer ? <HeroContent key={'heroContent'} /> : <Customizer key={'customizer'} />}
        </AnimatePresence>
        <motion.div {...fadeAnimation} className={`absolute top-[0px] w-full h-[100%]`}>
          <div className='max-w-full h-full mx-auto'>
            <ComputerCanvas />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
