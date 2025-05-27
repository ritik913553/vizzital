import React from "react";
import FeatureCard from "./FeatureCard";
import dev from "../assets/FeaturesSvg/dev.svg";
import strategy from "../assets/FeaturesSvg/strategy.svg";
import performance from "../assets/FeaturesSvg/performance.svg";
import engagement from "../assets/FeaturesSvg/engagement.svg";

const FetureData = [
    {
        heading: "Creative Development & Branding",
        description:
            "Elevate your brand with our striking creative designs and content, tailored to captivate your audience and embody your brand’s unique essence.",
        image: dev,
    },
    {
        heading: "Strategy & Media Planning",
        description:
            "Master the digital domain with our savvy marketing strategies and precise media planning, ensuring your brand shines in the right place at the right time.",
        image: strategy,
    },
    {
        heading: "Performance Analytics & Optimization",
        description:
            "Harness the power of data with our analytics and optimization, turning insights into impactful strategies and maximizing your marketing ROI.",
        image: performance,
    },
    {
        heading: "Engagement Management",
        description:
            "Forge lasting bonds with our engagement strategies, nurturing a loyal community and enriching every touchpoint with your brand.",
        image:engagement,
    }
];

const FeatureCards = () => {
    return (
        <div className="sm:mt-30 mt-20 max-w-screen-2xl mx-auto 2xl:px-22">
          {FetureData.map((feature,index)=>{
            return <FeatureCard key={index} feature={feature} />
          })}
        </div>
    );
};

export default FeatureCards;
