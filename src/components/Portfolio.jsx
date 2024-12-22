"use client"
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import project1 from "../../public/assets/projects/faisal1.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
// const allProjects = [
//     {
//         name: "LearnOra",
//         description: "I am Faisal Osman",
//         live_link: "https://google.com",
//         github_link: "https://facebook.com"
//     }
// ]
// const experience =
// {
//     icon: "/assets/resume/badge.svg",
//     title: 'My Experience',

//     description: "Having contributed as a frontend engineer at AUB Tech and currently at RCN, I bring hands-on experience in developing engaging web applications. I specialize in creating responsive user interfaces and optimizing user experiences using modern frontend technologies.",
//     items: [
//         {
//             project_name: "LearnOra",
//             description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, error.",
//             live_link: "dsadada",
//             github_link: "loasdasddsadsa"
//         },
//         {
//             company: "AUB Tech",
//             postion: "Frontend Developer",
//             duration: "2023 - 2024"
//         },
//         {
//             company: "BJET",
//             postion: "Engineering Trainee",
//             duration: "Summer 2023"
//         },
//     ]
// }
// {`${baseUrl}${project?.images[0]}`
const Portfolio = () => {
    const baseUrl = 'https://web-production-a916.up.railway.app'
    const [projects, setProjects] = useState(null);
    const [categoryName, setCategoryName] = useState('')
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    // const [categoryWiseData, setCategoryWiseData] = useState([])
    useEffect(() => {
        // Fetch data from the Next.js API route
        const fetchData = async (categoryName) => {
            try {
                if (categoryName === '') {
                    const res = await axios.get('/api/projects');
                    setProjects(res.data);
                }
                else {
                    const res = await axios.get(`/api/projects/${categoryName}`)
                    setProjects(res.data)
                }

                // const mobileRes = await axios.get('/api/projects/category');

                setLoading(false)
            } catch (err) {
                console.error(err); // Log the error for debugging
                setError("An error occurred while fetching data");
            }
        };

        fetchData(categoryName);
    }, [categoryName]);
    // if (loading) {
    //     return "Loading"
    // }
    const handleCategory = (value) => {
        setCategoryName(value)
    }
    return (
        <div className="container mx-auto my-24">
            <div>
                <h3 className="font-bold text-4xl md:text-6xl mb-10">Our portfolio</h3>
                <div >
                    <Tabs defaultValue="all">
                        <TabsList className="py-8 lg:w-[50%] flex gap-5 md:gap-14 bg-[#1c1c22] mb-10">
                            <div onClick={() => handleCategory('')}>
                                <TabsTrigger value="all">All</TabsTrigger>
                            </div>
                            <div onClick={() => handleCategory('Mobile')}>
                                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                            </div>
                            <div onClick={() => handleCategory('Data')}>
                                <TabsTrigger value="data">Data</TabsTrigger>
                            </div>
                            <div onClick={() => handleCategory('Web')}>
                                <TabsTrigger value="web">Web</TabsTrigger>
                            </div>
                        </TabsList>
                        {/* Content */}
                        <div>
                            {
                                loading ? <><div className="flex justify-center items-center pt-10 h-screen">
                                    <span className="loading loading-ring loading-lg"></span>
                                </div></> : <><TabsContent value="all">
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                                        {
                                            projects.map((project, index) =>
                                                <div key={index} className=" card bg-base-100 image-full md:w-96 shadow-xl rounded">
                                                    <div className="absolute inset-0 bg-black bg-opacity-45 z-10 rounded-xl"></div>
                                                    <figure className="relative w-full h-64">
                                                        <Image
                                                            className="rounded-xl"
                                                            src={`${baseUrl}${project?.images
                                                            [0]}`}
                                                            alt="Project" fill
                                                            sizes="(max-width: 768px) 100vw, 
                                                            (max-width: 1200px) 50vw, 
                                                            33vw"/>
                                                    </figure>
                                                    <div className="card-body">
                                                        <h2 className="card-title text-white">{project.title}</h2>
                                                        <p className="text-white">{project.description.slice(0, 70) + " ..."}</p>
                                                        <div className="card-actions justify-end mt-5">
                                                            <Link href={`/projectDetails/${project.id}`} className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-black rounded hover:bg-white group">
                                                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#3B9EBF] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">View Details</span>
                                                            </Link>

                                                        </div>

                                                    </div>

                                                </div>)
                                        }


                                    </div>

                                </TabsContent></>
                            }

                            <TabsContent value="mobile">
                                {
                                    loading ? <><span className="loading loading-spinner loading-lg"></span></> : <><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                        {
                                            projects.map((project, index) =>
                                                <div key={index} className=" card bg-base-100 image-full md:w-96 shadow-xl rounded">
                                                    <div className="absolute inset-0 bg-black bg-opacity-45 z-10 rounded-xl"></div>
                                                    <figure className="relative w-full h-64">
                                                        <Image
                                                            className="rounded-xl"
                                                            src={`${baseUrl}${project?.images
                                                            [0]}`}
                                                            alt="Shoes" fill
                                                            sizes="(max-width: 768px) 100vw, 
                                                            (max-width: 1200px) 50vw, 
                                                            33vw"/>
                                                    </figure>
                                                    <div className="card-body">
                                                        <h2 className="card-title">{project.title}</h2>
                                                        <p>{project.description.slice(0, 70) + " ..."}</p>
                                                        <div className="card-actions justify-end mt-5">
                                                            <Link href={`/projectDetails/${project.id}`} className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-black rounded hover:bg-white group">
                                                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#3B9EBF] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">View Details</span>
                                                            </Link>

                                                        </div>

                                                    </div>

                                                </div>)
                                        }


                                    </div></>
                                }


                            </TabsContent>
                            <TabsContent value="data">
                                {
                                    loading ? <><span className="loading loading-spinner loading-lg"></span></> : <><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                        {
                                            projects.map((project, index) =>
                                                <div key={index} className=" card bg-base-100 image-full md:w-96 shadow-xl rounded">
                                                    <div className="absolute inset-0 bg-black bg-opacity-45 z-10 rounded-xl"></div>
                                                    <figure className="relative w-full h-64">
                                                        <Image
                                                            className="rounded-xl"
                                                            src={`${baseUrl}${project?.images
                                                            [0]}`}
                                                            alt="Shoes" fill
                                                            sizes="(max-width: 768px) 100vw, 
                                                            (max-width: 1200px) 50vw, 
                                                            33vw" />
                                                    </figure>
                                                    <div className="card-body">
                                                        <h2 className="card-title">{project.title}</h2>
                                                        <p>{project.description.slice(0, 70) + " ..."}</p>
                                                        <div className="card-actions justify-end mt-5">
                                                            <Link href={`/projectDetails/${project.id}`} className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-black rounded hover:bg-white group">
                                                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#3B9EBF] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">View Details</span>
                                                            </Link>

                                                        </div>

                                                    </div>

                                                </div>)
                                        }


                                    </div></>
                                }


                            </TabsContent>
                            <TabsContent value="web">
                                {
                                    loading ? <><span className="loading loading-spinner loading-lg"></span></> : <><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                        {
                                            projects.map((project, index) =>
                                                <div key={index} className=" card bg-base-100 image-full md:w-96 shadow-xl rounded">
                                                    <div className="absolute inset-0 bg-black bg-opacity-45 z-10 rounded-xl"></div>
                                                    <figure className="relative w-full h-64">
                                                        <Image
                                                            className="rounded-xl"
                                                            src={`${baseUrl}${project?.images
                                                            [0]}`}
                                                            alt="Shoes" fill
                                                            sizes="(max-width: 768px) 100vw, 
                                                            (max-width: 1200px) 50vw, 
                                                            33vw" />
                                                    </figure>
                                                    <div className="card-body">
                                                        <h2 className="card-title">{project.title}</h2>
                                                        <p>{project.description.slice(0, 70) + " ..."}</p>
                                                        <div className="card-actions justify-end mt-5">
                                                            <Link href={`/projectDetails/${project.id}`} className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-black rounded hover:bg-white group">
                                                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#3B9EBF] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">View Details</span>
                                                            </Link>

                                                        </div>

                                                    </div>

                                                </div>)
                                        }


                                    </div></>
                                }


                            </TabsContent>

                        </div>


                    </Tabs>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;