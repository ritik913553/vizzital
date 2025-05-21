import { motion } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import Menu from "./Menu";
const Navbar = ({ scrolled }) =>{
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  console.log(scrolled);
  return (
      !menuIsOpen ? (
          <div
              className={`w-full fixed z-[999] transition-colors duration-300 ${
                  scrolled ? "bg-black" : "bg-transparent" 
              }`}
          >
              <div className="max-w-screen-2xl mx-auto px-6 sm:px-22 py-5 sm:py-5 flex items-center justify-between text-white">
                  <div>
                      <h1 className="text-2xl sm:text-4xl font-bold">
                          Vizzital
                      </h1>
                  </div>
                  <h1
                      className="text-4xl cursor-pointer"
                      onClick={() => setMenuIsOpen(true)} 
                  >
                      <IoMdMenu />
                  </h1>
              </div>
          </div>
      ) : (
          <Menu setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
      )
  );
}

export default Navbar;