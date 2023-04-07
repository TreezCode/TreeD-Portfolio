// external imports
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
// internal imports
import { CanvasLoader } from '../global';
import { Earth } from './models/Earth';

const EarthCanvas = ({ frameloop, autoRotate }) => (
  <Canvas
    frameloop={frameloop}
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 20,
      near: 0.1,
      far: 200,
      position: [1, 3, 6],
    }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        autoRotate={autoRotate}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
      <Preload all />
    </Suspense>
  </Canvas>
);

export default EarthCanvas;
