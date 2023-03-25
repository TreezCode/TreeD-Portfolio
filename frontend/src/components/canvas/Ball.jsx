// external imports
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  useTexture,
  View,
  ScrollControls,
  Scroll,
  PresentationControls,
  Preload,
} from '@react-three/drei';
// internal imports
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1}>
      <mesh castShadow receiveShadow scale={2.75} dispose={true}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#95a1f1'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} // mirror icons
          flatShading
          map={decal}
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = (props) => {
  const eventSource = props.eventSource;
  const views = props.views;
  const technologies = props.technologies;
  const viewsPopulated = props.viewsPopulated;

  return (
    <Canvas
      eventSource={eventSource}
      className='canvas'
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ScrollControls damping={4} pages={0}>
          <Scroll>
            {viewsPopulated &&
              technologies.map((tech, i) => (
                <View key={i} track={views.current[i]}>
                  <Common />
                  <PresentationControls
                    global
                    // snap
                    // zoom={0.7}
                    // rotation={[0, -Math.PI / 50, 0]}
                    // polar={[0, Math.PI / 2]}
                    // azimuth={[-Math.PI / 2, Math.PI / 2]}
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                  >
                    <Ball imgUrl={tech.icon} />
                  </PresentationControls>
                </View>
              ))}
          </Scroll>
        </ScrollControls>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

const Common = () => {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
      <pointLight position={[-10, -5, 10]} color='#915eff' />
    </>
  );
};

export default BallCanvas;
