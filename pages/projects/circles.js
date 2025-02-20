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
        <img className="w-screen h-[538px] object-cover" src="/images/circles/circles-hero-img.jpg" />
        {project.project.slice(1, 2).map((project, index) => (
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
