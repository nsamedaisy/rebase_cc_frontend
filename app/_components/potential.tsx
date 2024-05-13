import Image from "next/image";
import React from "react";
import keyboard from '../../public/keybrd.jpg';
import Button from "./button";
import Link from "next/link";

const Potentialsection: React.FC = () => {
    return (
        <div className="relative">
            <Image
                src={keyboard}
                alt="sectionimage"
                className="w-full h-96 object-cover"
            />

            <div className="absolute inset-0 bg-purple opacity-60"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold mb-6">Unlock Your Potential with Rebase Code Camp</h2>
                <h3 className="mb-14">Join our innovative programs and gain the skills to thrive in the digital age.</h3>

                <div className="space-x-10">
                    <Link href="/dashboard" className="py-4 bg-orange-500">
                        <Button className='font-bold' type='button'>Apply Now</Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button className='bg-transparent border-2 border-white font-bold' type='button'>Learn More</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Potentialsection;
