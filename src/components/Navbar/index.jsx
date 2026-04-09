import { Link } from "react-router-dom";
import "./styles.css";
import img from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar({ currentPage }) {
    const [displayOptions, setDisplayOptions] = useState(false);
    const links = [
        { title: "Home", link: "/" },
        { title: "Our Club", link: "/club" },
        { title: "Beginners", link: "/beginners" },
        { title: "Membership", link: "/membership" },
        { title: "Gallery", link: "/gallery" },
    ];

    return (
        <div id="nav-container">
            <DefaultNav
                displayOptions={displayOptions}
                setDisplayOptions={setDisplayOptions}
                currentPage={currentPage}
                links={links}
            />
            {links.map((link) => {
                return (
                    <div
                        style={{ display: displayOptions ? "inline" : "none" }}
                        className="navbar"
                    >
                        <Link
                            className={
                                currentPage == link.link && "active-link"
                            }
                            onClick={() => setDisplayOptions(false)}
                            to={link.link}
                        >
                            {link.title}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

const DefaultNav = ({
    displayOptions,
    setDisplayOptions,
    currentPage,
    links,
}) => {
    const openLink = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };
    return (
        <div className="navbar">
            <div id="navbar-logo">
                <Link to="/">
                    <img className="logo" src={img} />
                </Link>
            </div>

            <nav id="navbar-links">
                {links.map((link) => {
                    return (
                        <Link
                            className={
                                currentPage == link.link && "active-link"
                            }
                            to={link.link}
                        >
                            {link.title}
                        </Link>
                    );
                })}
            </nav>

            <div
                onClick={() => {
                    openLink("https://www.facebook.com/groups/380386544308091");
                }}
                id="navbar-button"
            >
                <FontAwesomeIcon icon={faFacebook} />
            </div>

            <FontAwesomeIcon
                onClick={() => setDisplayOptions(!displayOptions)}
                id="nav-burger"
                icon={faBars}
            />
        </div>
    );
};

export default Navbar;
