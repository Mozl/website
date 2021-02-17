import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';

const Circle = () => {
  const light = useRef();
  const { viewport, mouse } = useThree();
  useFrame(() => {
    light.current.position.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 2);
  });
  return (
    <>
      <pointLight decay={2} intensity={1} ref={light} />
      <mesh castShadow>
        <circleBufferGeometry attach="geometry" args={[1, 150]} />
        <meshStandardMaterial attach="material" color="red" />
      </mesh>
    </>
  );
};

export default Circle;
