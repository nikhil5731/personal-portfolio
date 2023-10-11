import React from "react";
import Header from "../components/Header";
import Social from "../components/Social";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ y: "-100%", transition: { type: "tween" } }}
    >
      <Header />
      <motion.div
        className="flex gap-10 justify-center items-center w-screen h-screen"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <div className="w-1/3 h-3/5 hover:text-white hover:bg-black border-2 border-black text-2xl font-mono justify-center items-center flex flex-col gap-4 p-8">
          <h2 className="flex justify-center items-center text-3xl gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-palette-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
            <span className="font-bold">Designer</span>
          </h2>
          <div className="text-left">
            <span className="block">
              I love to create design which speaks, Keep it clean, minimal and
              simple.
            </span>
            <span className="block mt-5">
              <span className="font-bold">I like to Design:-</span>
              <ul className="list-disc mx-10">
                <li>Web Design</li>
                <li>Graphic Designs</li>
              </ul>
            </span>
            <span className="block  mt-5">
              <span className="font-bold">Tools:-</span>
              <ul className="list-disc mx-10">
                <li>Figma</li>
                <li>Photoshop, Illustrator</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="w-1/3 h-3/5 hover:text-white hover:bg-black border-2 border-black text-2xl font-mono justify-center items-center flex flex-col gap-4 p-8">
          <h2 className="flex justify-center items-center text-3xl gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-palette-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
            <span className="font-bold">Frontend Developer</span>
          </h2>
          <div className="text-left">
            <span className="block">
              I value business or brand for which i'm creating, thus i enjoy
              bringing new ideas to life.
            </span>
            <span className="block mt-5">
              <span className="font-bold">Skills</span>
              <ul className="list-disc mx-10">
                <li>Html, Css, Js, React, Redux, Sass,</li>
                <li>Bootstrap, Tailwind, Firebase </li>
              </ul>
            </span>
            <span className="block mt-5">
              <span className="font-bold">Tools:-</span>
              <ul className="list-disc mx-10">
                <li>VScode</li>
                <li>Github, Codepen etc.</li>
              </ul>
            </span>
          </div>
        </div>
      </motion.div>
      <Social />
    </motion.div>
  );
};

export default Skills;
