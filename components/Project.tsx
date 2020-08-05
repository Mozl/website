import React from 'react';
import { colours } from '../theme';

interface Props {
  name: string;
  description: string;
  id: number;
  image: string;
  url: string;
}

const Project = ({ name, description, id, image, url }: Props) => {
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
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          cursor: pointer;
          margin: 30px 0;
        }
        h3 {
          font-size: 50px;
          margin: 0 0 20px 0;
        }
        h3:hover {
          color: ${colours.orange};
        }
        img {
          grid-column: 1;
          object-fit: cover;
          object-position: left;
          width: 100%;
          height: auto;
          min-height: 300px;
          transition: transform .7s;
        }
        img:hover {
          transform: scale(1.3);
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
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
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
