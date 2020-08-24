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
          <h2>about me</h2>
          <p className="about-text">
            I am a software engineer with a passion for creating exciting, performant web experiences using cutting-edge
            tech. Some technologies I enjoy using are React, Typescript, Redux and Machine Learning. Working on the{' '}
            <a target="_blank" href="https://www.bbc.co.uk/sounds">
              BBC Sounds
            </a>{' '}
            website has given me extensive experience in delivering an elegant, feature-rich web app at national scale.
            My interest in growing the tech community and sharing ideas led me to start the{' '}
            <a target="_blank" href="http://bit.ly/bbc-tech-meetup">
              BBC Tech Meetup
            </a>
            , a meeting of minds bringing together tech talks by superstars of tech from the BBC and the public.
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: ${colours.black};
          min-height: 100vh;
        }
        .text-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          grid-template-rows: 0.2fr 1fr;
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
          margin: 50px 0 50px 0;
        }
        a {
          color: ${colours.orange};
        }
        @media only screen and (max-width: 550px) {
          h2 {
            font-size: 66px;
          }
          .text-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default About;
