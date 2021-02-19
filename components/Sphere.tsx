import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';

const Sphere = () => {
  const light = useRef();
  const { viewport, mouse } = useThree();
  useFrame(() => {
    //@ts-ignore
    light?.current?.position.set(mouse.x * viewport.width, mouse.y * viewport.height, 3);
  });
  return (
    <>
      <pointLight decay={2} intensity={1} ref={light} />
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry attach="geometry" args={[2, 64, 64]} />
        <meshStandardMaterial attach="material" color="white" roughness={0.1} metalness={1} />
      </mesh>
    </>
  );
};

export default Sphere;
