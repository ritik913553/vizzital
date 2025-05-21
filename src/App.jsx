import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [animateHome, setAnimateHome] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setAnimateHome(true); // Trigger home animation after loading
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* {loading && <Loading />} */}
            {/* <Loading /> */}
            {/* <Home animate={animateHome} /> */}
            {/* {loading ? <Loading /> : <Home animate={animateHome} />} */}
            {/* <Contact/> */}
            <Pricing/>
        </>
    );
};

export default App;
