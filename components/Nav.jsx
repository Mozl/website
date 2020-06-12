import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="header-logo">Logo</div>
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
