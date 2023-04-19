// external imports
import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef } from 'react';

export const Earth = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./planet/scene-transformed.glb');
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