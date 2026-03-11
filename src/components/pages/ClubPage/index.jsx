import Conduct from "./Conduct";
import Members from "./Members";
import History from "./History";
import "./styles.css";

export default function ClubPage() {
    return (
        <div className="page-container">
            <Members />
            <Conduct />
            <History />
        </div>
    );
}
