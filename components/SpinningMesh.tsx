import React, { FC, useRef } from 'react';
import { useFrame } from 'react-three-fiber';

interface Props {
  position: number[];
  args?: number[];
}

const SpinningMesh: FC<Props> = ({ position, args }) => {
  const mesh = useRef<THREE.Mesh>();
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
