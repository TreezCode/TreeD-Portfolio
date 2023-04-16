// external imports
import { useSnapshot } from 'valtio';
// internal imports
import { state } from '../../../store/store';
import { textures } from '../../../utils/threeMaterialEdit';
import { styles } from '../../../styles';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import ColorPicker from '../ColorPicker/ColorPicker';

const ComputerMenu = () => {
  const snap = useSnapshot(state);

  const handleTextureChange = (texture) => {
    console.log(snap.items[snap.current.name]);
    if (texture === 'darkwood') {
      // snap.items[snap.current.name].currentTexture = textures.darkwood;
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
    <div className='grid grid-cols-3 place-items-center gap-5 z-30'>
      <div className='texture-picker flex items-center justify-end gap-5'>
        <button onClick={() => handleTextureChange('darkwood')}>
          Dark Wood
        </button>
        <button onClick={() => handleTextureChange('lightwood')}>
          Light Wood
        </button>
        <button onClick={() => handleTextureChange('shinymetal')}>
          Shiny Metal
        </button>
        <button onClick={() => handleTextureChange('marble')}>Marble</button>
      </div>
      <div className='flex items-center justify-center'>
        <PrimaryButton 
          type={'button'}
          text={'Customize'} 
          color={styles.accent}
        />
      </div>
      <ColorPicker />
    </div>
  );
};

export default ComputerMenu;
