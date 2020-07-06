import Nav from '../components/Nav';
import Border from '../components/Border';
import SkillsContainer from '../components/SkillsContainer';
import Hero from '../components/Hero';
import { colours } from '../theme';

const Home = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <Hero />
        <Border />
        <SkillsContainer />
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto auto 1fr;
          background: linear-gradient(to bottom, ${colours.darkBlue} 8%, ${colours.lightBlue} 32%);
        }
        .nav-container {
          padding: 20px 40px;
        }
        @media only screen and (max-width: 550px) {
          .nav-container {
            padding: 20px 20px;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default Home;
