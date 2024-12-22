"use client"

import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import project1 from "../../public/assets/projects/faisal1.jpg"
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
const LatestPosts = () => {
    const [blogs, setBlogs] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    // const [categoryWiseData, setCategoryWiseData] = useState([])
    useEffect(() => {
        // Fetch data from the Next.js API route
        const fetchData = async () => {
            try {

                const res = await axios.get('/api/blogs');
                setBlogs(res.data);

                // const mobileRes = await axios.get('/api/projects/category');

                setLoading(false)
            } catch (err) {
                console.error(err); // Log the error for debugging
                setError("An error occurred");
            }
        };

        fetchData();
    }, []);
    if (loading) {
        return <>
            <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        </>
    }

    return (
        <div className='mb-24'>
            <div className='container mx-auto'>
                <div className="space-y-5 mt-24">
                    <h3 className="text-4xl md:text-6xl font-bold text-center">Latest Posts</h3>
                    <p className="mx-auto text-center px-2 md:px-0 md:max-w-[80%] lg:max-w-[50%]">
                        If you are planning on developing a product landing.
                    </p>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='mt-20'>
                    <>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            // navigation={true}
                            breakpoints={{
                                // Small screens (default)
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,  // Show 3 slides on large screens
                                    spaceBetween: 10,
                                },
                                // Large screens (1024px and up)
                                1024: {
                                    slidesPerView: 2,  // Show 3 slides on large screens
                                    spaceBetween: 30,  // Increase space between slides
                                },
                                // Extra-large screens (1366px and up)
                                1366: {
                                    slidesPerView: 3,  // Show 4 slides on very large screens
                                    spaceBetween: 20,  // Increase spacing for a spacious layout
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper flex justify-center"
                        >
                            {
                                error && <p>{error}</p>
                            }
                            {blogs.map((blog, index) => {
                                // Log each individual blog data
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="card mx-auto h-[650px] bg-base-100 border-2 border-gray-300 lg:w-96 shadow-xl">
                                            <figure style={{ width: '100%', height: '270px', overflow: 'hidden' }}>
                                                <Image
                                                    src={blog.image || ''}
                                                    alt={blog.title}
                                                    width={390}
                                                    height={200}
                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Ensure the image covers the area
                                                />
                                            </figure>

                                            <div className="card-body">
                                                <h2 className="card-title">{blog.title || "Untitled"}</h2>
                                                <p>{blog.content.slice(0, 100) + "..." || "No description available"}</p>
                                                <div className="card-actions justify-end">
                                                    <Link href={`/blogDetails/${blog.id}`} className="btn bg-black hover:bg-black text-white">Read More</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    );
};

export default LatestPosts;