import React, { useRef } from "react";
import { motion } from "framer-motion";

const GrooveMascot = (
name,
width,
image,
) => {
  const constraintsRef = useRef(null)

  return (
    <>
        <motion.div ref={constraintsRef}>
          <motion.img
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            width={width}
            src={image}
            alt={name}
          />
          <p className="w-[244px] text-center text-black/75 text-2xl font-semibold font-roobert">
            {name}
          </p>
        </motion.div>
    </>
  );
};

export default GrooveMascot;
