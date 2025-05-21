import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedButton = ({ text }) => {
    return (
        <Link to={`/${text}`} >
            <motion.div
                className="button mb-2  flex text-[9vw] sm:text-[5.3vw] font-bold gap-x-3 items-center px-3 cursor-pointer hover:filter hover:blur-[3px] hover:opacity-100 transition duration-100 "
                whileHover="hover" // Trigger the hover variant
            >
                {/* Arrow animation */}
                <motion.div
                    className="transform hidden sm:block"
                    initial={{ scale: 0, x: -10, opacity: 0 }} // Start small and slightly left
                    variants={{
                        hover: { scale: 1, x: 0, opacity: 0.8 }, // Scale in and move to position
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <FaArrowRight />
                </motion.div>
                {/* Button text */}
                <h1 className="opacity-80 capitalize text-center sm:mx-0 mx-auto">
                    {text}
                </h1>
            </motion.div>
        </Link>
    );
};

export default AnimatedButton;
