import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip,
    Legend
} from "recharts";

const BreakdownChart = ({
    title,
    data,
    dataKey,
    nameKey
}) => {
    return (
        <div className="chart-card">
            <h2>{title}</h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >
                <PieChart>
                    <Pie
                        data={data}
                        dataKey={dataKey}
                        nameKey={nameKey}
                        outerRadius={120}
                        label
                    />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BreakdownChart;