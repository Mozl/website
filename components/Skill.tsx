import React, { FC } from 'react';

interface Props {
  name: string;
  description: string;
  id: number;
  image: string;
}

const Skill: FC<Props> = ({ name, description, id, image }) => {
  return (
    <>
      <div className={`skill-container-${id}`}>
        <div className={`skill-${id}`}>
          <img className={`skill-img-${id}`} loading="lazy" height="125px" width="125px" src={image}></img>
          <span>{name}</span>
          <p>{description}</p>
        </div>
      </div>
      <style jsx>{`
       .skill-container-${id} {
        grid-column: ${id == 1 ? 3 : 1};
        grid-row: ${id + 1};
        justify-self: end;
        margin: 20px;
      }
      p,
      span {
        color: white;
      }
      div[class*='skill-'] {
        display: flex;
        width: 300px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      img[class*='skill-'] {
        object-fit: cover;
      }
      }`}</style>
    </>
  );
};

export default Skill;
