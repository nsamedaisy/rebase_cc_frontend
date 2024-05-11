import Image from "next/image";
import React from "react";
import dp from '../../public/keybrd.jpg'

const Testimonials: React.FC = () => {
    return (
        <div>
            <h1 className="text-6xl mb-6 font-serif lg:mx-20">Testimonials</h1>
            <h3 className="mb-10">Hear what our students, former students and industry professionals have to say</h3>
            <div className="flex justify-between items-center">
                <div className="bg-gray-200 p-6">
                    <h2>Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market.</h2>
                    <div className="border rounded-t-full border-gray-200">
                        <Image
                            src={dp}
                            alt='dp'
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2>John Doe</h2>
                    <p>Software Engineer, xyz company.</p>

                </div>
                <div className="bg-gray-200 p-6">
                    <h2>Rebase Academy has truly transformed my career. The hands-on learning experience and industry-relevant curriculum prepared me for success in the tech job market.</h2>
                    <div>
                        <Image
                            src={dp}
                            alt='dp'
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h2>John Marry</h2>
                    <p>web Developer, abc company.</p>
                </div>
            </div>
        </div>
    )
};
export default Testimonials;