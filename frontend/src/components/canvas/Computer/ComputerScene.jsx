// external imports
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
// internal imports
import { useMediaQuery } from '../../../utils/hooks/useMediaQuery';

export const ComputerScene = ({ children }) => {
  const group = useRef();
  const isMobile = useMediaQuery();

  useFrame((state, delta) => {
    let targetPosition; 
    let targetScale;

    isMobile 
      ? (targetPosition = [0, -0.1, 0], targetScale = 0.45)
      : (targetPosition = [0, 0, 0], targetScale = 0.6);

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
