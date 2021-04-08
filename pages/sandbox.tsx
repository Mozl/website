import React from 'react';
import Model from '../components/Model';
import ModelViewer from '../components/ModelViewer';
import Sphere from '../components/Sphere';
import Skybox from '../components/Skybox';
import EnvMapSphere from '../components/EnvMapSphere';
import dynamic from 'next/dynamic';

const PortraitCoin = dynamic(() => import('../components/PortraitCoin'), { ssr: false });

const Sandbox: React.FC = () => {
  const urls = [
    'cubemap/posx.jpg',
    'cubemap/negx.jpg',
    'cubemap/posy.jpg',
    'cubemap/negy.jpg',
    'cubemap/posz.jpg',
    'cubemap/negz.jpg'
  ];
  return (
    <>
      <div>
        {/* <a rel="ar" href="/3d-assets/3mats-smear.usdz">
          Click here to view AR asset
        </a> */}
      </div>
      <div className="three">
        <>
          <ModelViewer>
            <PortraitCoin />
            {/* <Model modelPath="/3d-assets/out.glb" /> */}
            {/* <Sphere /> */}
            {/* <EnvMapSphere /> */}
            {/* <Skybox urls={urls} /> */}
          </ModelViewer>
        </>
      </div>
      <style jsx>{`
        .three {
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Sandbox;
