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
  const first = index % 2 === 0 || index === 0;
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
          position: relative;
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
          flex-direction: ${first ? 'row' : 'row-reverse'};
          padding: 50px 60px;
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
          padding: 70px;
        }
        img {
          max-width: 400px;
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
          position: relative;
          top: 22px;
          left: ${first ? '30px' : 'auto'};
          right: ${first ? 'auto' : '30px'};
          font-size: 73px;
          font-weight: 700;
          color: ${colours.orange};
          align-self: ${first ? 'flex-start' : 'flex-end'};
        }
        @media only screen and (max-width: 1024px) {
        }
      `}</style>
    </>
  );
};

export default Experience;
