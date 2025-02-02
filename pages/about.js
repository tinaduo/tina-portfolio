import NavBar from "@/components/NavBar";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>about</title>
        <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar />
      <div className="flex flex-row gap-20 justify-start mx-[120px] mt-[100px] mb-28">
        <img
          className="w-[455px] h-[455px]"
          src="https://via.placeholder.com/455x455"
        />
        <div className="flex flex-col gap-9">
          <div className="lol">
            <h6 className="text-justify text-[#939396] text-2xl font-normal font-departure uppercase">
              Hello! I’m
            </h6>
            <h1 className="text-justify text-black text-9xl font-normal font-roobert capitalize">
              Tina!
            </h1>
            <p className=" text-black text-[32px] font-normal font-roobert">
              Currently @ BCIT studying Digital Design and Development
            </p>
          </div>

          <p className="w-[785px] text-[#3b3d41] text-xl font-medium font-neuemontreal">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>

          <div className="flex-col justify-start items-start gap-4 flex">
            <h1 className="text-justify text-black text-3xl font-normal font-roobert">
              Why design? & a bit about me.
            </h1>
            <p className="text-[#3b3d41] text-xl font-medium font-neuemontreal">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex.
              <br />
              <br />
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex.
            </p>
          </div>

          <div className="flex-col justify-start items-start gap-4 flex">
            <h1 className="text-justify text-black text-3xl font-normal font-roobert">
              2 things that's not on my resume but worth mentioning.
            </h1>
            <p className=" text-[#3b3d41] text-xl font-medium font-neuemontreal">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex.
              <br />
              <br />
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex.
            </p>
          </div>

                    <div className="flex-col justify-start items-start gap-4 flex">
            <h1 className="text-justify text-black text-3xl font-normal font-roobert">
              My current favourites.
            </h1>
                <ul className="list-disc text-[#3b3d41] text-xl font-medium font-neuemontreal ml-4">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
