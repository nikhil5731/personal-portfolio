import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

// theme -> white / black

const Header = ({
  isPlay,
  audio,
  setIsPlay,
  theme = "black",
  bgColor = "white",
}) => {
  const handleClick = () => {
    if (isPlay) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlay(!isPlay);
  };

  return (
    <motion.div
      className={`flex absolute w-screen z-10 justify-between px-3 lg:px-10 items-center top-3 text-${theme}`}
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 3,
        type: "spring",
      }}
    >
      <div
        className={`flex items-center justify-center flex-col gap-0 text-${
          bgColor === "black" ? "white" : "black"
        }`}
      >
        <span className="font-mono text-3xl md:text-5xl font-bold">NK</span>
        <button
          onClick={handleClick}
          className="border-2 border-black px-5 py-1 md:px-7 md:py-2 rounded-2xl text-black bg-white hover:text-white hover:bg-black hover:border-white transition-all md:w-28"
        >
          <span className="text-xl">{isPlay ? "Pause" : "Play"}</span>
        </button>
      </div>

      <Link to={"/"}>
        <div
          className={`p-2 border-2 border-${theme} bg-${
            theme === "white" ? "black" : "white"
          } rounded-full hover:bg-green-300 hover:text-green-900 transition-all`}
        >
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="power-off"
            class="prefix__svg-inline--fa prefix__fa-power-off prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="30"
            height="30"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
            ></path>
          </svg>
        </div>
      </Link>
      <Link to={"mailto:nikhilkgupta0408@gmail.com"} target="__blank">
        <button className="ml-[14px] md:ml-[52px] rounded-full p-2 hover:scale-90 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="currentColor"
          >
            <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
          </svg>
        </button>
      </Link>
    </motion.div>
  );
};

export default Header;
