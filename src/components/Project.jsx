
import React from "react";
import Button from "./Button";

function Project({ project, mover, count }) {
  return (
    <div className="w-full h-[18rem] pt-10 text-white ">
      <div
      onClick={() => {
        consol.log("Hello")
      }
      }
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-lg mx-auto flex flx-col sm:flex-row items-center justify-between"
      >
        <h1 className="text-5xl  block  capitalize font-medium">{project.title}</h1>
        <div className="dets sm:w-1/3">
          <p className="mb-7">{project.description}</p>
          <div className="flex items-center gap-5">
            {project.live && <Button />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;