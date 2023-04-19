// external imports
import { useSnapshot } from 'valtio';
import { Hud, Environment, OrthographicCamera } from '@react-three/drei';
// internal imports
import { state } from '../../../store/store';
import { textures } from '../../../utils/threeMaterialEdit';
import { styles } from '../../../styles';

const TexturePicker = () => {
  const snap = useSnapshot(state);
  const handleTextureChange = (texture) => {
    if (texture === 'darkwood') {
      state.items[snap.current && snap.current.name].metalness = 0.5;
      state.items[snap.current && snap.current.name].roughness = 1;
      state.items[snap.current && snap.current.name].currentTexture = textures.darkwood;
    } else if (texture === 'lightwood') {
      state.items[snap.current && snap.current.name].metalness = 0.25;
      state.items[snap.current && snap.current.name].roughness = 1;
      state.items[snap.current && snap.current.name].currentTexture = textures.lightwood;
    } else if (texture === 'shinymetal') {
      state.items[snap.current && snap.current.name].metalness = 1;
      state.items[snap.current && snap.current.name].roughness = 0;
      state.items[snap.current && snap.current.name].currentTexture = textures.shinymetal;
    } else if (texture === 'whitemarble') {
      state.items[snap.current && snap.current.name].metalness = 0.5;
      state.items[snap.current && snap.current.name].roughness = 0;
      state.items[snap.current && snap.current.name].currentTexture = textures.whitemarble;
    }
    console.log(snap.current);
    console.log(state);
  };

  return (
    <div className='flex flex-col items-center texture-picker xs:gap-4 gap-2 z-20'>
      <h1 className={`${styles.heroSubText} text-secondary`}>Choose a material</h1>
      <div className='flex items-center justify-center gap-4'>
        <button onClick={() => handleTextureChange('darkwood')}>Dark Wood</button>
        <button onClick={() => handleTextureChange('lightwood')}>Light Wood</button>
        <button onClick={() => handleTextureChange('shinymetal')}>Shiny Metal</button>
        <button onClick={() => handleTextureChange('whitemarble')}>White Marble</button>
      </div>
    </div>
  );
};

const Button = () => {
  
  return (
  <Hud>
    {/* <OrthographicCamera makeDefault position={[0, 0, 2]} zoom={50} />
    <Environment preset="forest" />
    <Button id={0} texture={texture[0]} position={[-5, -4.5, 0]} setSelected={setSelected} />
    <Button id={1} texture={texture[1]} position={[-2.5, -4.5, 0]} roughness={0.2} setSelected={setSelected} />
    <Button id={2} texture={texture[2]} position={[-0, -4.5, 0]} setSelected={setSelected} />
    <Button id={3} texture={texture[3]} position={[2.5, -4.5, 0]} roughness={0.5} setSelected={setSelected} />
    <Button id={4} texture={texture[4]} position={[5, -4.5, 0]} setSelected={setSelected} /> */}
  </Hud>
  );
};

export default TexturePicker;
