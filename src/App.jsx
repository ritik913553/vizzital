import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Home from "./components/Home";
import { Route, Router, Routes } from "react-router-dom";
import Website from "./pages/Website";
import Digital from "./pages/Digital";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [animateHome, setAnimateHome] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= window.innerHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                <>
                    <Navbar scrolled={scrolled} />

                    <Routes>
                        <Route
                            path="/"
                            element={<Home animate={animateHome} />}
                        />
                        <Route path="/website" element={<Website />} />
                        <Route path="/digital" element={<Digital />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/pricing" element={<Pricing />} />
                        {/* <Route path="/about" element={<About />} /> */}

                        {/* <Route path="/projects" element={<Projects />} /> */}
                    </Routes>
                    <Footer />
                </>
            )}
        </>
    );
};

export default App;
