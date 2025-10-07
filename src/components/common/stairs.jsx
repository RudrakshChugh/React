import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const stairs = (props) => {
  const StairParentRef = useRef(null);
  const currentpath = useLocation().pathname;
  const pageRef = useRef(null)

  useGSAP(
    function () {
      const tl = gsap.timeline();

      tl.to(StairParentRef.current, {
        display: "block",
      });

      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });

      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });

      tl.to(StairParentRef.current, {
        display: "none",
      });

      tl.to(".stair", {
        y: "0%",
      });

      gsap.from(pageRef.current,{
        opacity:0,
        delay:1.3,
        scale:1.2
      })
    },
    [currentpath]
  );

  return (
    <div>
      <div
        ref={StairParentRef}
        className="h-screen w-full flex fixed z-20 top-0">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>
        {props.children};
      </div>
    </div>
  );
};

export default stairs;
