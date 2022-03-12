import React, { FC, useRef, Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Skill from '../components/Skill';
import { colours } from '../theme';
import { Canvas } from '@react-three/fiber';
import { Loader, Environment, ScrollControls } from '@react-three/drei';
import WebsitePushedDown2 from '../components/three/WebsitePushedDown2';

interface RootState {
  skills: [];
}

const Skills: FC = () => {
  const skills = useSelector((state: RootState) => state.skills);

  return (
    <>
      <div className="outer">
        <div className="three">
          <Canvas
            shadows
            raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
          >
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
              <ScrollControls pages={3}>
                <WebsitePushedDown2 />
              </ScrollControls>
              <Environment preset="city" />
            </Suspense>
          </Canvas>
          <Loader />
        </div>
        <div className="wrapper">
          <div className="header-container">
            <span className="header">SKI</span>
            <span className="header">LLS</span>
          </div>
          <div className="skillsContainer">
            {skills?.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .outer {
          position: relative;
        }
        .three {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: ${colours.black};
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
        }
        .wrapper {
          display: flex;
          position: relative;
          font-family: 'Playfair Display', serif;
          flex-direction: column;
          padding: 0 clamp(50px, 1rem + 6vw, 150px) 160px clamp(50px, 1rem + 6vw, 150px);
          background: transparent;
          justify-content: center;
          color: ${colours.white};
          text-align: center;
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
          pointer-events: none;
        }
        .header-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          font-weight: 900;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${colours.white};
          letter-spacing: 3.5rem;
          word-break: break-all;
          padding: 0 150px 30px 150px;
        }
        .header {
          font-size: 130px;
        }
        .skillsContainer {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 50px;
          flex-direction: row;
        }
        @media only screen and (max-width: 550px) {
          .header-container {
            flex-direction: column;
            padding: 0 0 30px 0;
            letter-spacing: 1rem;
          }
          .wrapper {
            clip-path: polygon(0 0, 100% 0, 100% 97%, 0% 100%);
            padding: 0 10px 70px 10px;
          }
          .header {
            font-size: 80px;
          }
        }
      `}</style>
    </>
  );
};

export default Skills;
