import NavBar from "@/components/NavBar";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import HeaderWrapper from "@/components/HeaderWrapper";
import project from "@/data/project.json";
import FlipCard from "@/components/FlipCard";
import ChatBubble from "@/components/ChatBubble";
import BounceCards from "@/components/BounceCards";

const Harmony = () => {
  const images = [
    "/images/harmony/maria-persona.png",
    "/images/harmony/david-persona.png",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  return (
    <>
      <Head>
        <title>harmony</title>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar />
      <img
        className="w-screen h-[538px] object-cover"
        src="/images/harmony/harmony-hero-img.jpg"
      />
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
      <div className="flex flex-col justify-center items-center font-neuemontreal text-xl gap-[164px]">
        <div className="max-w-6xl mx-auto p-6">
          <section className="mb-[164px]">
            <h2 className="text-2xl font-medium font-roobert capitalize ">
              Introduction
            </h2>
            <p>
              Caregiving often requires balancing a wide range of
              responsibilities, including:
            </p>
            <ul className="list-disc pl-5">
              <li>Managing medication schedules</li>
              <li>Coordinating doctor’s appointments</li>
              <li>Keeping the whole family informed</li>
            </ul>
            <br />
            <p className="mb-8">
              All of this while striving to maintain personal well-being. For
              more than <strong>five million Canadians</strong>, this daily
              challenge is particularly pronounced in underrepresented
              communities, where resources are limited and support networks can
              feel distant or out of reach.
            </p>
          </section>

          <section className="my-[164px]">
            <h2 className="text-justify text-[#db0132] text-2xl font-medium font-roobert uppercase">
              challenge
            </h2>
            <p className="text-4xl">
              <strong className="font-medium">How can we</strong> help
              <strong className="font-medium"> caregivers</strong> provide
              <strong className="font-medium">
                {" "}
                consistent, high-quality care
              </strong>{" "}
              while
              <strong className="font-medium">
                {" "}
                reducing stress and preventing burnout?
              </strong>
            </p>
          </section>
          <br />

          <section className="mb-8 flex flex-row justify-between items-center">
            <div className="gap-3.5 flex flex-col justify-start">
              <h2 className="text-2xl font-medium font-roobert capitalize">
                Solution
              </h2>
              <h3 className="text-4xl font-medium font-roobert">
                Simplifying Caregiving with Harmony
              </h3>
              <p className="w-[450px]">
                Harmony is a web app designed to reduce the overwhelm caregivers
                face. With AI-powered tools and collaborative features. The app
                helps ensure high-quality care tailored to the unique needs of
                loved ones, reducing stress and supporting balance.
              </p>
            </div>
            <img className="w-[350px]" src="/images/harmony/harmony-1.png" />
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-black text-2xl font-medium font-roobert capitalize">
              Research
            </h2>
            <h3 className="text-4xl font-medium font-roobert">
              Understanding the problem
            </h3>
            <p>
              Through conducted 12 interviews to gather insights from caregivers
              on the challenges they face, how they manage caregiving tasks, and
              their goals for improving their caregiving routines and overall
              well-being.
            </p>

            <section className="flex flex-col">
              <h4 className="text-black text-2xl font-medium font-roobert mt-16 mb-12">
                Several key patterns emerged from my research that shaped the
                project's direction:
              </h4>
              <div className="flex flex-col gap-24">
                <div className="flex flex-col gap-3.5">
                  <ChatBubble
                    className="my-14"
                    number={1}
                    message="80% of caregivers experienced emotional stress or felt overwhelmed by the weight of their caregiving duties."
                    isRight={false}
                  />
                  <p className="ml-6 mr-24 text-black/75 text-sm font-departure">
                    A large majority of caregivers reported feeling overwhelmed
                    by the emotional demands of caregiving, especially when
                    balancing medical needs with other life commitments.
                  </p>
                </div>
                <div className="flex flex-col justify-end gap-3.5">
                  <ChatBubble
                    number={2}
                    message="60% of caregivers struggled with navigating the healthcare system and coordinating medical appointments."
                    isRight={true}
                  />
                  <p className="mr-6 ml-24 text-black/75 text-sm font-departure">
                    Caregivers struggled to navigate the healthcare system, from
                    scheduling appointments to communicating with medical
                    professionals. This added complexity made it harder to
                    provide effective care.
                  </p>
                </div>
                <div className="flex flex-col gap-3.5">
                  <ChatBubble
                    number={3}
                    message="70% of caregivers reported challenges in managing their time and maintaining a healthy work-life balance."
                    isRight={false}
                  />
                  <p className="ml-6 mr-24 text-black/75 text-sm font-departure">
                    Caregivers struggled to balance caregiving duties with work
                    and personal life, leading to stress and burnout.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-20">
                <p>
                  Interviews with caregivers revealed three key challenges:
                  <strong className="font-medium">
                    {" "}
                    emotional strain, time management struggles, and
                    communication breakdowns.
                  </strong>{" "}
                  Many felt overwhelmed by the emotional demands of caregiving,
                  struggled to balance their responsibilities with work and
                  personal life, and faced difficulties navigating the
                  healthcare system. These insights highlight the urgent need
                  for better scheduling, communication, and collaboration tools.
                </p>
              </div>
              <h3 className="text-4xl font-medium font-roobert mt-8">
                Design Solutions
              </h3>
              <ul className="list-disc pl-5">
                <li>AI-Powered scheduling & Task management tools.</li>
                <li>Streamlined task management to reduce cognitive load.</li>
                <li>
                  Collaborative tools to enhance family support systems and
                  communication.
                </li>
              </ul>

            </section>

            <section className="flex flex-col gap-3.5 my-28">
              <div className="flex flex-col">
                <h3 className="text-4xl font-medium font-roobert">
                  Competitive Analysis
                </h3>
                <p>
                  The caregiving app market is evolving to provide more than
                  just task management, focusing on communication, health
                  tracking, and community support. Competitors like CircleOf,
                  CareMobi, and Ianacare each offer unique features, from secure
                  messaging to resource sharing and privacy-focused tools.
                </p>
              </div>
              <img
                className="pt-2"
                src="/images/harmony/COMPETITIVE_ANALYSIS.png"
              />
              <p className="font-departure text-center text-black/80 text-sm font-normal">
                This analysis highlights key strengths and gaps in existing
                solutions.
              </p>
            </section>

            <h3 className="text-4xl font-medium font-roobert mt-8">
              Wireframes
            </h3>

            <section className="flex flex-col gap-3.5 mb-8">
              <div className="flex flex-row justify-between items-center gap-3.5">
                <img
                  className="w-[200px]"
                  src="/images/harmony/harmonycall-lofi.png"
                />
                <img
                  className="w-[200px]"
                  src="/images/harmony/harmonyhome-lofi.png"
                />
                <img
                  className="w-[200px]"
                  src="/images/harmony/harmonycalendar-lofi.png"
                />
                <img
                  className="w-[200px]"
                  src="/images/harmony/harmonyjournal-lofi.png"
                />
              </div>
              <p className="text-center text-black/75 text-sm font-normal font-departure w-full">
                Lofi wireframes
              </p>
            </section>

            <section className="flex flex-col gap-3.5">
              <div className="flex flex-row justify-between items-center gap-3.5">
                <img
                  className="w-[200px]"
                  src="/images/harmony/harmonycall-hifi.png"
                />
                <img
                  className="w-[200px]"
                  src="/images/harmony/harmonyhome-hifi.png"
                />
                <img
                  className="w-[200px]"
                  src="/images/harmony/harmonycalendar-hifi.png"
                />
                <img
                  className="w-[200px]"
                  src="/images/harmony/harmonyjournal-hifi.png"
                />
              </div>
              <p className="text-center text-black/75 text-sm font-normal font-departure w-full">
                Hifi wireframes
              </p>
            </section>
          </section>

          <section className="my-[164px]">
            <div className="flex-col justify-start items-start gap-3.5 flex">
              <h6 className="text-justify text-black text-2xl font-medium font-roobert capitalize">
                Creating the Brand
              </h6>
              <h1 className="text-black text-[32px] font-medium font-roobert">
                A Caring Approach
              </h1>
              <p className="text-black text-xl font-normal font-neuemontreal">
                Harmony’s branding reflects community, connection, and care,
                inspired by the fluidity of jellyfish to symbolize community and
                care. A purple palette promotes balance, while diverse secondary
                colors represent caregiving experiences. Clean typography
                ensures clarity and accessibility. The empathetic tone fosters
                connection, with subtle cultural influences enhancing
                relatability. Harmony prioritizes simplicity and thoughtful
                caregiving, creating an intuitive, supportive experience.
              </p>
              <img src="/images/harmony/harmony_styleguide.png" />
            </div>
          </section>

          <section className="mb-8 flex flex-col justify-center items-center">
            <div className="justify-start items-start gap-3.5">
              <div className="text-4xl font-medium font-roobert mb-2">
                Harmony Promotional Materials Designs
              </div>
              <div className="text-black text-xl font-normal mb-2">
                The focus was creating promotional materials that reflect the
                app’s mission of fostering care and connection. The process
                began with brainstorming to determine layouts that would best
                convey Harmony’s values.
              </div>
            </div>
            <div className="flex-col justify-end items-center gap-6 inline-flex mb-4">
              <img className="w-fit" src="/images/harmony/image 8.png" />
              <p className="text-center text-black/75 text-sm font-normal font-departure">
                Brainstorming different business cards designs unique layouts
                and shapes.
              </p>
            </div>

            <div className="justify-between items-center flex my-28">
              <div className="flex-col justify-start items-start gap-3.5 inline-flex">
                <div className="self-stretch text-justify text-black text-2xl font-medium font-roobert capitalize">
                  Business Cards Design
                </div>
                <div className="pr-8 text-black text-xl font-normal ">
                  Harmony's business cards feature a vertical layout with a
                  minimalist design in Harmony Purple. The front displays the
                  logo and tagline "Your Partner in Care," while the back
                  includes contact details.
                </div>
              </div>
              <img
                className="w-[493px] h-[396px]"
                src="/images/harmony/image 7.png"
              />
            </div>

            <div className="justify-between items-center flex flex-col my-28">
              <div className="flex-col gap-3.5 flex">
                <div className="text-black text-2xl font-medium font-roobert capitalize">
                  PVC Lanyards Design
                </div>
                <div className="pb-4 text-black text-xl font-normal">
                  The lanyard design were kept clean and professional. The strap
                  showcases our signature Harmony purple, paired with a durable
                  glossy PVC badge. Each badge displays the basics—name, contact
                  details, and role—while featuring our logo as a subtle
                  backdrop that reflects what Harmony's all about.
                </div>
              </div>
              <div className="flex w-full h-fit justify-center gap-4">
                <img
                  className="w-[320px] h-fit"
                  src="/images/harmony/harmony_pvc_card.jpeg"
                />
                <div className="flex-col gap-3.5 flex">
                  <FlipCard />
                  <p className="text-center text-black/75 text-sm font-normal font-departure w-full">
                    flip me :D
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-col justify-start items-start flex my-28">
              <div className="text-justify text-black text-2xl font-medium font-roobert capitalize">
                Landing Page Website
              </div>
              <p className="self-stretch text-black text-xl font-normal ">
                Harmony’s landing page is designed to be clean, intuitive, and
                visually engaging, with the goal of encouraging app downloads,
                showcasing key features, and building trust with caregivers.
              </p>
              <img
                className="mb-8"
                src="/images/harmony/customer-landing-page.png"
              />
              <p className="text-center text-black/75 text-sm font-normal font-departure w-full">
                Check out
                <a
                  href="https://www.harmony-care.ca/"
                  className="underline hover:text-[#db0132] pl-2"
                >
                  Harmony’s Landing Page!
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* final prototype section */}
        <section className="mb-8">
          <img className="w-screen h-44" src="/images/black_fadein.png"></img>
          <div className="flex flex-row justify-center items-center h-screen w-screen bg-gradient-to-b from-[#1d1e23] to-[#18191c] text-white">
            <div className="flex flex-col gap-12 pr-24">
              <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-center text-5xl font-medium font-roobert capitalize">
                  Final Prototype
                </h1>
                <p className="text-center text-xl font-normal opacity-70">
                  Caregiving made simple with Harmony.
                </p>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <div className="flex items-center gap-3.5">
                  <div data-svg-wrapper className="relative">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.574 19.4017L12.636 15.4637L11.433 16.6657C10.203 17.8977 9.587 18.5127 8.925 18.3677C8.263 18.2227 7.962 17.4047 7.36 15.7717L5.353 10.3217C4.152 7.06265 3.55 5.43365 4.39 4.59365C5.23 3.75365 6.86 4.35365 10.12 5.55565L15.57 7.56165C17.203 8.16365 18.02 8.46465 18.166 9.12665C18.312 9.78865 17.696 10.4037 16.464 11.6347L15.262 12.8377L19.2 16.7757C19.608 17.1837 19.812 17.3877 19.906 17.6157C20.031 17.9187 20.031 18.2587 19.906 18.5627C19.812 18.7897 19.608 18.9937 19.2 19.4017C18.792 19.8097 18.588 20.0137 18.36 20.1077C18.0568 20.2329 17.7162 20.2329 17.413 20.1077C17.186 20.0137 16.983 19.8097 16.574 19.4017Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-center text-sm font-normal font-departure lowercase">
                    to navigate prototype
                  </p>
                </div>
                <div className="flex items-center gap-3.5">
                  <div data-svg-wrapper>
                    <svg
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.701172"
                        width="27"
                        height="27"
                        rx="3.5"
                        stroke="white"
                      />
                      <path
                        d="M16.01 14.4712C16.86 14.9312 17.325 15.7212 17.405 16.8412L17.585 19.4512H16.355L16.175 16.9162C16.145 16.3962 15.975 15.9762 15.665 15.6562C15.355 15.3362 14.955 15.1762 14.465 15.1762H11.615V19.4512H10.34V8.95117H14.315C15.345 8.95117 16.16 9.23617 16.76 9.80617C17.36 10.3662 17.66 11.1062 17.66 12.0262C17.66 13.1362 17.11 13.9512 16.01 14.4712ZM11.615 10.0912V14.0212H14.315C15.005 14.0212 15.515 13.8312 15.845 13.4512C16.175 13.0712 16.34 12.5962 16.34 12.0262C16.34 11.4562 16.175 10.9912 15.845 10.6312C15.515 10.2712 15.005 10.0912 14.315 10.0912H11.615Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-center text-sm font-normal font-departure lowercase">
                    To Restart
                  </p>
                </div>
              </div>
            </div>
            <iframe
              width="500"
              height="800"
              src="https://embed.figma.com/proto/dRQ3ywleMzjy15UK4yIC9W/harmony-design?page-id=1981%3A6447&node-id=1981-6740&p=f&viewport=541%2C2174%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1981%3A6766&show-proto-sidebar=1&embed-host=share&hide-ui=1"
            ></iframe>
          </div>
          <img className="w-screen h-48" src="/images/black_fadeout.png"></img>
        </section>

        <div className="flex flex-col max-w-6xl mx-auto p-6 gap-[164px]">
          <section className="mt-16">
            <h2 className="text-justify text-black text-2xl font-medium font-roobert capitalize">
              Learnings and Future Directions
            </h2>
            <p>
              During Harmony's development, I discovered that understanding
              caregiver needs was crucial for delivering personalized support.
              The analysis of daily routines and user feedback helped create a
              more tailored caregiving management system.
              <br />
              <br />I also learned that the key to caregiver engagement lies in
              striking the right balance between simplicity and essential
              features, ensuring the platform remains accessible while
              effectively supporting daily caregiving tasks.
            </p>
            <br />
            <p>
              Harmony has evolved alongside my growth as a designer, but there's
              still room for improvement.
              <br />
              Looking ahead, I'd love to explore:
            </p>
            <ul className="list-disc pl-5">
              <li>
                Implementing AI-driven recommendations based on caregiving
                patterns and family needs.
              </li>
              <li>
                Expanding collaboration tools to include shared care plans and
                updates for family teams.
              </li>
              <li>
                Enhancing personalization with tailored insights and
                routine-based suggestions for caregivers.
              </li>
              <li>
                Integrating cross-platform support to ensure seamless care
                coordination across devices.
              </li>
            </ul>
          </section>

          <section className="flex flex-col items-center mb-[164px]">
            <img
              className="mix-blend-darken w-[74px] h-[74px]"
              src="/images/harmony/harmony-mascot.gif"
            />
            <h1 className="text-center text-8xl font-roobert mb-8">
              Thank You!
            </h1>
            <p className="text-center text-2xl">
              If you'd like to explore the design process, feel free to check
              out the
              <a
                className="pl-2 underline hover:text-[#db0132]"
                href="https://www.figma.com/design/rk234jScR2Gp6H0ROqAaBF/harmony-design-(Copy)?node-id=1981-6740&t=TJ2qUGdD5GrKHwPg-1"
              >
                Figma file.
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Harmony;
