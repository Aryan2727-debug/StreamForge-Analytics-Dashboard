import { useEffect, useState } from "react";
import SummaryCards from "../components/SummaryCards";
import EventBreakdownChart from "../components/EventBreakdownChart";
import TopVideosChart from "../components/TopVideosChart";
import BreakdownChart from "../components/BreakdownChart";
import EventsTable from "../components/EventsTable";
import { 
    getAnalyticsSummary, 
    getEventBreakdown, 
    getTopVideos,
    getPlatformBreakdown,
    getEnvironmentBreakdown,
    getDeviceBreakdown,
    getAnalyticsEvents 
} from "../services/analyticsApi";

const Dashboard = () => {
    const [summary, setSummary] = useState(null);
    const [eventBreakdown, setEventBreakdown] = useState([]);
    const [topVideos, setTopVideos] = useState([]);
    const [platformData, setPlatformData] = useState([]);
    const [environmentData, setEnvironmentData] = useState([]);
    const [deviceData, setDeviceData] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const [
                    summaryData, 
                    breakdownData, 
                    topVideosData, 
                    platformData, 
                    environmentData, 
                    deviceData,
                    eventsData
                ] = await Promise.all([
                    getAnalyticsSummary(),
                    getEventBreakdown(),
                    getTopVideos(),
                    getPlatformBreakdown(),
                    getEnvironmentBreakdown(),
                    getDeviceBreakdown(),
                    getAnalyticsEvents()
                ]);
                setSummary(summaryData);
                setEventBreakdown(breakdownData);
                setTopVideos(topVideosData);
                setPlatformData(platformData);
                setEnvironmentData(environmentData);
                setDeviceData(deviceData);
                setEvents(eventsData);
            } catch (error) {
                console.error("Error fetching analytics summary:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSummary();
    }, []);

    if (loading) {
        return (
            <div className="dashboard-loading">
                Loading analytics...
            </div>
        );
    }

    return (
        <div className="dashboard">
            <h1>StreamForge Analytics Dashboard</h1>
            <SummaryCards summary={summary} />
            <div className="charts-grid">
                <EventBreakdownChart data={eventBreakdown} />
                <TopVideosChart data={topVideos} />
            </div>
            <div className="charts-grid">
                <BreakdownChart title="Platform Breakdown" data={platformData} dataKey="count" nameKey="platform" />
                <BreakdownChart title="Environment Breakdown" data={environmentData} dataKey="count" nameKey="environment" />
                <BreakdownChart title="Device Breakdown" data={deviceData} dataKey="count" nameKey="deviceType" />
            </div>
            <EventsTable events={events} />
        </div>
    );
};

export default Dashboard;