import Tag from "./Tag";

const ProjectWrapper = ({ name, description, tags, date, page, src }) => {
  const fallback = "https://placehold.co";
  const noinfo = "not available";

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center gap-8 lg:gap-x-8 justify-center mb-24 sm:mb-32 lg:mb-48 w-full">
      <div className="w-full lg:w-auto flex flex-col justify-between ">
        <div className="flex flex-col justify-start items-start gap-4 lg:gap-4">
          <h6 className="text-[#3b3d41]/50 text-sm font-departure">
            {date || noinfo}
          </h6>
          <div className="flex flex-col justify-start gap-3 lg:gap-4">
            <h1 className="text-[#0e0e0e] text-2xl sm:text-[28px] font-medium font-roobert">
              {name || noinfo}
            </h1>
            <p className="text-[#3b3d41] text-base sm:text-lg font-neuemontreal w-full max-w-[420px]">
              {description || noinfo}
            </p>
            <Tag text={tags || noinfo} />
          </div>
        </div>
      </div>
      <div className="overflow-hidden relative group">
        <a href={page} className="cursor-view block">
          <img
            className="w-[855px] h-auto object-cover transition-transform duration-300 group-hover:scale-105 origin-center"
            src={src || fallback}
            alt={name || "Project image"}
          />
        </a>
      </div>
      
    </div>
  );
};



export default ProjectWrapper;
