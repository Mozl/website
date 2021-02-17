import React from 'react';
import Model from '../components/Model';
import ModelViewer from '../components/ModelViewer';
import { Controls } from 'react-three-gui';
import Circle from '../components/Circle';

interface RootState {
  isMenuOpen: {
    isMenuOpen: boolean;
  };
}

const Sandbox: React.FC = () => {
  return (
    <>
      <div className="three">
        {typeof window !== 'undefined' && (
          <Controls.Provider>
            <ModelViewer includeGui={true}>
              <Model modelPath="/pink-logo-3d-5.glb" />
              {/* <Circle /> */}
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
