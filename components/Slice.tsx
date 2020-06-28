import React, { FC } from 'react';
import Project from './Project';
import { colours } from '../theme';

interface Props {
  name: string;
  description: string;
}

const Slice: FC<Props> = () => {
  return (
    <>
      <section>
        <h2>Project 1</h2>
        <Project id={1} name="project1" description="description" image={''} />
      </section>
      <style jsx>{`
        section {
          background: linear-gradient(to bottom, black 70%, grey 100%);
          width: 100%;
          text-align: center;
        }
        h2 {
          color: ${colours.white};
          font-size: 40px;
        }
      `}</style>
    </>
  );
};

export default Slice;
