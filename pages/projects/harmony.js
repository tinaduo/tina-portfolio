import NavBar from "@/components/NavBar";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import HeaderWrapper from "@/components/HeaderWrapper";
import project from "@/data/project.json";

const Harmony = () => {
  return (
    <>
      <Head>
        <title>harmony</title>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar />
      <img
        className="w-screen h-[538px] object-cover"
        src="/images/harmony-cover-img.jpg"
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
      <div className="max-w-6xl mx-auto p-6 text-gray-800 font-neuemontreal text-xl gap-[164px]">
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
            All of this while striving to maintain personal well-being. For more
            than five million Canadians, this daily challenge is particularly
            pronounced in underrepresented communities, where resources are
            limited and support networks can feel distant or out of reach.
          </p>
        </section>

        <section className="my-[164px]">
          <h2 className="text-justify text-[#db0132] text-2xl font-medium font-roobert ">
            challenge
          </h2>
          <p className="text-4xl capitalize">
            <strong>How can we</strong> help <strong>caregivers</strong> provide <strong>consistent, high-quality care</strong>
            while <strong>reducing stress and preventing burnout?</strong>
          </p>
        </section>
        <br />

        <section className="mb-8 flex flex-row justify-center items-center">
          <div className="w-[620px] h-[194px] gap-3.5 flex flex-col justify-start">
            <h2 className="text-2xl font-medium font-roobert capitalize">
              Solution
            </h2>
            <h3 className="text-4xl font-medium font-roobert">
              Simplifying Caregiving with Harmony
            </h3>
            <p>
              Harmony is a web app designed to reduce the overwhelm caregivers
              face. With AI-powered tools and collaborative features, Harmony
              provides caregivers with the tools they need to create sustainable
              care routines. The app helps ensure high-quality care tailored to
              the unique needs of loved ones, reducing stress and supporting
              balance.
            </p>
          </div>
          <img className="w-[300px]" src="/images/harmony-1.png" />
        </section>

        <section className="mb-8">
          <h2 className="text-justify text-black text-2xl font-medium font-roobert capitalize">
            Research
          </h2>
          <h3 className="text-4xl font-medium font-roobert">Key Findings</h3>
          <p>
            Through conducting over 10 interviews with caregivers, we identified
            several critical pain points. Our research revealed that caregivers
            from underrepresented communities often face distinct challenges,
            such as language barriers, limited access to resources, and
            heightened emotional stress.
          </p>
          <section className="flex flex-row justify-between items-center my-8">
            <img className="w-[300px]" src="/images/david-persona.png" />
            <img className="w-[300px]" src="/images/maria-persona.png" />
          </section>

          <section>
            <h3 className="text-4xl font-medium font-roobert">
              Competitive Analysis
            </h3>
            <p>
              The caregiving app market is evolving to provide more than just
              task management, focusing on communication, health tracking, and
              community support. Competitors like CircleOf, CareMobi, and
              Ianacare each offer unique features, from secure messaging to
              resource sharing and privacy-focused tools.
            </p>
            <img className="pt-8" src="/images/COMPETITIVE_ANALYSIS.png" />
            <p className="font-departure text-center text-black/30 text-sm font-normal pt-2">
              This analysis highlights key strengths and gaps in existing
              solutions.
            </p>
          </section>
          <h3 className="text-4xl font-medium font-roobert mt-8">
            Insights from Research
          </h3>
          <ul className="list-disc pl-5">
            <li>
              80% of caregivers reported experiencing significant emotional
              stress.
            </li>
            <li>
              Caregivers aged 35-65 struggle to balance caregiving with personal
              life demands.
            </li>
            <li>
              Language barriers severely impact effective communication among
              caregivers and their teams.
            </li>
          </ul>
          <h3 className="text-4xl font-medium font-roobert mt-8">
            Design Solutions
          </h3>
          <ul className="list-disc pl-5">
            <li>AI-powered translation features to overcome language gaps.</li>
            <li>Streamlined task management to reduce cognitive load.</li>
            <li>
              Collaborative tools to enhance family support systems and
              communication.
            </li>
          </ul>
        </section>

        <section className="my-[164px]">
          <h2 className="text-justify text-black text-2xl font-medium font-roobert capitalize">
            Design Process
          </h2>
          <h3 className="text-4xl font-medium font-roobert">
            Crafting an Intuitive Experience
          </h3>
          <p className="mb-8">
            The design focused on simplicity, ensuring that first-time users
            could easily discover the core features while maintaining a clean
            and intuitive interface.
          </p>

          <h3 className="text-4xl font-medium font-roobert mt-8">
            Hifi and Lofi
          </h3>

          <iframe
            className="mb-8"
            width="800"
            height="450"
            src="https://embed.figma.com/design/dRQ3ywleMzjy15UK4yIC9W/harmony-design?node-id=1981-6447&m=dev&embed-host=share"
            allowfullscreen
          ></iframe>
          <iframe
            className="mb-8"
            width="800"
            height="450"
            src="https://embed.figma.com/design/dRQ3ywleMzjy15UK4yIC9W/harmony-design?node-id=0-1&embed-host=share"
            allowfullscreen
          ></iframe>
        </section>

        <section class="mb-16">
          <h2 className="text-4xl font-medium font-roobert">Logo Design</h2>
          <p className="mt-2">
            The Harmony logo draws inspiration from the fluid, interconnected
            movements of jellyfish. Much like these sea creatures, the logo
            embodies flexibility, fluidity, and community — key values of the
            Harmony app.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-medium font-roobert mt-8">
            Colour Palette
          </h2>
          <p className="mt-2">
            The <strong>primary purple</strong>, inspired by the hues of jellyfish, represents
            calm and balance.
          </p>
          <div className="flex flex-row mt-2">
            <div className="w-full h-20 bg-[#7859EA]"></div>
            <div className="w-full h-20 bg-[#937AEE]"></div>
            <div className="w-full h-20 bg-[#AE9BF2]"></div>
          </div>
          <p className="mt-8">
            The <strong>secondary palette</strong> symbolizes the diversity of caregiving
            experiences, from the warmth of reds and pinks to the optimism of
            greens and yellows.
          </p>
          <div className="flex flex-row mt-2">
            <div className="w-full h-20  bg-[#FE7258]" />
            <div className="w-full h-20  bg-[#5B0E00]" />
            <div className="w-full h-20  bg-[#FE83B0]" />
            <div className="w-full h-20  bg-[#761739]" />
            <div className="w-full h-20  bg-[#F7D844]" />
            <div className="w-full h-20  bg-[#4E412B]" />
            <div className="w-full h-20  bg-[#6FC94F]" />
            <div className="w-full h-20  bg-[#19370E]" />
            <div className="w-full h-20  bg-[#7F99DD]" />
            <div className="w-full h-20  bg-[#091E54]" />
          </div>
        </section>

        <section className="mb-8 flex flex-col justify-center items-center">
          <div className="justify-start items-start gap-3.5">
            <div className="text-4xl font-medium font-roobert">
              Harmony Promotional Materials Designs
            </div>
            <div className="text-black text-xl font-normal">
              The focus was creating promotional materials that reflect the
              app’s mission of fostering care and connection. The process began
              with brainstorming to determine layouts that would best convey
              Harmony’s values.
            </div>
          </div>

          <div className="flex-col justify-end items-center gap-6 inline-flex mb-8">
            <img className="w-fit" src="/images/image 8.png" />
            <div className="text-center text-black/75 text-sm font-normal font-departure">
              Brainstorming different business cards designs unique layouts and
              shapes.
            </div>
          </div>

          <div className="justify-between items-center inline-flex mb-8">
            <div className="flex-col justify-start items-start gap-3.5 inline-flex">
              <div className="self-stretch text-justify text-black text-2xl font-medium font-roobert capitalize">
                Business Cards Design
              </div>
              <div className="pr-8 text-black text-xl font-normal ">
                Harmony's business cards feature a vertical layout with a
                minimalist design in Harmony Purple. The front displays the logo
                and tagline "Your Partner in Care," while the back includes
                contact details.
              </div>
            </div>
            <img className="w-[493px] h-[396px]" src="/images/image 7.png" />
          </div>

          <div className="flex-col justify-start items-start flex">
            <div className="text-justify text-black text-2xl font-medium font-roobert capitalize">
              Landing Page Website
            </div>
            <p className="self-stretch text-black text-xl font-normal ">
              Harmony’s landing page is designed to be clean, intuitive, and
              visually engaging, with the goal of encouraging app downloads,
              showcasing key features, and building trust with caregivers.
            </p>
            <img className="mb-8" src="/images/customer-landing-page.png" />
            <p className="text-center text-black/75 text-sm font-normal font-departure w-full">
              Check out Harmony’s Landing Page!
            </p>
          </div>
        </section>

        <section className="mb-8 py-28 flex flex-row justify-center items-center">
          <div className="w-[620px] h-[194px] flex flex-col justify-start items-center gap-12">
            <div className="self-stretch h-[118px] flex flex-col justify-center items-center gap-3">
              <div className="self-stretch text-center text-5xl font-medium font-roobert capitalize">
                Final Prototype
              </div>
              <div className="text-center text-xl font-normal">
                Harmony's final prototype
              </div>
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
                      fill="black"
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
                      stroke="black"
                    />
                    <path
                      d="M16.01 14.4712C16.86 14.9312 17.325 15.7212 17.405 16.8412L17.585 19.4512H16.355L16.175 16.9162C16.145 16.3962 15.975 15.9762 15.665 15.6562C15.355 15.3362 14.955 15.1762 14.465 15.1762H11.615V19.4512H10.34V8.95117H14.315C15.345 8.95117 16.16 9.23617 16.76 9.80617C17.36 10.3662 17.66 11.1062 17.66 12.0262C17.66 13.1362 17.11 13.9512 16.01 14.4712ZM11.615 10.0912V14.0212H14.315C15.005 14.0212 15.515 13.8312 15.845 13.4512C16.175 13.0712 16.34 12.5962 16.34 12.0262C16.34 11.4562 16.175 10.9912 15.845 10.6312C15.515 10.2712 15.005 10.0912 14.315 10.0912H11.615Z"
                      fill="black"
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
            width="600"
            height="500"
            src="https://embed.figma.com/proto/dRQ3ywleMzjy15UK4yIC9W/harmony-design?page-id=1981%3A6447&node-id=1981-6740&p=f&viewport=541%2C2174%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1981%3A6766&show-proto-sidebar=1&embed-host=share&hide-ui=1"
          ></iframe>
        </section>

        <section className="mt-[164px]">
          <h2 className="text-justify text-black text-2xl font-medium font-roobert capitalize">
            Learnings and Future Directions
          </h2>
          <p>
            During Harmony's development, I discovered that understanding
            caregiver needs was crucial for delivering personalized support. The
            analysis of daily routines and user feedback helped create a more
            tailored caregiving management system.
            <br />
            <br />I also learned that the key to caregiver engagement lies in
            striking the right balance between simplicity and essential
            features, ensuring the platform remains accessible while effectively
            supporting daily caregiving tasks.
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
              Enhancing personalization with tailored insights and routine-based
              suggestions for caregivers.
            </li>
            <li>
              Integrating cross-platform support to ensure seamless care
              coordination across devices.
            </li>
          </ul>
        </section>

        <section className="my-[164px] flex flex-col items-center">
          <img
            className="mix-blend-darken w-[74px] h-[74px]"
            src="/images/harmony-mascot.gif"
          />
          <h1 className="text-center text-8xl font-roobert mb-8">Thank You!</h1>
          <p className="text-center text-2xl">
            If you'd like to explore the design process, feel free to check out
            the Figma file.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Harmony;
