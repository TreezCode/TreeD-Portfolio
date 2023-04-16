// external imports
import { Suspense } from 'react';
import { Canvas} from '@react-three/fiber';
import { Preload } from '@react-three/drei';
// internal imports
import { Stars } from './Stars';

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        frameloop='always'
        camera={{ position: [0, 0, 1] }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;