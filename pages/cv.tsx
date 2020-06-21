import Nav from '../components/Nav';

const CV: React.FC = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <section className="top">
          <div className="link-container">
            <a className="download_link" href="/Louis_Moselhi_CV.pdf" download="Louis Moselhi CV">
              Download
            </a>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .container {
            background: linear-gradient(to bottom, #031957 20%, #8400bf 99%, black 100%);
          }
          a {
            font-size: 50px;
            padding: 20px;
            color: white;
          }
          .link-container {
            display: grid;
            flex-direction: column;
          }
          .top {
            width: 100%;
          }
          a:hover {
            color: #f46036;
          }
        `}
      </style>
    </>
  );
};

export default CV;
