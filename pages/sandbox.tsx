import React from 'react';
import Model from '../components/Model';
import ModelViewer from '../components/ModelViewer';
import Sphere from '../components/Sphere';
import Skybox from '../components/Skybox';
import EnvMapSphere from '../components/EnvMapSphere';

const Sandbox: React.FC = () => {
  return (
    <>
      <div className="three">
        {typeof window !== 'undefined' && (
          <>
            <ModelViewer>
              <EnvMapSphere />
              <Skybox />
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
