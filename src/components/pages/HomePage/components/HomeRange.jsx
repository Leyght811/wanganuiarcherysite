import outdoorBackground from "../../../../images/background1.jpg"
import indoorBackground from "../../../../images/indoor_range.jpg"

const outdoorBackgroundStyle = {
    backgroundImage: `url(${outdoorBackground})`,
    backgroundSize: "cover", // Optional: ensures the image covers the entire element
    backgroundRepeat: "no-repeat", // Optional: prevents the image from repeating
    // position: "fixed",
    // zIndex: "0",
    backgroundPosition: "center"
};

const indoorBackgroundStyle = {
    backgroundImage: `url(${indoorBackground})`,
    backgroundSize: "cover", // Optional: ensures the image covers the entire element
    backgroundRepeat: "no-repeat", // Optional: prevents the image from repeating
    // position: "fixed",
    // zIndex: "0",
    backgroundPosition: "center"
};

export function HomeRange() {
    return (
        <div id="home-range">
            <div id="home-range-header">
                <h1>The Range</h1>
            </div>
            <div id="home-range-body">
                <div className="home-range-body-section">
                    <div className="home-range-img"><div style={outdoorBackgroundStyle}></div></div>
                    <div className="home-text">
                        <div className="home-range-text">
                            <h3>The Outdoor Range!</h3>On most days we shoot at our outdoor range.  The range is 90 Meters long and wide enough for 30 people to shoot on the line at the same time. <br /><br />  The trees and fence running down the side of the range frequently prevents our shooting from being affected by strong winds. <br/><br/>  We carry targets ranging from 122cm wide all the way down to 10cm, accomodating archers regardless of whether you are a beginner or the second coming of robin hood whether you shoot a recurve bow, compound bow, or even traditional longbow.
                        </div>
                    </div>
                </div>
                <div className="home-range-body-section">
                    <div className="home-range-img"><div style={indoorBackgroundStyle}></div></div>
                    <div className="home-text">
                        <div className="home-range-text">
                            <h3>The Indoor Range!</h3>If the weather does not allow us to shoot outside or even if we just feel like shooting indoors for a change we have a small indoor range that can be used.<br /> <br/>  The indoor range is 12 meters long and wide enough for 5 people to shoot at a time.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
