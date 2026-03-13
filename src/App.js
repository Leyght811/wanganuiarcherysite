import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ClubPage from "./components/pages/ClubPage";
import BeginnersPage from "./components/pages/BeginnersPage";
import MembershipPage from "./components/pages/MembershipPage";
import GalleryPage from "./components/pages/GalleryPage";
import ContactPage from "./components/pages/ContactPage";
import Navbar from "./components/Navbar";
import background from "./images/background2.jpg";
import { useEffect, useState } from "react";

const backgroundStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover", // Optional: ensures the image covers the entire element
    backgroundRepeat: "no-repeat", // Optional: prevents the image from repeating
    position: "fixed",
    zIndex: "0",
    backgroundPosition: "center",
};

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

const AppContent = () => {
    const [pageTitle, setPageTitle] = useState("Home");

    const titleMap = [
        { path: "/", title: "Home" },
        { path: "/club", title: "Club" },
        { path: "/beginners", title: "Beginners" },
        { path: "/membership", title: "Membership" },
        { path: "/gallery", title: "Gallery" },
        { path: "/contact", title: "Contact Us" },
    ];

    let curLoc = useLocation();

    useEffect(() => {
        const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
        if (curTitle && curTitle.title) {
            setPageTitle(curTitle.title);
            document.title = curTitle.title;
        }
    }, [curLoc]);

    return (
        <div>
            <div style={backgroundStyle}></div>
            {/* Navigation */}
            <Navbar />

            {/* Routes */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/club" element={<ClubPage />} />
                <Route path="/beginners" element={<BeginnersPage />} />
                <Route path="/membership" element={<MembershipPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
};

export default App;
