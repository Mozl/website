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
        <div className="quote">{testimonial.quote}</div>
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
          max-width: 550px;
          margin: 100px;
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
          margin: 30px;
        }
        .person-medium {
          font-weight: 500;
        }
        @media only screen and (max-width: 1024px) {
        }
      `}</style>
    </>
  );
};

export default Testimonial;
