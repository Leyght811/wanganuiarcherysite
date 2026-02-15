import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClubPage from './pages/ClubPage';
import BeginnersPage from './pages/BeginnersPage';
import MembershipPage from './pages/MembershipPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/club">Our Club</Link> |{" "}
        <Link to="/beginners">Beginners</Link> |{" "}
        <Link to="/membership">Membership</Link> |{" "}
        <Link to="/gallery">Gallery</Link> |{" "}
        <Link to="/contact">Contact Us</Link>
      </nav>

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
