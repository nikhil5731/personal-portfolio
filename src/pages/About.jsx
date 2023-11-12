import React from "react";
import Header from "../components/Header";
import Social from "../components/Social";
import Astronaut from "../assets/astronaut.png";
import { motion } from "framer-motion";
import Title from "../utils/Title";
import Stars from "../utils/Stars";

const About = ({ isPlay, audio, setIsPlay }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", when: "beforeChildren" }}
      exit={{ y: "-100%", transition: { type: "tween" } }}
      className="bg-black text-white"
    >
      <Stars />
      <Header
        theme={"white"}
        bgColor="black"
        audio={audio}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
      />
      <Title color={"#1F2937"} title={"ABOUT"} />
      <div className="flex flex-wrap justify-around h-screen items-center px-5 py-32 md:px-2">
        <motion.div
          className="aboutContent w-11/12 md:w-1/2 sm:text-2xl text-left flex flex-col gap-4 p-4 lg:p-10 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div>
            Greetings! I'm Nikhil Kumar, a Delhi-based Full stack developer
            currently pursuing my third year at Delhi Technological University.
            My professional focus centers on web development, and I specialize
            in the MERN stack - MongoDB, Express.js, React, and Node.js.
            functionality.
          </div>
          <div>
            While my work revolves around code and databases, my creative side
            finds expression in design and video editing. Designing visuals and
            editing videos allow me to unleash my artistic instincts and produce
            engaging, visually appealing content.
          </div>
          <div>
            Beyond the world of technology, I'm deeply immersed in hip hop music
            and pop culture. The rhythm and lyrics of hip hop inspire me, and I
            find resonance with the ever-evolving landscape of pop culture.
            These interests keep me in touch with the pulse of contemporary
            society, fostering a well-rounded perspective.
          </div>
        </motion.div>
        <motion.img
          className="absolute sm:static bottom-0 right-0 w-28 md:w-fit"
          src={Astronaut}
          alt=""
          initial={{
            x: 0,
            y: 0,
          }}
          animate={{ x: -40, y: -40 }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: 2,
            repeatType: "mirror",
          }}
        />
      </div>
      <Social theme="white" />
    </motion.div>
  );
};

export default About;
