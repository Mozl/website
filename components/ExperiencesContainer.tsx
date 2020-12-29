import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Experience from '../components/Experience';
import { colours } from '../theme';

interface RootState {
  experiences: [];
}

const ExperiencesContainer: FC = () => {
  const experiences = useSelector((state: RootState) => state.experiences);
  const headerLong = 'EXPERIENCE';
  const headerShort = 'EXP';

  return (
    <>
      <div className="wrapper">
        <h2 className="header">{headerLong}</h2>
        <h2 className="headerSmall">{headerShort}</h2>
        <div className="experienceContainer">
          {experiences?.map((experience, index) => (
            <Experience key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          font-family: 'Playfair Display', serif;
          flex-direction: column;
          padding: 0 150px;
          background: ${colours.white};
          justify-content: center;
          color: ${colours.darkBlue};
          text-align: center;
          padding-bottom: 130px;
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
        .experienceContainer {
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-rows: auto;
          grid-gap: 50px;
          flex-direction: row;
        }
        .headerSmall {
          display: none;
        }
        @media only screen and (max-width: 550px) {
          .wrapper {
            padding: 0;
          }
          .header {
            display: none;
          }
          .headerSmall {
            display: block;
            font-size: 80px;
            font-weight: 900;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: ${colours.darkBlue};
            letter-spacing: 1rem;
            margin-right: 0;
          }
      `}</style>
    </>
  );
};

export default ExperiencesContainer;
