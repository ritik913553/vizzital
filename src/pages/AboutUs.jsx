import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ from = 0, to, duration = 2, className }) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(
                {},
                {
                    duration,
                    onUpdate: function () {
                        const val = Math.floor(
                            this.progress() * (to - from) + from
                        );
                        setCount(val);
                    },
                }
            );
        }, ref);
        return () => ctx.revert();
    }, [from, to, duration]);

    return (
        <span ref={ref} className={className}>
            {count}
        </span>
    );
};

const AboutUs = () => {
    useEffect(() => {
    document.title = "Vizztal | About Us";
  }, []);
    const parallaxRef = useRef(null);
    const teamMember = [
        {
            name: "John Doe",
            role: "CEO & Founder",
            emoji: "👨‍💼",
            image: "https://images.unsplash.com/photo-1581841064838-a470c740e8ee?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8YUg5OGRoZWI1ME18fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Jane Smith",
            role: "Creative Director",
            emoji: "🎨",
            image: "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDE3NjM2ODF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Mike Johnson",
            role: "Tech Lead",
            emoji: "👨‍💻",
            image: "https://images.unsplash.com/photo-1654928821937-1b71bdb4345f?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8RzkyZmtaM3diRkl8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Sarah Williams",
            role: "Marketing Strategist",
            emoji: "📈",
            image: "https://images.unsplash.com/photo-1669257965114-225af79f3455?w=126&dpr=2&h=147&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8RzkyZmtaM3diRkl8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "David Brown",
            role: "UX Designer",
            emoji: "✏️",
            image: "https://images.unsplash.com/photo-1678286742832-26543bb49959?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
            name: "Emily Davis",
            role: "Content Specialist",
            emoji: "✍️",
            image: "https://images.unsplash.com/photo-1672863601285-253fc82db868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        },

        {
            name: "John Doe",
            role: "CEO & Founder",
            emoji: "👨‍💼",
            image: "https://images.unsplash.com/photo-1581841064838-a470c740e8ee?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8YUg5OGRoZWI1ME18fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Jane Smith",
            role: "Creative Director",
            emoji: "🎨",
            image: "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDE3NjM2ODF8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Mike Johnson",
            role: "Tech Lead",
            emoji: "👨‍💻",
            image: "https://images.unsplash.com/photo-1654928821937-1b71bdb4345f?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8RzkyZmtaM3diRkl8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Sarah Williams",
            role: "Marketing Strategist",
            emoji: "📈",
            image: "https://images.unsplash.com/photo-1669257965114-225af79f3455?w=126&dpr=2&h=147&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8RzkyZmtaM3diRkl8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "David Brown",
            role: "UX Designer",
            emoji: "✏️",
            image: "https://images.unsplash.com/photo-1678286742832-26543bb49959?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
            name: "Emily Davis",
            role: "Content Specialist",
            emoji: "✍️",
            image: "https://images.unsplash.com/photo-1672863601285-253fc82db868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        },
    ];
    // Mouse movement parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = (clientX - window.innerWidth / 2) / 50;
            const y = (clientY - window.innerHeight / 2) / 50;
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Scroll-triggered animations
    useEffect(() => {
        gsap.from(".fade-in-up", {
            scrollTrigger: {
                trigger: ".fade-in-up",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
        });
    }, []);

    return (
        <div className="bg-gray-900 text-white min-h-screen px-6 py-12 lg:px-22 overflow-hidden ">
            {/* Hero Section */}
            <div className="max-w-screen-2xl 2xl:px-22 mx-auto relative mt-20 ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-10 -left-20 w-64 h-64 bg-pink-600 rounded-full filter blur-3xl opacity-20"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute -bottom-45 -right-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"
                />

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500"
                >
                    About Vizztal
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12"
                >
                    Where creativity meets technology to build digital
                    experiences that matter
                </motion.p>

                {/* Animated Highlights Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 ">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                    >
                        <div className="text-pink-500 text-4xl mb-4">🚀</div>
                        <h3 className="text-xl font-bold mb-2">
                            Digital Transformation
                        </h3>
                        <p className="text-gray-400">
                            Helping businesses transition to digital-first
                            strategies
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                    >
                        <div className="text-blue-500 text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-bold mb-2">
                            Data-Driven Approach
                        </h3>
                        <p className="text-gray-400">
                            Strategies backed by analytics and market research
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                    >
                        <div className="text-purple-500 text-4xl mb-4">✨</div>
                        <h3 className="text-xl font-bold mb-2">
                            Creative Excellence
                        </h3>
                        <p className="text-gray-400">
                            Unique designs that make your brand stand out
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="max-w-screen-2xl 2xl:px-22 mx-auto mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                        Core Values
                    </span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className=" bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-pink-400">
                            Innovation
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-pink-500 mr-3">•</span>
                                <span>
                                    Constantly exploring new technologies and
                                    strategies
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-pink-500 mr-3">•</span>
                                <span>
                                    Pushing creative boundaries in every project
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-pink-500 mr-3">•</span>
                                <span>
                                    Adapting to the ever-changing digital
                                    landscape
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className=" bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                            Integrity
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <span>
                                    Transparent communication with clients
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <span>
                                    Honest reporting and realistic expectations
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">•</span>
                                <span>
                                    Ethical business practices in all
                                    engagements
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="fade-in-up bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                            Impact
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-3">•</span>
                                <span>
                                    Delivering measurable business results
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-3">•</span>
                                <span>
                                    Creating campaigns that resonate with
                                    audiences
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-3">•</span>
                                <span>
                                    Focusing on ROI for every marketing dollar
                                    spent
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="fade-in-up bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
                            Collaboration
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-3">•</span>
                                <span>
                                    Working closely with clients as partners
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-3">•</span>
                                <span>
                                    Cross-functional team approach to problem
                                    solving
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-3">•</span>
                                <span>
                                    Building long-term relationships, not just
                                    transactions
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-screen-2xl 2xl:px-22 mx-auto mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-700"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        By The{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                            Numbers
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="fade-in-up"
                        >
                            <div className="text-5xl font-extrabold text-pink-500 mb-2">
                                <AnimatedCounter to={150} />+
                            </div>
                            <p className="text-gray-300 text-lg font-semibold">
                                Happy Clients
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="fade-in-up"
                        >
                            <div className="text-5xl font-extrabold text-pink-500 mb-2">
                                <AnimatedCounter to={300} />+
                            </div>
                            <p className="text-gray-300 text-lg font-semibold">
                                Projects Completed
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="fade-in-up"
                        >
                            <div className="text-5xl font-extrabold text-pink-500 mb-2">
                                <AnimatedCounter to={98} />%
                            </div>
                            <p className="text-gray-300 text-lg font-semibold">
                                Client Retention
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Our Story Section */}
            <div className="max-w-screen-2xl 2xl:px-22 mx-auto mb-20">
                <motion.div
                    ref={parallaxRef}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                                Story
                            </span>
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Vizztal Digital Solutions was founded in July 2023
                            with a mission to bridge the digital divide for
                            MSMEs. What started as a small digital marketing
                            agency in Jamshedpur quickly expanded into a
                            comprehensive digital solutions provider.
                        </p>
                        <ul className="space-y-4 text-gray-300 ">
                            <li className="flex items-start">
                                <span className="text-pink-500 mr-3">•</span>
                                <span>
                                    Founded by digital marketing and tech
                                    enthusiasts
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-pink-500 mr-3">•</span>
                                <span>
                                    Expanded to include Vizztal Academy for
                                    digital education
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-pink-500 mr-3">•</span>
                                <span>
                                    Partnered with local universities for
                                    digital literacy programs
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-pink-500 mr-3">•</span>
                                <span>
                                    Recognized for innovative digital strategies
                                    in the MSME sector
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
                        <div className="relative bg-gray-800 rounded-2xl overflow-hidden h-96">
                            {/* Replace with your actual image */}
                            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                <span className="text-gray-400">
                                    <img
                                        src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODc5MTE0MXx8ZW58MHx8fHx8"
                                        alt=""
                                    />
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Team Section */}
            <div className="max-w-screen-2xl 2xl:px-22 mx-auto mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                    Meet The{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                        Team
                    </span>
                </motion.h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teamMember.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-2 border-pink-500"
                            />
                            {/* <div className="text-3xl mb-2">{member.emoji}</div> */}
                            <h3 className="text-xl font-bold mb-1">
                                {member.name}
                            </h3>
                            <p className="text-gray-400">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-3xl p-12 backdrop-blur-sm border border-gray-700"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                            Elevate
                        </span>{" "}
                        Your Brand?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Whether you're looking to launch a new product, refresh
                        your brand, or scale your reach — Vizztal is your
                        trusted digital partner.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-pink-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        <Link to={'/contact'} >Get Started Today</Link>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
