import React from "react";
import Tag from "./Tag";
import Link from "next/link";

const noinfo = "not available";

const HeaderWrapper = ({
  name,
  description,
  tags,
  role,
  tools,
  startDate,
  endDate,
  year,
  minutes,
  figmaLink,
  liveLink,
}) => {
  return (
    <div className="flex flex-col h-fit mx-4 sm:mx-8 md:mx-12 lg:mx-20 mb-16">
      <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-roobert capitalize pb-2 md:pb-3 mt-8">
        {name || noinfo}
      </h1>
      <p className="max-w-full md:max-w-[620px] pb-4 md:pb-6 text-black text-xl sm:text-2xl md:text-3xl font-neuemontreal">
        {description || noinfo}
      </p>
      <div className="flex items-center gap-12 md:gap-12 mb-6 md:mb-10">
        <Tag text={tags || noinfo} />
        {/* <p className="text-[#3b3d41]/50 text-medium font-roobert">
          {minutes || noinfo} minutes
        </p> */}
      </div>
      <div className="flex flex-col sm:flex-row gap-28 w-full lg:w-full">
        <div className="flex-col justify-start items-start gap-1 md:gap-2 flex">
          <h6 className="text-black text-lg md:text-xl font-medium font-roobert">
            Role
          </h6>
          <p className="text-[#939396] text-base md:text-xl font-normal font-neuemontreal flex flex-col max-w-full">
            {role && role.length > 0
              ? role.map((role, index) => (
                  <span key={index}>{role || noinfo}</span>
                ))
              : noinfo}
          </p>
        </div>
        <div className="flex-col justify-start gap-1 md:gap-2 flex max-w-full">
          <h6 className="text-black text-lg md:text-xl font-medium font-roobert">
            Tools
          </h6>
          <div className="text-[#939396] text-base md:text-xl font-normal font-neuemontreal flex flex-col max-w-full">
            {tools && tools.length > 0
              ? tools.map((tool, index) => (
                  <span key={index}>{tool || noinfo}</span>
                ))
              : noinfo}
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-1 md:gap-2 flex max-w-full">
          <h6 className="text-black text-lg md:text-xl font-medium font-roobert">
            Timeline
          </h6>
          <p className="text-[#939396] text-base md:text-xl font-normal font-neuemontreal">
            {startDate || noinfo} → {endDate || noinfo} {year || noinfo}
          </p>
        </div>
        <div className="flex-col justify-start items-start gap-1 md:gap-2 flex max-w-full">
          <h6 className="text-black text-lg md:text-xl font-medium font-roobert">
            Links
          </h6>
          <Link 
            href={figmaLink || "https://www.tinaduong.ca"} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#939396] text-base md:text-xl font-normal font-neuemontreal hover:underline">
              Figma↗
          </Link>
          <Link 
            href={liveLink || "https://www.tinaduong.ca"} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#939396] text-base md:text-xl font-normal font-neuemontreal hover:underline">
              Live↗
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;