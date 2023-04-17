import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
// internal imports
import { ColorPicker, TexturePicker } from '..';
import { PrimaryButton } from '../../ui';
import { state } from '../../../store/store';
import { styles } from '../../../styles';
import { slideAnimation } from '../../../utils/motion';

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence mode='wait'>
        <div className={`${styles.padding} flex flex-col justify-evenly items-center gap-5 z-30 h-screen`}>
          <motion.div 
          {...slideAnimation('down')} 
          key={`${snap.customizer}`}
          className=' flex flex-col gap-10'>
            <TexturePicker />
            <ColorPicker />
          </motion.div>
          <motion.div {...slideAnimation('up')} className='flex items-center justify-center w-full'>
            <PrimaryButton
              type={'button'}
              text={'Go Back'}
              color={styles.accent}
              bgColor={styles.primaryFade}
              className={'lg:w-[calc((60%-30px)/2)] sm:w-[calc((100%-30px)/2)] w-full z-30 backdrop-blur-sm'}
              handleClick={() => (state.customizer = false)}
            />
          </motion.div>
        </div>
    </AnimatePresence>
  );
};

export default Customizer;
