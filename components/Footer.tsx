import React, { FC } from 'react';
import ActiveLink from '../components/ActiveLink';
import SiteLogo from '../components/SiteLogo';
import Cta from '../components/Cta';
import { colours } from '../theme';

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <>
      <div className="wrapper">
        <ActiveLink href="/">
          <SiteLogo />
        </ActiveLink>
        <div className="footer-title">
          <p className="footer-margin">Want to know more?</p>
          <Cta />
        </div>
        <div className="footer-link-container">
          <p className="footer-margin">
            <ActiveLink href="/cv">CV</ActiveLink>
          </p>
          <p className="footer-margin">
            <ActiveLink href="/about">About Me</ActiveLink>
          </p>
        </div>
        <div className="footer-icon-container">
          <img className="footer-icon" width={60} height={60} src="/github.svg" />
          <img className="footer-icon" width={60} height={60} src="/linkedin.svg" />
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          padding: 100px 142px;
          background: linear-gradient(to bottom, ${colours.darkBlue} 0%, ${colours.lightBlue} 80%);
          font-size: 24px;
          font-weight: bold;
          color: ${colours.white};
          font-family: 'Raleway', sans-serif;
        }
        .footer-title {
          display: flex;
          flex-direction: column;
          font-family: 'Playfair Display', serif;
        }
        .footer-link-container {
          display: grid;
          grid-template-rows: 1fr 1fr;
          justify-content: center;
          font-weight: 400;
        }
        .footer-margin {
          margin: 0 0 40px 0;
        }
        .footer-icon-container {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
        @media only screen and (max-width: 1024px) {
        }
      `}</style>
    </>
  );
};

export default Footer;
