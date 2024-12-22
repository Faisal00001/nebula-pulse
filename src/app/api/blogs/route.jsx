import { NextResponse } from 'next/server';

import axiosInstance from '@/components/axiosInstance';
export async function GET(req) {
    try {
        // Fetching data from your Node.js API using axios
        const response = await axiosInstance.get('/blogs/?format=json');
        // Return the data as a JSON response using NextResponse
        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error); // Log the error for debugging
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}