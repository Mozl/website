import React, { FC } from 'react';
import { colours } from '../theme';

interface Props {}

const Cta: FC<Props> = () => {
  return (
    <>
      <a href="mailto:moselhil@gmail.com" className="cta">
        LET'S CHAT
      </a>
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
          text-decoration: none;
        }
        @media only screen and (max-width: 550px) {
          .cta {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Cta;
