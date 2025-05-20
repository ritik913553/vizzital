import { motion, stagger } from "framer-motion";
import { Power4 } from "gsap/all";
import react from "react";
function Landing() {
  return (
    <div className="relative w-full h-[150vh] sm:h-[250vh] ">
      <div className="picture w-full h-full overflow-hidden ">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover "
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
        {/* jis div pr aap lga rhe to data-scroll uska ek parent hone chaiyea us pr overflow hidden lga rhna chaiyea 
        is case mein image pr hum data scroll lagaye hai ki wo -1 means 100% dheere scroll hoga ,iske dheere scroll hone pr kisi ko frk nhi
        pdega sb apna original speed se move honge is wajhe se iska parent div to upr nikl jayega aur image niche hi rhega kyuki dheere scroll ho rha hai
        and iske wjhe se jo niche wale pages hai wo scroll krne pr image ke upr dikhe legenge,isse bachne ke liye hum image ke parent div ko overflow-hidden denge,isse image ke dheere scroll hone pr jo image parentdiv ke niche
        rh rha tha wo chip jayega */}
      </div>
      <div className="w-full absolute top-0 ">
        <div className=" text mx-w-screen-2xl h-full  mx-auto px-5 sm:px-28 text-white">
          <div className="para mt-72 sm:mt-96 sm:mb-20 ">
            {[
              "Global digital design studio partnering",
              " with brands and businesses that create",
              "exceptional experiences where people",
              " live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p key={index} className="text-lg font-semibold leading-[1.3] sm:text-2xl overflow-hidden">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.8,
                      delay: index * 0.2,
                    }}
                    className="inline-block origin-left "
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings mt-5 sm:mt-10">
            {["Digital", " Design", "Experience"].map((item, index) => {
              return (
                <h1 key={index} className="text-6xl sm:text-[13.5rem] tracking-tighter sm:py-6 sm:-mt-20 overflow-hidden">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      duration: 0.8,
                      delay: 1 + index * 0.15,
                    }}
                    className="inline-block origin-left "
                  >
                    {item}
                  </motion.span>
                </h1>
              );
            })}
          </div>
          <div className="para2 mt-20 sm:w-[42%]">
            <p className="font-normal text-lg sm:text-2xl leading-[1.3] sm:leading-[1.2]">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="border-b-[.3px] sm:border-b-[1px] border-zinc-100  mt-10 inline-block"
              href="#"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
