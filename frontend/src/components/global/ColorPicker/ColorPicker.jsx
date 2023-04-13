import { useSnapshot } from 'valtio';
import { CirclePicker } from 'react-color';
// internal imports
import { state } from '../../../store/store';
import { styles } from '../../../styles';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  console.log('State: ',state.items[snap.current && snap.current.name]);
  // console.log(snap.current && snap.current);
  const colors = ["#915eff", "#00ffff", "#2196f3", "#F652A0", "#ff0000","#ffffff", "#333333", "#030303"]
  return (
    <div className='picker relative flex flex-col items-end -mb-20 z-10'>
      <h1 className={`${styles.smallHeadText} text-secondary select-none pb-1`}>&nbsp;{snap.current && snap.current.name}</h1>
      <CirclePicker
        width=''
        color={snap.items[snap.current && snap.current.material]}
        onChangeComplete={(color) => {
          (state.items[snap.current && snap.current.name].color=color.hex)
        }}
        colors={colors}
        circleSize={20}
        circleSpacing={8}
      />
    </div>
  )
};

export default ColorPicker;