import Tag from "./Tag";

const ProjectWrapper = ({
    name,
    description,
    tags,
    date,
    src,
}) => {

const fallback = "https://placehold.co/785x500";

const noinfo = "not available";

    return (
        <div className="h-[500px] flex items-center gap-10 justify-center mb-48">
            <div className="w-[455px] h-56 flex-col justify-between">
                <div className=" h-[164px] flex-col justify-start items-start gap-10 flex">
                    <h6 className=" text-[#3b3d41]/50 text-sm font-departure">{date || noinfo}</h6>
                    <div className=" h-[106px] flex-col justify-start gap-[15px] flex">
                        <h1 className=" text-[#0e0e0e] text-[28px] font-medium font-roobert">{name || noinfo}</h1>
                        <p className=" text-[#3b3d41] text-lg font-neuemontreal">{description || noinfo}</p>
                    </div>
                </div>
                <div className="justify-start items-start gap-2 inline-flex">
                    <Tag text={tags || noinfo}/>
                </div>
            </div>
            <img className="max-w-[785px] max-h-[500px] w-[785px] h-[500px]" src={src || fallback} />
        </div>
    );
};

export default ProjectWrapper;