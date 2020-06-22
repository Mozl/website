import React, { FC } from 'react';

interface Props {
  name: string;
  description: string;
  image?: string;
}

const Skills: FC<Props> = () => {
  return (
    <>
      <div className="container">
        <div className="skill-container-0">
          <div className="skill-0">
            <img className="skill-img-0" src="/skill-logos/react.png"></img>
            <span>React</span>
            <p>
              Some description text askdnklasdnsadkl asldknaskldn kasdlknasdn klasndlknsad askldnasnd klasdnlkasd
              aksdklansd
            </p>
          </div>
        </div>
        <div className="skill-container-1">
          <div className="skill-1">
            <img className="skill-img-1" src="/skill-logos/react.png"></img>
            <span>Redux</span>
            <p>
              Some description text askdnklasdnsadkl asldknaskldn kasdlknasdn klasndlknsad askldnasnd klasdnlkasd
              aksdklansd
            </p>
          </div>
        </div>
        <div className="skill-container-2">
          <div className="skill-2">
            <img className="skill-img-2" src="/skill-logos/react.png"></img>
            <span>Typescript</span>
            <p>
              Some description text askdnklasdnsadkl asldknaskldn kasdlknasdn klasndlknsad askldnasnd klasdnlkasd
              aksdklansd
            </p>
          </div>
        </div>
        <span className="vertical-line"></span>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 2% 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          background-color: black;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
        .skill-container-0 {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;
          justify-self: end;
          margin: 20px;
        }
        .skill-container-1 {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
          margin: 20px;
        }
        .skill-container-2 {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 3;
          grid-row-end: 4;
          justify-self: end;
          margin: 20px;
        }
        .vertical-line {
          border-right: 3px solid white;
          margin: 0 16px;
          align-self: stretch;
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 5;
        }
        p,
        span {
          color: white;
        }
        div[class*='skill-'] {
          display: flex;
          width: 300px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        img[class*='skill-'] {
          height: 125px;
          width: 125px;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default Skills;
