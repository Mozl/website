import React from 'react';
import Model from '../components/Model';
import ModelViewer from '../components/ModelViewer';
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
          <>
            <ModelViewer>
              <Model modelPath="/3DLouisText.gltf" />
              {/* <Sphere /> */}
              {/* <EnvMapSphere />
              <Skybox urls={urls} /> */}
            </ModelViewer>
          </>
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
