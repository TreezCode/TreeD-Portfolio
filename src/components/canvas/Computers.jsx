import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

// Define the Computers component, which displays a 3D model of a desktop computer
const Computers = ({ isMobile }) => {
  // Load the 3D model of the computer using the useGLTF hook
  const computer = useGLTF('./desktop_pc/scene.gltf');

  // Return the computer as a mesh with some lighting and shadow effects
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={0.75} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3, -2] : [0, -3.25, -1.5]}
        rotation={[0, -0.2, -0.05]}
      />
    </mesh>
  );
};

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
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
