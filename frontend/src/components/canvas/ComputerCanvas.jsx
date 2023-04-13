// external imports
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
// internal imports
import { CanvasLoader } from '../global';
import { Computer } from '../models/Computer';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { styles } from '../../styles';

// Define the ComputerCanvas component, which displays the 3D model in a canvas with orbit controls
const ComputerCanvas = () => {
  const isMobile = useMediaQuery();
  // Return a Canvas component with orbit controls and the Computers component inside a Suspense component for loading
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 30, position: [15, 2, 5], rotation: [0, 0, 0] }}
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight 
          intensity={0.1} 
          // color={styles.accent}
        />
        <hemisphereLight 
          intensity={0.25} 
          // groundColor='black' 
        />
        <pointLight 
          intensity={0.25} 
          // color='#804dee' 
        />
        <spotLight
          position={[-20, 50, 10]}
          intensity={0.25}
          angle={0.12}
          penumbra={1}
          castShadow
          shadow-mapSize={1024}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minZoom={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
