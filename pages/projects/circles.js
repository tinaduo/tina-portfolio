import NavBar from "@/components/NavBar";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import HeaderWrapper from "@/components/HeaderWrapper";
import project from "@/data/project.json";
import ChatBubble from "@/components/ChatBubble";
import { motion } from "framer-motion";

const Circles = () => {
  return (
    <>
      <Head>
        <title>circles</title>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar />
      <div>
        <img
          className="w-screen h-[538px] object-cover"
          src="/images/circles/circles-hero-img.jpg"
        />
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
            figmaLink={project.figmaLink}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center font-neuemontreal text-xl gap-[164px] mt-24">
        <div className="flex flex-col max-w-6xl mx-auto p-6 gap-[30px]">
          <section className="mb-[164px]">
            <h2 className="text-2xl font-medium font-roobert capitalize ">
              Introduction
            </h2>
            <p>
              In today's digital age, sharing moments with friends has become
              increasingly fragmented across multiple social platforms. While we
              can instantly share photos with hundreds of followers, the
              intimate experience of sharing memories with our closest friends
              often gets lost in the noise.
            </p>
          </section>

          <section className="my-[30px]">
            <h2 className="text-justify text-[#db0132] text-2xl font-medium font-roobert uppercase">
              challenge
            </h2>
            <p className="text-4xl">
              <strong className="font-medium">How might we</strong> build an
              <strong className="font-medium">
                {" "}
                intimate photo-sharing space{" "}
              </strong>
              that makes it <strong className="font-medium">easier </strong>
              to
              <strong className="font-medium"> share moments</strong> with
              <strong className="font-medium"> close friends?</strong>
            </p>
          </section>
          <br />

          <section className="mb-8 flex flex-row justify-between items-center">
            <div className="gap-3.5 flex flex-col justify-start">
              <h2 className="text-2xl font-medium font-roobert capitalize">
                Solution
              </h2>
              <h3 className="text-4xl font-medium font-roobert">
                Circles: Share Your Most Cherished Moments with Close Friends
              </h3>
              <p className="w-[450px]">
                Circles is a dedicated photo-sharing app that brings back the
                joy of sharing meaningful moments with your closest friends. It
                creates an intimate space where memories can be cherished within
                trusted groups, combining the best aspects of private photo
                albums with social connectivity.
              </p>
            </div>
            <img className="w-[350px]" src="/images/circles/circles-home.png" />
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-black text-2xl font-medium font-roobert capitalize">
              Research
            </h2>
            <h3 className="text-4xl font-medium font-roobert">
              Understanding the problem
            </h3>
            <p>
              Through conducting interviews and surveys with potential users, we
              gathered insights about their photo-sharing habits, the challenges
              they face with existing platforms, and their desires for a more
              intimate and meaningful way to share memories with close friends.
            </p>

            <section className="flex flex-col">
              <h4 className="text-black text-2xl font-medium font-roobert mt-16 mb-12">
                Key moments revealed several emerging patterns that guided my
                direction:
              </h4>
              <div className="flex flex-col gap-24">
                <div className="flex flex-col gap-3.5">
                  <ChatBubble
                    className="my-14"
                    number={1}
                    message="So I shared these pics with my friend on Messenger and cleared them from my phone. Later she wanted them on iMessage instead, but when I tried getting them back from Messenger, they came out all blurry and pixelated."
                    isRight={false}
                  />
                  <p className="ml-6 mr-24 text-black/75 text-sm font-departure">
                    Users face quality degradation issues when sharing photos
                    through messaging platforms, and content ends up scattered
                    across different platforms⁠.
                  </p>
                </div>
                <div className="flex flex-col justify-end gap-3.5">
                  <ChatBubble
                    number={2}
                    message="Friends using different messaging platforms like WhatsApp and iMessage, photo sharing becomes increasingly complex."
                    isRight={true}
                  />
                  <p className="mr-6 ml-24 text-black/75 text-sm font-departure">
                    The use of multiple messaging apps across friend groups
                    makes sharing and organizing photos a challenging and
                    disorganized process.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-20">
                <p>
                  Research identified key pain points in photo sharing:
                  technical issues like file sizes and quality degradation,
                  storage limitations due to cost and privacy concerns, social
                  anxiety around public sharing, and content fragmentation
                  across multiple platforms. Users lack a centralized way to
                  share event photos among friend groups.
                </p>
              </div>
              <h3 className="text-2xl font-medium font-roobert mt-8">
                Key Takeaways
              </h3>
              <ul className="list-disc pl-5">
                <li>
                  Users need a better photo-sharing experience that's fast,
                  high-quality, and easy to use with efficient storage.
                </li>
                <li>
                  Users want a centralized space to share photos with close
                  friends, free from the noise of public platforms.
                </li>
              </ul>
            </section>
          </section>
          <section className="flex flex-col gap-2 ">
            <h1 className="text-black text-4xl font-medium font-roobert capitalize">
              Design
            </h1>
            <img
              className="w-full pt-4"
              src="/images/circles/circles-screenshots.png"
            />
          </section>
        </div>
      </div>

      <section className="flex flex-col items-center mb-[164px]">
        <motion.img
          whileHover={{ scale: 0.85 }}
          className="mix-blend-darken w-[74px] h-[74px]"
          src="/images/circles/circles-logo.svg"
        />
        <h1 className="text-center text-8xl font-roobert mb-8">Thank You!</h1>
        <p className="text-center text-2xl font-neuemontreal">
          If you'd like to explore the design process, feel free to check out
          the
          <a
            className="pl-2 underline hover:text-[#db0132]"
            href="https://www.figma.com/design/i3M7xtqIOHUqjQnlre0b7n/circles?node-id=309-456&t=j9o8RsohSNBq5OP1-1"
          >
            Figma file.
          </a>
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Circles;
