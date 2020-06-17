import React, { FC } from 'react';
import Project from './Project';

interface Props {
  name: string;
  description: string;
}

const Slice: FC<Props> = () => {
  return (
    <>
      <section>
        <h2>Project 1</h2>
        <Project name="project1" description="description" />
      </section>
      <style jsx>{`
        section {
          background: linear-gradient(to bottom, black 70%, grey 100%);
          width: 100%;
          text-align: center;
        }
        h2 {
          color: white;
          font-size: 40px;
        }
      `}</style>
    </>
  );
};

export default Slice;
