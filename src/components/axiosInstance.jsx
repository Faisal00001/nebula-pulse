// lib/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Default base URL
    // timeout: 10000, // Optional: Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;