import React from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

const Test = () => {
  return (
    <>
      <ImgComparisonSlider hover="hover">
        <figure slot="first" class="before">
          <img src="images/groove/groove-before-img.png" />
          <figcaption className="bg-[#FBF8F8] p-4 text-center text-black/75 text-sm w-full font-departure">
            before
          </figcaption>
        </figure>
        <figure slot="second" class="after">
          <img slot="second" src="/images/groove/groove-after-img.png" />
          <figcaption className="text-[#2e3452] p-4 text-center text-black/75 text-sm w-full font-departure">
            after
          </figcaption>
        </figure>
      </ImgComparisonSlider>
    </>
  );
};

export default Test;
