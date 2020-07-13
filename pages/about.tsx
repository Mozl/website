import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import { colours } from '../theme';
import { toggleMenu } from '../redux/actions/menuActions';

interface RootState {
  isMenuOpen: {
    isMenuOpen: boolean;
  };
}

const About: React.FC = () => {
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
        <div className="text-container">
          <h2>About</h2>
          <p className="about-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsam sed ratione fugiat maxime nemo
            voluptates, velit provident et dolor, quia adipisci porro. Sunt quo fuga dicta magnam praesentium sed?
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: ${colours.black};
          height: 100vh;
        }
        .text-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-row: 0.2fr 1fr;
          grid-column-gap: 5%;
          padding: 20px 40px;
        }
        .about-text {
          color: ${colours.white};
          font-size: 24px;
          grid-column: 1;
        }
        h2 {
          font-size: 120px;
          font-weight: 800;
          color: ${colours.white};
        }
        @media only screen and (max-width: 550px) {
          h2 {
            font-size: 66px;
          }
        }
      `}</style>
    </>
  );
};

export default About;
