import FeatureCard from "../FeatureCard";
import FeatureCards from "../FeatureCards";
import Projects from "../Projects";
import "./Landing.css";

function Landing() {
    return (
        <div className="wholeLandingPage relative w-full min-h-screen text-white ">
            <div className="header relative w-full h-screen overflow-hidden p-6 sm:p-22 ">
                <div className="gradient-background  absolute top-0 left-0 w-full h-full -z-10"></div>

                {/* Content - added relative and z-10 */}
                <div className="relative sm:mt-20 mt-50  ">
                    <h2 className="text-5xl  ">World class</h2>
                    <h2 className="text-4xl mt-2">marketing.</h2>
                    <h2 className="text-5xl mt-2 font-bold">Made simple.</h2>
                    <button className="mt-1 px-7 py-3 bg-blue-600 text-white rounded-lg font-bold">
                        Request Meeting
                    </button>
                </div>
                <div className=" sm:-mt-15 mt-20">
                    <h1 className="text-[22vw] sm:text-[20vw] font-black ">GROWTH</h1>
                </div>
            </div>
            <div className="w-full sm:min-h-screen bg-black p-6 sm:p-22 pb-2">
                <h1 className="mt-10 text-2xl sm:text-4xl w-full  text-start sm:w-[70%] mx-auto sm:leading-12">
                    Leveraging deep industry knowledge, our team unitesstrategy,
                    creativity, and innovation to craft impactfulmarketing that
                    resonates and engages.
                </h1>
                <div className="h-[1px] bg-white mt-15 opacity-50 "></div>
                <div className="mt-7 sm:ml-5">
                    <h1
                        className="text-[8.4vw] sm:text-[7vw] font-bold text-transparent bg-clip-text"
                        style={{
                            background:
                                "linear-gradient(279deg,rgba(250, 36, 9, 1) 0%, rgba(250, 36, 9, 1) 20%, rgba(212, 205, 23, 1) 57%, rgba(250, 25, 235, 1) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            
                        }}
                    >
                        Crafting The Right
                    </h1>
                </div>
                <div className="sm:ml-92 ml-18">
                    <h1
                        className="text-[8.4vw] sm:text-[6.5vw] font-bold  sm:leading-23 bg-clip-text"
                        style={{
                            background:
                                "linear-gradient(90deg,rgba(212, 205, 23, 1) 0%, rgba(250, 69, 8, 1) 49%, rgba(245, 5, 97, 1) 75%, rgba(227, 20, 213, 1) 100%)",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: "transparent",
                        }}
                    >
                        Growth Strategies
                    </h1>
                </div>
            </div>
            <div className="w-full bg-gradient-to-b from-black to-[#1A82FC] p-6 sm:px-22 py-8">
                <div className="text-3xl sm:text-4xl font-thin mt-5 ">
                    <h1>Our team has the experience</h1>
                    <h1>needed to achieve your goals.</h1>
                </div>
            </div>
            <div className="w-full min-h-screen bg-[#1A82FC] p-6 sm:px-22 py-5">
                <div className="flex flex-col sm:flex-row mt-10 sm:mt-7 justify-between gap-5">
                    <div className="sm:w-[60%]  text-5xl sm:text-8xl font-sans-serif font-bold sm:leading-27">
                        <h1>Services</h1>
                        <h1>That Sapes</h1>
                        <h1>Destinies</h1>
                    </div>
                    <div className=" flex items-end mt-1 sm:w-[45%]">
                        <h3 className="sm:text-xl text-2xl  font-light">
                            Discover a world where creativity knows no bounds
                            and your dreams take center stage.
                        </h3>
                    </div>
                </div>
                <FeatureCards />
            </div>
            <div className="p-6 sm:px-22 bg-gradient-to-b from-[#1A82FC] to-black py-5">
                <div className="w-fit">
                    <h1
                        className="text-[26vw] sm:text-[13vw] sm:leading-36 mt-20 leading-20 font-black sm:font-bold"
                        style={{
                            background:
                                "linear-gradient(273deg,rgba(240, 233, 43, 1) 0%, rgba(255, 20, 239, 1) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Work
                    </h1>
                    <hr className="border-2" />
                </div>
            </div>
        </div>
    );
}

export default Landing;
