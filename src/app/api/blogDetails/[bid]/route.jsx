// app/product/[id]/route.jsx

import { NextResponse } from 'next/server';
import axiosInstance from '@/components/axiosInstance';
export async function GET(request, { params }) {
    try {
        const { bid } = params;
        const blodIdInt = parseInt(bid)
        // Get the dynamic segment from params
        // Fetch data, manipulate response, etc.
        const response = await axiosInstance.get(`/blogs/${blodIdInt}/?format=json`);


        // Return the data as a JSON response using NextResponse
        return NextResponse.json(response.data);
    }
    catch (error) {
        console.error('Error fetching data:', error); // Log the error for debugging
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }


}
