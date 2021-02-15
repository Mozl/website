import React, { useRef, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import SpinningMesh from '../components/SpinningMesh';
import { toggleMenu } from '../redux/actions/menuActions';
import { Canvas, useLoader } from 'react-three-fiber';
import { useFrame } from 'react-three-fiber';

interface RootState {
  isMenuOpen: {
    isMenuOpen: boolean;
  };
}

let GLTFLoader;
function Model(props) {
  GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;
  const group = useRef();
  const gltf = useLoader(GLTFLoader, '/pink-logo-3d-2.glb');
  const mesh = useRef<THREE.Mesh>();
  useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    // <group ref={group} {...props} dispose={null}>
    //   <mesh
    //     material={gltf.materials.lambert2SG}
    //     geometry={gltf.nodes.Object_3.geometry}
    //     scale={[0.03, 0.03, 0.03]}
    //     material-color=""
    //   />
    //   <mesh material={gltf.materials.lambert2SG} geometry={gltf.nodes.Object_4.geometry} material-color="red" />
    // </group>
    <mesh receiveShadow ref={mesh}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
}

const Sandbox: React.FC = () => {
  const isMenuOpen = useSelector((state: RootState) => state.isMenuOpen);
  const dispatch = useDispatch();
  const onToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      {/* <Nav isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      <Menu isMenuOpen={isMenuOpen} /> */}
      <div className="three">
        <Canvas shadowMap colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          <group>
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              <shadowMaterial attach="material" opacity={0.3} />
            </mesh>
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </group>

          {/* <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} /> */}
          {/* <SpinningMesh position={[-2, 1, -5]} /> */}
          {/* <SpinningMesh position={[5, 1, -2]} /> */}
        </Canvas>
      </div>
      <style jsx>{`
        .three {
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Sandbox;
