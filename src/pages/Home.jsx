import React, { useState } from "react";
import Spinner from "../utils/Spinner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Social from "../components/Social";
import { motion } from "framer-motion";
import ProfilePic from "../assets/profile-pic.png";

const Home = () => {
  const [on, setOn] = useState(false);

  return (
    <motion.div
      className="overflow-hidden h-screen w-screen"
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ y: "-100%", transition: { type: "tween" } }}
    >
      <Header bgColor={`${on ? "black" : "white"}`} />
      <motion.div
        className="absolute overflow-hidden scale-1/2 z-20 m-auto"
        initial={{
          translateX: "-50%",
          translateY: "-50%",
          top: "50%",
          left: "50%",
          scale: 1,
        }}
        animate={{
          translateX: on ? "-10%" : "-50%",
          translateY: on ? "-5%" : "-50%",
          top: on ? "63%" : "50%",
          left: on ? "89%" : "50%",
          scale: on ? 0.5 : 1,
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

      <motion.div className="md:flex">
        <motion.div
          className="bg-black w-screen border-2 border-black h-1/2 md:h-screen md:w-1/2"
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
          className="absolute w-2/3 flex h-96 z-10 intro"
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
          <div className="text-white flex flex-col px-10 gap-3 border-white border-4 border-r-0 justify-center text-left h-full w-1/2 ">
            <h2 className="text-7xl font-mono">Hi,</h2>
            <h3 className="text-4xl font-mono">I am Nikhil Kumar</h3>
            <h3 className="text-xl font-extralight font-mono">
              I design and Code simple yet beautiful websites.
            </h3>
          </div>
          <div className=" w-1/2 h-full border-black border-4 border-l-0 ">
            <img
              src={ProfilePic}
              alt=""
              className=" absolute right-0 -bottom-3 scale-90"
            />
          </div>
        </motion.div>
        <motion.div
          className="bg-gray-200 border-2 border-black w-screen h-1/2 md:h-screen md:w-1/2"
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
