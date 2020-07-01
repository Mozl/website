import Nav from '../components/Nav';
import { useSelector } from 'react-redux';
import Project from '../components/Project';
import { colours } from '../theme';

interface Project {
  name: string;
  description: string;
  id: number;
  image: string;
  url: string;
}

interface State {
  projects: Project[];
}

const Projects: React.FC = () => {
  const projects = useSelector((state: State) => state.projects);
  return (
    <>
      <div className="container">
        <Nav />
        <h2>projects</h2>
        {projects &&
          projects.map(({ name, description, image, url }, index: number) => (
            <Project key={index} name={name} description={description} id={index} image={image} url={url} />
          ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: 0.2fr 0.2fr 1fr 1fr 1fr;
          grid-column-gap: 5%;
          background: linear-gradient(
            -186deg,
            ${colours.gold} 40%,
            ${colours.darkBlue} 0%,
            ${colours.darkBlue} 74%,
            ${colours.brown} 0%
          );
          color: ${colours.white};
          padding: 20px 40px;
        }
        h2 {
          font-size: 120px;
          font-weight: 800;
        }
        @media only screen and (max-width: 550px) {
          .container {
            grid-template-columns: 1fr;
            grid-template-rows: 0.2fr 0.2fr 1fr 1fr 1fr;
          }
          h2 {
            font-size: 66px;
          }
        }
      `}</style>
    </>
  );
};

export default Projects;
