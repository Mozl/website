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
        <Nav onToggleMenu={onToggleMenu} />
        <Menu isMenuOpen={isMenuOpen} />
        <div>About</div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <style jsx>{`
        .container {
          background-color: ${colours.black};
        }
      `}</style>
    </>
  );
};

export default About;
