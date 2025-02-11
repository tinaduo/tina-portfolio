import Link from "next/link";
import React from "react";
import AsciiCatArt from "./CatAsciiArt";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-20 my-14 flex flex-col justify-start items-start gap-16">
      <h1 className="h-[77px] text-black text-5xl font-medium font-roobert">
        Get in touch!
      </h1>
      <div className="flex w-full justify-between items-between gap-20">
        <div className="flex flex-row justify-start items-center gap-10">
          <Link
            href="mailto:totinaduong@gmail.com"
            className="text-black text-3xl font-medium font-roobert hover:underline"
          >
            Email↗
          </Link>
          <Link
            href="https://www.linkedin.com/in/-tinaduong/"
            className="text-black text-3xl font-medium font-roobert hover:underline"
          >
            LinkedIn↗
          </Link>
        </div>
        <div className="flex flex-col justify-end items-end gap-4">
          <AsciiCatArt />
          <h3 className="text-[#939396] text-sm font-medium font-neuemontreal">
          @{currentYear} Tina Duong
        </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
