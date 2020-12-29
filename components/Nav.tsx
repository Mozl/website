import { colours } from '../theme';
import MenuLogo from '../components/MenuLogo';
import ActiveLink from '../components/ActiveLink';
import SiteLogo from '../components/SiteLogo';

interface Props {
  onToggleMenu: () => void;
  isMenuOpen: {
    isMenuOpen: boolean;
  };
}

const Nav = ({ isMenuOpen, onToggleMenu }: Props) => {
  let isClient = typeof window !== 'undefined';
  const screenSize = isClient && window.innerWidth > 550 ? 'desktop' : 'mobile';
  return (
    <>
      <nav className="nav">
        <div className="header-logo">
          <ActiveLink href="/">
            <SiteLogo />
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
          font-weight: 400;
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
