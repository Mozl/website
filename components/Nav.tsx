import React, { useState } from 'react';
import { colours } from '../theme';
import { useSelector, useDispatch } from 'react-redux';
import MenuLogo from '../components/MenuLogo';
import ActiveLink from '../components/ActiveLink';
import { toggleMenu } from '../redux/actions/menuActions';
import SiteLogo from '../components/SiteLogo';
import ModelViewer from './ModelViewer';
import Model from './Model';

interface RootState {
  isMenuOpen: {
    isMenuOpen: boolean;
  };
}

const Nav = () => {
  const isMenuOpen = useSelector((state: RootState) => state.isMenuOpen);
  const [ishovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const onToggleMenu = () => dispatch(toggleMenu());
  return (
    <>
      <nav className="nav">
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="header-logo">
          <ActiveLink href="/">
            {ishovered ? (
              <ModelViewer>
                <Model scale={[8, 8, 8]} shouldRotate modelPath="pink-logo-3d-5.glb" />
              </ModelViewer>
            ) : (
              <SiteLogo />
            )}
          </ActiveLink>
        </div>
        <div className="link-wrapper">
          <ActiveLink href="/cv">
            <div className="cv">CV</div>
          </ActiveLink>
          <ActiveLink href="/about">
            <div className="about">About Me</div>
          </ActiveLink>
          <MenuLogo isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
        </div>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          font-family: 'Raleway', sans-serif;
          font-weight: 500;
          min-height: 10vh;
          align-items: center;
          justify-content: space-between;
          color: ${colours.white};
          padding: clamp(1rem, 3vmax, 1.5rem) clamp(1rem, 10vmin, 10rem);
          position: relative;
          z-index: 3;
          font-size: 24px;
        }
        .header-logo {
          font-size: 40px;
          cursor: pointer;
          height: 60px;
          width: 100px;
        }
        a:active,
        .header-logo:active {
          transform: scale(0.95);
        }
        .projects:hover,
        .cv:hover,
        .about:hover {
          color: ${colours.orange};
        }
        .link-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
        .projects,
        .cv,
        .about {
          padding-left: 24px;
        }
        @media only screen and (max-width: 550px) {
          nav {
            padding: 20px 24px;
          }
          .menu {
            visibility: visible;
          }
          .projects,
          .cv,
          .about {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
