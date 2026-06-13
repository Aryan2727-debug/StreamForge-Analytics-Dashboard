import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

const TopVideosChart = ({ data }) => {
    return (
        <div className="chart-card">
            <h2>Top Videos</h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="video" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="plays" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TopVideosChart;