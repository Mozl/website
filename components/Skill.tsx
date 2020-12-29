import React, { FC } from 'react';
import { colours } from '../theme';

interface Props {
  skill: {
    title: string;
    images: {
      large: string;
      small: string;
    };
    description: string;
  };
}

const Skill: FC<Props> = ({ skill }) => {
  return (
    <>
      <div className="wrapper">
        <img src={`${skill.images.large}`} alt={`${skill.title} icon`} />
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
          font-size: 48px;
          font-weight: 700;
          margin: 20px 0;
        }
        .description {
          font-size: 24px;
          font-family: 'Raleway', sans-serif;
        }
        @media only screen and (max-width: 550px) {
          .title {
            font-size: 36px;
          }
          .description {
            font-size: 18px;
          }
          img {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </>
  );
};

export default Skill;
