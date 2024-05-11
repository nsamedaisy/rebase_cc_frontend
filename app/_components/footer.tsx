import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div>
            <h1>Get in touch with us</h1>
            <div>
                <h2>Email</h2>
                <p>Send us an email and we'll get back to you.</p>
                <Link href='/'>rebaseacademy@gmail.com</Link>
            </div>

            <div>
                <h2>Phone</h2>
                <p>Give us a call and let's have a conversation.</p>
                <Link href='/'>+237 670 063 739</Link>
            </div>

            <div>
                <h2>Location</h2>
                <p>Give us a call and let's have a conversation.</p>
                <Link href='/'>Montee Jouvence - Yaounde</Link>
            </div>

            <div></div>
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
    );
};

export default Footer;