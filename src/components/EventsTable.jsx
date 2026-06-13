const EventsTable = ({
    events
}) => {
    return (
        <div className="table-card">
            <h2>Recent Events</h2>

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>User</th>
                            <th>Platform</th>
                            <th>Device</th>
                            <th>Environment</th>
                            <th>Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            events.map(event => (
                                <tr
                                    key={event._id}
                                >
                                    <td>
                                        {event.event}
                                    </td>

                                    <td>
                                        {event.userEmail}
                                    </td>

                                    <td>
                                        {event.platform}
                                    </td>

                                    <td>
                                        {event.deviceType}
                                    </td>

                                    <td>
                                        {event.environment}
                                    </td>

                                    <td>
                                        {
                                            new Date(event.timestamp).toLocaleString()
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EventsTable;