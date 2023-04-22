// external imports
import { useSnapshot } from 'valtio';
import { CirclePicker } from 'react-color';
// internal imports
import { state } from '../../../store';
import { styles } from '../../../styles';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const colors = ["#915eff", "#00ffff", "#2196f3", "#F652A0", "#ff0000","#ffffff", "#333333", "#030303"]
  return (
    <div className='color-picker flex flex-col items-center text-center xs:gap-4 gap-2 z-20'>
      <h1 className={`${styles.heroSubText} text-secondary`}>Choose a color</h1>
      <CirclePicker
        width=''
        color={snap.items[snap.current && snap.current.materialName]}
        onChangeComplete={(color) => {
          (state.items[snap.current && snap.current.name].color=color.hex)
        }}
        colors={colors}
        circleSize={24}
        circleSpacing={8}
        className='justify-center items-center text-center'
      />
    </div>
  )
};

export default ColorPicker;