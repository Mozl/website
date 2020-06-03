import Link from 'next/link';

const About: React.FC = () => {
  return (
    <>
      <div>About</div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export default About;
