import React from 'react';
import { MdOutlineManageHistory } from "react-icons/md";
import { AiFillAndroid, AiFillBug, AiFillControl, AiFillExperiment, AiFillPayCircle, AiFillTikTok, AiFillWindows } from "react-icons/ai";
const PopularService = () => {
    const services = [
        {
            icon: <MdOutlineManageHistory></MdOutlineManageHistory>,
            hover_background_color: "hover:bg-black",
            icon_primary_color: "text-black",
            title: "Stock Management System"
        },
        {
            icon: <AiFillAndroid></AiFillAndroid>,
            hover_background_color: "hover:bg-black",
            icon_primary_color: "text-black",
            title: "Receivable & Payables"
        },
        {
            icon: <AiFillBug></AiFillBug>,
            hover_background_color: "hover:bg-black",
            icon_primary_color: "text-black",
            title: "Manage Buying & Selling"
        },
        {
            icon: <AiFillControl></AiFillControl>,
            hover_background_color: "hover:bg-black",
            icon_primary_color: "text-black",
            title: "Message Notification"
        },
        {
            icon: <AiFillExperiment></AiFillExperiment>,
            hover_background_color: "hover:bg-black",
            icon_primary_color: "text-black",
            title: "Powerful & Secure Backup"
        },
        {
            icon: <AiFillPayCircle></AiFillPayCircle>,
            hover_background_color: "hover:bg-black",
            icon_primary_color: "text-black",
            title: "Product Management"
        },
        {
            icon: <AiFillTikTok></AiFillTikTok>,
            hover_background_color: "hover:bg-black",
            icon_primary_color: "text-black",
            title: "Customized Pricing System"
        },
        {
            icon: <AiFillWindows></AiFillWindows>,
            hover_background_color: "hover:bg-black",
            icon_primary_color: "text-black",
            title: "Fastest Return System"
        },

    ]
    return (
        <div className='container mx-auto my-24'>
            <div className='space-y-5'>
                <h3 className='font-bold text-4xl md:text-6xl text-center'>Popular Service </h3>
                <p className='mx-auto text-center px-2 md:px-0 md:max-w-[80%] lg:max-w-[50%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        services.map((service, index) => {
                            return <div key={index} className={`md:max-w-[300px] rounded-md overflow-hidden   py-10 shadow group ${service.hover_background_color} transition-all duration-300 ease-in-out cursor-pointer border-[1px] border-slate-300`}>
                                <div className='flex justify-center mb-5'>
                                    <p className={`text-6xl ${service.icon_primary_color} group-hover:text-white`}>{service.icon}</p>
                                </div>
                                <p className='text-center text-lg px-5 font-semibold group-hover:text-white'>{service.title}</p>
                            </div>
                        })
                    }
                </div>
            </div>


            {/* <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Card Title</div>
                    <p class="text-gray-700 text-base">
                        This is a simple card component created using Tailwind CSS. You can add more details or content here.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
                </div>
            </div> */}

        </div>
    );
};

export default PopularService;