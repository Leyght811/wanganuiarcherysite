import { Link } from "react-router-dom";

export default function Members() {
    return (
        <div id="club-page-members" className="club-page-section">
            <div className="club-page-section-head">
                <h3>Whanganui Archery Club Committee Members</h3>
            </div>
            <div>
                <MembersItem title={"President"} name={"Trish Nugent-Lyne"} />
                <MembersItem title={"Vice President"} name={"Adrian Lyne"} />
                <MembersItem title={"Secretary"} name={"Amie Rowan"} />
                <MembersItem title={"Treasurer"} name={"Vicki Meyer"} />
                <MembersItem
                    title={"Field Captain"}
                    name={"Esteban Berretta"}
                />
                <MembersItem title={"Vice Captain"} name={"Wesley Wright"} />
                <MembersItem
                    title={"Committee Members"}
                    name={
                        <span>
                            <br />
                            Matt Nowack <br /> Anita Silveira
                        </span>
                    }
                />
                <Link to={{ pathname: "/contact" }}>
                    <button>Contact Us</button>
                </Link>
            </div>
        </div>
    );
}

const MembersItem = ({ title, name }) => {
    return (
        <div className="members-item">
            <span className="members-item-title">
                <strong>{title}: </strong>
            </span>
            <span className="members-item-name">{name}</span>
        </div>
    );
};
