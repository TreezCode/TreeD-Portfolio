// external imports
import { Suspense, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, Preload } from '@react-three/drei';
import { TextureLoader } from 'three';
// internal imports
import { Computer } from './Computer';
import { CanvasLoader } from '../../global';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import { textures } from '../../../utils/threeMaterialEdit';
import { styles } from '../../../styles';

// Define the ComputerCanvas component, which displays the 3D model in a canvas with orbit controls
const ComputerCanvas = () => {
  const isMobile = useMediaQuery();
  const [currentTexture, setCurrentTexture] = useState(textures.marble);
  const [
    colorMap,
    displacementMap,
    metalnessMap,
    normalGlMap,
    normalDxMap,
    roughnessMap,
  ] = useLoader(TextureLoader, currentTexture);

  // const handleTextureChange = (texture) => {
  //   if (texture === 'darkwood') {
  //     setCurrentTexture(textures.darkwood);
  //   } else if (texture === 'lightwood') {
  //     setCurrentTexture(textures.lightwood);
  //   } else if (texture === 'shinymetal') {
  //     setCurrentTexture(textures.shinymetal);
  //   } else if (texture === 'marble') {
  //     setCurrentTexture(textures.marble);
  //   }
  // };

  // Return a Canvas component with orbit controls and the Computers component inside a Suspense component for loading
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 40, position: [15, 2, 5], rotation: [0, 0, 0] }}
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
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
        <Computer
          isMobile={isMobile}
          colorMap={colorMap}
          displacementMap={displacementMap}
          metalnessMap={metalnessMap}
          normalMap={normalGlMap}
          normalDxMap={normalDxMap}
          roughnessMap={roughnessMap}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
