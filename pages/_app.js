// pages/_app.js
import React from 'react';
import Head from 'next/head';
// Statics
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Travel Japan</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
