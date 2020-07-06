import Link from 'next/link';
import { colours } from '../theme';

const Menu = () => {
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
          width: 100%;
          height: 100vh;
          align-items: center;
          justify-content: center;
          background: black;
          font-size: 24px;
          clip-path: circle(0px at 92.5% 9.5%);
        }
        .open {
          display: flex;
          animation: expand 0.5s ease-out forwards;
        }
        .closed {
          animation: contract 0.5s ease-out forwards;
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
        @keyframes expand {
          to {
            clip-path: circle(1000px at 92.5% 9.5%);
          }
        }
        @keyframes contract {
          from {
            clip-path: circle(1000px at 92.5% 9.5%);
          }
          to {
            clip-path: circle(0px at 92.5% 9.5%);
          }
        }
      `}</style>
    </>
  );
};

export default Menu;
