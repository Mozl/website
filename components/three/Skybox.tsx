import { useThree } from '@react-three/fiber';

let CubeTextureLoader;
const Skybox = () => {
  CubeTextureLoader = require('three').CubeTextureLoader;
  const urls = [
    'cubemap/posx.jpg',
    'cubemap/negx.jpg',
    'cubemap/posy.jpg',
    'cubemap/negy.jpg',
    'cubemap/posz.jpg',
    'cubemap/negz.jpg'
  ];

  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load(urls);
  scene.background = texture;
  return null;
};

export default Skybox;
