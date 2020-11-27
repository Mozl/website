import React, { FC } from 'react';
import { colours } from '../theme';

interface Props {
  testimonial: {
    name: string;
    image: string;
    quote: string;
    company: string;
    position: string;
  };
}

const Testimonial: FC<Props> = ({ testimonial }) => {
  return (
    <>
      <div className="wrapper">
        <span className="mark mark-left">“</span>
        <div className="quote">{testimonial.quote}</div>
        <span className="mark mark-right">”</span>
        <div className="person-wrapper">
          <img src={`${testimonial.image}`} />
          <div className="person-text">
            <span>{testimonial.name}</span>
            <span className="person-medium">{testimonial.position}</span>
            <span className="person-medium">{testimonial.company}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          font-size: 20px;
          font-weight: bold;
          color: ${colours.white};
          text-align: center;
          flex-direction: column;
          align-items: center;
          font-family: 'Raleway', sans-serif;
          max-width: 630px;
          margin: 100px;
        }
        .mark {
          font-size: 98px;
          line-height: 10px;
        }
        .quote {
          padding: 0 20px;
        }
        .mark-left {
          align-self: flex-start;
          line-height: 30px;
        }
        .mark-right {
          align-self: flex-end;
          margin: 40px 0;
        }
        .person-text {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          margin-left: 30px;
          font-size: 18px;
          text-align: left;
        }
        .person-wrapper {
          display: flex;
          flex-direction: row;
        }
        .person-medium {
          font-weight: 600;
        }
        @media only screen and (max-width: 1024px) {
        }
      `}</style>
    </>
  );
};

export default Testimonial;
