import React from "react";
import Header from "../components/Header";
import Social from "../components/Social";
import ProjectCard from "../utils/ProjectCard";
import Spinner from "../utils/Spinner";
import { motion } from "framer-motion";
import Title from "../utils/Title";
import Stars from "../utils/Stars";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
const childVariant = {
  hidden: {
    scale: 0,
    y: 20,
  },
  show: {
    scale: 1,
    y: 0,
  },
};

const Projects = ({ audio, isPlay, setIsPlay }) => {

  return (
    <div className="bg-black h-screen w-screen overflow-hidden">
      <Header
        theme={"white"}
        bgColor="black"
        audio={audio}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
      />
      <Title title={"PROJECTS"} color={"#1F2937"} />
      <Stars/>
      <motion.div
        className="flex overflow-scroll px-20 md:px-96 no-scrollbar gap-3 items-center h-full"
        variants={containerVariant}
        initial="hidden"
        animate="show"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, i) => {
          return (
            <motion.div variants={childVariant} className="z-10">
              <ProjectCard />
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        className="absolute -bottom-10 -right-10 z-20"
        style={{ scale: 0.3 }}
      >
        <Spinner />
      </motion.div>
      <Social theme="white" />
    </div>
  );
};

export default Projects;
