import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Home from "./components/Home";
import { Route, Router, Routes } from "react-router-dom";
import Website from "./pages/Website";
import Digital from "./pages/Digital";

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
            {loading ? (
                <Loading />
            ) : (
                <Routes>
                    <Route path="/" element={<Home animate={animateHome} />} />
                    <Route path="/website" element={<Website />} />
                    <Route path="/digital" element={<Digital />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    {/* <Route path="/projects" element={<Projects />} /> */}
                </Routes>
            )}
        </>
    );
};

export default App;
