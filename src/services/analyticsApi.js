import { API_BASE_URL } from "../config/api";

export const getAnalyticsSummary = async () => {
    const response = await fetch(
            `${API_BASE_URL}/analytics/summary`,
            {
                credentials: "include"
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch analytics summary");
        }

    return response.json();
};

export const getEventBreakdown =
    async () => {
        const response =
            await fetch(
                `${API_BASE_URL}/analytics/event-breakdown`,
                {
                    credentials: "include"
                }
            );

        if (!response.ok) {
            throw new Error("Failed to fetch event breakdown");
        }

    return response.json();
};

export const getTopVideos =
    async () => {
        const response =
            await fetch(
                `${API_BASE_URL}/analytics/top-videos`,
                {
                    credentials: "include"
                }
            );

        if (!response.ok) {
            throw new Error("Failed to fetch top videos");
        }

    return response.json();
};

export const getPlatformBreakdown =
    async () => {
        const response =
            await fetch(
                `${API_BASE_URL}/analytics/platform-breakdown`,
                {
                    credentials: "include"
                }
            );

        if (!response.ok) {
            throw new Error("Failed to fetch platform breakdown");
        }

    return response.json();
};

export const getDeviceBreakdown =
    async () => {
        const response =
            await fetch(
                `${API_BASE_URL}/analytics/device-breakdown`,
                {
                    credentials: "include"
                }
            );

        if (!response.ok) {
            throw new Error("Failed to fetch device breakdown");
        }

        return response.json();
};

export const getEnvironmentBreakdown =
    async () => {
        const response =
            await fetch(
                `${API_BASE_URL}/analytics/environment-breakdown`,
                {
                    credentials: "include"
                }
            );

        if (!response.ok) {
            throw new Error("Failed to fetch environment breakdown");
        }

        return response.json();
};

export const getAnalyticsEvents =
    async () => {
        const response =
            await fetch(
                `${API_BASE_URL}/analytics/events`,
                {
                    credentials: "include"
                }
            );

        if (!response.ok) {
            throw new Error("Failed to fetch analytics events");
        }

        return response.json();
};