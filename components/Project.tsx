import React, { FC } from 'react';

interface Props {
  name: string;
  description: string;
  id: number;
}

const Project: FC<Props> = ({ name, description, id }) => {
  return (
    <>
      <div className={`project-${id}`}>
        <div className={`overlay-${id}`}>
          <h2>
            {name} - {id}
          </h2>
          <p>{description}</p>
        </div>
      </div>
      <style jsx>{`
        div[class*='project-'] {
          height: 300px;
          width: 400px;
          border-radius: 18px;
        }
        .project-${id} {
          grid-row: ${id + 1} / ${id + 3};
          grid-column-start: ${id + 1};
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          position: relative;
        }
        .project-${id}:hover > .overlay-${id} {
          animation: slide-up 0.1s linear forwards;
        }
        .project-${id}:hover::before {
          animation: blur-darken 0.1s linear forwards;
        }
        .project-${id + 1} {
          grid-row: 2 / 4;
          grid-column-start: 2;
          background: blue;
        }
        .project-${id + 2} {
          grid-row: 3 / 5;
          grid-column-start: 3;
          background: blue;
        }
        .overlay-${id} {
          position: relative;
          transform: translateY(240px);
          height: 80%;
          padding: 20px;
        }
        p {
          margin-block-start: 0;
          margin-block-end: 0;
          background-color: transparent;
          font-size: 20px;
        }
        .project-${id}::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/sounds.png');
          background-position: left 0px bottom -5px;
          background-size: cover;
          filter: brightness(100%) blur(0);
        }
        @keyframes slide-up {
          to {
            transform: translateY(0px);
          }
        }
        @keyframes blur-darken {
          to {
            filter: brightness(70%) blur(5px);
          }
        }
      }`}</style>
    </>
  );
};

export default Project;
