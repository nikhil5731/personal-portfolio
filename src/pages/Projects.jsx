import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Social from "../components/Social";
import ProjectCard from "../utils/ProjectCard";
import Spinner from "../utils/Spinner";
import { motion, useScroll } from "framer-motion";
import Title from "../utils/Title";

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

const Projects = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX:(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageXOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <div className="bg-black h-screen w-screen overflow-hidden">
      <Header theme="white" />
      <Title title={"PROJECTS"} color={"#1F2937"} />

      <motion.div
        className="flex overflow-scroll px-96 no-scrollbar gap-10 items-center h-full"
        variants={containerVariant}
        initial="hidden"
        animate="show"
        ref={ref}
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
        ref={yinyang}
        className="absolute top-[75vh] left-[88vw]"
        style={{ scale: 0.5 }}
      >
        <Spinner repeat={0} />
      </motion.div>
      <Social theme="white" />
    </div>
  );
};

export default Projects;
