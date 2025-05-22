import react from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="w-full  bg-[#080807] ">
            <footer className=" max-w-screen-2xl  text-white mx-auto h-[85vh] sm:h-[100vh] sm:px-36 flex flex-col py-20 sm:py-7  px-5 overflow-hidden ">
                <div className="relative z-[99] ">
                    <h1 className="text-6xl sm:text-9xl text-[#E0CCBB]">Our</h1>
                    <h1 className="text-6xl sm:text-9xl  text-[#E0CCBB]">
                        Story
                    </h1>
                    <div className="background -z-[99] absolute h-44 sm:h-[70vh] aspect-video -top-10 left-14 sm:left-[30%]  ">
                        <video
                            muted
                            autoPlay
                            loop
                            className="h-full w-full "
                            src="./src/assets/video-6.mp4"
                        ></video>
                    </div>
                </div>
                <p className="text-lg mt-12 sm:mt-8 opacity-65 leading-[1.2] sm:text-lg sm:w-1/3">
                    The story behind Vizzital Solution is one of exploration,
                    creativity and curiosity.
                </p>

                <div className="divider w-full h-[1px] bg-[#E0CCBB] mt-10 sm:mt-16 opacity-70"></div>
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-20 gap-y-10 sm:gap-44  mt-5 sm:mt-14">
                    <ul className="">
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                Jamshedpur
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                Gangotri Enclave , Kadma
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                Jharkhand
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                +91 9973134651
                            </a>{" "}
                        </li>
                    </ul>
                    <ul className="">
                        <li>
                            {" "}
                            <Link
                                className="opacity-55 mt-1 inline-block"
                                to={"/project"}
                            >
                                Work
                            </Link>{" "}
                        </li>
                        <li>
                            {" "}
                            <Link
                                className="opacity-55 mt-1 inline-block"
                                to={"/website"}
                            >
                                Website
                            </Link>{" "}
                        </li>
                        <li>
                            {" "}
                            <Link
                                className="opacity-55 mt-1 inline-block"
                                to={"/digital"}
                            >
                                Digital
                            </Link>{" "}
                        </li>
                        <li>
                            {" "}
                            <Link
                                className="opacity-55 mt-1 inline-block"
                                to={"/contact"}
                            >
                                Contact us
                            </Link>{" "}
                        </li>
                    </ul>
                    <ul>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="https://www.linkedin.com/in/vizztal/"
                                target="_blank"
                            >
                               Linkedin
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="https://www.instagram.com/vizztal/"
                                target="_blank"
                            >
                                Instagram
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                Twitter
                            </a>{" "}
                        </li>
                        <li>
                            {" "}
                            <a
                                className="opacity-55 mt-1 inline-block"
                                href="#"
                            >
                                Facebook
                            </a>{" "}
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
export default Footer;
