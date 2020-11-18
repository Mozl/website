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
        <h2 className='header'>SKILLS</h2>
        <div className="skillsContainer">
          {skills?.map((skill, index) => <Skill key={index} skill={skill} />)}
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          font-family: 'Playfair Display', serif;
          flex-direction: column;
          padding: 0 150px;
          background: ${colours.black};
          justify-content: center;
          color: ${colours.white};
          text-align: center;
        }
        .header {
          font-size: 130px;
          font-weight: 900;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${colours.white};
          letter-spacing: 3.5rem;
        }
        .skillsContainer {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 50px;
          flex-direction: row;
        }
      `}</style>
    </>
  );
};

export default Skills;
