import React, { FC } from 'react';
import { useSelector } from 'react-redux';

interface RootState {
  skills: Skill[];
}

interface Skill {
  name: string;
  description: string;
  image: string;
}

const Skills: FC = () => {
  const skills = useSelector((state: RootState) => state.skills[0]);
  const { name, description, image } = skills;

  return (
    <>
      <div className="container">
        <div className="skill-container-0">
          <div className="skill-0">
            <img className="skill-img-0" loading="lazy" height="125px" width="125px" src={image}></img>
            <span>{name}</span>
            <p>{description}</p>
          </div>
        </div>
        <div className="skill-container-1">
          <div className="skill-1">
            <img className="skill-img-1" loading="lazy" height="125px" width="125px" src={image}></img>
            <span>{name}</span>
            <p>{description}</p>
          </div>
        </div>
        <div className="skill-container-2">
          <div className="skill-2">
            <img className="skill-img-2" loading="lazy" height="125px" width="125px" src={image}></img>
            <span>{name}</span>
            <p>{description}</p>
          </div>
        </div>
        <span className="vertical-line"></span>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 2% 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          background-color: rgb(18, 18, 18);
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
        .trans {
          filter: opacity(1);
        }
        .vertical-line {
          border-right: 3px solid white;
          margin: 0 16px;
          align-self: stretch;
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 5;
        }
        p,
        span {
          color: white;
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
