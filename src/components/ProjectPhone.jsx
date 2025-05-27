import React from "react";

const ProjectPhone = ({project}) => {
    return (
        <div
            className=" rounded-lg shadow-lg mb-6 "
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-t-lg sm:h-96 object-cover"
                src={project.video}
                type="video/webm"
            ></video>
            <div className="p-4 bg-gradient-to-b from-[#1A82FC] to-blue-600 text-white">
                <h2 className="text-xl sm:text-3xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm sm:text-lg sm:leading-6 mb-4">{project.description}</p>
                <div className="flex gap-4">
                    {project.live && (
                        <a
                        target="_blank"
                            href={project.link}
                            className="bg-green-500 px-4 py-2 rounded-lg text-sm sm:text-lg sm:px-5 font-bold"
                        >
                            Live
                        </a>
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default ProjectPhone;
