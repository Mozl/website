import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/actions/menuActions';
import Nav from '../components/Nav';
import { colours } from '../theme';
import Menu from '../components/Menu';

interface RootState {
  isMenuOpen: {
    isMenuOpen: boolean;
  };
}

const CV: React.FC = () => {
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
        <section className="top">
          <object data="/Louis_Moselhi_CV.pdf" type="application/pdf" width="100%" height="100%"></object>
          <div className="link-container">
            <a className="download_link" href="/Louis_Moselhi_CV.pdf" download="Louis Moselhi CV">
              <button className="download-button">
                <span>Download CV</span>
              </button>
            </a>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .container {
            background-color: ${colours.darkBlue};
          }
          .top {
            width: 100%;
            height: 100vh;
          }
          a {
            font-size: 50px;
            padding: 20px;
          }
          .link-container {
            display: grid;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          button {
            position: relative;
            width: max-content;
            height: max-content;
            padding: 30px;
            font-size: 30px;
            border-width: 0px;
            color: ${colours.darkBlue};
            cursor: pointer;
            border: ${colours.darkBlue} 2px solid;
            border-radius: 55px;
            background-color: transparent;
            overflow: hidden;
          }
          .download_link:active {
            transform: scale(0.95);
          }
          .download-button:active {
            outline: none;
          }
          button::before {
            display: grid;
            content: 'Download CV';
            position: absolute;
            align-items: center;
            background-color: ${colours.darkBlue};
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: clip-path 0.2s;
            clip-path: circle(0% at 50% 50%);
          }
          button:hover::before {
            color: ${colours.white};
            clip-path: circle(100% at 50% 50%);
          }
          @media only screen and (max-width: 550px) {
            button {
              font-size: 15px;
            }
          }
        `}
      </style>
    </>
  );
};

export default CV;
