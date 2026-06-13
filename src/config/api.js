const isProduction = window.location.hostname !== "localhost";

export const API_BASE_URL = isProduction
        ? "https://streamforge-video-player-backend.onrender.com"
        : "http://localhost:5001";