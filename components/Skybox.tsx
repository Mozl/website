import { useThree } from '@react-three/fiber';

let CubeTextureLoader;
const Skybox = ({ urls }: { urls: string[] }) => {
  CubeTextureLoader = require('three').CubeTextureLoader;

  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load(urls);
  scene.background = texture;
  return null;
};

export default Skybox;
