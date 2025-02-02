import NavBar from '@/components/NavBar';
import React from 'react';
import Head from 'next/head';

const About = () => {
    return (
    <>
      <Head>
        <title>about</title>
        <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar/>
      </>
    );
};

export default About;