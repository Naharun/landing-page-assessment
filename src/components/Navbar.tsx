"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./ui/button";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "courses",
        },
        {
            id: 4,
            link: "shop",
        },
        {
            id: 5,
            link: "events",
        },
        {
            id: 6,
            link: "contact",
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-blue-950 fixed nav">
            <div className="bg-white ml-2 lg:ml-24 text-blue-950  mt-4 px-5 pt-2 rounded-md divide-y-4 divide-indigo-950">
                <h1>ASSESSMENT</h1>
                <p>Learn it, do it</p>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-yellow-700 duration-200 link-underline"
                    >
                        <Link href={link}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            <div className="flex mt-4 mr-40 gap-3">
                <Button variant="outline" className="rounded-full">sea</Button>
                <div>
                    <Button variant="outline" className=" bg-blue-950  rounded-full w-28 text-white">Login</Button>
                    <Button variant="destructive" className="-ml-8 rounded-full">Register</Button>
                </div>
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-36  bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-2xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;