import { motion } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import Menu from "./Menu";
import { Link, useLocation } from "react-router-dom";
// ...existing imports...
const Navbar = ({ }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { to: "/digital", label: "Digital" },
        { to: "/website", label: "Website" },
        { to: "/contact", label: "Contact" },
        // Add more links as needed
    ];

    return !menuIsOpen ? (
        <div
            className={`w-full fixed z-[999] transition-colors duration-300 bg-transparent backdrop-blur-sm`}
        >
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-22 py-5 sm:py-5 flex items-center justify-between text-white">
                <div>
                    <h1 className="text-2xl sm:text-4xl font-bold">Vizztal</h1>
                </div>
                <div className="flex items-center gap-20">
                    {navLinks.map((link) => (
                        <h1
                            key={link.to}
                            className="hidden lg:block text-xl cursor-pointer group relative"
                        >
                            <Link to={link.to} className="relative z-10">
                                {link.label}
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2.5px] transition-all duration-300
                                        ${location.pathname === link.to
                                            ? "w-full bg-purple-400"
                                            : "w-0 bg-white group-hover:w-full"
                                        }`}
                                    style={{ display: "block" }}
                                />
                            </Link>
                        </h1>
                    ))}
                    <h1
                        className="text-4xl cursor-pointer"
                        onClick={() => setMenuIsOpen(true)}
                    >
                        <IoMdMenu />
                    </h1>
                </div>
            </div>
        </div>
    ) : (
        <Menu setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
    );
};

export default Navbar;
