import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Skill from '../components/Skill';
import { colours } from '../theme';

interface RootState {
  skills: [];
}

const Skills: FC = () => {
  const skills = useSelector((state: RootState) => state.skills);

  return (
    <>
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
      <style jsx>{`
        .wrapper {
          display: flex;
          font-family: 'Playfair Display', serif;
          flex-direction: column;
          padding: 0 clamp(50px, 5vmax, 150px) 160px clamp(50px, 5vmax, 150px);
          background: ${colours.black};
          justify-content: center;
          color: ${colours.white};
          text-align: center;
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
        }
        .header-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          font-weight: 900;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${colours.white};
          letter-spacing: clamp(1rem, 1.2rem, 3.5rem);
          word-break: break-all;
          padding: 0 clamp(20px, 5vmax, 150px) 30px clamp(20px, 5vmax, 150px);
        }
        .header {
          font-size: 100px;
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
          }
          .wrapper {
            clip-path: polygon(0 0, 100% 0, 100% 97%, 0% 100%);
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
