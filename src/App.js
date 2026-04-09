import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ClubPage from "./components/pages/ClubPage";
import BeginnersPage from "./components/pages/BeginnersPage";
import MembershipPage from "./components/pages/MembershipPage";
import GalleryPage from "./components/pages/GalleryPage";
import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";



function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

const AppContent = () => {
    const [pageTitle, setPageTitle] = useState("Home");
    const [pagePath, setPagePath] = useState("/");

    const titleMap = [
        { path: "/", title: "Home" },
        { path: "/club", title: "Club" },
        { path: "/beginners", title: "Beginners" },
        { path: "/membership", title: "Membership" },
        { path: "/gallery", title: "Gallery" },
    ];

    let curLoc = useLocation();

    useEffect(() => {
        const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
        if (curTitle && curTitle.title) {
            setPageTitle(curTitle.title);
            setPagePath(curTitle.path);
            document.title = curTitle.title;
        }
    }, [curLoc]);

    return (
        <div>
            
            {/* Navigation */}
            <Navbar currentPage={pagePath} />

            {/* Routes */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/wanganuiarcherysite/" element={<HomePage />} />
                <Route path="/club" element={<ClubPage />} />
                <Route path="/beginners" element={<BeginnersPage />} />
                <Route path="/membership" element={<MembershipPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
        </div>
    );
};

export default App;
