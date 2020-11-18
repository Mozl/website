import ActiveLink from '../components/ActiveLink';
import { colours } from '../theme';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../redux/actions/menuActions';

interface Props {
  isMenuOpen: {
    isMenuOpen: boolean;
  };
}

const Menu = ({ isMenuOpen }: Props) => {
  const dispatch = useDispatch();

  const handleRouteChange = () => {
    isMenuOpen && dispatch(closeMenu());
  };

  Router.events.on('routeChangeStart', handleRouteChange);

  return (
    <>
      <div className="menuOpen">
        <div className="link-container">
          <ActiveLink href="/cv">
            <div className="cv menu-item">CV</div>
          </ActiveLink>
          <ActiveLink href="/about">
            <div className="about menu-item">About Me</div>
          </ActiveLink>
        </div>
      </div>
      <style jsx>{`
        .menuOpen {
          display: flex;
          position: fixed;
          top: 0;
          z-index: 1;
          width: 100%;
          height: 100vh;
          align-items: center;
          justify-content: center;
          transition: clip-path 0.2s ease-in;
          background: ${colours.black};
          clip-path: circle(${isMenuOpen.isMenuOpen ? '1000px' : '0px'} at 92.5% 9.5%);
        }
        a {
          color: ${colours.white};
          text-decoration: none;
          margin: 60px 0;
        }
        .menu-item {
          font-size: 34px;
        }
        .link-container {
          display: flex;
          height: 50%;
          align-items: center;
          justify-content: space-around;
          flex-direction: column;
        }
        @keyframes fadeInAcross {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media only screen and (max-width: 550px) {
          .menu {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default Menu;
