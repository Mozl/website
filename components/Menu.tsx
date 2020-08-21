import Link from 'next/link';
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
          <Link href="/projects">
            <a className="projects">projects</a>
          </Link>
          <Link href="/cv">
            <a className="cv">cv</a>
          </Link>
          <Link href="/about">
            <a className="about">about me</a>
          </Link>
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
          font-size: 24px;
          clip-path: circle(${isMenuOpen.isMenuOpen ? '1000px' : '0px'} at 92.5% 9.5%);
        }
        a {
          color: ${colours.white};
          text-decoration: none;
          margin: 40px;
        }
        .link-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
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
