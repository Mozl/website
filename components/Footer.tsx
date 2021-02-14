import React, { FC } from 'react';
import ActiveLink from '../components/ActiveLink';
import SiteLogo from '../components/SiteLogo';
import Border from '../components/Border';
import Cta from '../components/Cta';
import { colours } from '../theme';

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <>
      <div className="footer">
        <Border isFooter={true} />
        <div className="wrapper">
          <ActiveLink href="/">
            <SiteLogo />
          </ActiveLink>
          <div className="footer-title">
            <p className="footer-margin footer-font">Want to know more?</p>
            <div className="cta footer-margin">
              <Cta />
            </div>
          </div>
          <div className="footer-link-container">
            <a className="footer-font footer-margin" href="/cv">
              CV
            </a>
            <a className="footer-font footer-margin" href="/about">
              About Me
            </a>
          </div>
          <div className="footer-icon-container">
            <a href="https://github.com/Mozl" target="_blank" rel="noreferrer">
              <img className="footer-icon" width={60} height={60} src="/github.svg" alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/lmoselhi/" target="_blank" rel="noreferrer">
              <img className="footer-icon" width={60} height={60} src="/linkedin.svg" alt="Linkedin icon" />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: linear-gradient(to bottom, ${colours.lightBlue} 0%, ${colours.darkBlue} 80%);
        }
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          padding: 40px 142px;
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
        .footer-font {
          color: ${colours.white};
          text-decoration: none;
        }
        .footer-link-container {
          display: grid;
          grid-template-rows: 1fr 1fr;
          justify-content: center;
          font-weight: 500;
        }
        .footer-margin {
          margin: 0 0 40px 0;
        }
        .footer-icon-container {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
        @media only screen and (max-width: 550px) {
          .wrapper {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto auto;
            grid-gap: 15px;
            padding: 20px 26px;
          }
          .footer-link-container {
            justify-content: unset;
          }
          .footer-icon-container {
            justify-content: flex-start;
          }
          .footer-icon {
            margin-right: 30px;
            width: 40px;
            height: 40px;
          }
          .footer-font {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
