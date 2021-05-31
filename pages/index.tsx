import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Border from '../components/Border';
import SkillsContainer from '../components/SkillsContainer';
import ExperiencesContainer from '../components/ExperiencesContainer';
import TestimonialsContainer from '../components/TestimonialsContainer';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { colours } from '../theme';
import Menu from '../components/Menu';

interface RootState {
  isMenuOpen: {
    isMenuOpen: boolean;
  };
}

const Home: React.FC = () => {
  const isMenuOpen = useSelector((state: RootState) => state.isMenuOpen);
  return (
    <>
      <div className="container">
        <section className="top">
          <Nav />
          <Menu isMenuOpen={isMenuOpen} />
          <Hero />
          <Border />
        </section>
        <SkillsContainer />
        <ExperiencesContainer />
        <TestimonialsContainer />
        <Footer />
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: auto auto auto 1fr;
        }
        .top {
          display: grid;
          grid-template-columns: 1fr;
          background: linear-gradient(to bottom, ${colours.darkBlue} 0%, ${colours.lightBlue} 80%);
        }
        @media only screen and (max-width: 550px) {
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          position: ${isMenuOpen.isMenuOpen ? 'fixed' : 'unset'};
        }
      `}</style>
    </>
  );
};

export default Home;
