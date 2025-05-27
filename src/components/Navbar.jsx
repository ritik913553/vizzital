import { motion } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import Menu from "./Menu";
import { Link } from "react-router-dom";
const Navbar = ({  }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return !menuIsOpen ? (
        <div
            className={`w-full fixed z-[999] transition-colors duration-300 bg-transparent backdrop-blur-sm`}
        >
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-22 py-5 sm:py-5 flex items-center justify-between text-white">
                <div>
                    <h1 className="text-2xl sm:text-4xl font-bold">Vizztal</h1>
                </div>
                <div className="flex items-center gap-20">
                    <h1 className="hidden lg:block text-xl cursor-pointer">
                        <Link to="/digital">Digital</Link>
                    </h1>
                    <h1 className="hidden lg:block text-xl cursor-pointer">
                        <Link to="/website">Website</Link>
                    </h1>
                    <h1 className="hidden lg:block text-xl cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </h1>
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
