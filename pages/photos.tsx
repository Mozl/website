import Link from 'next/link';

const Photos: React.SFC = () => {
  return (
    <>
      <div>Photos</div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export default Photos;
