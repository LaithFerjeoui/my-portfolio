"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import BgAnimation from "./BackgroundAnimation"

const HeroSection = () => {
  return (
    <section className="lg:py-16 ">
       
      <div className="grid grid-cols-2 sm:grid-cols-1 relative z-10">
     
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="gradient-03 relative z-0"/>

          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold relative z-10">
            <span className="text-gradient text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 from-indigo-200 via-slate-600 to-indigo-200">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Laith Ferjeoui",
                1000,
                "Web Developer",
                1000,
                "Video Editor",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl relative z-10">
            Combining aesthetics with functionality to bring your idea to life.
          </p>
          <div>
            <Link
              href="#EmailSection"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white relative z-10"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/u/1/uc?id=1ZA4bOSlF0ee6By1csobCGtkD_gaLTozC&export=download"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 relative z-10">
                Download CV
              </span>
            </Link>
          </div>
          
        </motion.div>
       
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 absolute"
        >
         <div className=" w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] ">
            <BgAnimation />
        </div>
        </motion.div>
       
          
      </div>
    </section>
  );
};

export default HeroSection;
