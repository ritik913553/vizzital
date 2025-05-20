import React from "react";
import { motion } from "framer-motion";
import Landing from "./Landing";
import Navbar from "./Navbar";

const stripeCount = 14;

const Home = ({ animate }) => {
    return (
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
            <Navbar />

            <Landing />
        </div>
    );
};

export default Home;
