import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ClubPage from './components/pages/ClubPage';
import BeginnersPage from './components/pages/BeginnersPage';
import MembershipPage from './components/pages/MembershipPage';
import GalleryPage from './components/pages/GalleryPage';
import ContactPage from './components/pages/ContactPage';
import Navbar from './components/Navbar';
import background from "./images/background3.jpg"

const backgroundStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover", // Optional: ensures the image covers the entire element
    backgroundRepeat: "no-repeat", // Optional: prevents the image from repeating
    position: "fixed",
    zIndex: "0",
    backgroundPosition: "center"
};

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
