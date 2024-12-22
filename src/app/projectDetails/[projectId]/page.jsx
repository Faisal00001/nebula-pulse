"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LearnOra from "../../../../public/assets/projects/LearnOra.jpg";
import axios from 'axios';
import Footer from '@/components/Footer';

const ProjectDetails = ({ params }) => {
    const baseUrl = 'https://web-production-a916.up.railway.app'
    const [project, setProject] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { projectId } = params;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/api/projectDetails/${projectId}`)
                setProject(res.data)
                setLoading(false)
            } catch (err) {
                console.error(err); // Log the error for debugging
                setError("An error occurred while fetching data");
            }
        };

        fetchData();
    }, [projectId])
    if (loading) {
        return loading
    }

    return (
        <div className="relative h-screen">
            {/* Full-width background image */}
            <div className="bg-[#333333] h-96 flex justify-center items-center">
                <div>
                    <h3 className="text-4xl md:text-6xl font-bold text-center text-accent">Project Details</h3>
                    <div className="text-center text-white/60 mt-5 text-xl">
                        Home / Project Details
                    </div>
                </div>
            </div>
            {/* <div className='container mx-auto mb-24'>
                <div className='flex flex-col lg:flex-row mt-10  items-center'>
                    <div className='flex-1 mt-14 mb-10 lg:mb-0'>
                        {
                            project.images.length > 0 ? <Image
                                className='rounded object-cover' // Use object-cover to maintain aspect ratio
                                src={`${baseUrl}${project?.images[0]}`}
                                width={550}
                                height={550}
                                quality={100} // Ensure the quality is set to 100
                                alt='Project Image'
                                priority /> : ''
                        }

                    </div>
                    <div className='flex-1'>
                        <h3 className='text-2xl md:text-4xl text-center mb-5'>Project Overview</h3>
                        <p className='text-justify'>{project.description}</p>
                    </div>
                </div>
            </div> */}
            <div>
                <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
                    <div className="bg-cover h-64 text-center overflow-hidden rounded" style={{ height: 450, backgroundImage: `url(${`${baseUrl}${project?.images[0]}`})` }}>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <div className="mt-8 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                            <div>
                                <div className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    Project type: {project?.category?.name}
                                </div>

                                <h1 className="text-gray-900 font-bold text-3xl mb-2 mt-3">{project?.title}</h1>

                                <p className="text-base leading-8 my-5 text-justify">
                                    <span className='text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out mr-3'>Details:</span>
                                    {project?.description}
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
                                    dummy text ever since the 1500s</blockquote>
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
                                </a>,
                                <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    #Joe
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;
