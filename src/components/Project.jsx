import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Project({ project, mover, count }) {
    return (
        <div className="w-full h-[18rem] pt-10 text-white ">
            <div
                onClick={() => {
                }}
                onMouseEnter={() => {
                    mover(count);
                }}
                className="max-w-screen-lg mx-auto flex flx-col sm:flex-row items-center justify-between"
            >
                <h1 className="text-5xl  block  capitalize font-medium">
                    {project.title}
                </h1>
                <div className="dets sm:w-1/3">
                    <p className="mb-7">{project.description}</p>
                    <div className="flex items-center gap-5">
                        {project.live && (
                            <a href={project.link} target="_blank" className="max-w-40 cursor-pointer px-5 gap-x-2 py-2 bg-[#1A82FC] text-white font-bold rounded-full flex items-center justify-between ">
                                <span className="text-sm   font-bold ">
                                    Live
                                </span>
                                <FaArrowRight />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
