import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-20 my-14 flex flex-col justify-start items-start gap-16">
      <h1 className="h-[77px] text-black text-5xl font-medium font-roobert">
        Let’s keep in touch!
      </h1>
      <div className="flex w-full justify-between items-end gap-20">
        <div className="flex flex-row justify-start items-center gap-10">
          <h3 className="text-black text-3xl font-medium font-roobert hover:underline">
            Email↗
          </h3>
          <h3 className="text-black text-3xl font-medium font-roobert hover:underline">
            LinkedIn↗
          </h3>
        </div>
        <h3 className="text-[#939396] text-sm font-medium font-neuemontreal">
          @{currentYear} Tina Duong
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
