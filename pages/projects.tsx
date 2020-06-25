import Nav from '../components/Nav';

const Projects: React.FC = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <section className="top">
          <div className="project-first">First Project</div>
          <div className="project-second">second Project</div>
          <div className="project-third">third Project</div>
        </section>
      </div>
      <style jsx>{`
        .container {
          background: linear-gradient(to bottom, #031957 20%, #8400bf 100%);
          color: white;
        }
        section {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: repeat(4, 1fr);
          grid-column-gap: 5%;
          padding: 150px;
          margin-top: 70px;
        }
        div[class*='project-'] {
          min-height: 200px;
          min-width: 200px;
          background: blue;
          border-radius: 18px;
        }
        div[class*='project-']:hover {
          height: 400px;
        }
        .project-first {
          grid-row: 1 / 3;
          grid-column-start: 1;
        }
        .project-second {
          grid-row: 2 / 4;
          grid-column-start: 2;
        }
        .project-third {
          grid-row: 3 / 5;
          grid-column-start: 3;
        }
      `}</style>
    </>
  );
};

export default Projects;
