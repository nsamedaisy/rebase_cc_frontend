import Image from "next/image";
import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import kimi from '../../public/kimi.jpg';
import aris from '../../public/aris.jpg'


const MeetTeam: React.FC = () => {
    return (
        <div className="lg:mx-36 my-14">
            <h1 className="text-6xl mb-6 text-center font-sans">Meet the Team</h1>
            <h3 className="mb-16 w-[50%] mx-auto text-xl text-center">Get to know our team of dedicated staff, experienced instructors and industry professionals who have shared in our goals and vission</h3>
            <div className="flex justify-around items-center">

                <button
                    className=" left-7 transform -translate-y-1/2 px-5 py-5 bg-orange-500 font-bold rounded-full flex items-center justify-center"
                >
                    <GrPrevious className="text-white text-2xl" />
                </button>

                <div className="bg-gray-200 w-80 border-4 border-orange-500 items-center justify-center">
                    <div className="w-full mb-4 ">
                        <Image
                            src={aris}
                            alt='dp'
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h2 className="mb-2 font-semibold text-lg">Mr Ngoran Aristid</h2>
                        <i>Software Engineer, xyz company.</i>
                        <p className="w-full">He is the Chief support staff. she oversees the smooth running of all operations, projects and programs at Rebase Academy. </p>
                    </div>
                </div>

                <div className="bg-gray-200 w-80 border-4 border-orange-500">

                    <div className="w-full mb-4 ">
                        <Image
                            src={kimi}
                            alt='dp'
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h2 className="mb-2 font-semibold text-lg">Miss Kimmie Salah</h2>
                        <p>web Developer, abc company.</p>
                        <p className="w-full">she is the Chief support staff. she oversees the smooth running of all operations, projects and programs at Rebase Academy. </p>
                    </div>
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

export default MeetTeam;