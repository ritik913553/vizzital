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
    <div className="min-h-screen bg-black flex flex-col">
     

      {/* Hero Section */}
       <section className="relative flex flex-col items-center justify-center py-20 md:py-28 overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(120deg, #2d3aef 0%, #6e3ff7 50%, #00c6fb 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientMove 8s ease-in-out infinite alternate",
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Heading */}
        <motion.h1
          initial={{ x: -500, opacity: 0, scale: 0.8 }}
          animate={{ x: -350, opacity: 1, scale: 1.1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Let’s Talk About Your Business Objectives
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 200, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-blue-100 mb-8"
        >
          Discover how we can produce meaningful
          <br />
          <span className="text-2xl">results for your company.</span>
        </motion.p>

        {/* Animated "CONTACT" Letters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 110 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex justify-center gap-1 md:gap-3 overflow-hidden"
          ref={heroRef}
        >
          {heroLetters.map((l, i) => (
            <span
              key={i}
              className="hero-letter text-white font-extrabold text-6xl md:text-8xl tracking-wider transform translate-y-8 opacity-0 transition duration-500"
              style={{
                clipPath: "inset(0 0 0 0)", // bottom half hidden
              }}
            >
              {l}
            </span>
          ))}
        </motion.div>
      </div>
    </section>

{/* contact form  */}
      <section className="min-h-screen bg-black px-6 py-20 flex flex-col items-center justify-start">
      {/* Animated Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-white text-4xl md:text-3xl font-extrabold mb-16 text-center"
      >
        Let’s Bring Your Idea To Life Together.
      </motion.h2>

      <form className="w-full max-w-3xl space-y-10">
        {/* First Name */}
        <motion.div
          className="flex flex-col text-white"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <label htmlFor="firstName" className="text-sm mb-2">First name *</label>
          <input
            type="text"
            id="firstName"
            placeholder="Your First Name"
            className="bg-transparent border-b-2 border-gray-500 text-xl py-2 focus:outline-none"
          />
        </motion.div>

        {/* Last Name */}
        <motion.div
          className="flex flex-col text-white"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <label htmlFor="lastName" className="text-sm mb-2">Last name *</label>
          <input
            type="text"
            id="lastName"
            placeholder="Your Last Name"
            className="bg-transparent border-b-2 border-gray-500 text-xl py-2 focus:outline-none"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          className="flex flex-col text-white"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <label htmlFor="email" className="text-sm mb-2">E-Mail *</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="bg-transparent border-b-2 border-gray-500 text-xl py-2 focus:outline-none"
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          className="flex flex-col text-white"
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <label htmlFor="phone" className="text-sm mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            placeholder="Your phone number"
            className="bg-transparent border-b-2 border-gray-500 text-xl py-2 focus:outline-none"
          />
        </motion.div>

        {/* Company Name */}
        <motion.div
          className="flex flex-col text-white"
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <label htmlFor="company" className="text-sm mb-2">Company Name *</label>
          <input
            type="text"
            id="company"
            placeholder="Your Company Name"
            className="bg-transparent border-b-2 border-gray-500 text-xl py-2 focus:outline-none"
          />
        </motion.div>

        {/* Choose the service */}
        <motion.div
          className="flex flex-col text-white"
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <label htmlFor="service" className="text-sm mb-2">Choose the service *</label>
          <select
            id="service"
            className="bg-transparent border-b-2 border-gray-500 text-xl py-2 "
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
          className="flex flex-col text-white"
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <label htmlFor="budget" className="text-sm mb-2">Estimated Budget *</label>
          <select
            id="budget"
            className="bg-transparent border-b-2 border-gray-500 text-xl py-2 focus:outline-none"
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
          className="flex flex-col text-white"
          custom={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <label htmlFor="project" className="text-sm mb-2">Describe your project *</label>
          <textarea
            id="project"
            rows="4"
            placeholder="Give us a brief idea of what you're working on..."
            className="bg-transparent border-b-2 border-gray-500 text-xl py-2 focus:outline-none resize-none"
          />
        </motion.div>

        {/* Referred By */}
        <motion.div
          className="flex flex-col text-white"
          custom={9}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <label htmlFor="referral" className="text-sm mb-2">Referred By</label>
          <input
            type="text"
            id="referral"
            placeholder="Optional"
            className="bg-transparent border-b-2 border-gray-500 text-xl py-2 focus:outline-none"
          />
        </motion.div>

        {/* Submit Button */}
         <motion.div className="flex justify-center pt-10" custom={10} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <button
            type="submit"
            className="bg-blue-300 text-black text-lg font-semibold px-8 py-3 rounded-full hover:bg-blue-500 transition duration-300"
          >
            Request a Quote
          </button>
        </motion.div>
      </form>
    </section>

      {/* Footer */}
    <footer className="bg-gradient-to-b from-blue-900 via-purple-900 to-pink-900 text-white py-16 px-6 text-center">
  {/* Newsletter Section */}
  <div className="max-w-xl mx-auto mb-12">
    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
      Let's shape your brand goals together.
    </h2>
    <form className="flex flex-col items-center gap-3">
      <input
        type="email"
        required
        placeholder="Your email here"
        className="w-full md:w-3/4 px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-300 border border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button
        type="submit"
        className="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition"
      >
        Subscribe
      </button>
      <label className="text-xs text-gray-300 flex items-center justify-center gap-2 mt-1">
        <input type="checkbox" defaultChecked className="accent-blue-500" />
        By clicking Subscribe, you agree to receive emails from ALH Media.
      </label>
    </form>
  </div>

  <div className="flex  md:flex-row justify-between items-center mb-10">
  {/* Company Links */}
  <div className="mb-10">
    <h3 className="text-lg font-semibold mb-2">Company</h3>
    <a href="/about" className="block text-sm text-blue-200 hover:text-white mb-1">About Company</a>
    <a href="/contact" className="block text-sm text-blue-200 hover:underline underline-offset-4">Contact</a>
  </div>

  {/* Contact Information */}
  <div className="text-sm text-blue-100 mb-12">
    <p>
      <strong>Jharkhand</strong><br />
    
Gangotri Enclave , Kadma , Jamshedpur
    </p>
    <p className="mt-4">
      <strong>Contact</strong><br />
      <a href="mailto:Info@vizztal.com" className="hover:underline ">Info@vizztal.com</a>
      {/* <a href="mailto:vizztaljsr@gmail.com" className="hover:underline">vizztaljsr@gmail.com</a> */}
    </p>
  </div> 
  </div>



  {/* Bottom Credit */}
  <div className="text-xs text-blue-200">
    © 2025   - Vizztal
   
  </div>
</footer>


    
    </div>
  );
};

export default Contact;