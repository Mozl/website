import Nav from '../components/Nav';
import { useSelector } from 'react-redux';
import Project from '../components/Project';
import { colours } from '../theme';

interface Project {
  name: string;
  description: string;
  id: number;
  image: string;
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
        <section className="top">
          {projects &&
            projects.map(({ name, description, image }, index: number) => (
              <Project key={index} name={name} description={description} id={index} image={image} />
            ))}
        </section>
      </div>
      <style jsx>{`
        .container {
          background: linear-gradient(
            -165deg,
            ${colours.gold} 40%,
            ${colours.darkBlue} 0%,
            ${colours.darkBlue} 74%,
            ${colours.pink} 0%
          );
          color: ${colours.white};
        }
        section {
          display: grid;
          height: 100%;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: repeat(4, 1fr);
          grid-column-gap: 5%;
          padding: 70px 150px;
        }
      `}</style>
    </>
  );
};

export default Projects;
