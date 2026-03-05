import "./styles.css";

import HomeBanner from "./components/HomeBanner";
import HomeInfo from "./components/HomeInfo";
import { HomeRange } from "./components/HomeRange";



function HomePage() {
    return (
        <div id="home">
            
            <HomeBanner />
            <HomeInfo />
            <HomeRange />
        </div>
    );
}

export default HomePage;
