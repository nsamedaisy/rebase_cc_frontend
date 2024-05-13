import Image from "next/image";
import apply from '../../public/apply.jpg'
import React from "react";
// import Button from "./Button";

const ApplyNow: React.FC = () => {

    return (
        <div className="h-screen relative">
            <div className="w-full  h-3/6">
                <Image
                    src={apply}
                    alt="sectionimage"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 top-64 text-white px-6 lg:mx-20">
                <h1 className="text-7xl font-mono w-3/5">Apply Now</h1>
                <h2 className="text-2xl mt-4 w-1/2">Join us for an opportunity of a lifetime!</h2>
            </div>

            <div>
                <form className="mx-auto container flex flex-col my-20 space-y-3">
                    <label className="text-xl font-semibold">
                        Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input className=" bg-gray-200 py-4" type="text" name="fullName" />
                    {/* all div  */}
                    <div className="flex justify-between py-8">
                        {/* div 1  */}
                        <div className="flex flex-col space-y-5 w-[45%] bg-red-500">
                            <label className="text-xl font-semibold">
                                Phone Number <span className="text-orange-500">*</span>
                            </label>
                            <input className=" bg-gray-200 py-4  mb-6" type="tel" name="number" />

                            <p className="text-xl font-semibold">Gender <span className="text-orange-500">*</span></p>
                            <div className="flex flex-col space-y-3 mt-6 bg-gray-200 p-4 ">
                                <label>
                                    <input className=" bg-gray-200 py-4" type="radio" name="gender" /> Male
                                </label>
                                <label>
                                    <input className=" bg-gray-200 py-4" type="radio" name="gender" /> Female
                                </label>
                                <label>
                                    <input className=" bg-gray-200 py-4" type="radio" name="gender" /> Other
                                </label>
                            </div>
                            <label className="text-xl font-semibold">
                                Highest Academic Qualification <span className="text-orange-500">*</span>
                            </label>
                            <input className=" bg-gray-200 py-4" type="text" name="schoolQualification" />


                            <p className="text-xl font-semibold">
                                Program of Interest <span className="text-orange-500">*</span>
                            </p>
                            <div className="flex flex-col space-y-3 mt-6 bg-gray-200 p-4 ">
                                <label>
                                    <input className=" bg-gray-200 py-4" type="radio" name="programOfInterest" value="Web Development" /> Full Stack Web Development
                                </label>
                                <label>
                                    <input className=" bg-gray-200 py-4" type="radio" name="programOfInterest" value="Data Science" />  UI/UX Design
                                </label>
                                <label>
                                    <input className=" bg-gray-200 py-4" type="radio" name="programOfInterest" value="UI/UX Design" /> Other
                                </label>
                            </div>
                        </div>

                        {/* div 2  */}
                        <div className="flex-col flex space-y-5 bg-green-500 w-[45%]">
                            <label className="text-xl font-semibold">
                                Email <span className="text-orange-500">*</span>
                            </label>
                            <input className=" bg-gray-200 py-4" type="email" name="email" />

                            <label className="text-xl font-semibold">
                                Age <span className="text-orange-500">*</span>
                            </label>
                            <input className=" bg-gray-200 py-4" type="number" name="age" />


                            <label className="text-xl font-semibold pt-14">
                                Place of Residence <span className="text-orange-500">*</span>
                            </label>
                            <input className=" bg-gray-200 py-4" type="text" name="residence" />

                            <label className="text-xl font-semibold pt-4">
                                If Other, specify
                            </label>
                            <input className=" bg-gray-200 py-4" type="text" name="other" />
                        </div>
                    </div>

                    <label className="text-xl font-semibold">
                        What do you intend to gain from Rebase Code Camp? <span className="text-orange-500">*</span>
                    </label>
                    <textarea name="intentionsBefore" className=" bg-gray-200 py-10" />

                    <label className="text-xl font-semibold pt-4">
                        What do you intend to do after your time at Rebase Code Camp?
                    </label>
                    <textarea name="intentionsAfter" className=" bg-gray-200 py-10" />

                    <label className="text-xl font-semibold pt-4">
                        Full Name of Guardian <span className="text-orange-500">*</span>
                    </label>
                    <input className=" bg-gray-200 py-4" type="text" name="guardianName" />


                    {/* all div  */}
                    <div className="flex justify-between py-8">
                        {/* div 3  */}
                        <div className="flex-col flex space-y-5 bg-green-500 w-[45%]">
                            <p className="text-xl font-semibold">
                                Relationship wit Guardian <span className="text-orange-500">*</span>
                            </p>
                            <div className="flex flex-col space-y-3 mt-6 bg-gray-200 p-4 ">
                                <label>
                                    <input className=" bg-gray-200 py-4" type="radio" name="gender" /> Mother
                                </label>
                                <label>
                                    <input className=" bg-gray-200 py-4" type="radio" name="gender" /> Father
                                </label>
                                <label>
                                    <input className=" bg-gray-200 py-4" type="radio" name="gender" /> Other
                                </label>
                            </div>


                            <label className="text-xl font-semibold">
                                Guardian's Phone Number <span className="text-orange-500">*</span>
                            </label>
                            <input className=" bg-gray-200 py-4" type="tel" name="guardianNumber" />
                        </div>
                        {/* div 4  */}
                        <div className="flex flex-col space-y-5 w-[45%] bg-red-500">
                            <label className="text-xl font-semibold">
                                If Other, specify <span className="text-orange-500">*</span>
                            </label>
                            <input className=" bg-gray-200 py-4" type="text" name="other" />

                            <label className="text-xl font-semibold pt-16">
                                Email of Guardian <span className="text-orange-500">*</span>
                            </label>
                            <input className=" bg-gray-200 py-4" type="email" name="guardianEmail" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
};

export default ApplyNow;