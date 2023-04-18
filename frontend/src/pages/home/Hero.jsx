// external imports
import { useSnapshot } from 'valtio';
import { AnimatePresence } from 'framer-motion';
// internal imports
import { Customizer, HeroContent } from '../../components';
import { state } from '../../store/store';

const Hero = () => {
  const snap = useSnapshot(state);
  return (
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <section className='relative w-full h-screen mx-auto' data-section='hero'>
        <AnimatePresence mode={'wait'}>
          {!snap.customizer ? <HeroContent key={'heroContent'} /> : <Customizer key={'customizer'} />}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Hero;
