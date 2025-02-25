import Link from "next/link";
import React from "react";
import AsciiCatArt from "./CatAsciiArt";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mx-4 sm:mx-8 md:mx-8 lg:mx-24">
      <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-12 gap-8 md:gap-0">
        <div className="flex flex-col gap-6 md:gap-12 w-full md:w-auto">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-medium font-roobert text-center md:text-left">
            Get in touch!
          </h1>
          <div className="flex flex-row justify-center md:justify-between gap-6 md:gap-12">
            <Link
              href="mailto:totinaduong@gmail.com"
              className="text-black text-xl sm:text-2xl md:text-3xl font-medium font-roobert hover:underline"
            >
              Email↗
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/-tinaduong/"
              className="text-black text-xl sm:text-2xl md:text-3xl font-medium font-roobert hover:underline"
            >
              LinkedIn↗
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4 md:gap-6">
          <div 
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={scrollToTop}
          >
            <AsciiCatArt />
          </div>
          <h3 className="text-[#939396] text-sm font-medium font-neuemontreal">
            © {currentYear} Tina Duong
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;