import React from 'react';
import { withRedux } from '../lib/with-redux-store';
import Nav from './Nav';

function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default withRedux(Layout);
