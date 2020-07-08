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
      <div className="container">
        {skills?.map((skill, index) => (
          <Skill key={index} skill={skill} id={index} />
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: auto;
          flex-direction: column;
          width: 100%;
          align-items: center;
          background: ${colours.black};
        }
      `}</style>
    </>
  );
};

export default Skills;
