import ProjectWrapper from "../components/ProjectWrapper";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import projects from "/data/projects";
import Footer from "@/components/Footer";
import AsciiArt from "@/components/AsciiArt";

export default function Home() {
  return (
    <>
      <Head>
        <title>home</title>
        <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar />
      <div className="absolute top-0 right-0 mt-24 hidden md:hidden lg:block xl:block">
        <AsciiArt />
      </div>
      <div className="flex flex-row justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start w-full max-w-7xl">
          <div>
            <div className="flex flex-col justify-start items-start gap-[18px] w-full mb-[100px] sm:mb-[120px] md:mb-[180px] lg:mb-[237px] mt-[80px] sm:mt-[100px] md:mt-[140px] lg:mt-[169px]">
              <h6 className="text-[#939396] text-lg sm:text-xl md:text-2xl font-normal font-departure uppercase">
                Hello! I'm
              </h6>
              <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-normal font-roobert capitalize">
                Tina Duong
              </h1>
              <p className="text-[#939396] text-xl sm:text-2xl md:text-3xl font-normal font-neuemontreal max-w-[550px] w-full">
                Crafting meaningful, intuitive, and engaging human experiences
                in the digital world.
              </p>
            </div>
          </div>
          <div id="work-section" className="w-full mt-12">
            {projects.projects.map((project, index) => (
              <ProjectWrapper
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
      </div>
      <Footer />
    </>
  );
}
