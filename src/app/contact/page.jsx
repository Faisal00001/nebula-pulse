import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";


const page = () => {
    return (
        <div>
            <div className="bg-[#333333] h-96 flex justify-center items-center">
                <div>
                    <h3 className="text-4xl md:text-6xl font-bold text-center text-accent">Contact Us</h3>
                    <div className="text-center text-white/60 mt-5 text-xl">
                        Home / Contact Us
                    </div>
                </div>
            </div>
            <div>
                <ContactUs></ContactUs>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default page;