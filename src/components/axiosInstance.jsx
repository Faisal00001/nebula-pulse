// lib/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://web-production-a916.up.railway.app', // Default base URL
    // timeout: 10000, // Optional: Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;