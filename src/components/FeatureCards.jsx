import React from "react";
import FeatureCard from "./FeatureCard";

const FetureData = [
    {
        heading: "Creative Development & Branding",
        description:
            "Elevate your brand with our striking creative designs and content, tailored to captivate your audience and embody your brand’s unique essence.",
        image: "./src/assets/FeaturesSvg/dev.svg",
    },
    {
        heading: "Strategy & Media Planning",
        description:
            "Master the digital domain with our savvy marketing strategies and precise media planning, ensuring your brand shines in the right place at the right time.",
        image: "./src/assets/FeaturesSvg/strategy.svg",
    },
    {
        heading: "Performance Analytics & Optimization",
        description:
            "Harness the power of data with our analytics and optimization, turning insights into impactful strategies and maximizing your marketing ROI.",
        image: "./src/assets/FeaturesSvg/performance.svg",
    },
    {
        heading: "Engagement Management",
        description:
            "Forge lasting bonds with our engagement strategies, nurturing a loyal community and enriching every touchpoint with your brand.",
        image: "./src/assets/FeaturesSvg/engagement.svg",
    }
];

const FeatureCards = () => {
    return (
        <div className="mt-30">
          {FetureData.map((feature,index)=>{
            return <FeatureCard key={index} feature={feature} />
          })}
        </div>
    );
};

export default FeatureCards;
