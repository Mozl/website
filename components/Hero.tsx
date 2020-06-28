import React, { FC } from 'react';

interface Props {
  name: string;
  description: string;
  image?: string;
}

const Hero: FC<Props> = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-image">
          <div className="louis-image">
            <img className="headshot" src="/louis.png" height="528px" width="528px"></img>
          </div>
        </div>
        <div className="hero-text">
          <span>Hi I'm</span>
          <svg
            className="hero-svg"
            height="170"
            viewBox="0 0 478 170"
            stroke="white"
            fill="none"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.24 114.68H61.16V128H0.860001V2.53999H17.24V114.68Z" />
            <path d="M135.435 129.26C123.795 129.26 113.175 126.56 103.575 121.16C93.9753 115.64 86.3553 108.02 80.7153 98.3C75.1953 88.46 72.4353 77.42 72.4353 65.18C72.4353 52.94 75.1953 41.96 80.7153 32.24C86.3553 22.4 93.9753 14.78 103.575 9.37999C113.175 3.85999 123.795 1.09999 135.435 1.09999C147.195 1.09999 157.875 3.85999 167.475 9.37999C177.075 14.78 184.635 22.34 190.155 32.06C195.675 41.78 198.435 52.82 198.435 65.18C198.435 77.54 195.675 88.58 190.155 98.3C184.635 108.02 177.075 115.64 167.475 121.16C157.875 126.56 147.195 129.26 135.435 129.26ZM135.435 115.04C144.195 115.04 152.055 113 159.015 108.92C166.095 104.84 171.615 99.02 175.575 91.46C179.655 83.9 181.695 75.14 181.695 65.18C181.695 55.1 179.655 46.34 175.575 38.9C171.615 31.34 166.155 25.52 159.195 21.44C152.235 17.36 144.315 15.32 135.435 15.32C126.555 15.32 118.635 17.36 111.675 21.44C104.715 25.52 99.1953 31.34 95.1153 38.9C91.1553 46.34 89.1753 55.1 89.1753 65.18C89.1753 75.14 91.1553 83.9 95.1153 91.46C99.1953 99.02 104.715 104.84 111.675 108.92C118.755 113 126.675 115.04 135.435 115.04Z" />
            <path d="M236.079 2.53999V81.92C236.079 93.08 238.779 101.36 244.179 106.76C249.699 112.16 257.319 114.86 267.039 114.86C276.639 114.86 284.139 112.16 289.539 106.76C295.059 101.36 297.819 93.08 297.819 81.92V2.53999H314.199V81.74C314.199 92.18 312.099 101 307.899 108.2C303.699 115.28 297.999 120.56 290.799 124.04C283.719 127.52 275.739 129.26 266.859 129.26C257.979 129.26 249.939 127.52 242.739 124.04C235.659 120.56 230.019 115.28 225.819 108.2C221.739 101 219.699 92.18 219.699 81.74V2.53999H236.079Z" />
            <path d="M357.904 2.53999V128H341.524V2.53999H357.904Z" />
            <path d="M425.601 129.26C417.321 129.26 409.881 127.82 403.281 124.94C396.801 121.94 391.701 117.86 387.981 112.7C384.261 107.42 382.341 101.36 382.221 94.52H399.681C400.281 100.4 402.681 105.38 406.881 109.46C411.201 113.42 417.441 115.4 425.601 115.4C433.401 115.4 439.521 113.48 443.961 109.64C448.521 105.68 450.801 100.64 450.801 94.52C450.801 89.72 449.481 85.82 446.841 82.82C444.201 79.82 440.901 77.54 436.941 75.98C432.981 74.42 427.641 72.74 420.921 70.94C412.641 68.78 405.981 66.62 400.941 64.46C396.021 62.3 391.761 58.94 388.161 54.38C384.681 49.7 382.941 43.46 382.941 35.66C382.941 28.82 384.681 22.76 388.161 17.48C391.641 12.2 396.501 8.11999 402.741 5.23999C409.101 2.35999 416.361 0.919998 424.521 0.919998C436.281 0.919998 445.881 3.85999 453.321 9.74C460.881 15.62 465.141 23.42 466.101 33.14H448.101C447.501 28.34 444.981 24.14 440.541 20.54C436.101 16.82 430.221 14.96 422.901 14.96C416.061 14.96 410.481 16.76 406.161 20.36C401.841 23.84 399.681 28.76 399.681 35.12C399.681 39.68 400.941 43.4 403.461 46.28C406.101 49.16 409.281 51.38 413.001 52.94C416.841 54.38 422.181 56.06 429.021 57.98C437.301 60.26 443.961 62.54 449.001 64.82C454.041 66.98 458.361 70.4 461.961 75.08C465.561 79.64 467.361 85.88 467.361 93.8C467.361 99.92 465.741 105.68 462.501 111.08C459.261 116.48 454.461 120.86 448.101 124.22C441.741 127.58 434.241 129.26 425.601 129.26Z" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        .louis-image {
          border-radius: 50%;
          background: linear-gradient(159deg, #fb8f0a 10%, #d5370b 100%);
          width: 528px;
          height: 528px;
          object-fit: cover;
          overflow: hidden;
        }
        .headshot {
          height: 528px;
          width: 528px;
          mix-blend-mode: luminosity;
        }
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          justify-items: center;
          align-items: center;
        }
        .hero-text {
          display: grid;
          grid-template-rows: 1fr 1fr;
          justify-items: center;
          align-items: center;
          color: white;
          font-size: 95px;
        }
        .hero-text span {
          animation: move-in 1s cubic-bezier(0.74, 0.04, 0.33, 1.39);
        }

        @keyframes move-in {
          0% {
            transform: translate(1000px);
          }

          100% {
            transform: translate(0px);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .hero-image {
          animation: fade-in 3s ease-in;
        }
        .hero-svg path:nth-child(1) {
          stroke-dasharray: 372;
          stroke-dashoffset: 372;
          animation: line-anim 5s 1s ease forwards, fill-anim 5s 1.5s ease forwards;
        }

        .hero-svg path:nth-child(2) {
          stroke-dasharray: 708;
          stroke-dashoffset: 708;
          animation: line-anim 5s 1s ease forwards, fill-anim 5s 2s ease forwards;
        }

        .hero-svg path:nth-child(3) {
          stroke-dasharray: 615;
          stroke-dashoffset: 615;
          animation: line-anim 5s 1s ease forwards, fill-anim 5s 2.5s ease forwards;
        }

        .hero-svg path:nth-child(4) {
          stroke-dasharray: 284;
          stroke-dashoffset: 284;
          animation: line-anim 5s 1s ease forwards, fill-anim 5s 3s ease forwards;
        }

        .hero-svg path:nth-child(5) {
          stroke-dasharray: 618;
          stroke-dashoffset: 618;
          animation: line-anim 5s 1s ease forwards, fill-anim 5s 3.5s ease forwards;
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
            fill: white;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
