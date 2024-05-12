import Image from "next/image";
import React from "react";
import dp from '../../public/keybrd.jpg'
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";

const Testimonials: React.FC = () => {
    return (
        <div className="lg:mx-36 mb-14">
            <h1 className="text-6xl mb-6 text-center font-sans">Testimonials</h1>
            <h3 className="mb-10 text-xl text-center">Hear what our students, former students and industry professionals have to say</h3>
            <div className="flex justify-around items-center">

                <button
                    className=" left-7 transform -translate-y-1/2 px-5 py-5 bg-orange-500 font-bold rounded-full"
                >
                    <GrPrevious className="text-white text-2xl" />
                </button>

                <div className="bg-gray-200 p-10 w-[30%]">
                    <div className="flex mb-4">
                        <FaStar className="text-xl" />
                        <FaStar className="text-xl" />
                        <FaStar className="text-xl" />
                        <FaStar className="text-xl" />
                        <FaStar className="text-xl" />
                    </div>

                    <h2 className="font-bold text-lg font-sans">Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market.</h2>
                    <div className="w-20 h-24 my-8">
                        <Image
                            src={dp}
                            alt='dp'
                            className="w-full h-full object-cover border rounded-t-full border-gray-200"
                        />
                    </div>
                    <h2 className="mb-2 font-semibold text-lg">John Doe</h2>
                    <p className="">Software Engineer, xyz company.</p>
                </div>

                <div className="bg-gray-200 p-10 w-[30%]">

                    <div className="flex mb-4">
                        <FaStar className="text-xl" />
                        <FaStar className="text-xl" />
                        <FaStar className="text-xl" />
                        <FaStar className="text-xl" />
                        <FaStar className="text-xl" />
                    </div>

                    <h2 className="font-bold text-lg font-sans">Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market.</h2>
                    <div className="w-20 h-24 my-8">
                        <Image
                            src={dp}
                            alt='dp'
                            className="w-full h-full object-cover border rounded-t-full border-gray-200 "
                        />
                    </div>

                    <h2 className="mb-2 font-semibold text-lg">John Marry</h2>
                    <p>web Developer, abc company.</p>
                </div>

                <button
                    className=" left-7 transform -translate-y-1/2 px-5 py-5 bg-orange-500 font-bold rounded-full"
                >
                    <GrNext className="text-white text-2xl" />
                </button>

            </div>
        </div>
    )
};
export default Testimonials;