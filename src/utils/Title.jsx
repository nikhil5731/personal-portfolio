import React from "react";

const Title = ({ title, color }) => {
  return (
    <h2
      className={`text-6xl top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:text-8xl font-bold absolute md:top-36 md:left-40`}
      style={{ color: color }}
    >
      {title}
    </h2>
  );
};

export default Title;
