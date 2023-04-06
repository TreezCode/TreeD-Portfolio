// external imports
import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from '@react-three/drei';
// internal imports
import { CanvasLoader } from '../global';

const Earth = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./planet_1/scene-transformed.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-1.54, -0.06, 0]}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group name='Clouds_1'>
                <mesh name='Object_4' geometry={nodes.Object_4.geometry} material={materials.Clouds}/>
              </group>
              <group name='Planet_2'>
                <mesh name='Object_6' geometry={nodes.Object_6.geometry} material={materials.Planet}/>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('./planet_1/scene-transformed.glb');

const EarthCanvas = () => (
  <Canvas
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
        autoRotate
        enableZoom={true}
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
