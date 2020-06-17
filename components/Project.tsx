import React, { FC } from 'react';

interface Props {
  name: string;
  description: string;
}

const Project: FC<Props> = ({ name, description }) => {
  return (
    <>
      <div className="container">
        <div className="inner"></div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <style jsx>{`
        .container {
          color: white;
        }
      `}</style>
    </>
  );
};

export default Project;
