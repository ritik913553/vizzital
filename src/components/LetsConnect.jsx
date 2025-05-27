import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const LetsConnect = () => {
  return (
    <div className="interest-in-colobrating p-6 lg:p-22 bg-gradient-to-b from-black to-[#1859AB] pb-12">
                <div className='max-w-screen-2xl mx-auto 2xl:px-22'>
                <h1
                    className="text-[10vw] lg:text-[8vw] font-bold text-transparent leading-17 md:leading-24 2xl:text-[6vw] 2xl:leading-32 overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(279deg,rgba(250, 36, 9, 1) 0%, rgba(250, 36, 9, 1) 20%, rgba(212, 205, 23, 1) 57%, rgba(250, 25, 235, 1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Looking for Something  Unique & exclusive
                </h1>
               
                <div className="overflow-hidden mt-10">
                    <motion.div
                        initial={{ rotate: "40deg", y: "50%", opacity: 0 }}
                        whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                        viewport={{ once: false }} //kewl ek bar chlega animation
                        transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.8,
                        }}
                        className="inline-block mt-1  px-7 py-3 text-xl bg-blue-600 text-white rounded-lg font-bold origin-bottom-left"
                    >
                        <Link to="/contact">Let's Connect</Link>
                    </motion.div>
                </div>
                </div>
            </div>
  )
}

export default LetsConnect
