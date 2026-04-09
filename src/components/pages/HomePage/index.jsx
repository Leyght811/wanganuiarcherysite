import "./styles.css";

import HomeBanner from "./components/HomeBanner";
import HomeInfo from "./components/HomeInfo";
import { HomeRange } from "./components/HomeRange";

import background from "../../../images/background2.jpg";

const backgroundStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover", // Optional: ensures the image covers the entire element
    backgroundRepeat: "no-repeat", // Optional: prevents the image from repeating
    position: "fixed",
    zIndex: "0",
    backgroundPosition: "center",
    top:"0"
};

function HomePage() {
    return (
        <div id="home">
            <div style={backgroundStyle}></div>
            <HomeBanner />
            <HomeInfo />
            <HomeRange />
        </div>
    );
}

export default HomePage;
