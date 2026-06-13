import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

const EventBreakdownChart = ({ data }) => {
    return (
        <div className="chart-card">
            <h2>Event Breakdown</h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="event" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EventBreakdownChart;