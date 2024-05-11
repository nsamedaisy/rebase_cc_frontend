import Link from 'next/link';
import React from 'react';
import { HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";
import { IoLocationSharp } from 'react-icons/io5';
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <div className='p-10 lg:mx-20'>
            <h1 className='text-2xl pb-6'>Get in touch with us</h1>

            <div className='flex w-full justify-between'>
                <div className='space-y-4'>
                    <HiOutlineMailOpen />
                    <h2 className='font-bold'>Email</h2>
                    <p className='text-sm'>Send us an email and we'll get back to you.</p>
                    <Link href='/' className='text-sm underline'>rebaseacademy@gmail.com</Link>
                </div>

                <div className='space-y-4'>
                    <HiOutlinePhone />
                    <h2 className='font-bold'>Phone</h2>
                    <p className='text-sm'>Give us a call and let's have a conversation.</p>
                    <Link href='/' className='text-sm underline'>+237 670 063 739</Link>
                </div>

                <div className='space-y-4'>
                    <IoLocationSharp />
                    <h2 className='font-bold'>Location</h2>
                    <p className='text-sm'>Give us a call and let's have a conversation.</p>
                    <Link href='/' className='text-sm underline'>Montee Jouvence - Yaounde</Link>
                </div>
            </div>

            <div>
                <div>
                    <GrInstagram />
                    <FaTwitter />
                    <FaFacebookF />
                    <FaLinkedin />
                    <FaTiktok />
                </div>
                <div className="text-base lg:flex mr-32 space-x-10">
                    <Link href="/about-us" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        About Us
                    </Link>
                    <Link href="/programs" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Programs
                    </Link>
                    <Link href="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Blog
                    </Link>
                    <Link href="/contact-us" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;