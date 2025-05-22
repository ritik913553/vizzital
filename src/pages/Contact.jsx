import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const Contact = () => {
    const heroRef = useRef(null);
    const heroLetters = "CONTACT".split("");

    useEffect(() => {
        if (heroRef.current) {
            const letters = heroRef.current.querySelectorAll(".hero-letter");
            letters.forEach((el, i) => {
                setTimeout(() => {
                    el.style.opacity = 1;
                    el.style.transform = "translateY(0)";
                }, i * 100);
            });
        }
    }, []);
    return (
        <div className="min-h-screen  flex flex-col">
            {/* Hero Section */}
            <section className="relative w-full h-screen overflow-hidden p-6 pt-20 sm:p-22 text-white">
                <div className="gradient-background  absolute top-0 left-0 w-full h-full -z-10"></div>
                {/* Foreground Content */}
                <div className="relative z-10  w-full text-start sm:mt-10 mt-20">
                    {/* Heading */}
                    <h2 className="text-5xl w-full  sm:text-8xl font-bold overflow-hidden">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }} //kewl ek bar chlega animation
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                                delay: 0.6,
                            }}
                            className="inline-block origin-left"
                        >
                            Let's Talk About Your Business Objectives
                        </motion.span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-3xl mt-30 sm:mt-8 sm:text-4xl sm:ml-96 overflow-hidden z-11 ">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                                delay: 0.6,
                            }}
                        >
                            Discover how we can produce meaningful results for
                            your company.
                        </motion.span>
                    </p>
                    {/* Hero Letters */}
                    <h1 className="growth text-[19vw] sm:text-[16vw]  text-center font-black  sm:mt-7 sm:leading-40 mt-20 overflow-hidden">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }} //kewl ek bar chlega animation
                            transition={{
                                ease: [0.22, 1, 0.36, 1],
                                duration: 0.8,
                                delay: 0.6,
                            }}
                            className="inline-block origin-left"
                        >
                            CONTACT
                        </motion.span>
                    </h1>
                </div>
            </section>

            {/* contact form  */}
            <div className="bg-black w-full  p-6 sm:p-22  sm:pt-30">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-white  text-4xl md:text-7xl mt-25 font-extrabold text-start"
                >
                    Let’s Bring Your Idea To Life Together.
                </motion.h2>
            </div>
            <section className="min-h-screen bg-black px-6 py-20 flex flex-col items-center justify-start">
                {/* Animated Heading */}

                <form className="w-full max-w-3xl space-y-10">
                    {/* First Name */}
                    <motion.div
                        className="flex flex-col text-white mb-16"
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <label htmlFor="firstName" className="text-xl mb-2">
                            First name *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Your First Name"
                            className="bg-transparent border-b-2 border-gray-500 text-3xl font-bold py-2 focus:outline-none placeholder:text-white"
                        />
                    </motion.div>

                    {/* Last Name */}
                    <motion.div
                        className="flex flex-col text-white mb-16"
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <label htmlFor="lastName" className="text-xl mb-2">
                            Last name *
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Your Last Name"
                            className="bg-transparent border-b-2 border-gray-500 text-3xl font-bold placeholder:text-white py-2 focus:outline-none"
                        />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        className="flex flex-col text-white mb-16"
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <label htmlFor="email" className="text-xl mb-2">
                            E-Mail *
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email"
                            className="bg-transparent border-b-2 border-gray-500 text-3xl font-bold placeholder:text-white py-2 focus:outline-none"
                        />
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        className="flex flex-col text-white mb-16"
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <label htmlFor="phone" className="text-xl mb-2">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Your phone number"
                            className="bg-transparent border-b-2 border-gray-500 text-3xl  font-bold placeholder:text-white py-2 focus:outline-none"
                        />
                    </motion.div>

                    {/* Company Name */}
                    <motion.div
                        className="flex flex-col text-white mb-16"
                        custom={5}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <label htmlFor="company" className="text-xl mb-2 ">
                            Company Name *
                        </label>
                        <input
                            type="text"
                            id="company"
                            placeholder="Your Company Name"
                            className="bg-transparent border-b-2 border-gray-500 text-3xl font-bold placeholder:text-white py-2 focus:outline-none"
                        />
                    </motion.div>

                    {/* Choose the service */}
                    <motion.div
                        className="flex flex-col text-white mb-16"
                        custom={6}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <label htmlFor="service" className="text-xl mb-2 ">
                            Choose the service *
                        </label>
                        <select
                            id="service"
                            className="bg-transparent border-b-2 border-gray-500 text-3xl font-bold placeholder:text-white py-2 "
                        >
                            <option value="">Select a service</option>
                            <option>Web Development</option>
                            <option>Mobile App</option>
                            <option>Branding</option>
                            <option>UI/UX Design</option>
                        </select>
                    </motion.div>

                    {/* Estimated Budget */}
                    <motion.div
                        className="flex flex-col text-white mb-16"
                        custom={7}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <label htmlFor="budget" className="text-xl mb-2">
                            Estimated Budget *
                        </label>
                        <select
                            id="budget"
                            className="bg-transparent border-b-2 border-gray-500 text-3xl font-bold placeholder:text-white py-2 focus:outline-none"
                        >
                            <option value="">Select a budget</option>
                            <option>Under $1,000</option>
                            <option>$1,000 - $5,000</option>
                            <option>$5,000 - $10,000</option>
                            <option>Above $10,000</option>
                        </select>
                    </motion.div>

                    {/* Describe your project */}
                    <motion.div
                        className="flex flex-col text-white mb-16"
                        custom={8}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <label htmlFor="project" className="text-xl mb-2">
                            Describe your project *
                        </label>
                        <textarea
                            id="project"
                            rows="4"
                            placeholder="The more Details, the better"
                            className="bg-transparent border-b-2 border-gray-500 text-3xl font-bold placeholder:text-white py-2 focus:outline-none resize-none"
                        />
                    </motion.div>

                    {/* Referred By */}
                    <motion.div
                        className="flex flex-col text-white mb-16"
                        custom={9}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <label htmlFor="referral" className="text-xl mb-2">
                            Referred By
                        </label>
                        <input
                            type="text"
                            id="referral"
                            placeholder="Optional"
                            className="bg-transparent border-b-2 border-gray-500 text-3xl font-bold placeholder:text-white py-2 focus:outline-none"
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        className="flex justify-center pt-10 mb-16"
                        custom={10}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-bold text-xl px-8 py-3 rounded-md  hover:bg-blue-500 transition duration-300"
                        >
                            Request a Quote
                        </button>
                    </motion.div>
                </form>
            </section>
        </div>
    );
};

export default Contact;
