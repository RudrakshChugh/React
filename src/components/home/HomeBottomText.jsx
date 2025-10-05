import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <Link
        to="/projects"
        className="text-[5.5vw] leading-[6vw] hover:border-green-400 hover:text-green-400 uppercase border-2 border-white rounded-full px-10 py-0 pt-1 pb-0"
      >
        Projects
      </Link>
      <Link
        to="/agence"
        className="text-[5.5vw] leading-[6vw] hover:border-green-400 hover:text-green-400 uppercase border-2 border-white rounded-full px-10 py-0 pt-1 pb-0"
      >
        About
      </Link>
    </div>
  );
};

export default HomeBottomText;
