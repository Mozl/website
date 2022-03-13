import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, useAnimations, useScroll } from '@react-three/drei';

export default function Model() {
  const group = useRef();
  const t = useRef(0);
  const scrollPosition = useScroll();
  // change the path to that of the gltf you've made and put into the public folder
  const { nodes, materials, animations } = useGLTF('/WebsiteBakedAnimations.gltf');
  const { actions, mixer } = useAnimations(animations, group);
  const [hovered, setHovered] = useState();

  useEffect(() => {
    for (const [key, value] of Object.entries(actions)) {
      value.play();
    }
  }, []);

  useFrame(() => {
    // replace 'Action' with the name of your camera animation once its been baked in Blender
    mixer.setTime(
      THREE.MathUtils.lerp(t.current, actions['Action'].getClip().duration * scrollPosition.offset, 0.05) * 19.99
    );
  });

  return (
    <>
      <color attach="background" args={['#121212']} />
      <group ref={group} dispose={null} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        {/* Objects from your scene from the result of gltfjsx, like meshes, cameras and lights go here */}
      </group>
    </>
  );
}

// change the path to that of the gltf you've made and put into the public folder
useGLTF.preload('/WebsiteBakedAnimations.gltf');
