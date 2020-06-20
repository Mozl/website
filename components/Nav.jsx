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
                stroke-width="10"
                stroke-linecap="square"
              />
            </svg>
          </Link>
        </div>
        <Link href="/about">
          <a className="about">About</a>
        </Link>
        <Link href="/ml">
          <a>Machine Learning</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          display: grid;
          padding: 2rem;
          grid-template-columns: 10% 1fr 1fr 10%;
          min-height: 10vh;
          align-items: center;
          justify-items: center;
          color: white;
        }
        .header-logo {
          grid-column: 1/2;
          font-size: 40px;
        }
        a {
          font-size: 24px;
          color: white;
          text-decoration: none;
        }
        a:hover {
          color: red;
        }
      `}</style>
    </>
  );
};

export default Nav;
