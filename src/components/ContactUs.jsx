"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
const ContactUs = () => {
    const [selectedService, setSelectedService] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (value) => {
        setSelectedService(value);
        setError(false);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedService) {
            setError(true);
            return;
        }
        const form = event.target;
        const formData = {
            "first_name": form.firstname.value,
            "last_name": form.lastname.value,
            "email": form.email.value,
            "phone": form.phone.value,
            "service": selectedService,
            "message": form.message.value
        }
        // const formData = new FormData();
        // formData.append("first_name", form.firstname.value);
        // formData.append("last_name", form.lastname.value);
        // formData.append("email", form.email.value);
        // formData.append("phone", form.phone.value);
        // formData.append("service", selectedService);
        // formData.append("message", form.message.value);
        const toastId = toast.loading('Sending your message...');
        try {
            const response = await axios.post("/api/send-email", formData
            );

            if (response.status === 200) {
                toast.success('Message sent successfully!', { id: toastId });
                form.reset()

            } else {
                toast.error('Failed to send the message. Please try again.', { id: toastId });
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.', { id: toastId });
        }
    };

    return (
        <div>

            <div className="container mx-auto my-24">
                <div className="space-y-5 mb-10">
                    <h3 className="text-4xl md:text-6xl font-bold text-center mb-10">Contact Us</h3>
                    <p className="mx-auto text-center px-2 md:px-0 md:max-w-[80%] lg:max-w-[50%]">{'"Your Vision, Our Expertise".'} Connect with us to turn your ideas into reality through cutting-edge technology.</p>
                </div>
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none ">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#333333] rounded-xl">
                            <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
                            <p className="text-white/60">
                                As a web development graduate with machine learning expertise, I’m eager to create innovative, visually captivating websites. Let’s collaborate to push boundaries and develop exceptional, user-focused web applications together!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" name="firstname" placeholder="Firstname" required
                                />
                                <Input type="lastname" name="lastname" placeholder="Lastname" required
                                />
                                <Input type="email" name="email" placeholder="Email address" required
                                />
                                <Input type="phone" name="phone" placeholder="Phone number" required
                                />
                            </div>
                            {/* Select */}
                            <Select onValueChange={handleChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Select a service
                                        </SelectLabel>
                                        <SelectItem value="Web development">
                                            Web Development
                                        </SelectItem>
                                        <SelectItem value="Data Analysis">
                                            Data Analysis
                                        </SelectItem>
                                        <SelectItem value="Machine Learning">
                                            Machine Learning
                                        </SelectItem>
                                        <SelectItem value="Mobile Application">
                                            Mobile Application
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {error && (
                                <p className="text-red-500 text-sm mt-2">
                                    Please select a service.
                                </p>
                            )}
                            {/* Text area */}
                            <Textarea className="h-[200px] resize-none" placeholder="Type your message here." name="message" required />
                            {/* button */}
                            <Button className="bg-accent hover:bg-accent text-black">Contact Us</Button>
                        </form>
                    </div>
                    <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">

                            <li className="flex items-center gap-6">
                                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                    <div className="text-[28px]">
                                        <FaPhoneAlt />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p>Phone</p>
                                    <h3 className="text-xl flex">(+880) 1790 203 616</h3>
                                </div>
                            </li>
                            <li className="flex items-center gap-6">
                                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                    <div className="text-[34px]">
                                        <HiOutlineMail />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p>Email</p>
                                    <h3 className="text-xl flex">faisalosman@gmail.com</h3>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;