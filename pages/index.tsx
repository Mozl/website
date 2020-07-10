import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/actions/menuActions';
import Nav from '../components/Nav';
import Border from '../components/Border';
import SkillsContainer from '../components/SkillsContainer';
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
  const dispatch = useDispatch();
  const onToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="container">
        <Nav isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
        <Menu isMenuOpen={isMenuOpen} />
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
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Poppins', sans-serif;
          position: ${isMenuOpen.isMenuOpen ? 'fixed' : 'unset'};
          width: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default Home;
