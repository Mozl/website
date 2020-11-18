import React, { FC } from 'react';
import { colours } from '../theme';

const Hero: FC = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <span className="hi">Hi I'm</span>
          <svg className="hero-svg" viewBox="0 0 420 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="#fff"
              strokeWidth="3"
              d="M57.6 12.3027c-6.6445.3164-17.956.4746-28.6347.4746-11.7071 0-22.7022-.1582-28.8721-.4746v3.2432c9.7295.4746 11.5488 2.1357 11.5488 13.9219v80.3672c0 11.786-1.6611 13.447-11.5488 13.922V127c18.8262-.475 45.0879-.475 56.7158-.475 10.8369 0 26.1035 0 37.0986.475-1.1074-11.312-1.1074-23.177-1.1074-28.8721 0-5.7744.1582-10.9951.4746-14.8711h-3.7177C85.9717 104.14 69.5977 123.282 58.2861 123.282h-5.3789c-6.9609 0-8.3056-1.265-8.3056-10.204V29.4678c0-11.7862 2.1357-13.4473 13.1308-13.9219v-3.2432z"
            />
            <path
              stroke="#fff"
              strokeWidth="3"
              d="M143.795 40.6211C118.641 40.6211 102.108 52.3281 102.108 85.0762C102.108 117.745 118.641 129.294 143.795 129.294C168.87 129.294 185.402 117.745 185.402 85.0762C185.402 52.3281 168.87 40.6211 143.795 40.6211ZM143.795 43.8643C150.281 43.8643 155.106 56.0459 155.106 85.0762C155.106 114.027 150.281 126.051 143.795 126.051C137.309 126.051 132.404 114.027 132.404 85.0762C132.404 56.0459 137.309 43.8643 143.795 43.8643Z"
            />
            <path
              stroke="#fff"
              strokeWidth="3"
              d="M279.216 41.1748C271.148 42.7568 261.894 43.3896 251.057 43.3896C247.813 43.3896 244.412 43.2314 241.011 42.915V46.3164C247.813 46.3164 250.107 50.8252 250.107 60.5547V109.202C250.107 116.005 244.412 120.83 238.4 120.83C232.784 120.83 230.49 117.429 230.49 110.626V41.1748C222.343 42.7568 213.167 43.3896 202.33 43.3896C199.087 43.3896 195.686 43.2314 192.284 42.915V46.3164C199.087 46.3164 201.302 50.8252 201.302 60.5547V101.925C201.302 112.92 202.805 118.932 206.048 122.808C209.133 126.525 214.433 129.294 224.32 129.294C235.948 129.294 244.887 125.734 250.107 117.112V128.819C258.176 127.158 267.431 126.525 278.268 126.525C281.511 126.525 284.912 126.684 288.313 127V123.599C281.511 123.599 279.217 119.09 279.217 109.36V41.1748Z"
            />
            <path
              stroke="#fff"
              strokeWidth="3"
              d="M317.2 0.279297C305.953 0.279297 299.704 5.02539 299.704 14.2803C299.704 23.4561 305.953 28.2021 317.344 28.2021C328.497 28.2021 334.983 23.4561 334.983 14.2803C334.983 5.02539 328.497 0.279297 317.344 0.279297ZM332 41.1748C324.779 42.7568 320.524 43.3896 304.688 43.3896C301.444 43.3896 298.043 43.2314 294.642 42.915V46.3164C301.444 46.3164 303.738 50.8252 303.738 60.5547V111.971C303.738 120.988 301.286 123.599 294.642 123.599V127C299.309 126.842 309.908 126.367 318.926 126.367C328.022 126.367 337.594 126.842 341.944 127V123.599C335.3 123.599 332.848 120.988 332.848 111.971V41.1748Z"
            />
            <path
              stroke="#fff"
              strokeWidth="3"
              d="M382.128 40.6211C366.07 40.6211 351.674 49.5596 351.674 63.9561C351.674 76.7705 360.929 84.6807 370.658 93.6191C379.201 101.371 385.688 106.75 385.688 116.321C385.688 122.491 381.337 125.181 376.274 125.181C364.488 125.181 356.895 112.92 354.917 95.7549H351.674C351.674 112.129 351.516 121.146 351.041 128.107H354.284C355.075 125.022 356.578 122.491 358.793 122.491C361.245 122.491 363.539 123.44 366.94 125.181C370.342 127.316 375.958 129.294 383.631 129.294C401.587 129.294 416.3 119.09 416.3 104.298C416.3 91.8789 408.706 85.0762 398.818 76.9287C389.563 69.335 379.359 63.3232 379.359 53.5938C379.359 47.9775 383.631 44.5762 388.931 44.5762C402.22 44.5762 407.44 58.0234 408.864 69.9678H412.107C412.107 55.2549 412.266 47.1074 412.74 40.7793H409.497C408.943 44.3389 407.52 46 405.463 46C404.593 46 403.644 45.6836 402.536 45.0508C399.293 43.2314 391.541 40.6211 382.128 40.6211Z"
            />
          </svg>
          <span className="sub-heading sub-heading__1">Software Engineer</span>
          <span className="sub-heading sub-heading__2">BBC Tech Meetup Founder</span>
        </div>
        <div className="hero-image">
          <div className="louis-image">
            <img className="headshot" src="/louis.png" height="500px" width="500px"></img>
          </div>
        </div>
      </div>

      <style jsx>{`
        .louis-image {
          border-radius: 50%;
          background: linear-gradient(159deg, ${colours.lightOrange} 3%, ${colours.orange} 100%);
          width: 500px;
          height: 500px;
          object-fit: cover;
          overflow: hidden;
        }
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          justify-items: center;
          align-items: center;
          margin-top: 20px;
        }
        .hero-text {
          display: grid;
          grid-template-rows: auto 1fr 0.3fr;
          justify-items: left;
          align-items: center;
          color: ${colours.white};
          font-size: 95px;
          width: 550px;
        }
        .hi {
          font-family: 'Playfair Display', serif;
        }
        .hero-svg {
          overflow: visible;
        }
        .sub-heading {
          font-weight: 300;
          font-size: 30px;
          text-align: left;
          transform: translateY(-10px);
          opacity: 0;
        }
        .sub-heading__1 {
          animation: fadeInDown 0.7s 6s ease-in forwards;
        }
        .sub-heading__2 {
          animation: fadeInDown 0.7s 6.4s ease-in forwards;
        }
        @media only screen and (max-width: 550px) {
          .hero-image {
            grid-row: 1;
          }
          .sub-heading {
            font-size: 18px;
          }
          .hero {
            grid-template-columns: 1fr;
            padding: 0 24px;
          }
          .headshot,
          .louis-image {
            width: 220px;
            height: 220px;
          }
          .hero-text {
            width: 220px;
            font-size: 50px;
          }
        }

        .hero-svg path:nth-child(1) {
          stroke-dasharray: 514;
          stroke-dashoffset: 514;
          animation: line-anim 3s ease forwards, fill-anim 3s 0.7s ease forwards;
        }

        .hero-svg path:nth-child(2) {
          stroke-dasharray: 708;
          stroke-dashoffset: 708;
          animation: line-anim 3s 1s ease forwards, fill-anim 3s 1.7s ease forwards;
        }

        .hero-svg path:nth-child(3) {
          stroke-dasharray: 615;
          stroke-dashoffset: 615;
          animation: line-anim 3s 1.8s ease forwards, fill-anim 3s 2.7s ease forwards;
        }

        .hero-svg path:nth-child(4) {
          stroke-dasharray: 479;
          stroke-dashoffset: 479;
          animation: line-anim 3s 2.6s ease forwards, fill-anim 3s 3.7s ease forwards;
        }

        .hero-svg path:nth-child(5) {
          stroke-dasharray: 493;
          stroke-dashoffset: 493;
          animation: line-anim 3s 3.4s ease forwards, fill-anim 3s 4.7s ease forwards;
        }

        @keyframes fadeInDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes line-anim {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fill-anim {
          0% {
            fill: transparent;
          }

          100% {
            fill: ${colours.white};
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
