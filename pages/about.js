import NavBar from "@/components/NavBar";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import LivePhoto from "@/components/LivePhoto";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Head>
        <title>about</title>
        <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar />
      <div className="flex flex-row gap-20 justify-start mx-[120px] mt-[100px] mb-28">
        <section>
          <motion.img
            src="/images/stickers/maxmonkey.png"
            alt="max monkey sticker"
            className="absolute left-[40rem] top-[45rem] w-[150px] z-10 object-cover cursor-grab"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 1.1, rotate: 10 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}

          />
          <LivePhoto
            imageUrl="/images/IMG_3620.jpeg"
            videoUrl="/images/IMG_3620.mov"
            width={450}
            height={450}
          />
          <p className="font-departure text-center text-black/80 text-sm font-normal mt-4">
            hover me ^^
          </p>
        </section>
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
            I’m a UX/UI designer passionate about creating intuitive and
            community-driven digital experiences. My goal is to design with
            purpose—helping people navigate technology in a way that feels
            natural, inclusive, and meaningful.
          </p>

          <div className="flex-col justify-start items-start gap-4 flex">
            <h1 className="text-justify text-black text-3xl font-normal font-roobert">
              Why design? & a bit about me.
            </h1>
            <p className="text-[#3b3d41] text-xl font-medium font-neuemontreal">
              Design isn’t just about aesthetics—it’s about problem-solving.
              Growing up in an immigrant household, I saw firsthand how
              technology could be both a barrier and a bridge. This shaped my
              approach to design: accessibility and user-centered thinking come
              first. I thrive on crafting experiences that simplify complex
              processes, ensuring that no one feels left out in the digital
              world.
              <br />
              <br />
              Beyond design, I find inspiration in culture, storytelling, and
              human connections. Whether it’s through my work or everyday
              conversations, I love uncovering what makes people tick and
              translating that into impactful digital solutions.
            </p>
          </div>

          {/* <div className="flex-col justify-start items-start gap-4 flex">
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
          </div> */}

          <div className="flex-col justify-start items-start gap-4 flex">
            <h1 className="text-justify text-black text-3xl font-normal font-roobert">
              My current favourites.
            </h1>
            <ul className="list-disc text-[#3b3d41] text-xl font-medium font-neuemontreal ml-4">
              <li>Books: Battle Royale Remastered</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
