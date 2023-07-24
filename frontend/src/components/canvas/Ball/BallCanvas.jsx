// external imports
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  View,
  PresentationControls,
  ContactShadows,
  Preload,
} from '@react-three/drei';
// internal imports
import { Ball } from './Ball';

const BallCanvas = ({
  eventSource,
  views,
  technologies,
  viewsPopulated,
}) => {
  return (
    <Canvas
      frameloop='always'
      eventSource={eventSource}
      className='canvas'
      style={{ position: 'fixed', top: '0', left: '0' }}
    >
      <Suspense fallback={null}>
        {viewsPopulated &&
          technologies.map((tech, i) => (
            <View key={i} track={views.current[i]}>
              <Common />
              <PresentationControls
                global
                config={{ mass: 2, tension: 500 }}
                snap={{ mass: 4, tension: 1500 }}
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 2, Math.PI / 2]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
              >
                <Ball imgUrl={tech.icon} />
              </PresentationControls>
            </View>
          ))}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

const Common = () => {
  return (
    <>
      <ambientLight intensity={0.15} />
      <spotLight
        position={[-10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={2048}
        castShadow
      />
      <directionalLight position={[0, 0, 0.05]} intensity={0.15} />
      <pointLight position={[-10, -5, 10]} intensity={0.5} color='#915eff' />
      <ContactShadows
        position={[0, -1.65, 0]}
        opacity={0.15}
        blur={2.5}
        color='#915eff'
      />
    </>
  );
};

export default BallCanvas;
