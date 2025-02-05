import NavBar from "@/components/NavBar";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import HeaderWrapper from "@/components/HeaderWrapper";
import project from "@/data/project.json";

const Circles = () => {
  return (
    <>
      <Head>
        <title>circles</title>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar />
      <div>
        <img className="w-screen h-[538px]" src="/images/monkey-dancing.gif" />
        {project.project.slice(0, 1).map((project, index) => (
          <HeaderWrapper
            key={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            role={project.role}
            tools={project.tools}
            startDate={project.startDate}
            endDate={project.endDate}
            year={project.year}
            minutes={project.minutes}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Circles;
