import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ml">
          <a>Machine Learning</a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          display: grid;
          grid-template-columns: repeat(5, 5fr);
          grid-auto-rows: auto;
          grid-gap: 1em;
          align-items: center;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Nav;
