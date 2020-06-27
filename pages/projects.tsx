import Nav from '../components/Nav';
import { useSelector } from 'react-redux';
import Project from '../components/Project';

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
          background: linear-gradient(to right, #031957 10%, #8400bf 100%);
          color: white;
        }
        section {
          display: grid;
          height: 100%;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: repeat(4, 1fr);
          grid-column-gap: 5%;
          padding: 50px 150px;
        }
      `}</style>
    </>
  );
};

export default Projects;
