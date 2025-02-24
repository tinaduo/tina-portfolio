import React from "react";
import Tag from "./Tag";

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
}) => {
  
  return (
    <div className="h-[348px] mx-20">
      <h1 className=" text-black text-[64px] font-roobert capitalize pb-3">
        {name || noinfo}
      </h1>
      <p className="max-w-[620px] pb-6 text-black text-3xl font-neuemontreal">
        {description || noinfo}
      </p>
      <div className="flex items-center gap-6 mb-10">
        <Tag text={tags || noinfo} />
        {/* <p className="text-[#3b3d41]/50 text-medium font-roobert">
          {minutes || noinfo} minutes
        </p> */}
      </div>
      <div className="w-[784px] justify-between items-start inline-flex">
        <div className="max-w-[163px] flex-col justify-start items-start gap-2 inline-flex">
          <h6 className=" text-justify text-black text-xl font-medium font-roobert">
            Role
          </h6>
          <p className="text-[#939396] text-xl font-normal font-neuemontreal flex flex-col max-w-[163px]">
            {role && role.length > 0
              ? role.map((role, index) => (
                  <span key={index}>{role || noinfo}</span>
                ))
              : noinfo}
          </p>
        </div>
        <div className="flex-col justify-start gap-2 flex max-w-[163px]">
          <h6 className="text-justify text-black text-xl font-medium font-roobert">
            Tools
          </h6>
          <div className="text-justify text-[#939396] text-xl font-normal font-neuemontreal flex flex-col max-w-[163px]">
            {tools && tools.length > 0
              ? tools.map((tool, index) => (
                  <span key={index}>{tool || noinfo}</span>
                ))
              : noinfo}
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2 flex max-w-[163px]">
          <h6 className=" text-justify text-black text-xl font-medium font-roobert">
            Timeline
          </h6>
          <p className="text-justify text-[#939396] text-xl font-normal font-neuemontreal">
            {startDate || noinfo} → {endDate || noinfo} {year || noinfo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;
