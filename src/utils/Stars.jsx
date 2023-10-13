import React from "react";
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const Stars = () => {
  const customInit = async (engine) => {
    await loadStarsPreset(engine);
  };
  const options = {
    preset: "stars",
  
  };

  return <Particles options={options} init={customInit} />;
};

export default Stars;
