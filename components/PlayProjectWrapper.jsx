const PlayProjectWrapper = ({
    name,
    date,
    src,
}) => {

const fallback = "https://placehold.co/620x400";

const noinfo = "not available";

    return (
            <div className="flex-col gap-2.5 flex w-fit">
                <img className="w-[620px] h-[400px]" src={src || fallback} />
                <div className="flex justify-between items-center">
                    <h3 className="text-[#0e0e0e] text-3xl font-medium font-roobert">{name || noinfo}</h3>
                    <h3 className="text-[#3b3d41]/50 font-normal font-departure">{src || noinfo}</h3>
                </div>
            </div>
    );
};

export default PlayProjectWrapper;