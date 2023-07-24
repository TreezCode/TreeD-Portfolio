// external imports
import { Decal, Float, useTexture } from '@react-three/drei';
// internal imports
import { ballGeometry, ballMaterial } from '../../../utils/helpers/threeMaterialEdit';

export const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1.25}>
      <mesh
        scale={2}
        dispose={null}
        position={[0, 0.75, 0]}
        geometry={ballGeometry}
        material={ballMaterial}
      >
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]} // mirror icons
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};
