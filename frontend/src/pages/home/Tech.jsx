// External imports
import { useRef, createRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Internal imports
import { BallCanvas } from '../../components/canvas';
import { technologies } from '../../common/constants';
import { textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import { styles } from '../../styles';

const Tech = () => {
  // Define necessary states and refs
  const ref = useRef(null);
  const views = useRef([]);
  const [viewsPopulated, setViewsPopulated] = useState(false);

  // Populate views ref with createRef()
  useEffect(() => {
    views.current = views.current.slice(0, technologies.length);
    while (views.current.length < technologies.length) {
      views.current.push(createRef());
      setViewsPopulated(true);
    }
  }, [technologies]);

  return (
    <>
      {/* Render section title and subtitle */}
      <motion.div variants={textVariant()} className='pb-8'>
        <p className={styles.sectionSubText}>What tools I build with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      {/* Render views container and canvas */}
      <div ref={ref} className='tech-container relative pt-3'>
        <div className='views-container flex flex-row flex-wrap justify-evenly items-center sm:gap-10 gap-5'>
          {/* Map through views array and render title and div element with ref and technology data */}
          {views.current.map((view, i) => (
            <div key={i}>
              <p className='text-center text-[#915eff] text-[18px]'>
                {technologies[i].name}
              </p>
              <div
                ref={view}
                className='view w-56 h-72 touch-none'
                data-name={technologies[i].name}
              />
            </div>
          ))}
        </div>
        {/* Render BallCanvas with Suspense component and fallback loader */}
        <BallCanvas
          eventSource={ref}
          views={views}
          technologies={technologies}
          viewsPopulated={viewsPopulated}
        />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech', 0.05);
