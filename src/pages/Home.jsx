import React, { useState } from "react";
import Spinner from "../utils/Spinner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Social from "../components/Social";
import { motion } from "framer-motion";
import ProfilePic from "../assets/profile-pic.png";

const Home = ({ audio, isPlay, setIsPlay }) => {
  const [on, setOn] = useState(false);
  return (
    <motion.div
      className="overflow-hidden h-screen w-screen"
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ y: "-100%", transition: { type: "tween" } }}
    >
      <Header
        bgColor={`${on ? "black" : "white"}`}
        audio={audio}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
      />
      <motion.div
        className="absolute overflow-hidden scale-75 z-20"
        initial={{
          translateX: "50%",
          translateY: "50%",
          bottom: "50%",
          right: "50%",
        }}
        animate={{
          translateX: on ? "15%" : "+50%",
          translateY: on ? "-5%" : "+50%",
          bottom: on ? "0%" : "50%",
          right: on ? "0%" : "50%",
          scale: on ? 0.4 : 1,
        }}
        transition={{
          duration: 1,
          type: "spring",
        }}
      >
        <Spinner
          onClick={() => {
            setOn((prev) => !prev);
          }}
        />
        <span className="text-xl">Click Here</span>
      </motion.div>

      <motion.div className="flex">
        <motion.div
          className="bg-black border-2 border-black h-screen w-1/2"
          initial={{
            x: "-100%",
          }}
          animate={{
            x: on ? "0" : "-100%",
            transition: {
              duration: 0.6,
            },
          }}
        ></motion.div>
        <motion.div
          className="absolute w-[60vw] md:w-full flex flex-col justify-center h-full md:flex-row md:h-96 z-10 intro"
          initial={{ opacity: 0, height: 0, visibility: "hidden" }}
          animate={{
            opacity: on ? 1 : 0,
            visibility: on ? "visible" : "hidden",
            height: on ? "60%" : "0",
            transition: {
              delay: on ? 0.5 : 0,
              duration: on ? 0.5 : 0,
            },
          }}
        >
          <div className="md:text-white flex flex-col bg-white md:bg-transparent p-2 md:px-10 md:gap-3 md:border-white border-black border-4 border-b-0 md:border-b-4 md:border-r-0 md:justify-center text-left h-fit md:h-full md:w-1/3 ">
            <h2 className="md:text-7xl font-mono ">Hi,</h2>
            <h3 className="md:text-4xl text-2xl font-bold font-mono">
              I am Nikhil Kumar
            </h3>
            <h3 className="md:text-xl font-extralight font-mono">
              I design and Code simple yet beautiful websites.
            </h3>
          </div>
          <div className="md:w-1/3 h-1/2 md:h-full bg-white md:bg-transparent flex justify-center items-end border-black border-4 border-t-0 md:border-t-4 md:border-l-0 ">
            <img
              src={ProfilePic}
              alt=""
              className=" h-full md:h-auto md:w-64"
            />
          </div>
        </motion.div>
        <motion.div
          className="bg-gray-200 border-2 border-black h-screen w-1/2"
          initial={{
            x: "100%",
          }}
          animate={{
            x: on ? "0" : "100%",
            transition: {
              duration: 0.6,
            },
          }}
        ></motion.div>
      </motion.div>
      <Social theme={`${on ? "white" : "black"}`} />
      <Footer />
    </motion.div>
  );
};

export default Home;
