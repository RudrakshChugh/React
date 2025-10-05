import React from "react";
import Video from "./video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9.5vw] uppercase justify-center flex items-center leading-[8vw]">Hello</div>
      <div className="text-[9.5vw] uppercase justify-center flex items-center leading-[8vw]">Myself</div>
      <div className="text-[8vw] uppercase justify-center leading-[8vw] flex items-center">
        Rudraksh
        <div className="h-[7vw] w-[14vw] rounded-full -mt-3 overflow-hidden ">
          <Video className="w-full h-full object-cover" />
        </div>
        Chugh
      </div>      
    </div>
  );
};

export default HomeHeroText;
  