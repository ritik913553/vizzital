import React from "react";
import { motion } from "framer-motion";
import LetsConnect from "../components/LetsConnect";
import Marquees from "../components/Marquees";

const Digital = () => {
    const recipeData = [
        {
            h3: "Marketing Goal Alignment\nDigital Activity Roadmap",
            h5: "Strong Strategy & Planning",
            p: "Crafting the right Inbound and Outbound Digital strategy sets the right direction to achieve marketing goals.",
            img: "https://www.brandwizz.com/images/website/016.png",
        },
        {
            h3: "User Behaviour & Psychology\nConsumption & Engagement",
            h5: "Superior Content Strategy",
            p: "Drafting a unique Content Strategy that makes the audience consume and engage on the Digital platform.",
            img: "https://www.brandwizz.com/images/website/016.png",
        },
        {
            h3: "Data-Driven Approach\nCoding & Tracking Expertise",
            h5: "Powered by Technology",
            p: "Decades of Technology & Development experience helps us design Digital Ecosystems with a firm technology base.",
            img: "https://www.brandwizz.com/images/website/017.png",
        },
        {
            h3: "Consistency & Performance\nAccount Management Survey",
            h5: "Strategic Analysis & Review",
            p: "We Review each activity at a Performance and Strategy Level by uniquely Analysing KPIs to improve campaign performance.",
            img: "https://www.brandwizz.com/images/website/018.png",
        },
    ];
    const serviceData = [
        {
            header: "Search Engine Optimisation",
            description:
                "We offer On-Page and Off-Page SEO, Local SEO, Link Building and Backlink development services that guarantee Ranking and improve Organic Traffic.",
        },
        {
            header: "Search Engine Marketing",
            description:
                "Offering Paid Search Marketing, PPC Campaign Management including Keyword Research, Ad Creation, Conversion Rate Optimisation, Landing Page & Report Analysis.",
        },
        {
            header: "Social Media Marketing",
            description:
                "We offer Content Development, Marketing and Platform Management services for businesses that help achieve perception building and lead generation on Social Media.",
        },
        {
            header: "Email Marketing & Automation",
            description:
                "We help create Email Newsletter Content Strategies, set up Email Campaigns, Email Automation & Drip Campaigns for Businesses, Brands and eCommerce.",
        },
        {
            header: "Mobile Marketing",
            description:
                "We help set up IVRs, Broadcast Voice and Text messages, Mobile Voting for Campaigns, TV Shows, Brand Engagement and manage Customer Data.",
        },
        {
            header: "Influencer Marketing",
            description:
                "We help brands identify and connect with Influencers across platforms as per their Objective, Budget, Language and Target through our network of partners.",
        },
    ];
    return (
        <div className="font-sans w-full min-h-screen">
            {/* Hero Section */}
            <section className="relative py-16 w-full   p-6 sm:p-22 text-white">
                <div className="gradient-background  absolute top-0 left-0 w-full h-full -z-10"></div>
                <h1 className="text-4xl md:text-7xl font-bold z-10 sm:mt-10 mt-15  overflow-hidden">
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
                        {" "}
                        Strategy-driven Digital Marketing that deliver real
                        business results
                    </motion.span>
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl  mt-10  overflow-hidden">
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
                        It's 2025. And we live in a Digital World. Your
                        capability to understand the potential of the digital
                        medium and align your marketing strategy will define the
                        success of your business.
                    </motion.span>
                </p>
                <p className="text-xl md:text-2xl max-w-3xl  mt-10  overflow-hidden">
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
                        We empower businesses and brands on various digital
                        platforms. We closely understand your objectives, your
                        audiences, their behaviour and your budgets. Doing so,
                        we devise and implement both in-bound and out-bound
                        marketing strategies that ensure success through lead
                        generation and content marketing.
                    </motion.span>
                </p>
            </section>

            {/* Marquee Section */}
            <section className="bg-black pt-20">
                <Marquees />
            </section>

            <section className=" pt-20 bg-black text-white">
                <div className="grid md:grid-cols-2  border divide-x divide-y border-gray-300">
                    {serviceData.map((service, index) => (
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
            {/* lets connect section */}

            <LetsConnect />
            <hr />
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
                    <h3 className="text-4xl font-bold mb-2">16+</h3>
                    <p>YEARS OF CORE</p>
                    <p>DIGITAL MARKETING</p>
                    <p>EXPERIENCE</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold mb-2">70+</h3>
                    <p>PLUS HIGHLY</p>
                    <p>SATISFIED CLIENTS</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold mb-2">80+</h3>
                    <p>AND MORE</p>
                    <p>PROJECTS HANDLED</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold mb-2">37+</h3>
                    <p>DIVERSE</p>
                    <p>INDUSTRY / SECTORS</p>
                </div>
            </section>
        </div>
    );
};

export default Digital;
