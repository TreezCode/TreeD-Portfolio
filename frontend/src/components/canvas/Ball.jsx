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
  Environment,
  ContactShadows,
  Preload,
} from '@react-three/drei';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1}>
      <mesh scale={2} dispose={null} position={[0, 0.75, 0]}>
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
          opacity={0.65}
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
      <Suspense fallback={null}>
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
                    polar={[-Math.PI / 2, Math.PI / 2]}
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
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
      <directionalLight position={[0, 0, 0.05]} intensity={0.15} />
      <pointLight position={[-10, -5, 10]} intensity={0.5} color='#915eff' />
      <ContactShadows position={[0, -1.65, 0]} opacity={0.15}  blur={2.5} color='#915eff' />
    </>
  );
};

export default BallCanvas;
