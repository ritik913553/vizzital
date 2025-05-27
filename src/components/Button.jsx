import React from "react";
import { FaArrowRight } from "react-icons/fa6";
function Button({title="Live"  }){ //title ki bydefault value get started hai
    return (
        <div className="max-w-40 cursor-pointer px-5 gap-x-2 py-2 bg-[#1A82FC] text-white font-bold rounded-full flex items-center justify-between ">
            <span className="text-sm   font-bold " >{title}</span>
            <FaArrowRight />
        </div>
    )
}

export default Button;