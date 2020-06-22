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
        <div className="skill-0-container">
          <div className="skill-0">
            <img className="skill-0-img" src="/skill-logos/react.png"></img>
            <p>
              Some description text askdnklasdnsadkl asldknaskldn kasdlknasdn klasndlknsad askldnasnd klasdnlkasd
              aksdklansd
            </p>
          </div>
        </div>
        <div className="skill-1-container">
          <div className="skill-1">
            <img className="skill-1-img" src="/skill-logos/react.png"></img>
            <p>
              Some description text askdnklasdnsadkl asldknaskldn kasdlknasdn klasndlknsad askldnasnd klasdnlkasd
              aksdklansd
            </p>
          </div>
        </div>
        <div className="skill-2-container">
          <div className="skill-2">
            <img className="skill-2-img" src="/skill-logos/react.png"></img>
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
        .skill-0-container {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;
          justify-self: end;
        }
        .skill-1-container {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        .skill-2-container {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 3;
          grid-row-end: 4;
          justify-self: end;
        }
        .vertical-line {
          border-right: 3px solid white;
          margin: 10px 16px;
          height: 500px;
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 4;
        }
        p {
          color: white;
        }
        .skill-0 {
          width: 300px;
          justify-self: end;
        }
        .skill-1 {
          width: 300px;
        }
        .skill-2 {
          width: 300px;
          justify-self: end;
        }
        .skill-0-img {
          height: 125px;
          width: 125px;
          object-fit: cover;
        }
        .skill-1-img {
          height: 125px;
          width: 125px;
          object-fit: cover;
        }
        .skill-2-img {
          height: 125px;
          width: 125px;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default Skills;
