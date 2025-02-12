import React from 'react';


const Tag = ({ text }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {Array.isArray(text) ? text.map((t, index) => (
                <div key={index} className="justify-center items-center flex overflow-hidden">
                    <p className="text-center px-2 py-1.5 gap-2.5 bg-[#e6e6e6] rounded text-[#939396] text-base font-medium font-roobert">{t}</p>
                </div>
            )) : (
                <div className="justify-center items-center flex overflow-hidden">
                    <span className="text-center px-2 py-1.5 gap-2.5 bg-[#e6e6e6] rounded text-[#939396] text-base font-medium font-roobert">{text}</span>
                </div>
            )}
        </div>
    );
};


export default Tag;