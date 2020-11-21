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
        <div className="content">
          <div className="text">
            <div className="title">{experience.title}</div>
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
        }
        .limit {
          display: flex;
          flex-direction: column;
          padding: 0 5rem;
        }
        .content {
          display: flex;
          flex-direction: ${index % 2 || 0 ? 'row-reverse' : 'row'};
          padding: 30px;
          width: 70%;
          border-radius: 8px;
          background: ${colours.darkBlue};
        }
        .text {
          display: flex;
          flex-direction: column;
          text-align: left;
          font-size: 24px;
        }
        img {
          width: 110px;
          height: 110px;
        }
        a {
          color: inherit;
          font-size: inherit;
        }
        a:hover {
          color: ${colours.orange};
        }
        .title {
          position: relative;
          top: -94px;
          font-size: 73px;
          font-weight: 700;
          color: ${colours.orange};
          text-align: ${index % 2 || 0 ? 'right' : 'left'};
        }
        @media only screen and (max-width: 1024px) {
        }
      `}</style>
    </>
  );
};

export default Experience;
