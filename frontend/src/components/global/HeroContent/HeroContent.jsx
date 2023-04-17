// external imports
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
// internal imports
import { state } from '../../../store/store';
import { useTyped } from '../../../utils/useTyped';
import { heroContent } from '../../../common/constants';
import { ComputerCanvas } from '../../canvas';
import { PrimaryButton } from '../../ui';
import { styles } from '../../../styles';
import { fadeAnimation, slideAnimation } from '../../../utils/motion';

const HeroContent = () => {
  const { headTextRef, subTextRef } = useTyped(heroContent);
  const snap = useSnapshot(state);
  return (
    <AnimatePresence mode='wait'>
        <>
          <motion.div 
          {...slideAnimation('left')} 
          key={`${snap.customizer}`}
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-4`}>
            <div className='flex flex-col justify-center items-center mt-2 z-40'>
              <div className='w-5 h-5 rounded-full bg-[#915eff]' />
              <div className='w-1 sm:h-80 h-60 violet-gradient' />
            </div>
            <div className='z-40 w-full flex flex-col gap-2'>
              <div className='typed-container'>
                <span className={`${styles.heroHeadText} text-white`} ref={headTextRef}/>
              </div>
              <div className='typed-container'>
                <span className={`${styles.heroSubText} mt-2`} ref={subTextRef} />
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeAnimation} className={`absolute xs:top-[280px] top-[220px] w-full xs:h-[70%] h-[65%]`}>
            <div className='max-w-7xl h-full mx-auto'>
              <ComputerCanvas />
            </div>
          </motion.div>

          <motion.div {...slideAnimation('up')} className={`${styles.paddingX} absolute sm:bottom-24 bottom-5 w-full flex justify-center`}>
            <PrimaryButton
              type={'button'}
              text={'Customize It'}
              color={styles.accent}
              bgColor={styles.primaryFade}
              className={'lg:w-[calc((60%-30px)/2)] sm:w-[calc((100%-0px)/2)] w-full z-30 backdrop-blur-sm'}
              handleClick={() => (state.customizer = true)}
            />
          </motion.div>

          <motion.div {...slideAnimation('up')} className='absolute w-full flex justify-center sm:bottom-1 bottom-24 hero-mouse z-20'>
            <a href='#about'>
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                  animate={{ y: [0, 24, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className='w-3 h-3 rounded-full bg-secondary mb-1'
                />
              </div>
            </a>
          </motion.div>
        </>
    </AnimatePresence>
  );
};

export default HeroContent;