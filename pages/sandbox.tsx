import React from 'react';
import Model from '../components/Model';
import ModelViewer from '../components/ModelViewer';
import { Controls } from 'react-three-gui';
import Sphere from '../components/Sphere';
import Skybox from '../components/Skybox';
import EnvMapSphere from '../components/EnvMapSphere';

const Sandbox: React.FC = () => {
  const urls = [
    'cubemap/posx.jpg',
    'cubemap/negx.jpg',
    'cubemap/posy.jpg',
    'cubemap/negy.jpg',
    'cubemap/posz.jpg',
    'cubemap/negz.jpg'
  ];
  return (
    <>
      <div className="three">
        {typeof window !== 'undefined' && (
          <Controls.Provider>
            <ModelViewer includeGui={true}>
              {/* <Model modelPath="/react-logo-3d-3.glb" /> */}
              {/* <Sphere /> */}
              <EnvMapSphere />
              <Skybox urls={urls} />
            </ModelViewer>
            <Controls />
          </Controls.Provider>
        )}
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
