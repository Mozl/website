import { colours } from '../theme';

interface Props {
  onToggleMenu: () => void;
}

const MenuLogo = ({ onToggleMenu }: Props) => {
  return (
    <>
      <div className="menuLogo menuLogo-open" onClick={onToggleMenu}>
        <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="22.4457"
            y1="3.1129"
            x2="3.03215"
            y2="24.5085"
            stroke={`${colours.white}`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="44.1896"
            y1="17.5075"
            x2="24.7761"
            y2="38.903"
            stroke={`${colours.white}`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="40.236"
            y1="3.24801"
            x2="7.98537"
            y2="38.7861"
            stroke={`${colours.white}`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default MenuLogo;
