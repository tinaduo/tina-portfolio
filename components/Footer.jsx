import Link from "next/link";
import React from "react";
import AsciiCatArt from "./CatAsciiArt";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mx-auto py-16 max-w-[1400px]">
      <div className="flex flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col gap-16 w-full md:w-auto">
          <h1 className="text-black text-4xl md:text-5xl font-medium font-roobert">
            Get in touch!
          </h1>
          <div className="flex flex-row gap-10">
            <Link
              href="mailto:totinaduong@gmail.com"
              className="text-black text-2xl md:text-3xl font-medium font-roobert hover:underline"
            >
              Email↗
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/-tinaduong/"
              className="text-black text-2xl md:text-3xl font-medium font-roobert hover:underline"
            >
              LinkedIn↗
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end gap-6 mt-10">
          <div 
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={scrollToTop}
          >
            <AsciiCatArt />
          </div>
          <h3 className="text-[#939396] text-sm font-medium font-neuemontreal">
            ©{currentYear} Tina Duong
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;