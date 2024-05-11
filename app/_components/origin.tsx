import Image from "next/image";
import React from "react";
import hero from '../../public/hero.jpg'

const OriginSec: React.FC = () => {
    return (
        <div className="flex justify-around lg:mx-20 items-center mb-20">
            <div className=" w-[48%] h-1/2">
                <Image
                    src={hero}
                    alt="sectionimage"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-[40%]">
                <h1 className="text-6xl font-serif mb-10">Origin and Mission</h1>
                <p className="w-[70%]">Rebase Code Camp was founded in response to the growing demand for digital skills and the need to bridge the gap between traditional education and industry requirements. With a team of experienced instructors and industry professionals, we are dedicated to empowering individuals to thrive in the digital economy.</p>
            </div>

        </div>
    )
};
export default OriginSec;