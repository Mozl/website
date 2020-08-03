import React, { FC } from 'react';
import { colours } from '../theme';

interface Props {
  name: string;
  description: string;
  id: number;
  image: string;
  url: string;
}

const Project: FC<Props> = ({ name, description, id, image, url }) => {
  return (
    <>
      <a className="nostyle" href={url}>
        <div className={`project-${id}`}>
          <div className="image-container">
            <img className="image" src={image}></img>
          </div>
          <div className="text-container">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </a>
      <style jsx>{`
        div[class*='project-'] {
          display: flex;
          height: 600px;
          width: 100%;
          align-items: center;
        }
        h3 {
          font-size: 50px;
          margin: 0 0 20px 0;
        }
        h3:hover {
          cursor: pointer;
          color: ${colours.orange};
        }
        img {
          object-fit: cover;
          width: 100%;
          height: auto;
          transition: transform .7s;
        }
        img:hover {
          transform: scale(1.3);
          cursor: pointer;
        }
        a.nostyle:link {
          text-decoration: inherit;
          color: inherit;
          cursor: auto;
        }
        a.nostyle:visited {
          text-decoration: inherit;
          color: inherit;
          cursor: auto;
        }
        .text-container {
          display: flex;
          flex-direction: column;
          padding: 0 70px;
          justify-content: center;
        }
        .image-container {
          overflow: hidden;
          border-radius: 18px;
        }
        @media only screen and (max-width: 550px) {
          div[class*='project-'] {
            flex-direction: column;
          }
          .text-container {
            padding: 20px 0;
          }
          h3 {
            font-size: 30px;
          }
        }
        p {
          margin: 0;
          background-color: transparent;
          font-size: 20px;
        }
      }`}</style>
    </>
  );
};

export default Project;
