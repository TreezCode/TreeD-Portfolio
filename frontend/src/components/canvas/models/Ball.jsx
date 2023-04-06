import { Decal, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// If you create a material or color in global space - outside of React Three Fiber's Canvas context
THREE.ColorManagement.enabled = true;
// Create geometries and materials in a global space only ONCE
const geometry = new THREE.IcosahedronGeometry(1, 1);
const material = new THREE.MeshStandardMaterial({
  color: '#95a1f1',
  polygonOffset: false,
  polygonOffsetFactor: '-5',
  flatShading: true,
});

export const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1.25}>
      <mesh
        scale={2}
        dispose={null}
        position={[0, 0.75, 0]}
        geometry={geometry}
        material={material}
      >
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
