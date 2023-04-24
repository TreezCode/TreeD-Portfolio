// external imports
import { useSnapshot } from 'valtio';
// internal imports
import { state } from '../../../store';
import { styles } from '../../../styles';

const TexturePicker = () => {
  const snap = useSnapshot(state);
  const handleTextureChange = (texture) => {
    if (snap.current) {
      switch (texture) {
        case 'smoothmetal':
          state.items[snap.current.name].currentTexture = 'smoothmetal';
          state.current.currentTexture = 'smoothmetal';
          break;
        case 'whitemarble':
          state.items[snap.current.name].currentTexture = 'whitemarble';
          state.current.currentTexture = 'whitemarble';
          break;
        case 'darkwood':
          state.items[snap.current.name].currentTexture = 'darkwood';
          state.current.currentTexture = 'darkwood';
          break;
        case 'lightwood':
          state.items[snap.current.name].currentTexture = 'lightwood';
          state.current.currentTexture = 'lightwood';
          break;
        case 'reset':
          state.items[snap.current.name].currentTexture = 'reset';
          state.current.currentTexture = 'reset';
          break;
        default:
          state.current.currentTexture = null;
          break;
      }
    }
  };

  return (
    <div className='texture-picker flex flex-col items-center texture-picker xs:gap-4 gap-2 z-20'>
      <h1 className={`${styles.heroSubText} text-secondary`}>Choose a material</h1>
      <div className='flex items-center justify-center gap-4'>
        <button onClick={() => handleTextureChange('darkwood')}>Dark Wood</button>
        <button onClick={() => handleTextureChange('lightwood')}>Light Wood</button>
        <button onClick={() => handleTextureChange('smoothmetal')}>Smooth Metal</button>
        <button onClick={() => handleTextureChange('whitemarble')}>White Marble</button>
        <button onClick={() => handleTextureChange('reset')}>Original Material</button>
      </div>
    </div>
  );
};


// import { Hud, Environment, OrthographicCamera, useTexture } from '@react-three/drei';
// import { useLoader, useFrame } from '@react-three/fiber';
// import { TextureLoader, MathUtils } from 'three';
// import { useRef, useState } from 'react'
// export const MaterialMenu = ({ onTextureChange }) => {
//   return (
//   <Hud>
//     <OrthographicCamera makeDefault position={[1.25, 0, 2]} zoom={40} />
//     <Environment preset="night" />
//     <Button id={0} position={[-2.5, -6, 0]} onTextureChange={onTextureChange} />
//     <Button id={1} position={[0, -6, 0]} onTextureChange={onTextureChange} />
//     <Button id={2} position={[2.5, -6, 0]} onTextureChange={onTextureChange} />
//     <Button id={3} position={[5, -6, 0]} onTextureChange={onTextureChange} />
//   </Hud>
//   );
// };


// const Button = ({ id, position, onTextureChange, map, normalMap, roughnessMap, metalnessMap }) => {
//   const ref = useRef()
//   const [hovered, setHovered] = useState(false);

//   useFrame((_, delta) => {
//     ref.current.scale.y = ref.current.scale.x = ref.current.scale.z = MathUtils.lerp(ref.current.scale.y, hovered ? 1.5 : 1, 0.25)
//     hovered && ref.current.rotateY(delta * 5)
//   })
  
//   return (
//     <mesh ref={ref} position={position} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onPointerDown={() => setSelected(id)}>
//       <sphereGeometry />
//       <meshStandardMaterial map={map} metalnessMap={metalnessMap} normalMap={normalMap} roughnessMap={roughnessMap} envMapIntensity={1.5} />
//     </mesh>
//   )
// };

export default TexturePicker;
