const lists = [
    {
        title: "Safety",
        items: [
            "Follow all range rules, safety procedures, and instructions from club officials.",
            "Handle bows, arrows, and equipment responsibly at all times",
            "Only shoot when the range is open and follow all commands immediately",
            "Never participate while impaired by alcohol or drugs",
        ],
    },
    {
        title: "Respect & Sportsmanship",
        items: [
            "Treat all members, visitors, and officials with respect and courtesy.",
            "Encourage and support archers of all abilities and experience levels.",
            "Demonstrate good sportsmanship in training and competition.",
        ],
    },
    {
        title: "Behaviour",
        subtext: "members will not:",
        items: [
            "Engage in bullying, harassment, discrimination, or threatening behaviour.",
            "Use offensive language or behave in a way that negatively affects others' enjoyment or safety.",
            "Damage club property or another person's equipment.",
        ],
    },
    {
        title: "Behaviour",
        subtext:
            "Members are encouraged to contribute positively to the club, support activites, welcome new members, and help maintain a friendly archery community.",
        items: [],
    },
];

export default function Conduct() {
    return (
        <div id="club-page-conduct" className="page-section">
            <div className="section-head">
                <h3>Code of Conduct</h3>
            </div>
            <div>
                <p>
                    Wanganui Archery Club is commited to providing a safe,
                    respectful, and enjoyable environment for all members,
                    visitors, coaches, officials, and volunteers.
                </p>
                <p>All members and visitors agree to:</p>
                {lists.map((list) => {
                    return (
                        <ConductList
                            title={list.title}
                            subtext={list.subtext ? list.subtext : null}
                            items={list.items}
                        />
                    );
                })}
                Concerns should be raised respectfully with the club committee.
                <p>
                    <strong>
                        <i>
                            Safe shooting, respect for others, and enjoyment of
                            archery are the foundations of our club.
                        </i>
                    </strong>
                </p>
            </div>
        </div>
    );
}

const ConductList = ({ title, subtext = null, items }) => {
    return (
        <div style={{ marginTop: "1rem" }}>
            <strong>{title}</strong>
            {subtext && <p>{subtext}</p>}
            <ul>
                {items.map((item) => {
                    return <li>{item}</li>;
                })}
            </ul>
        </div>
    );
};
