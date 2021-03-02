import React from 'react';
import { useFrame, useThree } from 'react-three-fiber';

let CubeCamera, WebGLCubeRenderTarget, RGBFormat, LinearMipmapLinearFilter;

const EnvMapSphere = () => {
  CubeCamera = require('three').CubeCamera;
  WebGLCubeRenderTarget = require('three').WebGLCubeRenderTarget;
  RGBFormat = require('three').RGBFormat;
  LinearMipmapLinearFilter = require('three').LinearMipmapLinearFilter;

  const { scene, gl } = useThree();

  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter
  });

  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 100, 0);
  scene.add(cubeCamera);
  useFrame(() => cubeCamera.update(gl, scene));
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <torusKnotGeometry attach="geometry" args={[8, 0.6, 300, 20, 11, 20]} />
        <meshBasicMaterial attach="material" envMap={cubeCamera.renderTarget.texture} color="white" />
      </mesh>
    </>
  );
};

export default EnvMapSphere;
