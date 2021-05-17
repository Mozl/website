import React, { FC, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

interface Props {
  position: Vector3;
  args?: any;
}

const SpinningMesh: FC<Props> = ({ position, args }) => {
  const mesh = useRef();
  // @ts-ignore
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <>
      <mesh castShadow={true} position={position} ref={mesh}>
        <boxBufferGeometry attach="geometry" args={args} />
        <meshStandardMaterial attach="material" color="blue" />
      </mesh>
      <style jsx>{``}</style>
    </>
  );
};

export default SpinningMesh;
