import React, { useState } from "react";
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
const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    project: "",
    referral: "",
};
const Contact = () => {
    useEffect(() => {
        document.title = "Vizztal | Contact";
    }, []);
    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const heroRef = useRef(null);
    const heroLetters = "CONTACT".split("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Simple validation
        if (
            !form.firstName ||
            !form.lastName ||
            !form.email ||
            !form.phone ||
            !form.company ||
            !form.service ||
            !form.budget ||
            !form.project
        ) {
            setError("Please fill all required fields.");
            return;
        }

        setLoading(true);
        // Construct the payload
        const payload = {
            name: `${form.firstName} ${form.lastName}`,
            email: form.email,
            message: `
Company: ${form.company}
Phone: ${form.phone}
Service: ${form.service}
Budget: ${form.budget}
Project: ${form.project}
Referral: ${form.referral || "N/A"}
        `.trim(),
        };
        const whatsappPayload = {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            company: form.company,
            service: form.service,
            budget: form.budget,
            project: form.project,
            referredBy: form.referral || "N/A",
        };
        console.log(whatsappPayload);
        try {
            // Replace '/api/contact' with your actual API endpoint
            const res = await fetch(
                "https://vizzbackend-rsqi.onrender.com/api/mail/send",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );
            await fetch(
                "https://send-whatsapp-message-lzn1.onrender.com/api/vizzital-solution",
                // "http://localhost:3000/api/vizzital-solution",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(whatsappPayload),
                }
            );
            console.log(res);
            setSuccess("Your message has been sent!");
            setForm(initialForm);
        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };
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
            <section className="relative w-full h-screen overflow-hidden p-6 pt-20 lg:p-22 text-white">
                <div className="gradient-background  absolute top-0 left-0 w-full h-full -z-10"></div>
                {/* Foreground Content */}
                <div className="max-w-screen-2xl mx-auto 2xl:px-22">
                    <div className="relative z-10  w-full text-start xl:mt-10 mt-20">
                        {/* Heading */}
                        <h2 className="text-5xl w-full lg:text-7xl  xl:text-8xl font-bold overflow-hidden">
                            <motion.span
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
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
                        <p className="text-3xl mt-30 xl:mt-8 lg:text-4xl xl:text-4xl xl:ml-96 overflow-hidden z-11 ">
                            <motion.span
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    ease: [0.22, 1, 0.36, 1],
                                    duration: 0.8,
                                    delay: 0.6,
                                }}
                            >
                                Discover how we can produce meaningful results
                                for your company.
                            </motion.span>
                        </p>
                        {/* Hero Letters */}
                        <h1 className="growth text-[19vw] xl:text-[16vw] lg:text-[17vw]   font-black  xl:mt-10 2xl:mt-40 xl:leading-45 mt-20 overflow-hidden 2xl:leading:60 2xl:text-[13vw] ">
                            <motion.span
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
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
                </div>
            </section>

            {/* contact form  */}
            <div className="bg-black w-full  p-6 lg:p-22  sm:pt-30">
                <div className="max-w-screen-2xl mx-auto 2xl:px-22">
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
            </div>
            <section className="min-h-screen bg-black px-6 lg:p-22 py-20 flex flex-col items-center justify-start">
                {/* Animated Heading */}

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-screen-2xl mx-auto 2xl:px-22 space-y-10"
                >
                    {/* Show error or success */}
                    {error && (
                        <div className="text-red-500 text-xl mb-4">{error}</div>
                    )}
                    {success && (
                        <div className="text-green-500 text-xl mb-4">
                            {success}
                        </div>
                    )}
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
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
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
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
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
                            name="email"
                            value={form.email}
                            onChange={handleChange}
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
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
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
                            name="company"
                            value={form.company}
                            onChange={handleChange}
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
                        <label
                            htmlFor="service"
                            className="text-xl mb-2 bg-black"
                        >
                            Choose the service *
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="bg-black border-b-2 border-gray-500 text-3xl font-bold placeholder:text-white py-2 "
                        >
                            <option
                                style={{
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                }}
                                value=""
                            >
                                Select a service
                            </option>
                            <option
                                style={{
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                }}
                            >
                                Web Development
                            </option>
                            <option
                                style={{
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                }}
                            >
                                Mobile App
                            </option>
                            <option
                                style={{
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                }}
                            >
                                Branding
                            </option>
                            <option
                                style={{
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                }}
                            >
                                UI/UX Design
                            </option>
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
                            name="budget"
                            value={form.budget}
                            onChange={handleChange}
                            className="bg-black border-b-2 border-gray-500 text-3xl font-bold placeholder:text-white py-2 focus:outline-none"
                        >
                            <option value="">Select a budget</option>
                            <option>1000</option>
                            <option>2,000 - 5,000</option>
                            <option>5,000 - 10,000</option>
                            <option>Above 10,000</option>
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
                            name="project"
                            value={form.project}
                            onChange={handleChange}
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
                            name="referral"
                            value={form.referral}
                            onChange={handleChange}
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
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Request a Quote"}
                        </button>
                    </motion.div>
                </form>
            </section>
        </div>
    );
};

export default Contact;
