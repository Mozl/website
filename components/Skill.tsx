import React, { FC } from 'react';
import { colours } from '../theme';

interface Props {
  skill: {
    title: string;
    image: string;
    description: string;
  };
}

const Skill: FC<Props> = ({ skill }) => {
  return (
    <>
      <div className="wrapper">
        <img src={`${skill.image}`} />
        <h3 className="title">{skill.title}</h3>
        <p className="description">{skill.description}</p>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          color: ${colours.white};
          text-align: center;
          flex-direction: column;
          align-items: center;
        }
        img {
          width: 110px;
          height: 110px;
        }
        .title {
          font-size: clamp(34px, 3vmin, 48px);
          font-weight: 700;
          margin: 20px 0;
        }
        .description {
          font-size: 24px;
          font-size: clamp(34px, 3vmin, 48px);
          font-family: 'Raleway', sans-serif;
        }
      `}</style>
    </>
  );
};

export default Skill;
