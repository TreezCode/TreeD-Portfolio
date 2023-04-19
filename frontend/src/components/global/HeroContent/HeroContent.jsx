// external imports
import { motion } from 'framer-motion';
// internal imports
import { state } from '../../../store/store';
import { heroContent } from '../../../common/constants';
import { useTyped } from '../../../utils/useTyped';
import { slideAnimation } from '../../../utils/motion';
import { PrimaryButton } from '../../ui';
import { styles } from '../../../styles';

const HeroContent = () => {
  const { headTextRef, subTextRef } = useTyped(heroContent);
  return (
    <>
      <motion.div {...slideAnimation('left')} className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-4`}>
        <div className='flex flex-col justify-center items-center mt-2 z-20'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-60 violet-gradient' />
        </div>
        <div className='w-full flex flex-col gap-2 z-20'>
          <div className='typed-container'>
            <span className={`${styles.heroHeadText} text-white`} ref={headTextRef}/>
          </div>
          <div className='typed-container'>
            <span className={`${styles.heroSubText} mt-2`} ref={subTextRef} />
          </div>
        </div>
      </motion.div>

      <motion.div {...slideAnimation('up')} className={`${styles.paddingX} absolute sm:bottom-24 bottom-5 w-full flex justify-center`}>
        <PrimaryButton
          type={'button'}
          text={'Customize It'}
          color={styles.accent}
          bgColor={styles.primaryFade}
          className={'lg:w-[calc((60%-30px)/2)] sm:w-[calc((100%-0px)/2)] w-full backdrop-blur-sm z-20'}
          handleClick={() => (state.customizer = true)}
        />
      </motion.div>

      <motion.div {...slideAnimation('up')} className='absolute w-full flex justify-center sm:bottom-0 bottom-24 hero-mouse'>
        <a href='#about' className='w-full flex justify-center backdrop-blur-sm bg-primaryFade py-1 z-20'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center p-2'>
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
  );
};

export default HeroContent;
