// external imports
import { motion } from 'framer-motion';
// internal imports
import { styles } from '../../styles';
import { SectionWrapper } from '../../hoc';
import { slideIn, textVariant } from '../../utils/motion';
import { useActiveSection } from '../../utils/useActiveSection';
import { ContactForm, EarthCanvas } from '../../components';

const Contact = () => {
  const activeSection = useActiveSection();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact<span style={{color:'#915eff'}}>.</span></h2>
      </motion.div>

      <div className='xl:grid xl:grid-cols-2 gap-10'>
        <div className='xl:order-2 flex justify-center items-center'>
          <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-full md:h-[550px] h-[350px] w-full '>
            <EarthCanvas 
              frameloop={activeSection && activeSection === 'contact' ? 'always' : 'demand'} 
              autoRotate={activeSection && activeSection === 'contact' ? true : false} 
            />
          </motion.div>
        </div>
        <div>
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className='flex-[0.75] bg-primaryFade md:p-16 sm:p-10 xs:p-8 p-6 mt-2 rounded-2xl border border-accentFade100 border-l-accent backdrop-blur-sm'
            // style={{ backdropFilter: 'blur(5px)' }}
          >
            <p className={styles.sectionHeadText}>Let's chat<span style={{color:'#915eff'}}>.</span></p>
            <p className={styles.sectionSubText}>Send a message</p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact', 0.25, true);
