"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BlogDetails = ({ params }) => {
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { blogId } = params;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/blogDetails/${blogId}`)
                setBlog(res.data)
                setLoading(false)
            } catch (err) {
                console.error(err); // Log the error for debugging
                setError("An error occurred while fetching data");
            }
        };

        fetchData();
    }, [blogId])
    if (loading) {
        return <>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="loading loading-ring loading-lg"></div>
            </div>
        </>
    }
    // Function to format the date
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    };

    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
                <div className="bg-cover bg-center text-center overflow-hidden rounded" style={{ minHeight: 500, backgroundImage: `url(${blog.image})` }} title="Woman holding a mug">
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                            <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">{blog?.title}</h1>
                            <p className="text-gray-700 text-xs mt-2">Written By:
                                {
                                    blog?.writers.map((writer, index) => <span key={index} className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                        {writer.first_name} {writer.last_name}
                                    </span>
                                    )
                                }

                                {/* <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    Election
                                </a>,
                                <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    Politics
                                </a> */}
                            </p>
                            <p className="text-gray-700 text-xs mt-2">Date:
                                {
                                    <span className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                        {formatDate(blog.date_posted)}
                                    </span>

                                }
                            </p>
                            <p className="text-base leading-8 my-5">
                                {blog?.content}
                            </p>
                            {/* <h3 className="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>
                            <p className="text-base leading-8 my-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s
                            </blockquote>
                            <p className="text-base leading-8 my-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                #Election
                            </a>,
                            <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                #people
                            </a>,
                            <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                #Election2020
                            </a>,
                            <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                #trump
                            </a>,<a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                #Joe
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;