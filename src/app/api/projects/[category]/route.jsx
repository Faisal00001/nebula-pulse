import { NextResponse } from 'next/server';
import axios from 'axios';
import axiosInstance from '@/components/axiosInstance';
// This function will handle GET requests to /api/projects/{category}
export async function GET(req, { params }) {

    const { category } = params;// Destructure category from params
    try {
        // Fetching data from your Node.js API using axios, passing the category in the request
        const response = await axiosInstance.get(`/projects/?category=${category}&format=json`);


        // Return the data as a JSON response using NextResponse
        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error); // Log the error for debugging
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}
