import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imagearray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  ];
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 55.25%",
        end: "top -70%",
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        scrub: 1,
        anticipatePin:1,
        invalidateOnRefresh : true,
        onUpdate: function (elem) {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imagearray.length);
          } else {
            imageIndex = imagearray.length - 1;
          }
          imageRef.current.src = imagearray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div id="page-1" className=" bg-black pt-20 relative py-1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl left-[30vw] top-96"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Hello
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl max-w-4xl">
              &nbsp; &nbsp; &nbsp; &nbsp; Notre curiosité nourrit notre
              créativité. On reste humbles et on dit non aux gros egos, même le
              vôtre. Une marque est vivante. Elle a des valeurs, une
              personnalité, une histoire. Si on oublie ça, on peut faire de bons
              chiffres à court terme, mais on la tue à long terme. Cest pour ça
              quon sengage à donner de la perspective, pour bâtir des marques
              influentes.
            </p>
          </div>
        </div>
      </div>
      <div id="page-2" className="h-screen bg-black"></div>
    </div>
  );
};

export default Agence;
