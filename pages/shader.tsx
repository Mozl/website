import WaveyImage from '../components/three/WaveyImage';
// import WobblySphere from '../components/three/WobblySphere';

const Shader: React.FC = () => {
  return (
    <>
      <WaveyImage imagePath="/louis.png" />
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

export default Shader;
