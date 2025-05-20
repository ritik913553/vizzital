import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Home from "./components/Home";

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
           {loading ? <Loading /> : <Home animate={animateHome} />}
        </>
    );
};

export default App;