/* eslint-disable @next/next/no-css-tags */
import React, { useState } from 'react'
import Head from 'next/head'


const DarkTheme = ({ children }) => {
  const [Theme, setTheme] = useState("dark");
  return (
    <>
      <Head>
        <link rel="stylesheet" href={`/css/${Theme}.css`} />
      </Head>
      {children}
      
    </>
  );
};

export default DarkTheme