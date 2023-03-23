import { Decal, Float, useTexture } from '@react-three/drei';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1}>
      <mesh castShadow receiveShadow scale={2.75} dispose={true}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
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

export default Ball;
