import React from "react";
import { motion } from "framer-motion";
import LetsConnect from "../components/LetsConnect";
import Marquees from "../components/Marquees";

const Website = () => {
    const servicesData = [
        {
            header: "Corporate & Business Websites",
            description:
                "We help large-scale Corporates to traditional Family-run businesses, first-generation Startups to institutions across all verticals in telling their story with smart websites.",
        },
        {
            header: "Product & Brand Websites",
            description:
                "Brand & Product websites need a different approach. Being mostly consumer and channel focussed, we help them develop websites that are highly interactive and engaging.",
        },
        {
            header: "eCommerce & Web Applications",
            description:
                "Be it fashion, jewellery, retail or B2B- we help businesses move Online real fast. Our digital know-how further helps us to set up online stores as per their marketing needs.",
        },
        {
            header: "Mobile App Development",
            description:
                "We help clients in planning their new Mobile App defining objectives, user journeys and interfaces to develop successful applications across iOS & Android platforms.",
        },
    ];
    const recipeData = [
        {
            h3: "Brand Positioning Visual Communication",
            h5: "Creative Storytelling",
            p: "Our copywriters and designers with years of advertising experience help in crafting the right visual story for your brand.",
            img: "https://www.brandwizz.com/images/website/website-011.webp",
        },
        {
            h3: "Engaging User Navigation Easy Content Navigation",
            h5: "Design & Control UX",
            p: "Your website is a stranger to the visitor. We help design an experience that guides the user to navigate through the content easily.",
            img: "https://www.brandwizz.com/images/website/website-02.webp",
        },
        {
            h3: "Invisible Programming Better Performance",
            h5: "Superior Technology",
            p: "An experience of more than a decade helps offer updated technology for a faster performance & easy-to-use visitor interfaces.",
            img: "https://www.brandwizz.com/images/website/website-03.webp",
        },
        {
            h3: "Lead Generation Conversion Funnel",
            h5: "Align Marketing Strategy",
            p: "At the core of our Design Strategy, we complement your sales and marketing goals to achieve real business results.",
            img: "https://www.brandwizz.com/images/website/website-04.webp",
        },
    ];
    return (
        <div className="font-sans text-black w-full min-h-screen">
            {/* Hero Section */}
            <section className="relative p-6 md:p-22 text-white  h-screen">
                <div className="gradient-background  absolute top-0 left-0 w-full h-full -z-10"></div>
                <h1 className="text-4xl md:text-7xl font-bold z-10 sm:mt-20 mt-30 overflow-hidden">
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }} //kewl ek bar chlega animation
                        transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.8,
                        }}
                        className="inline-block origin-left"
                    >
                        We design custom-built websites that deliver real
                        business results
                    </motion.span>
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl  mt-20 pb-10 sm:pb-0 overflow-hidden">
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }} //kewl ek bar chlega animation
                        transition={{
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.8,
                            delay: 0.3,
                        }}
                        className="inline-block origin-left"
                    >
                        Your website should be the mirror of your business. We
                        listen to your story carefully, understand your
                        marketing objectives, and craft beautiful websites that
                        are{" "}
                        <span className="font-black text-black">
                            search engine
                        </span>{" "}
                        friendly and help in achieving your business perception
                        as well as lead generation goals.
                    </motion.span>
                </p>
            </section>

            {/* Marquee Section */}
            <section className="bg-black pt-20">
                <Marquees />
            </section>

            {/* Services Section */}

            <section className=" pt-20 bg-black text-white">
                <div className="grid md:grid-cols-2  border divide-x divide-y border-gray-300">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 sm:px-22 flex flex-col border-gray-300 md:divide-x md:flex-row"
                        >
                            <div className="flex-1 p-4">
                                <h2 className="text-3xl font-bold mb-6">
                                    {service.header}
                                </h2>
                                <p className="text-lg">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <LetsConnect />

            {/* Unique Offer Section */}
            <section className="sm:px-22 p-6 bg-gradient-to-b from-[#1859AB] to-[#0D3A73]  text-white">
                <h1
                    className="text-[10vw] leading-14 sm:leading-none  sm:text-[8vw]  font-black sm:font-bold"
                    style={{
                        background:
                            "linear-gradient(273deg,rgba(240, 233, 43, 1) 0%, rgba(255, 20, 239, 1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Our Secret Recipe
                </h1>
                <div className="">
                    <p className="text-2xl mt-8 sm:mt-10">
                        Four factors that help us ensure Digital Success for our
                        customers.
                    </p>

                    <div className="space-y-10 relative mt-10 text-white">
                        {recipeData.map((item, index) => (
                            <>
                                <div
                                    key={index}
                                    className="flex flex-col  sm:flex-row items-center  gap-6 sm:gap-3 bg-linear-65 from-purple-500 to-pink-500 rounded-lg shadow-md overflow-hidden "
                                >
                                    {/* Text Content */}
                                    <div className="flex-1 p-6 pb-0 sm:pb-6">
                                        <h3 className="text-2xl  mb-2 ">
                                            {item.h3}
                                        </h3>
                                        <h2 className="text-3xl sm:text-4xl mt-5 mb-5 font-black  text-shadow-lg text-shadow-black">
                                            {item.h5}
                                        </h2>
                                        <hr className="mb-3 sm:mt-10" />
                                        <p className="text-lg leading-6 sm:mt-5">
                                            {item.p}
                                        </p>
                                    </div>

                                    {/* Image */}

                                    <div className="flex-1">
                                        <img
                                            src={item.img}
                                            alt={item.h5}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 p-6 bg-gradient-to-b from-[#0D3B76] to-[#080807] text-white grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <h3 className="text-4xl font-bold mb-2">16</h3>
                    <p>YEARS OF CORE</p>
                    <p>WEB DESIGN</p>
                    <p>EXPERIENCE</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold mb-2">250</h3>
                    <p>HIGHLY</p>
                    <p>SATISFIED CLIENTS</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold mb-2">350</h3>
                    <p>AND MORE</p>
                    <p>PROJECTS HANDLED</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold mb-2">37</h3>
                    <p>DIVERSE</p>
                    <p>INDUSTRY VERTICALS</p>
                </div>
            </section>
        </div>
    );
};

export default Website;
