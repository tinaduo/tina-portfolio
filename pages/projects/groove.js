import NavBar from "@/components/NavBar";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import HeaderWrapper from "@/components/HeaderWrapper";
import project from "@/data/project.json";
import Link from "next/link";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Stack from "@/components/Stack";

const Groove = () => {
  const images = [
    {
      id: 1,
      img: "/images/groove/chladni_1.png",
    },
    {
      id: 2,
      img: "/images/groove/chladni_2.png",
    },
  ];

  return (
    <>
      <Head>
        <title>groove</title>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar />
      <div>
        <img
          className="w-screen h-[538px] object-cover"
          src="/images/groove/groove-hero-img.jpg"
        />
        {project.project.slice(2, 3).map((project, index) => (
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
      <div className="flex flex-col max-w-6xl mx-auto p-6 text-gray-800 font-neuemontreal text-xl gap-[164px]">
        <section className="flex-col justify-start items-start gap-3 flex mt-[175px]">
          <h1 className="text-justify text-black text-2xl font-medium font-roobert capitalize">
            Introduction
          </h1>
          <p className="text-black text-xl">
            Today, people have access to an enormous variety of music from
            across the globe, spanning countless genres and styles. <br />
            <br />
            While this wealth of options creates exciting opportunities for
            discovery, it can overwhelm listeners trying to find music that
            matches their mood or activities.
          </p>
        </section>

        <section className="flex-col justify-start items-start gap-1 flex">
          <h2 className="text-justify text-[#db0132] text-2xl font-medium font-roobert uppercase">
            Challenge
          </h2>
          <p className="text-4xl">
            How might we help
            <strong className="mx-1">music enthusiasts</strong> navigate the
            vast world of music to
            <strong className="mx-1">discover tracks</strong>
            that <strong className="mx-1">perfectly align</strong> with their
            <strong className="mx-1">moods and activities?</strong>
          </p>
        </section>

        <div className="flex-row gap-2 flex items-center  justify-center">
          <div className="flex-col justify-start items-start gap-2 flex">
            <h2 className="text-justify text-black text-2xl font-medium font-roobert capitalize">
              Solution
            </h2>
            <h1 className="text-black text-4xl font-medium font-roobert">
              Discover music that fits your vibe with Groove.
            </h1>
            <p className="text-black text-xl font-normal font-neuemontreal">
              Groove is a social media app for music enthusiasts, fostering
              connection and collaboration through song reviews, curated
              playlists, and engaging discussions that celebrate the joy of
              music discovery
            </p>
          </div>
          <img width={350} src="/images/groove/groove-screenshot.png" />
        </div>

        <div className="flex-col justify-start items-start gap-7 inline-flex">
          <div className="flex-col justify-start items-start gap-3.5 flex">
            <h1 className=" text-justify text-black text-2xl font-medium font-roobert capitalize">
              Design
            </h1>
            <h6 className=" text-black text-[32px] font-medium font-roobert">
              Creating a seamless and intuitive experience
            </h6>
            <p className=" text-black text-xl font-normal  font-neuemontreal">
              The primary flow was designed with first-time users in mind,
              ensuring the key features were easy to discover while maintaining
              a clean and intuitive interface. By adhering to specific product
              constraints, a focused and user-friendly approach was established:
            </p>
          </div>
          <div className=" flex-col justify-start items-start gap-1 flex">
            <div className=" justify-start items-center gap-2 inline-flex">
              <div data-svg-wrapper className="relative">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_369_590)">
                    <rect
                      x="3"
                      y="3"
                      width="20"
                      height="20"
                      rx="10"
                      fill="#FCFCFC"
                    />
                    <path
                      d="M13 3C7.48606 3 3 7.48606 3 13C3 18.5139 7.48606 23 13 23C18.5139 23 23 18.5139 23 13C23 7.48606 18.5139 3 13 3ZM18.2043 9.64856L11.7428 17.3409C11.6719 17.4253 11.5837 17.4935 11.4842 17.5409C11.3846 17.5882 11.2761 17.6136 11.1659 17.6154H11.1529C11.0451 17.6153 10.9385 17.5926 10.84 17.5487C10.7415 17.5048 10.6534 17.4407 10.5813 17.3606L7.81202 14.2837C7.74169 14.2091 7.68698 14.1212 7.65111 14.0251C7.61524 13.9291 7.59892 13.8268 7.60313 13.7244C7.60733 13.622 7.63197 13.5214 7.67559 13.4286C7.71922 13.3359 7.78094 13.2527 7.85715 13.1842C7.93336 13.1156 8.0225 13.0629 8.11935 13.0293C8.21619 12.9957 8.31878 12.9817 8.42109 12.9883C8.5234 12.9949 8.62336 13.0219 8.7151 13.0676C8.80683 13.1134 8.8885 13.177 8.95529 13.2548L11.1327 15.674L17.0264 8.65913C17.1586 8.50629 17.3457 8.41161 17.5471 8.39555C17.7486 8.3795 17.9483 8.44337 18.103 8.57335C18.2577 8.70333 18.3551 8.88899 18.3741 9.09018C18.393 9.29138 18.3321 9.49196 18.2043 9.64856Z"
                      fill="#6FC94F"
                    />
                  </g>
                  <rect
                    x="1.8"
                    y="1.8"
                    width="22.4"
                    height="22.4"
                    rx="11.2"
                    stroke="#FDFDFD"
                    stroke-width="2.4"
                  />
                  <defs>
                    <clipPath id="clip0_369_590">
                      <rect
                        x="3"
                        y="3"
                        width="20"
                        height="20"
                        rx="10"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h5 className="text-black text-xl font-medium font-roobert uppercase">
                The app is
              </h5>
            </div>
            <ul className="pl-10 text-black text-xl list-disc font-normal font-neuemontreal">
              <li>A tool for personalized music discovery.</li>
              <li>Centered around user reviews and recommendations.</li>
              <li>Designed to foster community engagement.</li>
            </ul>
          </div>
          <div className="flex-col justify-start items-start gap-1 flex">
            <div className=" justify-start items-center gap-2 inline-flex">
              <div data-svg-wrapper>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20ZM6.83594 6.83594C7.20312 6.46875 7.79687 6.46875 8.16016 6.83594L9.99609 8.67188L11.832 6.83594C12.1992 6.46875 12.793 6.46875 13.1562 6.83594C13.5195 7.20312 13.5234 7.79687 13.1562 8.16016L11.3203 9.99609L13.1562 11.832C13.5234 12.1992 13.5234 12.793 13.1562 13.1562C12.7891 13.5195 12.1953 13.5234 11.832 13.1562L9.99609 11.3203L8.16016 13.1562C7.79297 13.5234 7.19922 13.5234 6.83594 13.1562C6.47266 12.7891 6.46875 12.1953 6.83594 11.832L8.67188 9.99609L6.83594 8.16016C6.46875 7.79297 6.46875 7.19922 6.83594 6.83594Z"
                    fill="#DB0132"
                  />
                </svg>
              </div>
              <h5 className="text-black text-xl font-medium font-roobert uppercase">
                The app is not
              </h5>
            </div>
            <ul className="pl-10 text-black text-xl list-disc font-normal font-neuemontreal">
              <li>Overloaded with unnecessary features.</li>
              <li>A generic music streaming platform.</li>
              <li>omplicated or overwhelming to navigate</li>
            </ul>
            <img className="mt-12" src="/images/groove/groove_sitemap.png" />
            <p className="text-center text-black/75 text-sm font-normal font-departure">
              A site map that outlines the structure and hierarchy of Groove,
              guiding users through a personalized onboarding process and
              creating their first review.
            </p>
          </div>
        </div>
        <section className="flex-col justify-start items-start gap-3 flex">
          <div className="flex-col justify-start items-start gap-3.5 flex">
            <h6 className="text-justify text-black text-2xl font-medium font-roobert capitalize">
              Creating the Brand
            </h6>
            <h1 className="text-black text-[32px] font-medium font-roobert">
              Retro Aesthetic Approach
            </h1>
            <p className="text-black text-xl font-normal font-neuemontreal">
              Inspired by music's vibrant energy and diverse genres, Groove
              delivers an experience that celebrates discovery and connection
              through sound. The design combines liveliness with simplicity,
              making it both inviting and easy to use. With friendly, engaging
              copy, we've created a welcoming space where music lovers can
              explore new tunes and feel right at home.
            </p>
            <img src="/images/groove/styleguide_groove.png" />
          </div>
        </section>

        <section className="flex-row justify-between items-start gap-3 flex">
          <div className="flex-col justify-start items-start gap-3.5 flex">
            <div className="flex flex-row justify-between gap-6">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cardDimensions={{ width: 400, height: 500 }}
                cardsData={images}
              />
            </div>
            <p className="text-center text-black/75 text-sm w-full font-departure mt-4">
              Chladni Figures (1787)
            </p>
          </div>
          <div className="flex-col justify-start items-start gap-3.5 flex">
            <div className="flex-col justify-start items-start gap-3 flex ml-16">
              <h6 className="text-black text-2xl font-medium font-roobert capitalize">
                Logo
              </h6>
              <p className="text-black text-xl font-normal font-neumontreal">
                Groove's logo features a simple yet meaningful abstract design
                inspired by sound wave patterns and Chladni Figures from 1787.
                Like vibrating music creating patterns on surfaces, the logo
                visualizes how sound waves move through materials. Its flowing
                lines represent the dynamic nature of music while symbolizing
                how Groove connects different musical genres and communities.
              </p>
            </div>
            <div className="flex-col w-fit flex ml-16">
              <img width={153} src="/images/groove/groove-logo.svg" />
              <p className="text-center text-black/75 text-sm font-normal font-departure mt-2">
                Groove’s Logo
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <h6 className="text-justify text-black text-2xl font-medium font-roobert capitalize">
              Mascots
            </h6>
            <p className="text-black text-xl font-normal font-neuemontreal">
              Utilizing the playful aspect of round shapes and colours. These
              Mascots help guide users through the experience, becoming their
              friend for the long journey that lies ahead.
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 justify-between gap-y-12 flex-wrap">
            <div>
              <img width={242} src="/images/groove/retrobetsy.gif" />
              <p className="w-[244px] text-center text-black/75 text-2xl font-semibold font-roobert">
                Retro Betsy
              </p>
            </div>
            <div>
              <img width={242} src="/images/groove/chill_jill.gif" />
              <p className="w-[244px] text-center text-black/75 text-2xl font-semibold font-roobert">
                Chill Jill
              </p>
            </div>
            <div>
              <img width={242} src="/images/groove/bluesy_judy.gif" />
              <p className="w-[244px] text-center text-black/75 text-2xl font-semibold font-roobert">
                Bluesy Judy
              </p>
            </div>
            <div>
              <img width={242} src="/images/groove/boombox_brody.gif" />
              <p className="w-[244px] text-center text-black/75 text-2xl font-semibold font-roobert">
                Boombox Brody
              </p>
            </div>
            <div>
              <img width={242} src="/images/groove/boppy_poppy.gif" />
              <p className="w-[244px] text-center text-black/75 text-2xl font-semibold font-roobert">
                Boppy Poppy
              </p>
            </div>
            <div>
              <img width={242} src="/images/groove/twangy_tanner.gif" />
              <p className="w-[244px] text-center text-black/75 text-2xl font-semibold font-roobert">
                Twangy Tanner
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex-col justify-start items-center gap-[18px] inline-flex">
            <h4 className=" text-center text-black text-[32px] font-medium font-roobert">
              Notable explorations in design
            </h4>
            <p className=" text-center text-black text-xl font-normal font-neuemontreal">
              After a comprehensive usability test of our high-fidelity
              prototype for the music review platform, the aim of was to gather
              actionable feedback to enhance user experience and optimize
              platform functionality.
            </p>
          </div>
          <div className="flex-row justify-between items-center gap-6 mt-6 flex">
            <div className="w-[455px]">
              <h6 className=" text-black text-2xl font-medium font-roobert">
                Background Readability
              </h6>
              <p className="text-black text-xl font-normal font-neuemontreal">
                The readability of the Tunebox welcome screen was improved by
                adjusting the background opacity and text contrast.
                <br />
                <br />
                These changes enhanced overall accessibility and user
                experience.
              </p>
            </div>
            <ImgComparisonSlider>
              <figure slot="first" class="before">
                <img width="100%" src="/images/groove/groove-before-img.png" />
                <figcaption className="bg-[#FBF8F8] p-4 text-center text-black/75 text-sm w-full font-departure">
                  before
                </figcaption>
              </figure>
              <figure slot="second" class="after">
                <img slot="second" src="/images/groove/groove-after-img.png" />
                <figcaption className="text-[#2e3452] p-4 text-center text-black/75 text-sm w-full font-departure">
                  after
                </figcaption>
              </figure>
            </ImgComparisonSlider>
          </div>
        </section>

        <section>
          <div className="flex-col justify-start items-start gap-16 inline-flex">
            <div className=" flex-col justify-start items-start gap-3 flex">
              <h1 className=" text-justify text-black text-2xl font-medium font-roobert capitalize">
                Learnings and future plans
              </h1>
              <p className=" text-black text-xl font-normal  font-neuemontreal">
                During Groove's development, I discovered that understanding
                user preferences was crucial for delivering personalized
                experiences. The analysis of listening habits and user feedback
                helped create a more tailored music discovery system.
                <br />
                <br />I also learned that the key to user engagement lies in
                striking the right balance between simplicity and robust
                features, ensuring the platform remains approachable.
              </p>
            </div>
            <div className="">
              <p class="text-black text-xl font-normal font-neuemontreal">
                Groove has developed alongside my growth as a designer, but
                there is still more to be desired.
                <br />
                <br />
                For example, I’d love to explore:
                <br />
              </p>
              <ul class="pl-10 text-black text-xl list-disc font-neuemontreal">
                <li>
                  Implementing advanced AI recommendations based on listening
                  habits and mood
                </li>
                <li>
                  Expanding social features to include group playlists and
                  collaborative reviews.
                </li>
                <li>
                  Enhancing personalization with user-specific music insights
                  and activity-based suggestions.
                </li>
                <li>
                  Integrating cross-platform support for seamless music
                  discovery across devices.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex-col justify-center items-center flex gap-3 mb-[200px]">
          <img
            className="w-[74px] h-[74px]"
            src="/images/groove/retrobetsy.gif"
          />
          <h1 className="text-center text-black text-7xl font-roobert">
            Thank you!
          </h1>
          <div className="text-center ">
            <p class="text-black/60 text-2xl font-normal font-neuemontreal">
              If you’re interested in the process. <br />
              Feel free to look through the{" "}
              <Link
                href="https://www.figma.com/design/0UYNoXyVzwVE2tRTtKMEFf/groove-(old)?node-id=183-262&t=itQ0Fgu1L2fvQXdB-1"
                className="text-black/60 text-2xl font-normal font-neuemontreal underline"
              >
                Figma file
              </Link>{" "}
              :)
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Groove;
