// external imports
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
// internal imports
import { fadeIn, textVariant } from '../../utils/helpers/motion';
import { github, logo } from '../../common/assets';
import { projects } from '../../common/constants';
import { SectionWrapper } from '../../hoc';
import { styles } from '../../styles';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[400px] w-full parallax-effect-img hover:shadow-primary'
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={800}
        transitionSpeed={1500}
        tiltReverse={true}
      >
        <div className='relative w-full h-[230px] inner-element'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl shadow-xl'
          />
        </div>

        <div className='mt-5 inner-element'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>

          <p className='mt-2 sm:h-40 text-secondary text-[14px]'>
            {description}
          </p>
        </div>

        <div className='mt-4 flex justify-between items-center inner-element'>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          <div className='flex card-img_hover z-20'>
            <button
              type='button'
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-11 h-11 mr-4 rounded-full flex justify-center items-center cursor-pointer sm:hover:scale-90 ease duration-300'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </button>

            <button
              type='button'
              onClick={() => window.open(live_demo_link, '_blank')}
              className='black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer sm:hover:scale-90 ease duration-300'
            >
              <img
                src={logo}
                alt='demo'
                className='w-1/2 h-1/2 object-contain'
              />
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects<span style={{color:'#915eff'}}>.</span></h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The projects in my portfolio provide real-world examples of my skills
          and experience. Each project is accompanied by a brief description, as
          well as links to code repositories and live demos. They demonstrate my
          ability to effectively manage projects, work with diverse
          technologies, and solve complex problems.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects', 0.1, false);
