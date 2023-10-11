import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AudioFile from "../assets/audiofile.mp3";

import { motion } from "framer-motion";

// theme -> white / black

const Header = ({ theme = "black", bgColor = "white" }) => {
  const [audio, setAudio] = useState(new Audio(AudioFile));

  const [isPlay, setIsPlay] = useState(false);

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
        className={`flex flex-col items-center text-${
          bgColor === "black" ? "white" : "black"
        }`}
      >
        <span className="font-mono text-5xl font-bold">NK</span>
        <button
          onClick={handleClick}
          className="border-2 border-black px-7 py-2 rounded-2xl hover:text-white hover:bg-black transition-all w-28"
        >
          <span className="text-xl">{isPlay ? "Pause" : "Play"}</span>
        </button>
      </div>

      <Link to={"/"}>
        <div
          className={`p-2 border-2 border-${theme} bg-${
            theme === "white" ? "black" : "white"
          } rounded-full hover:bg-green-300 transition-all`}
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
      <button>
        <div className="text-xl">Say Hi on...</div>
      </button>
    </motion.div>
  );
};

export default Header;
