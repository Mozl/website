import Link from 'next/link';
import { colours } from '../theme';
import MenuLogo from '../components/MenuLogo';
import ActiveLink from '../components/ActiveLink';

interface Props {
  onToggleMenu: () => void;
  isMenuOpen: {
    isMenuOpen: boolean;
  };
}

const Nav = ({ isMenuOpen, onToggleMenu }: Props) => {
  return (
    <>
      <nav className="nav">
        <div className="header-logo">
          <Link href="/">
            <svg width="91" height="74" viewBox="0 0 91 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="36.5806" cy="36.5806" r="36.5806" fill={`${colours.orange}`} />
              <path
                d="M10.8387 9.48386V56.9032L36.1821 30.5048L47.6584 56.9032L66.7856 30.5048L84 56.9032"
                stroke={`${colours.white}`}
                strokeWidth="10"
                strokeLinecap="square"
              />
            </svg>
          </Link>
        </div>
        <ActiveLink href="/projects">
          <a className="projects">projects</a>
        </ActiveLink>
        <ActiveLink href="/cv">
          <a className="cv">cv</a>
        </ActiveLink>
        <ActiveLink href="/about">
          <a className="about">about me</a>
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
        a:hover {
          color: ${colours.orange};
        }
        .current {
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
