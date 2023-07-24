// external imports
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Center } from '@react-three/drei';
// internal imports
import { Computer } from './Computer';
import { ComputerScene } from './ComputerScene';
import { CanvasLoader } from '../../global';
import { styles } from '../../../styles';

const ComputerCanvas = ({ frameloop, enableZoom, minPolarAngle, maxPolarAngle }) => {
  return (
    <Canvas
      frameloop={frameloop}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 40 }}
      shadows
    >
      <Suspense fallback={null}>
        <Environment preset='night' />
        <ambientLight intensity={0.1} />
        <hemisphereLight intensity={0.25} groundColor='black' />
        <pointLight intensity={0.1} color={styles.accent} />
        <spotLight
          color={styles.accent}
          position={[-20, 50, 10]}
          intensity={0.25}
          penumbra={1}
          castShadow
          shadow-mapSize={1024}
        />
        <OrbitControls
          enableZoom={enableZoom}
          enablePan={false}
          maxDistance={10}
          minDistance={1}
          maxPolarAngle={maxPolarAngle}
          minPolarAngle={minPolarAngle}
        />
        <ComputerScene>
          <Center position={[0, -0.25, 0]} scale={0.3} rotation={[0, 4.75, 0]}>
            <Computer />
          </Center>
        </ComputerScene>  
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
