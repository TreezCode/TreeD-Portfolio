// external imports
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
// internal imports
import { starMaterial } from '../../../utils/threeMaterialEdit';

export const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} dispose={null}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
        material={starMaterial}
      />
    </group>
  );
};
