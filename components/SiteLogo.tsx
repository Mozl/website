import { colours } from '../theme';

const SiteLogo = () => {
  return (
    <>
      <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.4 0H0v46l17.4-20.6 9.1 18.2 12-18.2 10 17.4 5.5-4-15.6-26.1-11 17.4-8.2-17.4L6.4 28.6V0z"
          fill={colours.white}
        />
      </svg>
    </>
  );
};

export default SiteLogo;
