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
    // init model position
    let targetPosition = [15, 2, 5];
    if (!snap.customizer) {
      isMobile 
        ? targetPosition = [15, 2, 5]
        : targetPosition = targetPosition        
    } else {
      isMobile
        ? targetPosition = [10, 1, 5]
        : targetPosition = [10, 1, 5]
    };

    // set camera position
    // easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set model rotation on pointer move
    easing.dampE(group.current.rotation, [/* state.pointer.y */ 0, state.pointer.x / 5, 0], 0.25, delta);
  });

  return (
    <group
      ref={group}
      scale={isMobile ? 0.4 : 0.6}
      position={isMobile ? [0, -0.4, 0] : [0, -0.25, 0]}
    >
      {children}
    </group>
  );
};
