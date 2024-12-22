"use client"
import Lottie from "lottie-react";
import AboutUsAnimation from "../../public/assets/animation/AboutUs.json";
const AboutUs = () => {
    return (
        <div className="my-24">

            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-5 ">
                    <div className="w-full lg:w-[50%]">
                        <Lottie animationData={AboutUsAnimation} loop={true} />
                    </div>
                    <div className="lg:w-[50%]">
                        <div className="space-y-5 mt-16 lg:mt-0">
                            <h3 className="font-bold text-4xl md:text-6xl">About</h3>
                            <p className="text-justify">At <span className="font-bold">Nebula Pulse</span>, we are driven by a passion for technology and innovation. Our mission is to create cutting-edge digital solutions that empower businesses and enhance everyday experiences.

                                With a team of skilled professionals, we specialize in delivering custom software, web applications, and AI-powered systems tailored to meet unique business needs. We believe in turning complex challenges into seamless, user-friendly solutions through creativity, expertise, and dedication.

                                Join us on our journey to shape the future through technology and unlock new possibilities with Nebula Pulse.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AboutUs;