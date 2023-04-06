// external imports
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
// internal imports
import { CanvasLoader } from '../global';
import { Computer } from './models/Computer';

// Define the ComputersCanvas component, which displays the 3D model in a canvas with orbit controls
const ComputersCanvas = () => {
  // Define a state variable to track whether the user is on a mobile device or not
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    // Init value of `isMobile`
    setIsMobile(mediaQuery.matches);
    // Define a callback to handle changes to the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Add the callback as a listener when the component is mounted
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      // Remove the callback as a listener when the component is unmounted
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  // Return a Canvas component with orbit controls and the Computers component inside a Suspense component for loading
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      shadows
      camera={{ fov: 30, position: [15, 2, 5], rotation: [0, 0, 0] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <pointLight intensity={0.75} color='#804dee' />
        <spotLight
          position={[-20, 50, 10]}
          color='#804dee'
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minZoom={1}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
