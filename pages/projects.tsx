import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Project from '../components/Project';
import { colours } from '../theme';
import Menu from '../components/Menu';

interface Project {
  name: string;
  description: string;
  id: number;
  image: string;
  url: string;
}

interface RootState {
  projects: Project[];
  isMenuOpen: {
    isMenuOpen: boolean;
  };
}

const Projects: React.FC = () => {
  const isMenuOpen = useSelector((state: RootState) => state.isMenuOpen);
  const projects = useSelector((state: RootState) => state.projects);
  return (
    <>
      <main className="main">
        <Nav />
        <Menu isMenuOpen={isMenuOpen} />
        <div className="container">
          <h2>projects</h2>
          {projects &&
            projects.map(({ name, description, image, url }, index: number) => (
              <Project key={1} name={'name'} description={'description'} id={1} image={image} url={url} />
            ))}
          {/* <Project key={1} name={'name'} description={''} id={1} image={'/sounds.jpg'} url={''} /> */}
        </div>
      </main>
      <style jsx>{`
        .main {
          background: linear-gradient(
            -186deg,
            ${colours.gold} 40%,
            ${colours.darkBlue} 0%,
            ${colours.darkBlue} 66%,
            ${colours.brown} 0%
          );
          color: ${colours.white};
        }
        .container {
          display: grid;
          grid-template-rows: auto auto 1fr 1fr;
          padding: 20px 40px;
        }
        h2 {
          font-size: 120px;
          font-weight: 800;
          margin: 0;
        }
        @media only screen and (max-width: 550px) {
          .container {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr 1fr;
            padding: 20px 24px;
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
