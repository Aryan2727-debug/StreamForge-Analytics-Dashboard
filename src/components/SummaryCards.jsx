const SummaryCards = ({ summary }) => {
    const cards = [
        {
            title: "Users",
            value: summary.totalUsers
        },
        {
            title: "Sessions",
            value: summary.totalSessions
        },
        {
            title: "Events",
            value: summary.totalEvents
        },
        {
            title: "Video Plays",
            value: summary.totalVideoPlays
        },
        {
            title: "Completed",
            value: summary.totalVideosCompleted
        }
    ];

    return (
        <div className="summary-grid">
            {cards.map(card => (
                <div
                    key={card.title}
                    className="summary-card"
                >
                    <div className="summary-title">
                        {card.title}
                    </div>

                    <div className="summary-value">
                        {card.value}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SummaryCards;