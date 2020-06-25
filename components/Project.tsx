import React, { FC } from 'react';

interface Props {
  name: string;
  description: string;
}

const Project: FC<Props> = ({ name, description }) => {
  return (
    <>
      <div className="container"></div>
      <style jsx>{`
        .container {
          color: white;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-rows: repeat(4, 1fr)
          grid-column-gap: 30px;
          

        }
      `}</style>
    </>
  );
};

export default Project;
