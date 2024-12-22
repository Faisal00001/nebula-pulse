import axiosInstance from '@/components/axiosInstance';
import { NextResponse } from 'next/server';
export async function POST(req) {
    try {
        const formData = await req.json();
        const response = await axiosInstance.post("/contact/", formData);

        return NextResponse.json({
            status: "success",
            message: "Form data received and sent successfully",
        });
    } catch (error) {
        console.error("Error processing form data:", error);

        return NextResponse.json(
            {
                status: "error",
                message: "Failed to process form data",
            },
            { status: 500 }
        );
    }
}
