import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/actions/menuActions';
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
  const dispatch = useDispatch();
  const onToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <main className="main">
        <Nav isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
        <Menu isMenuOpen={isMenuOpen} />
        <div className="container">
          <h2>projects</h2>
          {projects &&
            projects.map(({ name, description, image, url }, index: number) => (
              <Project key={index} name={name} description={description} id={index} image={image} url={url} />
            ))}
        </div>
      </main>
      <style jsx>{`
        .main {
          background: linear-gradient(
            -186deg,
            ${colours.gold} 33%,
            ${colours.darkBlue} 0%,
            ${colours.darkBlue} 66%,
            ${colours.brown} 0%
          );
          color: ${colours.white};
        }
        .container {
          display: grid;
          grid-template-rows: auto auto 1fr 1fr;
          grid-column-gap: 5%;

          padding: 20px 40px;
        }
        h2 {
          font-size: 120px;
          font-weight: 800;
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
