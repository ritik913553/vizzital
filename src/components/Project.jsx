
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
          console.log("Mouse entered project:", count); // Debugging
          mover(count);
        }}
        className="max-w-screen-lg mx-auto flex items-center justify-between"
      >
        <h1 className="text-5xl capitalize font-medium">{project.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-7">{project.description}</p>
          <div className="flex items-center gap-5">
            {project.live && <Button />}
            {project.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;