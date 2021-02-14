import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import ThreeD from '../components/ThreeD';
import { colours } from '../theme';
import { toggleMenu } from '../redux/actions/menuActions';
import { Canvas } from 'react-three-fiber';
import { softShadows } from 'drei';

interface RootState {
  isMenuOpen: {
    isMenuOpen: boolean;
  };
}

// softShadows();

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
          </group>

          <ThreeD position={[0, 1, 0]} args={[3, 2, 1]} />
          <ThreeD position={[-2, 1, -5]} />
          <ThreeD position={[5, 1, -2]} />
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
