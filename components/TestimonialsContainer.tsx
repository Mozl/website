import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Testimonial from '../components/Testimonial';
import { colours } from '../theme';

interface RootState {
  testimonials: [];
}

const TestimonialsContainer: FC = () => {
  const testimonials = useSelector((state: RootState) => state.testimonials);

  return (
    <>
      <div className="wrapper">
        <div className="testimonialContainer">
          {testimonials?.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          font-family: 'Playfair Display', serif;
          flex-direction: column;
          background: ${colours.black};
          justify-content: center;
          align-items: center;
          text-align: center;
          clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);
        }
        .header {
          font-size: 130px;
          font-weight: 900;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${colours.darkBlue};
          letter-spacing: 3rem;
          margin-right: 3rem;
        }
        .testimonialContainer {
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-rows: auto;
          grid-gap: 50px;
          flex-direction: row;
          margin-top: 30px;
        }
        @media only screen and (max-width: 550px) {
          .wrapper {
            margin-top: 60px;
            clip-path: polygon(0 3%, 100% 0, 100% 100%, 0% 100%);
          }
        }
      `}</style>
    </>
  );
};

export default TestimonialsContainer;
