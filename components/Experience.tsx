import React, { FC } from 'react';
import { colours } from '../theme';

interface Props {
  experience: {
    title: string;
    image: string;
    description: string;
    linkText: string;
    linkUrl: string;
  };
  index: number;
}

const Experience: FC<Props> = ({ experience, index }) => {
  return (
    <>
      <div className="wrapper">
        <div className="title">{experience.title}</div>
        <div className="content">
          <div className="text">
            <p className="description">{experience.description}</p>
            <a href={`${experience.linkUrl}`}>{experience.linkText}</a>
          </div>
          <img className="image" src={`${experience.image}`} />
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          color: ${colours.white};
          text-align: center;
          flex-direction: column;
          align-items: center;
          font-family: 'Raleway', sans-serif;
          margin: 0 9rem 3rem 9rem;
        }
        .limit {
          display: flex;
          flex-direction: column;
          padding: 0 5rem;
        }
        .content {
          display: flex;
          flex-direction: ${index % 2 === 0 || index === 0 ? 'row' : 'row-reverse'};
          padding: 30px;
          border-radius: 30px;
          background: ${colours.darkBlue};
          align-items: center;
        }
        .description {
          margin: 0 0 60px 0;
        }
        .text {
          display: flex;
          flex-direction: column;
          text-align: left;
          font-size: 24px;
          padding: 80px;
        }
        img {
          width: 450px;
          height: 300px;
          border-radius: 8px;
        }
        a {
          color: inherit;
          font-size: inherit;
        }
        a:hover {
          color: ${colours.orange};
        }
        .title {
          font-size: 73px;
          font-weight: 700;
          color: ${colours.orange};
          align-self: ${index % 2 === 0 || index === 0 ? 'start' : 'end'};
        }
        @media only screen and (max-width: 1024px) {
        }
      `}</style>
    </>
  );
};

export default Experience;
