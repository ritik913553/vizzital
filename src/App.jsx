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
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

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
                <>
                    <Navbar />

                    <ScrollToTop />
                    <Routes>
                        <Route
                            path="/"
                            element={<Home animate={animateHome} />}
                        />
                        <Route path="/website" element={<Website />} />
                        <Route path="/digital" element={<Digital />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/about" element={<AboutUs />} />

                        {/* <Route path="/projects" element={<Projects />} /> */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </>
            )}
        </>
    );
};

export default App;
