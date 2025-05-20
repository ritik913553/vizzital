import FeatureCard from "../FeatureCard";
import FeatureCards from "../FeatureCards";
import Projects from "../Projects";
import "./Landing.css";

function Landing() {
    return (
        <div className="wholeLandingPage relative w-full min-h-screen text-white ">
            <div className="header relative w-full h-screen overflow-hidden p-22">
                {/* Unified gradient layer */}
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-blue-700 to-sky-200 -z-10"></div>

                {/* Content - added relative and z-10 */}
                <div className="relative mt-20 ">
                    <h2 className="text-5xl  ">World class</h2>
                    <h2 className="text-4xl mt-2">marketing.</h2>
                    <h2 className="text-5xl mt-2 font-bold">Made simple.</h2>
                    <button className="mt-4 px-7 py-3 bg-blue-600 text-white rounded-lg font-medium">
                        Request Meeting
                    </button>
                </div>
                <div className=" -mt-15">
                    <h1 className="text-[20vw] font-bold">GROWTH</h1>
                </div>
            </div>
            <div className="w-full min-h-screen bg-black p-22">
                <h1 className="mt-10 text-4xl   text-start w-[70%] mx-auto leading-12">
                    Leveraging deep industry knowledge, our team unitesstrategy,
                    creativity, and innovation to craft impactfulmarketing that
                    resonates and engages.
                </h1>
                <div className="h-[1px] bg-white mt-15 opacity-50 "></div>
                <div className="mt-7 ml-5">
                    <h1 className="text-[7vw] font-bold">Crafting The Right</h1>
                </div>
                <div className="ml-92">
                    <h1 className="text-[6.5vw] font-bold  leading-20 ">
                        Growth Strategies
                    </h1>
                </div>
            </div>
            <div className="w-full min-h-screen bg-gradient-to-b from-sky-400 to-blue-900 px-22 py-5">
                <div className="text-3xl font-light">
                    <h1>Our team has the experience</h1>
                    <h1>needed to achieve your goals.</h1>
                </div>
                <div className="flex mt-25 justify-between gap-5">
                    <div className="w-[60%] text-8xl font-sans-serif font-bold leading-27">
                        <h1>Services</h1>
                        <h1>That Sapes</h1>
                        <h1>Destinies</h1>
                    </div>
                    <div className=" flex items-end w-[45%]">
                        <h3 className="text-xl  font-light">
                            Discover a world where creativity knows no bounds
                            and your dreams take center stage.
                        </h3>
                    </div>
                </div>
                <FeatureCards />
                <div className="mt-20 ">
                    <div className="w-fit">
                        <h1 className="text-[13vw] leading-36">Work</h1>
                        <hr className="border-2" />
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Landing;
