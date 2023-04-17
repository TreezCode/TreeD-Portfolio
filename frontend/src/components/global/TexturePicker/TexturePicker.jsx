// external imports
import { useSnapshot } from 'valtio';
// internal imports
import { state } from '../../../store/store';
import { textures } from '../../../utils/threeMaterialEdit';

const TexturePicker = () => {
  const snap = useSnapshot(state);

  const handleTextureChange = (texture) => {
    if (texture === 'darkwood') {
      state.items[snap.current && snap.current.name].currentTexture = textures.darkwood;
      // setCurrentTexture(textures.darkwood);
    } else if (texture === 'lightwood') {
      // setCurrentTexture(textures.lightwood);
    } else if (texture === 'shinymetal') {
      // setCurrentTexture(textures.shinymetal);
    } else if (texture === 'marble') {
      // setCurrentTexture(textures.marble);
    }
  };

  return (
    <div className='texture-picker flex items-center justify-end gap-5'>
      <button onClick={() => handleTextureChange('darkwood')}>Dark Wood</button>
      <button onClick={() => handleTextureChange('lightwood')}>Light Wood</button>
      <button onClick={() => handleTextureChange('shinymetal')}>Shiny Metal</button>
      <button onClick={() => handleTextureChange('marble')}>Marble</button>
    </div>
  );
};

export default TexturePicker;
