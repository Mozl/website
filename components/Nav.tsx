import Link from 'next/link';
import { colours } from '../theme';
import MenuLogo from '../components/MenuLogo';
import ActiveLink from '../components/ActiveLink';
import SiteLogo from '../components/SiteLogo';

interface Props {
  onToggleMenu: () => void;
  isMenuOpen: {
    isMenuOpen: boolean;
  };
  screenSize?: string;
}

const Nav = ({ isMenuOpen, onToggleMenu, screenSize }: Props) => {
  return (
    <>
      <nav className="nav">
        <div className="header-logo">
          <Link href="/">
            <SiteLogo screenSize={screenSize} />
          </Link>
        </div>
        <ActiveLink href="/projects">
          <div className="projects">projects</div>
        </ActiveLink>
        <ActiveLink href="/cv">
          <div className="cv">cv</div>
        </ActiveLink>
        <ActiveLink href="/about">
          <div className="about">about me</div>
        </ActiveLink>
        {typeof window !== 'undefined' && window.innerWidth <= 550 && (
          <MenuLogo isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
        )}
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          min-height: 10vh;
          align-items: center;
          justify-content: space-between;
          color: ${colours.white};
          padding: 20px 40px;
          position: relative;
          z-index: 3;
          font-size: 24px;
        }
        .header-logo {
          font-size: 40px;
          cursor: pointer;
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
