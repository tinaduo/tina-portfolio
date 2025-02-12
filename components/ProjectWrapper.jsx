import Tag from "./Tag";

const ProjectWrapper = ({ name, description, tags, date, page, src }) => {
  const fallback = "https://placehold.co/785x500";

  const noinfo = "not available";

  return (
    <div className="h-full flex items-center gap-10 justify-center mb-48">
      <div className="h-56 flex-col justify-between">
        <div className=" h-[164px] flex-col justify-start items-start gap-10 flex">
          <h6 className=" text-[#3b3d41]/50 text-sm font-departure">
            {date || noinfo}
          </h6>
          <div className=" h-[106px] flex-col justify-start gap-4 flex">
            <h1 className=" text-[#0e0e0e] text-[28px] font-medium font-roobert">
              {name || noinfo}
            </h1>
            <p className=" text-[#3b3d41] text-lg font-neuemontreal w-[420px]">
              {description || noinfo}
            </p>
            <Tag text={tags || noinfo} />
          </div>
        </div>
      </div>
      <div className="overflow-hidden ">
        <a href={page} className="cursor-view">
          <img
            className="sm:w-[367px] sm:h-[297px] md:w-[785px] md:h-[500px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 origin-center"
            src={src || fallback}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectWrapper;
