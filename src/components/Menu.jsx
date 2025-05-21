import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import AnimatedButton from "./AnimatedButton";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Menu = ({ setMenuIsOpen, menuIsOpen }) => {
    const closeMenu = () => {
        gsap.to(".menu", {
            rotate: -90,
            scale: 1.2,
            duration: 0.7,
            ease: "Power4.easeInOut",
            onComplete: () => {
                setMenuIsOpen(false);
            },
        });
    };
    useGSAP(() => {
        if (menuIsOpen) {
            gsap.to(".menu", {
                rotate: 0,
                scale: 1,
                duration: 0.7,
                ease: "Power4.easeInOut",
            });
        }
    }, [menuIsOpen]);

    return (
        <div className="menu w-full h-screen bg-black text-white p-8 sm:p-22 pt-10 z-[1000] fixed top-0 left-0 -rotate-[90deg] scale-[1.2] origin-bottom-left ">
            <div className="flex justify-end">
                <h1
                    onClick={closeMenu}
                    className=" sm:text-4xl text-5xl cursor-pointer p-2 sm:p-0 sm:-mt-15 -mt-5"
                >
                    {" "}
                    <IoMdClose />{" "}
                </h1>
            </div>
            <div className=" flex flex-col sm:flex sm:flex-row justify-between items-end  sm:px-14 mt-20 sm:mt-15 ">
                <div className="flex flex-col w-full px-5">
                    {["website", "digital", "pricing", "contact us"].map(
                        (text, index) => {
                            return <AnimatedButton key={index} text={text} />;
                        }
                    )}
                </div>
                <div className=" flex flex-col items-center w-full justify-center  p-10" >
                    <h1 className="text-5xl hidden sm:block">Vizzital</h1>
                    <div className="mt-20 flex gap-x-7 font-bold text-2xl flex-wrap gap-10 justify-between sm:text-xl">
                        {["Linkedin", "Instagram", "Facebook", "X"].map(
                            (text, index) => {
                                return (
                                    <a
                                        key={index}
                                        className="hover:filter hover:blur-[2px] transition duration-100"
                                        href=""
                                    >
                                        {text}
                                    </a>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
