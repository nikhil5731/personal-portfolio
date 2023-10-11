import React from "react";
import Header from "../components/Header";
import Social from "../components/Social";
import Astronaut from "../assets/astronaut.png";
import { motion } from "framer-motion";
import Title from "../utils/Title";

const About = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", when: "beforeChildren" }}
      exit={{ y: "-100%", transition: { type: "tween" } }}
      className="bg-black text-white"
    >
      <Header theme={"white"} bgColor="black"/>
      <Title color={"#1F2937"} title={"ABOUT"}/>
      <div className="md:flex justify-around h-screen items-center p-20">
        <motion.div
          className="aboutContent lg:w-1/2 text-2xl text-left flex flex-col gap-4 p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div>
            I'm a front-end developer located in India. I love to create simple
            yet beautiful websites with great user experience.
          </div>
          <div>
            I'm interested in the whole frontend stack Like trying new things
            and building great projects. I'm an independent freelancer and
            blogger.
          </div>
          <div>
            I love to write blogs and read books. I believe everything is an Art
            when you put your consciousness in it. You can connect with me via
            social links.
          </div>
        </motion.div>
        <motion.img
          className="scale-150"
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
      <Social theme="white"/>
    </motion.div>
  );
};

export default About;
