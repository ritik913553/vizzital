import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Landing from "./Landing/Landing";
import Navbar from "./Navbar";
import Projects from "./Projects";

const stripeCount = 14;

const Home = ({ animate }) => {
    const [scrolled, setScrolled] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY >= window.innerHeight) {
                
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
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
                <Navbar scrolled={scrolled} />

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
        </div>
    );
};

export default Home;
