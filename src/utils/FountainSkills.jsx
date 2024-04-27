import React from "react";
import Particles from "react-tsparticles";
import { loadFountainPreset } from "tsparticles-preset-fountain";

const FountainSkills = () => {
  const customInit = async (engine) => {
    await loadFountainPreset(engine);
  };
  const options = {
    preset: "fountain",
  };

  return <Particles options={options} init={customInit} className=" absolute -z-10"/>;
};

export default FountainSkills;
