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
}

const Experience: FC<Props> = ({ experience }) => {
  return (
    <>
      <div className='wrapper'>
        <h3 className='title'>{experience.title}</h3>
        <div className='content'>
          <p className='description'>{experience.description}</p>
          <a href={`${experience.linkUrl}`}>{experience.linkText}</a>
          <img className='image' src={`${experience.image}`} />
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          position: relative;
          color: ${colours.darkBlue};
          text-align: center;
          flex-direction: column;
          align-items: center;
        }
        .content {
          width: 70%;
          border-radius: 8px;
          background: ${colours.darkBlue};

        }
        img {
          width: 110px;
          height: 110px;
        }
        .title {
          position: relative;
          top: 10px;
          font-size: 47px;
          font-weight: 700;
        }
        .description {
          font-size: 24px;
          font-family: 'Raleway', sans-serif;
          
        }
        @media only screen and (max-width: 1024px) {
          
      }`}</style>
    </>
  );
};

export default Experience;
