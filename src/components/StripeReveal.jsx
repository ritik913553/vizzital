import React, { useEffect } from "react";
import { anticipate, easeInOut, motion } from "framer-motion";

const stripeCount = 14;

const StripeReveal = ({ onFinish }) => {
    useEffect(() => {
        const totalAnimationTime = stripeCount * 100 + 1000;
        const finishTimer = setTimeout(() => {
            onFinish?.(); // Call optional callback
        }, totalAnimationTime);

        return () => {
            clearTimeout(finishTimer);
        };
    }, []);
    return (
        <div className="w-screen h-screen bg-gray-900 relative overflow-hidden text-white z-100">
            <div className="flex w-full h-full absolute top-0 left-0 z-50">
                {Array.from({ length: stripeCount }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="h-full flex-1 bg-white"
                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            duration: 1.3,
                            delay: i * 0.1,
                            ease: easeInOut,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default StripeReveal;
