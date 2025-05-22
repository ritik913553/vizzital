import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Landing from "./Landing/Landing";
import Navbar from "./Navbar";
import Projects from "./Projects";
import { Link } from "react-router-dom";

const stripeCount = 14;

const Home = ({ animate }) => {
    const [animationComplete, setAnimationComplete] = useState(false);
    
    return (
        <div className="">
            <div className="relative w-full overflow-hidden">
                {/* Stripe mask - covers the content initially */}
                {!animationComplete && (
                    <div className="absolute inset-0 flex z-10">
                        {Array.from({ length: stripeCount }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="h-full flex-1 bg-gray-900"
                                initial={{ y: 0 }} // Start covering the content
                                animate={animate ? { y: "100%" } : {}} // Move down to reveal
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.1,
                                    ease: "easeInOut",
                                }}
                                onAnimationComplete={() => {
                                    if (i === stripeCount - 1) {
                                        // Hide the stripe mask after the last stripe finishes animating
                                        setAnimationComplete(true);
                                    }
                                }}
                            />
                        ))}
                    </div>
                )}

                <Landing />
            </div>
            <div className="w-full h-full bg-black py-10 sm:p-22 p-6">
                <Projects />
                <div className="flex justify-center mt-10 items-center text-white font-bold">
                    <button className="py-3 px-6 bg-[#1A82FC] rounded-lg">
                        See All Work
                    </button>
                </div>
            </div>
            <div className="interest-in-colobrating p-6 sm:p-22 bg-gradient-to-b from-black to-[#1859AB] pb-12">
                <h1
                    className="text-[13vw] sm:text-[7vw] font-bold text-transparent leading-12 sm:leading-17  overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(279deg,rgba(250, 36, 9, 1) 0%, rgba(250, 36, 9, 1) 20%, rgba(212, 205, 23, 1) 57%, rgba(250, 25, 235, 1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Interested In
                </h1>
                <h1
                    className="text-[13vw] sm:text-[7vw] font-bold text-transparent  overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(279deg,rgba(250, 36, 9, 1) 0%, rgba(250, 36, 9, 1) 20%, rgba(212, 205, 23, 1) 57%, rgba(250, 25, 235, 1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Collaborating?
                </h1>
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{  y: 0, opacity: 1 }}
                        viewport={{ once: false }} //kewl ek bar chlega animation
                        transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.8,
                        }}
                        className="inline-block mt-1  px-7 py-3 text-xl bg-blue-600 text-white rounded-lg font-bold origin-bottom-left"
                    >
                        <Link to="/contact">Request Meeting</Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
