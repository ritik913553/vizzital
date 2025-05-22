import { motion } from "framer-motion";
import React from "react";
function Marquee({ imagesurls,direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left"? "0": "-100%" }}
        animate={{ x: direction === "left"? "-100%": "0" }}
        transition={{ ease: "linear", duration: 15,repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-5 pr-16"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} alt="" className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left"? "0": "-100%" }}
        animate={{ x: direction === "left"? "-100%": "0" }}
        transition={{ ease: "linear", duration: 15,repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-5 pr-16"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} alt="" className="" />
        ))}
      </motion.div>
    </div>
  );
}
export default Marquee;
