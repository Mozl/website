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
        <ActiveLink href="/projects">
          <div className="projects">projects</div>
        </ActiveLink>
        <ActiveLink href="/cv">
          <div className="cv">cv</div>
        </ActiveLink>
        <ActiveLink href="/about">
          <div className="about">about me</div>
        </ActiveLink>
        {screenSize === 'mobile' && <MenuLogo isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />}
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          font-weight: 200;
          min-height: 10vh;
          align-items: center;
          justify-content: space-between;
          color: ${colours.white};
          padding: 20px 142px;
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
            padding: 0px 24px;
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
