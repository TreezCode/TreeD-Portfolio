// internal imports
import { useSnapshot } from 'valtio';
import { Customizer, HeroContent } from '../../components';
import { state } from '../../store/store';

const Hero = () => {
  const snap = useSnapshot(state);
  return (
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <section className='relative w-full h-screen mx-auto' data-section='hero'>
        {!snap.customizer ? (
          <HeroContent />
        ) : (
          <Customizer />
        )}
      </section>
    </div>
  );
};

export default Hero;
