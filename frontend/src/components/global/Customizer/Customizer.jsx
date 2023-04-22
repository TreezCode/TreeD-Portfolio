// external imports
import { useSnapshot } from 'valtio';
import { motion } from 'framer-motion';
// internal imports
import { slideAnimation } from '../../../utils/helpers/motion';
import { ColorPicker, TexturePicker } from '..';
import { PrimaryButton } from '../../ui';
import { state } from '../../../store';
import { styles } from '../../../styles';

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <div className={`${styles.padding} flex flex-col justify-evenly items-center h-screen z-20`}>

      <motion.div {...slideAnimation('down')} className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto`}>
        <h1 className={`${styles.smallHeadText} text-secondary text-center pb-1 z-1`}>{snap.current && snap.current.name ? snap.current.name : 'Select a PC part'}</h1>
        <div className=' xs:grid xs:grid-cols-2 flex flex-col xs:gap-2 gap-3'>
          <ColorPicker />
          <TexturePicker />
        </div>
      </motion.div>

      <motion.div {...slideAnimation('up')} className={`${styles.paddingX} absolute sm:bottom-24 bottom-5 w-full flex justify-center`}>
        <PrimaryButton
          type={'button'}
          text={'Go Back'}
          color={styles.accent}
          bgColor={styles.primaryFade}
          className={'lg:w-[calc((60%-30px)/2)] sm:w-[calc((100%-30px)/2)] w-full backdrop-blur-sm z-20'}
          handleClick={() => (state.customizer = false)}
        />
      </motion.div>

      <motion.div {...slideAnimation('up')} className='absolute w-full flex justify-center sm:bottom-0 bottom-24 hero-mouse'>
        <a href='#about' className='w-full flex justify-center backdrop-blur-sm bg-primaryFade py-1 z-20'>
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
      
    </div>
  );
};

export default Customizer;
