// External imports
import { Suspense, useRef, createRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  View,
  PerspectiveCamera,
} from '@react-three/drei';
import { motion } from 'framer-motion';
// Internal imports
import Ball from './canvas/Ball';
import { technologies } from '../common/constants';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import CanvasLoader from './Loader';

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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What tools I build with</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      {/* Render views container and canvas */}
      <div ref={ref} className='tech-container mt-3'>
        <div className='views-container flex flex-row flex-wrap justify-evenly items-center gap-10'>
          {/* Map through views array and render title and div element with ref and technology data */}
          {views.current.map((view, i) => (
            <div key={i}>
              <p className='text-center text-secondary text-[16px]'>
                {technologies[i].name}
              </p>
              <div
                ref={view}
                className='view w-28 h-28 cursor-pointer'
                data-name={technologies[i].name}
              />
            </div>
          ))}
        </div>
        {/* Render Canvas with Suspense component and fallback loader */}
        <Canvas
          eventSource={ref}
          className='canvas'
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            {viewsPopulated &&
              technologies.map((tech, i) => (
                // console.log(views.current[i])
                <View key={i} track={views.current[i]}>
                  <Common />
                  <Ball imgUrl={tech.icon} />
                </View>
              ))}
          </Suspense>

          <Preload all />
        </Canvas>
      </div>
    </>
  );
};

function Common() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[0, 0, 0.05]} />
      <pointLight position={[-10, -10, 10]} color='blue' />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 8]} />
      <OrbitControls enableZoom={false} />
    </>
  );
}

export default SectionWrapper(Tech, '');
