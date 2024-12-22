import { FaPhoneAlt } from "react-icons/fa";
import { GrFirefox } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
    return (
        <div>

            <footer className="bg-[#333333] text-white/60">
                <div className="py-10">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Newsletter Section */}
                        <div className="flex flex-col items-start">
                            <div className="mb-4">
                                {/* Icon can be replaced with an actual SVG or icon component */}
                                <GrFirefox className="text-4xl text-accent"></GrFirefox>
                            </div>
                            <p className="mb-2">Subscribe to our newsletter and get</p>
                            <p>10% off your first purchase.</p>
                        </div>

                        {/* Information Links */}
                        <div>
                            <h3 className="font-bold mb-4">Information</h3>
                            <ul>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Home</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Blog</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Careers</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Pricing</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* About Us Links */}
                        <div>
                            <h3 className="font-bold mb-4">About Us</h3>
                            <ul>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Home</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Blog</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Careers</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Pricing</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Quick Links Section */}
                        <div>
                            <h3 className="font-bold mb-4">Quick Links</h3>
                            <ul>
                                <li className="mb-2 flex gap-2 items-center">
                                    <FaPhoneAlt className="text-lg"></FaPhoneAlt>
                                    +0123456789
                                </li>
                                <li className="mb-2 flex gap-2 items-center">
                                    <MdOutlineMailOutline className="text-2xl" />
                                    support@iqnonicthemes.com
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l6.16 6.16a4.12 4.12 0 011.58 3.34v7.5A2.5 2.5 0 0117.5 21H6.5A2.5 2.5 0 014 18.5v-7.5A4.12 4.12 0 015.58 8.16L12 2z" />
                                    </svg>
                                    1234 North Avenue Luke Lane
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="mt-8 text-center border-t-[1px] border-accent">
                        <p className="mt-8">Copyright 2024 Nebula Pulse All Rights Reserved.</p>
                    </div>
                </div>
            </footer>



        </div>
    );
};

export default Footer;