import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Landing from "./Landing/Landing";
import Navbar from "./Navbar";
import Projects from "./Projects";

const stripeCount = 14;

const Home = ({ animate }) => {
     const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > window.innerHeight) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return (
        <>
            <div className="relative w-full  overflow-hidden">
                {/* Stripe mask - covers the content initially */}
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
                        />
                    ))}
                </div>
                <Navbar scrolled={scrolled} />

                <Landing />
            </div>
            <div className="w-full h-full bg-gradient-to-b from-blue-900 to-sky-400 py-10 p-22">
                <Projects />
                <div className="flex justify-center mt-10 items-center text-white font-bold">
                    <button className="py-3 px-6 bg-blue-900 rounded-lg" >See All Work</button>
                </div>
            </div>
        </>
    );
};

export default Home;
