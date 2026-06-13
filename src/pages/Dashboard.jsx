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
    const [lastUpdated, setLastUpdated] = useState(null);

    const fetchDashboardData = async () => {
        try {
            const [
                summaryData,
                breakdownData,
                topVideosData,
                platformBreakdownData,
                deviceBreakdownData,
                environmentBreakdownData,
                eventsData
            ] = await Promise.all([
                getAnalyticsSummary(),
                getEventBreakdown(),
                getTopVideos(),
                getPlatformBreakdown(),
                getDeviceBreakdown(),
                getEnvironmentBreakdown(),
                getAnalyticsEvents()
            ]);

            setSummary(summaryData);
            setEventBreakdown(breakdownData);
            setTopVideos(topVideosData);
            setPlatformData(platformBreakdownData);
            setDeviceData(deviceBreakdownData);
            setEnvironmentData(environmentBreakdownData);
            setEvents(eventsData);
            setLastUpdated(new Date());
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            if (!isMounted) {
                return;
            }
            await fetchDashboardData();
        };

        loadData();

        const interval = setInterval(
            loadData,
            30000
        );

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
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
            {
                lastUpdated && (
                    <span className="last-updated">
                        Last Updated:
                        {" "}
                        {
                            lastUpdated.toLocaleTimeString()
                        }
                    </span>
                )
            }
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