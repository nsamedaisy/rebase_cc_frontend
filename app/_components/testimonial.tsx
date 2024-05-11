import Image from "next/image";
import React from "react";
import dp from '../../public/keybrd.jpg'

const Testimonials: React.FC = () => {
    return (
        <div className="lg:mx-20 mb-14">
            <h1 className="text-6xl mb-6 text-center font-sans">Testimonials</h1>
            <h3 className="mb-10 text-xl text-center">Hear what our students, former students and industry professionals have to say</h3>
            <div className="flex justify-around items-center">
                <div className="bg-gray-200 p-10 w-[30%]">
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
                    +                </div>

                <div className="bg-gray-200 p-10 w-[30%]">
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
            </div>
        </div>
    )
};
export default Testimonials;