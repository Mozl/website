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
        <span className="vertical-line"></span>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          background-color: black;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
        .vertical-line {
          display: inline-block;
          border-right: 3px solid white;
          margin: 10px 20px;
          height: 500px;
        }
      `}</style>
    </>
  );
};

export default Skills;
