import Nav from '../components/Nav';

const Projects: React.FC = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <section className="top">
          <div>Projects</div>
        </section>
      </div>
      <style jsx>{`
        .container {
          background: linear-gradient(to bottom, #031957 20%, #8400bf 99%, black 100%);
        }
      `}</style>
    </>
  );
};

export default Projects;
