import { Link } from "react-router-dom";
import "./Navbar.css";
import img from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
    const openLink = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <div id="navbar">
            <div id="navbar-logo">
                <Link to="/">
                    <img className="logo" src={img} />
                </Link>
            </div>

            <nav id="navbar-links">
                <Link to="/">Home</Link> |
                <Link to="/club">Our Club</Link> |
                <Link to="/beginners">Beginners</Link> |
                <Link to="/membership">Membership</Link> |
                <Link to="/gallery">Gallery</Link> |
                <Link to="/contact">Contact Us</Link>
            </nav>

            <div
                onClick={() => {
                    openLink("https://www.facebook.com/groups/380386544308091");
                }}
                id="navbar-button"
            >
                <FontAwesomeIcon icon={faFacebook} />
            </div>
        </div>
    );
}

export default Navbar;
