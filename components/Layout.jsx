import React from 'react';
import Head from 'next/head';
import { withRedux } from '../lib/with-redux-store';

function Layout({ children }) {
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
        <link href="/website_logo.svg" rel="icon" />
        <link rel="mask-icon" href="/website_logo.svg" color="#fff" />
        <link href="/fonts/styles.css" rel="stylesheet" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <div className="layout">{children}</div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Raleway', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default withRedux(Layout);
