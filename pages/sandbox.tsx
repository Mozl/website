import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Model from '../components/Model';
import ModelViewer from '../components/ModelViewer';
import { toggleMenu } from '../redux/actions/menuActions';
import { Controls } from 'react-three-gui';
import Circle from '../components/Circle';

interface RootState {
  isMenuOpen: {
    isMenuOpen: boolean;
  };
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
        {typeof window !== 'undefined' && (
          <Controls.Provider>
            <ModelViewer includeGui={false}>
              {/* <Model modelPath="/pink-logo-3d-5.glb" /> */}
              <Circle />
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
