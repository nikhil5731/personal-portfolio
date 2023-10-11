import React from "react";
import { motion } from "framer-motion";

const Spinner = ({ onClick, repeat = Infinity }) => {
  return (
    <motion.div
      className=" bg-white rounded-full"
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 5,
        type: "spring",
      }}
      onClick={onClick}
    >
      <motion.svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="yin-yang"
        class="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        width="200"
        height="200"
        fill="currentColor"
        className="cursor-pointer"
        animate={{
          rotate: 360,
        }}
        transition={{ ease: "linear", duration: 2, repeat: repeat}}
      >
        <path
          fill="currentColor"
          d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
        ></path>
      </motion.svg>
    </motion.div>
  );
};

export default Spinner;
