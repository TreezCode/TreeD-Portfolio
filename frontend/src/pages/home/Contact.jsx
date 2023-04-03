// external imports
import { motion } from 'framer-motion';
// internal imports
import { styles } from '../../styles';
import { SectionWrapper } from '../../hoc';
import { slideIn, textVariant } from '../../utils/motion';
import { Form } from '../../components/global';
import { EarthCanvas } from '../../components/canvas';

const Contact = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex justify-center gap-10 my-3'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-primaryFade md:p-16 sm:p-10 xs:p-8 p-6 rounded-2xl border border-accentFade100 border-l-accent'
          style={{ backdropFilter: 'blur(15px)' }}
        >
          <p className={styles.sectionSubText}>Send a message</p>
          <Form />
        
        </motion.div>

        {/* <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div> */}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact', 0.25, true);