import React from "react";
import Video from "../Video";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Text = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".text1", {
      duration: 1,
      x: -20,
      opacity: 0,
      ease: "power1.inOut",
      delay: 1.2,
    });
    tl.from(".text2", {
      duration: 1,
      x: 20,
      opacity: 0,
      ease: "power1.inOut",
    });
  });

  return (
    <div className="pt-10 flex flex-col items-center text-center px-4">
      {/* First heading */}
      <div className="text1 font-[font1] text-5xl sm:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_5px_20px_rgba(0,0,0,0.7)]">
        Ohh Shit!
      </div>

      {/* Middle heading with inline video */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center font-[font1] text-3xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_3px_15px_rgba(0,0,0,0.6)]">
        <span>Enhance Your Gaming</span>

        {/* Small video inside text */}
        <div className="mx-2 h-16 w-28 sm:h-20 sm:w-36 rounded-xl overflow-hidden shadow-lg">
          <Video />
        </div>

        <span>Experience</span>
      </div>

      {/* Last heading */}
      <div className="mt-6 text2 font-[font1] text-3xl sm:text-5xl lg:text-7xl font-semibold bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(0,0,0,0.5)]">
        here we go Again--.
      </div>
    </div>
  );
};

export default Text;
