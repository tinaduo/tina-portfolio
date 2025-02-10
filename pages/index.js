import ProjectWrapper from '../components/ProjectWrapper';
import NavBar from '@/components/NavBar';
import Head from 'next/head';
import projects from '/data/projects';
import Footer from '@/components/Footer';
import AsciiArt from '@/components/AsciiArt';

export default function Home() {

  return (
    <>
      <Head>
        <title>home</title>
        <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />
      </Head>
      <NavBar/>
      <div className='absolute top-0 right-0 mt-24'>
      <AsciiArt/>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <div className='flex flex-col justify-start'>
          <div>
            <div className="flex flex-col justify-start items-start gap-[18px] w-full mb-[237px] mt-[169px]">
              <h6 className=" text-[#939396] text-2xl font-normal font-departure uppercase">Hello! I’m</h6>
              <h1 className=" text-black text-8xl font-normal font-roobert capitalize">Tina Duong</h1>
              <p className="text-[#939396] text-3xl font-normal font-neuemontreal w-[620px]">Crafting meaningful, intuitive, and engaging human experiences in the digital world.</p>
            </div>
          </div>
          <div className='mb-20'>
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
      <Footer/>
    </>
  );
}
