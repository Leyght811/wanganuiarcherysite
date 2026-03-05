export default function HomeInfo() {
    return (
        <div id="home-info">
            <div className="home-text">
                <div>
                    <h3>Welcome!</h3> We are a target archery club in
                    Manawatu, Whanganui. <br /> <br /> Our busy archery range
                    caters for archers of all abilities, from absolute beginners
                    to experienced archers shooting distances from 30 to
                    90 metres.
                    <br /> Our competitive season runs from x to y. Our club
                    rooms are open at the following times: <br /> <br /> Summer
                    Season (x through y)
                    <br /> Saturday club shoot - from 9am
                    <br />
                    Tuesday practice shoot - 6pm
                    <br /> Thursday practice shoot - 6pm <br /> Sunday practice
                    shoot - 4pm <br /> <br /> Winter Season (x through y)
                    <br /> Saturday Club shoot - from 1pm
                    <br />
                    Tuesday practice shoot - 6pm
                    <br /> Thursday practice shoot - 6pm <br /> Sunday practice
                    shoot - 4pm <br /> <br /> Throughout the year, we are
                    excited to host regular tournaments to suit all levels of
                    archer, from enthusiastic novices through to experienced
                    athletes.
                </div>
            </div>
            <div className="home-text">
                <div id="home-info-map-content">
                    <h3>Where To Find Us!</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.1346511195271!2d175.06919452470802!3d-39.91230765081933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d4003d7abffd1bf%3A0x2a2e0db0781dadd3!2sWanganui%20Archery%20Club!5e0!3m2!1sen!2snz!4v1771380491752!5m2!1sen!2snz"
                        width="600"
                        height="450"
                        id="map-embed"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
