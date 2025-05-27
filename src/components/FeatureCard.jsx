import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ feature }) => {
    return (
        <div className="mt-20  flex flex-col lg:flex-row bg-black w-full  gap-x-10 lg:p-20 p-5 py-7">
            <div className="lg:w-[70%] w-full flex flex-col justify-between lg:gap-y-10 gap-y-6 ">
                <h1 className="lg:text-[6.3vw] text-[7.5vw] lg:leading-23 font-black lg:font-bold overflow-hidden">
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.8,
                        }}
                        className="inline-block "
                    >
                        {feature.heading}
                    </motion.span>
                </h1>
                <h2 className="text-lg opacity-90 lg:opacity-100 overflow-hidden">
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.8,
                        }}
                        className="inline-block "
                    >
                        {feature.description}
                    </motion.span>
                </h2>
            </div>
            <div className="lg:w-[20%]  flex justify-center lg:justify-end items-center  lg:p-6 pt-7 ">
                <motion.img
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        ease: [0.22, 1, 0.36, 1],
                        duration: 0.8,
                    }}
                    className="h-30 lg:h-full"
                    src={`${feature.image}`}
                    alt=""
                />
            </div>
        </div>
    );
};

export default FeatureCard;
