import React from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeaderWrapper from "@/components/HeaderWrapper";
import project from "@/data/project.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HarmonyLandingPage = () => {
  const images = [
    "/images/harmony/harmony-landing-ss.jpg",
    "/images/harmony/harmony-landing-ss-2.jpg",
    "/images/harmony/harmony-landing-ss-3.jpg",
    "/images/harmony/harmony-landing-ss-4.jpg",
  ];

  return (
    <>
      <Head>
        <title>harmony landing page</title>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar />
      <div>
        <img
          className="w-screen h-[538px] object-cover"
          src="/images/harmony/harmony-landing-hero-img.jpg"
        />
        {project.project.slice(3, 4).map((project, index) => (
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
        <div className="flex flex-col font-neuemontreal text-xl">
          <div className="max-w-6xl mx-auto p-6">
            <section className="flex flex-col gap-3.5">
              <h2 className="text-justify text-black text-2xl font-medium font-roobert capitalize">
                Overview
              </h2>
              <p className="text-black text-xl font-neuemontreal">
                Harmony's landing page offers a welcoming experience with easy
                navigation. It showcases core features like task automation and
                caregiving schedules through clear visuals and calls to action.
                The layout demonstrates how the app helps caregivers, including
                underrepresented communities. Key sections are easily
                accessible, helping users understand Harmony's benefits quickly.
                The design creates a calm, inviting atmosphere aligned with
                Harmony's mission.
              </p>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img src={src} alt={`Image ${index + 1}`} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </section>
          </div>

          <section className="flex flex-col items-center mb-[164px]">
            <img
              className="mix-blend-darken w-[74px] h-[74px]"
              src="/images/harmony/harmony-mascot.gif"
            />
            <h1 className="text-center text-8xl font-roobert mb-8">
              Thank You!
            </h1>
            <p className="text-center text-2xl">
              If you'd like to explore the website, feel free to check out the{" "}
              <a
                className="underline hover:text-[#db0132]"
                href="https://harmony-care.ca/"
              >
                live site!
              </a>
            </p>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HarmonyLandingPage;
