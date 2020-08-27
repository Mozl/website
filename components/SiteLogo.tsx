import { colours } from '../theme';

const SiteLogo = () => {
  return (
    <>
      <svg width="60" height="60" viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.8387 9.48386V56.9032L36.1821 30.5048L47.6584 56.9032L66.7856 30.5048L84 56.9032"
          stroke={`${colours.white}`}
          strokeWidth="10"
          strokeLinecap="square"
        />
      </svg>
    </>
  );
};

export default SiteLogo;
