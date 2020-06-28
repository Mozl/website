import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Skill from '../components/Skill';
import { colours } from '../theme';

interface RootState {
  skills: Skill[];
}

interface Skill {
  name: string;
  description: string;
  image: string;
  id: number;
}

const Skills: FC = () => {
  const skills = useSelector((state: RootState) => state.skills);

  return (
    <>
      <div className="container">
        {skills &&
          skills.map(({ name, description, image }, index) => (
            <Skill name={name} description={description} image={image} id={index} />
          ))}
        <span className="vertical-line"></span>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 2% 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          background-color: ${colours.black};
          width: 100%;
          justify-content: center;
          align-items: center;
        }
        .skill-container-0 {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;
          justify-self: end;
          margin: 20px;
        }
        .skill-container-1 {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
          margin: 20px;
        }
        .skill-container-2 {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 3;
          grid-row-end: 4;
          justify-self: end;
          margin: 20px;
        }
        .vertical-line {
          border-right: 3px solid ${colours.white};
          margin: 10px 16px;
          align-self: stretch;
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 5;
        }
        p,
        span {
          color: ${colours.white};
        }
        div[class*='skill-'] {
          display: flex;
          width: 300px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        img[class*='skill-'] {
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default Skills;
