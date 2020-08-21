import { colours } from '../theme';

interface Props {
  screenSize?: string;
}

const SiteLogo = ({ screenSize }: Props) => {
  return (
    <>
      {screenSize === 'desktop' ? (
        <svg width="91" height="74" viewBox="0 0 91 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36.5806" cy="36.5806" r="36.5806" fill={`${colours.orange}`} />
          <path
            d="M10.8387 9.48386V56.9032L36.1821 30.5048L47.6584 56.9032L66.7856 30.5048L84 56.9032"
            stroke={`${colours.white}`}
            strokeWidth="10"
            strokeLinecap="square"
          />
        </svg>
      ) : (
        <svg width="60" height="60" viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36.5806" cy="36.5806" r="36.5806" fill={`${colours.orange}`} />
          <path
            d="M10.8387 9.48386V56.9032L36.1821 30.5048L47.6584 56.9032L66.7856 30.5048L84 56.9032"
            stroke={`${colours.white}`}
            strokeWidth="10"
            strokeLinecap="square"
          />
        </svg>
      )}
    </>
  );
};

export default SiteLogo;
