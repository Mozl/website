import Nav from '../components/Nav';
import { useSelector } from 'react-redux';
import Project from '../components/Project';

interface Project {
  name: string;
  description: string;
  id: number;
}

const Projects: React.FC = () => {
  const projects = useSelector((state) => state.projects);
  return (
    <>
      <div className="container">
        <Nav />
        <section className="top">
          {projects.map((project: Project, index: number) => (
            <Project key={index} name={project.name} description={project.description} id={index} />
          ))}
          {/* <div className="project-first">
            <div className="first-overlay">
              <h2>BBC Sounds</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ullam, temporibus similique fugit
                nulla perferendis, saepe doloremque aliquid, dolorum non et aliquam quasi adipisci dolor dicta. Fugit
                fuga molestias quod!
              </p>
            </div>
          </div>
          <div className="project-second">second Project</div>
          <div className="project-third">third Project</div> */}
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
        // div[class*='project-'] {
        //   height: 300px;
        //   width: 400px;
        //   border-radius: 18px;
        // }
        // .project-first {
        //   grid-row: 1 / 3;
        //   grid-column-start: 1;
        //   display: flex;
        //   align-items: flex-end;
        //   overflow: hidden;
        //   position: relative;
        // }
        // .project-first:hover > .first-overlay {
        //   animation: slide-up 0.1s linear forwards;
        // }
        // .project-first:hover::before {
        //   animation: blur-darken 0.1s linear forwards;
        // }
        // .first-overlay {
        //   position: relative;
        //   transform: translateY(240px);
        //   height: 80%;
        //   padding: 20px;
        // }
        // p {
        //   margin-block-start: 0;
        //   margin-block-end: 0;
        //   background-color: transparent;
        //   font-size: 20px;
        // }
        // .project-first::before {
        //   content: '';
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;
        //   background-image: url('/sounds.png');
        //   background-position: left 0px bottom -5px;
        //   background-size: cover;
        //   filter: brightness(100%) blur(0);
        // }
        // @keyframes slide-up {
        //   to {
        //     transform: translateY(0px);
        //   }
        // }
        // @keyframes blur-darken {
        //   to {
        //     filter: brightness(70%) blur(5px);
        //   }
        // }
      `}</style>
    </>
  );
};

export default Projects;
