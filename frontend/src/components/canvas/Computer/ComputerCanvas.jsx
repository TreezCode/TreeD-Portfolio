// external imports
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Center } from '@react-three/drei';
// internal imports
import { Computer } from './Computer';
import { CanvasLoader } from '../../global';
import { useMediaQuery } from '../../../utils/hooks/useMediaQuery';
import { styles } from '../../../styles';

const ComputerCanvas = () => {
  const isMobile = useMediaQuery();
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 40, position: [15, 2, 5], rotation: [0, 0, 0] }}
      shadows
    >
      {/* <Suspense fallback={<CanvasLoader />}> */}
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
          enableZoom={true}
          enablePan={false}
          maxDistance={30}
          minDistance={1}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Center position={isMobile ? [0, -0.4, 0] : [0, -0.25, 0]}>
          <Computer isMobile={isMobile} />
        </Center>
      {/* </Suspense> */}
    </Canvas>
  );
};

export default ComputerCanvas;
