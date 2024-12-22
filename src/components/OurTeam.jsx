"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// Import required Swiper modules
import { Pagination, FreeMode } from 'swiper/modules';
import "./team.css"

// Import Images of team member
import faisal from "../../public/assets/Team/faisal.jpg"
import mehedi from "../../public/assets/Team/mehedi.jpg"
import muntasir from "../../public/assets/Team/muntasir.png"
import rifat from "../../public/assets/Team/Rifat.jpeg"
import muhtasim from "../../public/assets/Team/Muhtasim.jpeg"
import sadiq from "../../public/assets/Team/Sadiq.jpeg"
import Image from 'next/image';
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { FaSquareGithub } from "react-icons/fa6";
const OurTeam = () => {
    return (
        <div>
            <div className="container mx-auto my-24">
                <div className="space-y-5">
                    <h3 className="text-4xl md:text-6xl font-bold text-center">Our Team</h3>
                    <p className="mx-auto text-center px-2 md:px-0 md:max-w-[80%] lg:max-w-[50%]">
                        If you are planning on developing a product landing app or website, take
                        a look at this beautiful-crafted
                    </p>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='mt-16'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}  // Import and use FreeMode properly
                        breakpoints={{
                            // Small screens (default)
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            // Medium screens (768px and up)
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            // Large screens (1024px and up)
                            1024: {
                                slidesPerView: 2,  // Show 3 slides on large screens
                                spaceBetween: 30,  // Increase space between slides
                            },
                            // Extra-large screens (1366px and up)
                            1366: {
                                slidesPerView: 3,  // Show 4 slides on very large screens
                                spaceBetween: 30,  // Increase spacing for a spacious layout
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide className="mb-20">
                            <div className="card card-compact h-[500px] relative group overflow-hidden rounded-lg shadow-lg">
                                <figure className="relative h-full w-full">
                                    {/* Image */}
                                    <Image
                                        src={faisal}
                                        alt="Team Member"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 
                                        (max-width: 1200px) 50vw, 
                                        33vw"
                                        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 object-cover"
                                    />


                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

                                    {/* Title and Social Icons */}
                                    <div className="absolute inset-0 flex flex-col justify-end items-start px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                                        {/* Title */}
                                        <p className="text-white text-2xl font-semibold mb-4">Faisal Osman</p>
                                        <p className="text-white text-xl font-semibold mb-4">Web Developer</p>

                                        {/* Social Icons */}
                                        <div className="flex space-x-4 relative">
                                            <a href="https://www.facebook.com/faisal.osman.5245" target="_blank" rel="noopener noreferrer">
                                                <ImFacebook2 className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/faisal-osman-41b203182/" target="_blank" rel="noopener noreferrer">
                                                <ImLinkedin className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/faisal-osman-41b203182/" target="_blank" rel="noopener noreferrer">
                                                <FaSquareGithub className="text-[43px] absolute -top-1 text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </SwiperSlide>





                        <SwiperSlide className="mb-20">
                            <div className="card card-compact h-[500px] relative group overflow-hidden rounded-lg shadow-lg">
                                <figure className="relative h-full w-full">
                                    {/* Image */}
                                    <Image
                                        src={sadiq}
                                        alt="Team Member"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 
                                        (max-width: 1200px) 50vw, 
                                        33vw"
                                        // Ensure full coverage
                                        // Use "cover" for a more full-coverage look
                                        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 object-cover"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

                                    {/* Title and Social Icons */}
                                    <div className="absolute inset-0 flex flex-col justify-end items-start px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                                        {/* Title */}
                                        <p className="text-white text-2xl font-semibold mb-4">Web Developer</p>

                                        {/* Social Icons */}
                                        <div className="flex space-x-4">
                                            <a href="https://www.facebook.com/faisal.osman.5245" target="_blank" rel="noopener noreferrer">
                                                <ImFacebook2 className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/faisal-osman-41b203182/" target="_blank" rel="noopener noreferrer">
                                                <ImLinkedin className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="mb-20">
                            <div className="card card-compact h-[500px] relative group overflow-hidden rounded-lg shadow-lg">
                                <figure className="relative h-full w-full">
                                    {/* Image */}
                                    <Image
                                        src={mehedi}
                                        alt="Team Member"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 
                                        (max-width: 1200px) 50vw, 
                                        33vw"
                                        // Ensure full coverage
                                        // Use "cover" for a more full-coverage look
                                        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 object-cover"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

                                    {/* Title and Social Icons */}
                                    <div className="absolute inset-0 flex flex-col justify-end items-start px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                                        {/* Title */}
                                        <p className="text-white text-2xl font-semibold mb-4">Web Developer</p>

                                        {/* Social Icons */}
                                        <div className="flex space-x-4">
                                            <a href="https://www.facebook.com/faisal.osman.5245" target="_blank" rel="noopener noreferrer">
                                                <ImFacebook2 className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/faisal-osman-41b203182/" target="_blank" rel="noopener noreferrer">
                                                <ImLinkedin className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="mb-20">
                            <div className="card card-compact h-[500px] relative group overflow-hidden rounded-lg shadow-lg">
                                <figure className="relative h-full w-full">
                                    {/* Image */}
                                    <Image
                                        src={muntasir}
                                        alt="Team Member"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 
                                        (max-width: 1200px) 50vw, 
                                        33vw"
                                        // Ensure full coverage
                                        // Use "cover" for a more full-coverage look
                                        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 object-cover"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

                                    {/* Title and Social Icons */}
                                    <div className="absolute inset-0 flex flex-col justify-end items-start px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                                        {/* Title */}
                                        <p className="text-white text-2xl font-semibold mb-4">Web Developer</p>

                                        {/* Social Icons */}
                                        <div className="flex space-x-4">
                                            <a href="https://www.facebook.com/faisal.osman.5245" target="_blank" rel="noopener noreferrer">
                                                <ImFacebook2 className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/faisal-osman-41b203182/" target="_blank" rel="noopener noreferrer">
                                                <ImLinkedin className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="mb-20">
                            <div className="card card-compact h-[500px] relative group overflow-hidden rounded-lg shadow-lg">
                                <figure className="relative h-full w-full">
                                    {/* Image */}
                                    <Image
                                        src={rifat}
                                        alt="Team Member"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 
                                        (max-width: 1200px) 50vw, 
                                        33vw"
                                        // Ensure full coverage
                                        // Use "cover" for a more full-coverage look
                                        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 object-cover"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

                                    {/* Title and Social Icons */}
                                    <div className="absolute inset-0 flex flex-col justify-end items-start px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                                        {/* Title */}
                                        <p className="text-white text-2xl font-semibold mb-4">Web Developer</p>

                                        {/* Social Icons */}
                                        <div className="flex space-x-4">
                                            <a href="https://www.facebook.com/faisal.osman.5245" target="_blank" rel="noopener noreferrer">
                                                <ImFacebook2 className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/faisal-osman-41b203182/" target="_blank" rel="noopener noreferrer">
                                                <ImLinkedin className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="mb-20">
                            <div className="card card-compact h-[500px] relative group overflow-hidden rounded-lg shadow-lg">
                                <figure className="relative h-full w-full">
                                    {/* Image */}
                                    <Image
                                        src={muhtasim}
                                        alt="Team Member"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 
                                        (max-width: 1200px) 50vw, 
                                        33vw"
                                        // Ensure full coverage
                                        // Use "cover" for a more full-coverage look
                                        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 object-cover"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

                                    {/* Title and Social Icons */}
                                    <div className="absolute inset-0 flex flex-col justify-end items-start px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                                        {/* Title */}
                                        <p className="text-white text-2xl font-semibold mb-4">Web Developer</p>

                                        {/* Social Icons */}
                                        <div className="flex space-x-4">
                                            <a href="https://www.facebook.com/faisal.osman.5245" target="_blank" rel="noopener noreferrer">
                                                <ImFacebook2 className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/faisal-osman-41b203182/" target="_blank" rel="noopener noreferrer">
                                                <ImLinkedin className="text-4xl text-accent transition-transform duration-200 hover:scale-110" />
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
