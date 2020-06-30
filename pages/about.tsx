import Link from 'next/link';
import Nav from '../components/Nav';
import { colours } from '../theme';

const About: React.FC = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <div>About</div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <style jsx>{`
        .container {
          background-color: ${colours.black};
        }
      `}</style>
    </>
  );
};

export default About;
