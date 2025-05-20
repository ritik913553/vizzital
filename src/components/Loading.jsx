import React from "react";
import { motion } from "framer-motion";

// Scaled-up hexagon shape
const hexPath = [
  { x: 0, y: 0 },
  { x: 60, y: -34 },
  { x: 120, y: 0 },
  { x: 120, y: 70 },
  { x: 60, y: 104 },
  { x: 0, y: 70 },
];

const segmentCount = 7;

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <svg
        viewBox="0 0 600 300"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[36rem] h-56 -mt-20"
      >
        {Array.from({ length: segmentCount }).map((_, i) => {
          const offsetX = i * 100; // increased spacing
          const delay = i * 0.2;
          return (
            <motion.polygon
              key={i}
              points={hexPath
                .map((p) => `${p.x + offsetX},${p.y + 100}`)
                .join(" ")}
              fill="none"
              stroke="white"
              strokeWidth="3"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 1, 0.1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: delay,
              }}
            />
          );
        })}
      </svg>
      <motion.div
        className="mt-10 font-bold"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-2xl text-center">Loading Ecosystem</h1>
      </motion.div>
    </div>
  );
};

export default Loading;
