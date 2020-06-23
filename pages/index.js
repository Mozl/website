import anime from 'animejs';
import Head from 'next/head';
import Nav from '../components/Nav';
import Skills from '../components/Skills';
import Hero from '../components/Hero';

const Home = () => {
  // royal blue dark: #031957;
  //  middle blue: #90DDF0;
  // subtle pink: #F0EDEE;
  // dark turquoise: #2C666E;
  // orange: #F46036;
  const path1 =
    'M1 346V1C72.3084 195.426 243 98.4118 333 70C423 41.5882 347 120.059 477 130.882C607 141.706 579 244.529 653 233.706C727 222.882 769 70 883 186.353C997 302.706 1027 -135.647 1175 98.4118C1323 332.471 1333 87.5882 1499 130.882C1558.5 146.402 1541 -75 1623 88.9412C1660.78 164.471 1689 1 1689 1V346H1Z';
  const path2 =
    'M1 346V1C72.3084 195.426 219 67.2941 309 38.8824C399 10.4706 343 153.882 473 164.706C603 175.529 585 220.176 659 209.353C733 198.529 763 30.7647 877 147.118C991 263.471 1037 -86.9412 1185 147.118C1333 381.176 1263 134.941 1429 178.235C1488.5 193.755 1477 57.516 1555 107.882C1643 164.706 1689 1 1689 1V346H1Z';
  const path3 =
    'M1 346V1C72.3084 195.426 61 138.504 248 79.4706C435 20.4373 365 341.941 470 235.059C575 128.176 596 189.059 670 178.235C744 167.412 730 -36.8824 877 147.118C1024 331.118 974 65.9412 1185 147.118C1396 228.294 1294 79.4706 1429 178.235C1564 277 1474 43.6073 1580 136.294C1654 201 1689 1 1689 1V346H1Z';
  const path4 =
    'M1 346V1C72.3084 195.426 63 172.327 250 113.294C437 54.2608 369 304.059 474 197.176C579 90.2941 588 137.647 662 126.824C736 116 731 32.1176 878 216.118C1025 400.118 969 15.8824 1180 97.0588C1391 178.235 1295 -51.7647 1430 47C1565 145.765 1505 262.186 1582 244.529C1641 231 1689 1 1689 1V346H1Z';

  if (typeof window !== 'undefined') {
    anime({
      targets: '.pathStart',
      loop: true,
      direction: 'alternate',
      duration: 50000,
      easing: 'easeInOutSine',
      d: [{ value: path2 }, { value: path3 }, { value: path4 }]
    });
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Website with some stuff and things" />
        <meta name="keywords" content="Louis, Louis Moselhi, mozl" />
        <link rel="canonical" href="https://mozl.netlify.app" />
        <title>Website</title>
        <link href="/favicon.ico" rel="icon" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <main>
        <section className="top-section">
          <Nav />
          <div className="top-section__inner">
            <Hero />
          </div>
          <div className="border">
            <svg
              id="wavy-border"
              width="100%"
              height="345"
              viewBox="5 0 1682 345"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path className="pathStart" d={path1} fill="#020000" />
            </svg>
          </div>
        </section>
        <Skills />
      </main>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        section {
          width: 100vw;
        }
        .top-section {
          background: linear-gradient(to bottom, #031957 25%, #90ddf0 100%);
          box-shadow: 0 0 0 1px #000;
        }
        .top-section__inner {
          display: grid;
          align-items: center;
          justify-items: center;
        }
        .border {
          display: flex;
          padding-top: 30px;
          align-content: flex-end;
          justify-content: flex-end;
          width: 100%;
        }
        .section-2 {
          display: flex;
          background-color: grey;
          min-width: 100%;
          min-height: 100px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default Home;
