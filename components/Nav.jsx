import { useState } from 'react';
import Link from 'next/link';
import { colours } from '../theme';
import MenuLogo from '../components/MenuLogo';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <Link href="/projects">
          <a className="projects">projects</a>
        </Link>
        <Link href="/cv">
          <a className="cv">cv</a>
        </Link>
        <Link href="/about">
          <a className="about">about me</a>
        </Link>
        <MenuLogo isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
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
          z-index: 2;
        }
        .header-logo {
          font-size: 40px;
          cursor: pointer;
        }
        a:active,
        .header-logo:active {
          transform: scale(0.95);
        }
        a {
          font-size: 24px;
          color: ${colours.white};
          text-decoration: none;
        }
        a:hover {
          color: ${colours.orange};
        }
        .current {
          color: ${colours.orange};
        }
        @media only screen and (max-width: 550px) {
          nav {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            padding: 20px 24px;
          }
          .header-logo {
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
