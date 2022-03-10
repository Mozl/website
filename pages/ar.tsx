import AR from '../components/three/AR';

const ARPage: React.FC = () => {
  return (
    <>
      <AR />
      <style jsx>{`
        .three {
          height: 100vh;
          background: linear-gradient(125deg, #f98734, #66a0fb);
        }
        .wave {
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default ARPage;
