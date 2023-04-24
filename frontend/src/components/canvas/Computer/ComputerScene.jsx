// external imports
import { useRef } from 'react';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
// internal imports
import { state } from '../../../store';
import { useMediaQuery } from '../../../utils/hooks/useMediaQuery';

export const ComputerScene = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);
  const isMobile = useMediaQuery();

  useFrame((state, delta) => {
    let targetPosition; 
    let targetScale;

    if (!snap.customizer) {
      isMobile 
        ? (targetPosition = [0, 0, 0], targetScale = 0.4)
        : (targetPosition = [0, 0, 0], targetScale = 0.6);
    } else {
      isMobile
        ? (targetPosition = [0, -0.15, 0], targetScale = 0.8)
        : (targetPosition = [0, -0.25, 0], targetScale = 1);
    }

    // set camera position
    easing.damp3(group.current.position, targetPosition, 0.25, delta);

    // set camera scale
    easing.damp3(group.current.scale, targetScale, 0.25, delta);

    // set model rotation on pointer move
    easing.dampE(group.current.rotation, [/* state.pointer.y / 10 */ 0, state.pointer.x / 5, 0], 0.25, delta);
  });

  return (
    <group scale={0.6} ref={group}>
      {children}
    </group>
  );
};
