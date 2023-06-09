// external imports
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
// internal imports
import { experiences } from '../../common/constants';
import { textVariant } from '../../utils/helpers/motion';
import { SectionWrapper } from '../../hoc';
import { styles } from '../../styles';

const ExperienceCard = ({ experience }) => (
  
  <VerticalTimelineElement
    contentStyle={{ background: "#151030", color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon} 
          alt={experience.company_name} 
          className='w-[60%] h-[60%] object-contain'  
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='pb-8'>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>My Experience<span style={{color:'#915eff'}}>.</span></h2>
      </motion.div>

      <div className='empty-20 flex flex-col'>
        <VerticalTimeline className='py-0 vertical-timeline-custom-line'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience', 0.15, false);
