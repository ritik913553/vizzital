import { HiH1 } from "react-icons/hi2";
import FeatureCard from "../FeatureCard";
import FeatureCards from "../FeatureCards";
import Projects from "../Projects";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="wholeLandingPage relative w-full min-h-screen  text-white ">
            <div className="header relative w-full h-screen overflow-hidden p-6 xl:p-22 ">
                <div className="gradient-background  absolute top-0 left-0 w-full h-full -z-10"></div>

                {/* Content - added relative and z-10 */}
                <div className="relative xl:mt-12 mt-50  max-w-screen-2xl mx-auto  2xl:px-22">
                    <h2 className="text-5xl  lg:text-6xl  overflow-hidden">
                        <motion.span
                            initial={{ rotate: "70deg", y: "40%", opacity: 0 }}
                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                                delay: 0.3,
                            }}
                            className="inline-block origin-left"
                        >
                            World class
                        </motion.span>
                    </h2>
                    <h2 className="text-4xl lg:text-5xl  mt-2 overflow-hidden">
                        <motion.span
                            initial={{ rotate: "70deg", y: "40%", opacity: 0 }}
                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                                delay: 0.3,
                            }}
                            className="inline-block origin-left"
                        >
                            marketing.
                        </motion.span>
                    </h2>
                    <h2 className="text-5xl  lg:text-6xl mt-2 font-bold overflow-hidden">
                        <motion.span
                            initial={{ rotate: "70deg", y: "40%", opacity: 0 }}
                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                                delay: 0.3,
                            }}
                            className="inline-block origin-left"
                        >
                            Made simple.
                        </motion.span>
                    </h2>
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ rotate: "30deg", y: "20%", opacity: 0 }}
                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                                delay: 0.3,
                            }}
                            className="inline-block mt-1 xl:mt-1 lg:text-2xl lg:mt-10 px-7 py-3 text-xl bg-blue-600 text-white rounded-lg font-bold origin-left"
                        >
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://calendly.com/vizztaljsr/30min"
                            >
                                Request Meeting
                            </a>
                        </motion.div>
                    </div>
                </div>
                <h1 className="growth text-[21vw] lg:text-[18vw] xl:text-[19vw] font-black  lg:mt-40 xl:-mt-10 mt-20 overflow-hidden max-w-screen-2xl mx-auto  2xl:px-22 2xl:text-[17vw] 2xl:ml-10">
                    <motion.span
                        initial={{ rotate: "70deg", y: "40%", opacity: 0.6 }}
                        animate={{ rotate: 0, y: 0, opacity: 1 }}
                        transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.8,
                            delay: 0.3,
                        }}
                        className="inline-block origin-left"
                    >
                        GROWTH
                    </motion.span>
                </h1>
            </div>
            <div className="w-full xl:min-h-screen 2xl:min-h-auto bg-black p-6 xl:p-22 pb-2 ">
                <div className="max-w-screen-2xl mx-auto 2xl:px-22">
                    <h1 className="mt-10 text-2xl xl:text-4xl w-full  text-start xl:w-[70%] mx-auto xl:leading-12">
                        Leveraging deep industry knowledge, our team
                        unitesstrategy, creativity, and innovation to craft
                        impactfulmarketing that resonates and engages.
                    </h1>
                    <div className="h-[1px] bg-white mt-15 opacity-50 "></div>
                    <div className="mt-7 xl:ml-5">
                        <h1 className="text-[8.4vw] xl:text-[7vw] 2xl:text-[5vw] font-bold text-transparent  overflow-hidden">
                            <motion.span
                                style={{
                                    background:
                                        "linear-gradient(279deg,rgba(250, 36, 9, 1) 0%, rgba(250, 36, 9, 1) 20%, rgba(212, 205, 23, 1) 57%, rgba(250, 25, 235, 1) 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                                initial={{ x: "-50%", opacity: 0 }}
                                whileInView={{ x: "50%", opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    ease: [0.22, 1, 0.36, 1],
                                    duration: 0.8,
                                }}
                                className="inline-block origin-left  -translate-x-[50%] opacity-0 bg-clip-text"
                            >
                                Crafting The Right
                            </motion.span>
                        </h1>
                    </div>
                    <div className="xl:ml-92 md:ml-40 ml-18 overflow-hidden">
                        <motion.h1
                            className="text-[8.4vw] 2xl:text-[5vw] xl:text-[6.5vw] font-bold  xl:leading-23 bg-clip-text"
                            style={{
                                background:
                                    "linear-gradient(90deg,rgba(212, 205, 23, 1) 0%, rgba(250, 69, 8, 1) 49%, rgba(245, 5, 97, 1) 75%, rgba(227, 20, 213, 1) 100%)",
                                webkitBackgroundClip: "text",
                                webkitTextFillColor: "transparent",
                            }}
                            initial={{ x: "-50%", opacity: 0 }}
                            whileInView={{ x: "0%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                            }}
                        >
                            Growth Strategies
                        </motion.h1>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gradient-to-b from-black to-[#1A82FC] p-6 xl:px-22 py-8">
                <div className="text-2xl sm:text-4xl font-thin mt-5 overflow-hidden max-w-screen-2xl mx-auto 2xl:px-22">
                    <motion.h1
                        initial={{ x: "-60%", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.8,
                            delay: 0.3,
                        }}
                        className=""
                    >
                        Our team has the experience
                    </motion.h1>
                    <motion.h1
                        initial={{ x: "-60%", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.8,
                            delay: 0.3,
                        }}
                        className=""
                    >
                        needed to achieve your goals.
                    </motion.h1>
                </div>
            </div>
            <div className="w-full min-h-screen bg-[#1A82FC] p-6 xl:px-22 py-5">
                <div className="flex flex-col xl:flex-row mt-10 xl:mt-7 justify-between gap-5 max-w-screen-2xl mx-auto 2xl:px-22">
                    <div className="xl:w-[60%]  text-5xl xl:text-8xl font-sans-serif font-bold xl:leading-27 overflow-hidden">
                        <motion.h1
                            initial={{ x: "-60%", opacity: 0 }}
                            whileInView={{ x: "0%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                            }}
                            className=""
                        >
                            Services
                        </motion.h1>
                        <motion.h1
                            initial={{ x: "-60%", opacity: 0 }}
                            whileInView={{ x: "0%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                                delay: 0.3,
                            }}
                            className=""
                        >
                            That Sapes
                        </motion.h1>
                        <motion.h1
                            initial={{ x: "-60%", opacity: 0 }}
                            whileInView={{ x: "0%", opacity: 1 }}
                            viewport={{ once: true, margin: "-40% 0px" }}
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                            }}
                            className=""
                        >
                            Destinies
                        </motion.h1>
                    </div>
                    <div className=" flex items-end mt-1 xl:w-[45%] overflow-hidden">
                        <motion.h3
                            initial={{ y: "60%", opacity: 0 }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            viewport={{ once: true, margin: "-40% 0px" }}
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                            }}
                            className="xl:text-xl text-2xl  font-light"
                        >
                            Discover a world where creativity knows no bounds
                            and your dreams take center stage.
                        </motion.h3>
                    </div>
                </div>
                <FeatureCards />
            </div>
            <div className="p-6 xl:px-22  bg-gradient-to-b from-[#1A82FC] to-black py-5">
                <div className="max-w-screen-2xl mx-auto 2xl:px-22">
                    <div className=" w-fit ">
                        <h1
                            className="text-[26vw]  xl:text-[13vw] sm:leading-36 mt-20 leading-20  font-black xl:font-bold"
                            style={{
                                background:
                                    "linear-gradient(273deg,rgba(240, 233, 43, 1) 0%, rgba(255, 20, 239, 1) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Work
                        </h1>
                        <hr className="border-2 mt-2 " />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
