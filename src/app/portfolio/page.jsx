import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="bg-[#333333] h-96 flex justify-center items-center">
                <div>
                    <h3 className="text-4xl md:text-6xl font-bold text-center text-accent">Our portfolio</h3>
                    <div className="text-center text-white/60 mt-5 text-xl">
                        Home / Portfolio
                    </div>
                </div>
            </div>
            <div>
                <Portfolio></Portfolio>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default page;