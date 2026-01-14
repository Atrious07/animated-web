import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const navigate = useNavigate();

  // GSAP Animations
  useGSAP(
    () => {
      if (isOpen) {
        // Overlay fade in
        gsap.to(overlayRef.current, {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.6,
          ease: "power3.inOut",
        });

        // Links animation (scale + fade)
        gsap.fromTo(
          linksRef.current,
          { y: 60, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
            delay: 0.3,
          }
        );
      } else {
        // Overlay fade out
        gsap.to(overlayRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    { dependencies: [isOpen] }
  );

  return (
    <div>
      {/* Navbar */}
      <div className="w-full fixed top-0 flex justify-between items-center py-3 px-6 z-20">
        {/* Logo */}
        <div
          className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="logo"
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
          />
        </div>

        {/* Hamburger */}
        <div
          className="h-10 sm:h-12 w-10 sm:w-12 bg-zinc-900 flex items-center justify-center rounded-full hover:cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-white text-2xl sm:text-3xl">☰</span>
        </div>
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-0 pointer-events-none z-30 flex flex-col items-center justify-center text-white"
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-white text-3xl sm:text-4xl hover:rotate-90 transform transition-transform duration-300"
          onClick={() => setIsOpen(false)}
        >
          ❌
        </button>

        {/* Links */}
        <div className="space-y-6 sm:space-y-8 font-[font1] text-4xl sm:text-6xl md:text-7xl font-bold flex flex-col gap-2 text-center">
          {[
            { name: "Home", path: "/" },
            { name: "Agent", path: "/agents" },
            { name: "Mission", path: "/mission" },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.path}
              ref={(el) => (linksRef.current[i] = el)}
              className="hover:text-green-400 transition-colors duration-300 hover:cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
