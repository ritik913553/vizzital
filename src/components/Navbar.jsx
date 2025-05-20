import { motion } from "framer-motion";
import { Power4 } from "gsap";
import React from "react";
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
    return (
        <div className="w-full fixed z-[999] ">
            <div className="max-w-screen-2xl mx-auto px-22 py-5 sm:py-10 flex items-center justify-between text-white ">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: Power4.easeInOut, duration: 1 }}
                    className="logo"
                >
                    <h1 className="text-2xl sm:text-4xl font-bold">Vizzital</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: Power4.easeInOut, duration: 1 }}
                    className="sm:hidden"
                >
                    <IoMenuSharp />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: Power4.easeInOut, duration: 1 }}
                    className="links hidden sm:flex gap-10"
                >
                    {["Website", "Digital", "Pricing", "Contact"].map(
                        (item, index) => (
                            <a key={index} className="text-md font-semibold cursor-pointer">
                                {item}
                            </a>
                        )
                    )}
                </motion.div>
            </div>
        </div>
    );
}
export default Navbar;

//md	768px	@media (min-width: 768px) { ... }
//sm	640px	@media (min-width: 640px) { ... }
