import React from "react";

const Title = ({ title, color }) => {
  return (
    <h2
      className={`text-8xl font-bold absolute top-28 left-40`}
      style={{ color: color }}
    >
      {title}
    </h2>
  );
};

export default Title;
