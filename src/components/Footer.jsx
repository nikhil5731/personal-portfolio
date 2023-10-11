import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const linksVariant = {
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      duration: 0.1,
    },
  },
  click: {
    scale: 0.9,
    transition: {
      type: "spring",
      duration: 0.1,
    },
  },
};

const Footer = () => {
  return (
    <motion.div
      className="fixed bottom-0 w-full h-[10vh] flex justify-evenly text-xl lg:text-2xl border-t-4 bg-white border-black py-4"
      animate={{
        bottom: 0,
      }}
      initial={{
        bottom: -100,
      }}
      transition={{
        type: "spring",
        delay: 1.2,
        stiffness: 250,
      }}
    >
      <motion.span
        className="cursor-pointer transition-all"
        variants={linksVariant}
        whileHover="hover"
        whileTap="click"
      >
        <Link to={"/about"}>About Me</Link>
      </motion.span>
      <span className="lg:w-1 bg-black"></span>
      <motion.span
        className=" cursor-pointer transition-all"
        variants={linksVariant}
        whileHover="hover"
        whileTap="click"
      >
        <Link to={"/skills"}>My Skills</Link>
      </motion.span>
      <span className="lg:w-1 bg-black"></span>
      <motion.span
        className=" cursor-pointer transition-all"
        variants={linksVariant}
        whileHover="hover"
        whileTap="click"
      >
        <Link to={"/projects"}>Projects</Link>
      </motion.span>
      <span className="lg:w-1 bg-black"></span>
      <motion.span
        className=" cursor-pointer transition-all"
        variants={linksVariant}
        whileHover="hover"
        whileTap="click"
      >
        <Link
        target="__blank"
          to={
            "https://drive.google.com/file/d/13NFIl3UvMNcczEV4mcBKCnjpD_aQ_hLn/view?usp=sharing"
          }
        >
          Resume
        </Link>
      </motion.span>
    </motion.div>
  );
};

export default Footer;
