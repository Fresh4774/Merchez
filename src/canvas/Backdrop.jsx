import { useRef } from 'react';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

function Backdrop() {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={50}
      alphaTest={0.65}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[1, 3, -0.14]}
    >
      <RandomizedLight
        amount={5}
        radius={7}
        intensity={0.55}
        ambient={0.38}
        position={[5, 5, -10]}
      />

      <RandomizedLight
        amount={4}
        radius={10}
        intensity={0.25}
        ambient={0.45}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

export default Backdrop;
