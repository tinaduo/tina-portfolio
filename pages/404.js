import React from 'react';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


const Custom404 = () => {
    return (
        <>
        <Head>
            <title>404</title>
            <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />
        </Head>
        <div className='h-screen flex flex-col justify-between'>
            <NavBar/>
                <div className='flex flex-col justify-center items-center gap-16'>
                    <h1 className=" text-black text-8xl font-normal font-roobert capitalize">404 - Page Not Found</h1>
                    <p className="text-[#939396] text-3xl font-normal font-neuemontreal">Sorry, the page you are looking for does not exist.</p>
                </div>
            <Footer/>
        </div>
        </>
    );
};

export default Custom404;