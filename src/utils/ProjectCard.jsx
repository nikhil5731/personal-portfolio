import React from "react";

const ProjectCard = () => {
  return (
    <div className="flex flex-col w-[16rem] rounded-2xl md:rounded-tr-[5rem] md:rounded-bl-[5rem] gap-2 bg-white p-3 md:px-6 md:py-6 text-left group hover:text-white hover:bg-black border-2 hover:border-white transition-all">
      <h2 className=" font-bold text-2xl">Agency Landing Page</h2>
      <p className="text-lg max-h-20 overflow-y-scroll ">
        It is build on top of the React JS, with styledComponents and GSAP for
        smooth scrolling animations.
      </p>
      <div className="border-2 w-full border-black group-hover:border-white" />
      <p className="text-lg">#react #gsap #styledComponents</p>
      <div className="flex justify-between w-full gap-3 items-center">
        <button className="h-full rounded-xl bg-black w-full text-white text-xl p-3 md:rounded-bl-[5rem] group-hover:bg-white group-hover:text-black">
          Visit
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </div>
    </div>
  );
};

export default ProjectCard;
