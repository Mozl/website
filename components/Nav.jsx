import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="header-logo">
          <Link href="/">
            <svg width="91" height="74" viewBox="0 0 91 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="36.5806" cy="36.5806" r="36.5806" fill="#F46036" />
              <path
                d="M10.8387 9.48386V56.9032L36.1821 30.5048L47.6584 56.9032L66.7856 30.5048L84 56.9032"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="square"
              />
            </svg>
          </Link>
        </div>
        <Link href="/projects">
          <a className="Projects">Projects</a>
        </Link>
        <Link href="/CV">
          <a>CV</a>
        </Link>
        <Link href="/about">
          <a>About Me</a>
        </Link>
        <div className="menu">
          <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="22.4457"
              y1="3.1129"
              x2="3.03215"
              y2="24.5085"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="44.1896"
              y1="17.5075"
              x2="24.7761"
              y2="38.903"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="40.236"
              y1="3.24801"
              x2="7.98537"
              y2="38.7861"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </nav>
      <style jsx>{`
        nav {
          display: grid;
          padding: 1rem;
          grid-template-columns: 10% 1fr 1fr 1fr 10%;
          min-height: 10vh;
          align-items: center;
          justify-items: center;
          color: white;
        }
        .header-logo {
          grid-column: 1/2;
          font-size: 40px;
          cursor: pointer;
        }
        a:active,
        .header-logo:active {
          transform: scale(0.95);
        }
        a {
          font-size: 24px;
          color: white;
          text-decoration: none;
        }
        a:hover {
          color: #f46036;
        }
        .menu {
          visibility: hidden;
        }
        @media (max-width: 650px) {
          .menu {
            visibility: visible;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
