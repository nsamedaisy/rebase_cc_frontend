import React from "react";
import bata from '../../public/bata.jpg'
import ewi from '../../public/ewi.jpg';
import dorine from '../../public/dorine.jpg';
import Image from "next/image";


const FeaturedStudent: React.FC = () => {
    return (
        <div className="lg:mx-20 my-32">
            <h1 className="text-6xl mb-4 text-center font-sans">Featured Students</h1>
            <h3 className="mb-14 text-xl text-center">Here are our Top Three (3) Students Of The Month!</h3>
            <div className="flex justify-center items-center">

                <div className="p-10 bg-orange-50 w-[20%] text-center">

                    <div className="w-60 h-60 my-8 mx-auto">
                        <Image
                            src={ewi}
                            alt='dp'
                            className="w-full h-full object-cover border rounded-full"
                        />
                    </div>
                    <h2 className="mb-2 font-semibold text-lg">Ewi Josepha</h2>
                    <p className="">I Developed an app that helps users select and rank most useful AI tools, specific to the users domain.</p>
                </div>

                <div className="bg-orange-50 p-10 w-[20%] text-center mx-20">

                    <div className="w-60 h-60 my-8 mx-auto">
                        <Image
                            src={dorine}
                            alt='dp'
                            className="w-full h-full object-cover border rounded-full"
                        />
                    </div>

                    <h2 className="mb-2 font-semibold text-lg">Dorine Ngabdoh</h2>
                    <p>I developed a website that allows the user to find restaurants that are within their budget.</p>
                </div>

                <div className="bg-orange-50 p-10 w-[20%] text-center">

                    <div className="w-60 h-60 my-8 mx-auto">
                        <Image
                            src={bata}
                            alt='dp'
                            className="w-full h-full object-cover border rounded-full"
                        />
                    </div>

                    <h2 className="mb-2 font-semibold text-lg">Bata Humphrey</h2>
                    <p>I developed a website presenting a photographers work and giving easy access to users to book.</p>
                </div>


            </div>
        </div>
    )
};
export default FeaturedStudent;