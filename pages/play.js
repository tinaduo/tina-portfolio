import NavBar from "@/components/NavBar";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import PlayProjectWrapper from "@/components/PlayProjectWrapper";
import projects from "/data/playprojects";

const Play = () => {
  return (
    <>
      <Head>
        <title>play</title>
        <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar />
      <div className="flex flex-col justify-start mx-[120px]">  
        <div className="flex flex-col justify-start items-start gap-[18px] w-full mb-28 mt-[169px]">
          <h1 className=" text-black text-8xl font-normal font-roobert capitalize">
            Playground
          </h1>
          <p className="text-[#939396] text-3xl font-normal font-neuemontreal w-[620px]">
            Some kind of description
          </p>
        </div>
      <div className="flex flex-wrap gap-10 justify-between mb-28">
        {projects.projects.map((project, index) => (
          <PlayProjectWrapper
            key={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            date={project.date}
            src={project.src}
            page={project.page}
          />
        ))}
      </div>
            </div>
      <Footer />
    </>
  );
};

export default Play;
