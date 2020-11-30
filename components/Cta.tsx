import React, { FC } from 'react';
import { colours } from '../theme';

interface Props {}

const Cta: FC<Props> = () => {
  return (
    <>
      <button className="cta">LET'S CHAT</button>
      <style jsx>{`
        .cta {
          padding: 12px 28px;
          border-radius: 8px;
          background: ${colours.orange};
          color: ${colours.white};
          font-size: 24px;
          border: none;
          font-family: 'Raleway', sans-serif;
          font-weight: 800;
          max-width: 200px;
        }
        @media only screen and (max-width: 1024px) {
        }
      `}</style>
    </>
  );
};

export default Cta;
