import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { services } from '../../common/constants';
import { fadeIn, textVariant } from '../../utils/helpers/motion';
import { SectionWrapper } from '../../hoc';
// fadeIn : direction > type > delay > duration

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      perspective={800}
      transitionSpeed={1500}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview<span style={{color:'#915eff'}}>.</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a passionate software developer, I love blending technical expertise
        with creativity to craft intuitive applications that provide a seamless
        user experience. I thrive in collaborative environments and am driven to
        find efficient solutions to complex problems. I believe in the
        importance of continuous learning and staying up-to-date with the latest
        trends and technologies to streamline efficiency.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about', 0.15, false); // wrap component. 1st arg: component, 2nd arg: id name, 3rd arg: viewport amount
