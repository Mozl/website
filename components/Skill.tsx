import React, { FC } from 'react';
import { colours } from '../theme';

interface Props {
  name: string;
  description: string;
  id: number;
  image: string;
}

const Skill: FC<Props> = ({ skill, id }) => {
  return (
    <>
      <div key={id} className={`skill-${id}`}>
        <span className="skillName">{skill.name}</span>
        <div className="slider">
          <div className="subSkills">
            {skill?.subSkills &&
              skill.subSkills.map((subskill, index) => {
                return (
                  <div key={index} className="subSkill">
                    {subskill}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <style jsx>{`
       div[class*='skill-'] {
          display: flex;
          font-size: 176px;
          font-size: clamp(1em, 11vw, 13em);
          font-weight: 800;
          align-items: center;
          color: ${colours.white};
          position: relative;
          z-index: 0;
          padding: 0 40px;
        }
        .slider {
          display: flex;
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          transform-origin: 0 100%;
          transform: scaleY(0);
          z-index: -1;
          background-color: ${colours.lightBlue};
          justify-content: center;
          align-items: center;
          padding: 0 40px;
        }
        .subSkills {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          color: white;
          font-size: 60px;
          font-weight: 400;
          opacity: 0;
        }
        @media only screen and (max-width: 1024px) {
          .slider,
          .subskills {
            display: none;
          }
        }
        div[class*='skill-']:hover > .slider {
          animation: scale-up 0.2s ease-in forwards;
        }
        div[class*='slider']:hover > .subSkills {
          animation: fade-in 0.07s 0.1s ease-in forwards;
        }
        @keyframes scale-up {
          to {
            transform: scaleY(1);
            z-index: 1;
          }
        }
        @keyframes fade-in {
          to {
            opacity: 1;
          }
        }
      }`}</style>
    </>
  );
};

export default Skill;
