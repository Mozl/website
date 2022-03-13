import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, useAnimations, useScroll } from '@react-three/drei';

const color = new THREE.Color();

export default function Model() {
  const group = useRef();
  const react = useRef();
  const redux = useRef();
  const ts = useRef();
  const node = useRef();
  const arrow = useRef();
  const a = useRef();
  const w = useRef();
  const s = useRef();
  const scrollPosition = useScroll();
  const t = useRef(0);
  const { nodes, materials, animations } = useGLTF('/WebsiteBakedAnimations.gltf');
  const { actions, mixer } = useAnimations(animations, group);
  const [hovered, setHovered] = useState();
  const { viewport } = useThree();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (viewport.width < 3.5) {
      setHovered(true);
    }
  });

  useEffect(() => {
    for (const [key, value] of Object.entries(actions)) {
      value.play();
    }
  }, []);

  useFrame(() => {
    mixer.setTime(
      THREE.MathUtils.lerp(t.current, actions['Action'].getClip().duration * scrollPosition.offset, 0.05) * 19.99
    );
    react.current.material.color.lerp(
      color.set(hovered ? '#00a1e0' : '#507d8f').convertSRGBToLinear(),
      hovered ? 0.1 : 0.05
    );
    ts.current.material.color.lerp(
      color.set(hovered ? '#0A3587' : '#1e2738').convertSRGBToLinear(),
      hovered ? 0.1 : 0.05
    );
    redux.current.material.color.lerp(
      color.set(hovered ? '#764ABC' : '#4d3e66').convertSRGBToLinear(),
      hovered ? 0.1 : 0.05
    );
    node.current.material.color.lerp(
      color.set(hovered ? '#0E4500' : '#21291f').convertSRGBToLinear(),
      hovered ? 0.1 : 0.05
    );
    arrow.current.material.color.lerp(
      color.set(hovered ? '#FF9900' : '#856638').convertSRGBToLinear(),
      hovered ? 0.1 : 0.05
    );
    a.current.material.color.lerp(
      color.set(hovered ? '#383838' : '#737373').convertSRGBToLinear(),
      hovered ? 0.1 : 0.05
    );
    w.current.material.color.lerp(
      color.set(hovered ? '#383838' : '#737373').convertSRGBToLinear(),
      hovered ? 0.1 : 0.05
    );
    s.current.material.color.lerp(
      color.set(hovered ? '#383838' : '#737373').convertSRGBToLinear(),
      hovered ? 0.1 : 0.05
    );
  });

  return (
    <>
      <group ref={group} dispose={null} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <group name="Camera" rotation={[1.13, 0.06, 3.02]}>
          <PerspectiveCamera
            makeDefault
            far={1000}
            near={0.1}
            fov={isMobile ? 90 : 28.41}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <mesh
          name="React"
          geometry={nodes.React.geometry}
          material={materials['Material.007']}
          position={[-0.14, 0.43, 0.28]}
          rotation={[2.1, -0.32, 1.09]}
          scale={[1.65, 1.48, 0.65]}
          ref={react}
        />
        <mesh
          name="Redux"
          geometry={nodes.Redux.geometry}
          material={materials['Material.006']}
          position={[-0.58, 14.25, -6.03]}
          rotation={[Math.PI / 2, 0, -0.86]}
          scale={4.2}
          ref={redux}
        />
        <group name="Typescript" position={[0.11, 6.1, -3.22]} rotation={[-1.07, 0.42, 2.21]} scale={2.74}>
          <mesh ref={ts} geometry={nodes.Typescript_1.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Typescript_2.geometry}>
            <meshStandardMaterial color="#4f4f4e" />
          </mesh>
        </group>
        <mesh
          name="NodeJS"
          geometry={nodes.NodeJS.geometry}
          material={materials['Material.005']}
          position={[-2.57, 11.35, 4.25]}
          rotation={[0.36, 1.36, -0.35]}
          scale={38.09}
          ref={node}
        />
        <mesh
          name="S"
          geometry={nodes.S.geometry}
          material={nodes.S.material}
          position={[4.63, 17.3, 10.69]}
          rotation={[Math.PI / 2, 0, 1.75]}
          scale={67.16}
          ref={s}
        />
        <mesh
          name="Arrow"
          geometry={nodes.Arrow.geometry}
          material={materials['Material.009']}
          position={[5.51, 15.5, 10.69]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={67.16}
          ref={arrow}
        />
        <mesh
          name="A"
          geometry={nodes.A.geometry}
          material={nodes.A.material}
          position={[8.44, 17.21, 10.69]}
          rotation={[Math.PI / 2, 0, -1.75]}
          scale={67.16}
          ref={a}
        />
        <mesh
          name="W"
          geometry={nodes.W.geometry}
          material={nodes.W.material}
          position={[6.48, 24.74, 10.69]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={67.16}
          ref={w}
        />
      </group>
    </>
  );
}

useGLTF.preload('/WebsiteBakedAnimations.gltf');
