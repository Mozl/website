import Nav from '../components/Nav';

const CV: React.FC = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <section className="top">
          <object data="/Louis_Moselhi_CV.pdf" type="application/pdf" width="100%" height="100%"></object>
          <div className="link-container">
            <a className="download_link" href="/Louis_Moselhi_CV.pdf" download="Louis Moselhi CV">
              <button>
                <span>Download CV</span>
              </button>
            </a>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .container {
            background: linear-gradient(to bottom, #031957 20%, #8400bf 99%, black 100%);
          }
          .top {
            width: 100%;
            height: 100vh;
          }
          a {
            font-size: 50px;
            padding: 20px;
          }
          .link-container {
            display: grid;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          button {
            position: relative;
            width: max-content;
            height: max-content;
            padding: 30px;
            font-size: 30px;
            border-width: 0px;
            color: #031957;
            cursor: pointer;
            border: #031957 2px solid;
            border-radius: 6px;
            background-color: transparent;
            overflow: hidden;
          }
          button:hover span {
            font-size; 50px
          }
          }
          button::before {
            display: grid;
            content: 'Download CV';
            position: absolute;
            align-items: center;
            background-color: #031957;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            clip-path: circle(0% at 50% 50%);
          }
          button:hover::before {
            color: white;
            animation: clip 0.5s ease-out forwards;
          }
          @keyframes clip {
            to {
              clip-path: circle(100% at 50% 50%);
            }
          }
        `}
      </style>
    </>
  );
};

export default CV;
