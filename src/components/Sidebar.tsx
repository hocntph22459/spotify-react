import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <section
            className={`self-stretch flex flex-col pt-0 px-0 pb-[30px] items-start justify-start text-gray-500 ${isDarkMode ? "bg-gray-900" : "bg-black"
                }`}
        >
            <div className="flex flex-col pt-5 pb-[30px] pr-[100px] pl-5 items-start justify-start">
                <img
                    className="relative w-[119px] h-[35px]"
                    alt=""
                    src="/vector.svg"
                />
                <button
                    className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleDarkMode}
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
            <div className="self-stretch flex flex-col py-0 px-5 items-start justify-start gap-[15px]">
                <li className="flex flex-row items-center justify-start gap-15">
                    <Link to="/" className="text-white">home</Link>
                </li>
                <li className="flex flex-row items-center justify-start gap-15">
                    <Link to="/spotify" className="text-white">Your Library</Link>
                </li>
                <li className="flex flex-row items-center justify-start gap-15 no-underline">
                    <Link to="/signin" className="text-white">signin</Link>
                </li>
                <li className="flex flex-row items-center justify-start gap-15 no-underline">
                    <Link to="/signup" className="text-white">signup</Link>
                </li>
                <div className="flex flex-row items-center justify-start gap-[15px]">
                    <img
                        className="relative w-[18px] h-[18px]"
                        alt=""
                        src="/iconcreate.svg"
                    />
                    <p className="relative">Create Playlist</p>
                </div>
                <div className="flex flex-row items-center justify-start gap-[15px]">
                    <img
                        className="relative w-[18px] h-[18px]"
                        alt=""
                        src="/iconliked.svg"
                    />
                    <b className="relative">Liked Songs</b>
                </div>
            </div>
            <div className="flex-1 flex flex-col py-0 pr-[30px] pl-5 items-start justify-end text-4xs text-gray-100">
                <div className="flex flex-col items-start justify-start gap-[30px]">
                    <div className="flex flex-col items-start justify-start gap-[6px]">
                        <div className="flex flex-row items-start justify-start gap-[14px]">
                            <b className="relative leading-[21px] text-[15px]">Legal</b>
                            <b className="relative leading-[21px] text-[15px]">Privacy Center</b>
                            <b className="relative leading-[21px] text-[15px]">Privacy Policy</b>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[14px]">
                            <b className="relative leading-[21px] text-[15px]">Cookies</b>
                            <b className="relative leading-[21px] text-[15px]">About</b>
                            <b className="relative leading-[21px] text-[15px]">Ads</b>
                        </div>
                    </div>
                    <div className="rounded-80xl flex flex-col py-[5px] px-[13px] items-start justify-start text-xs text-white border-[1px] border-solid border-darkgray-100">
                        <div className="flex flex-row items-center justify-start gap-[3px]">
                            <img
                                className="relative w-[13px] h-[13px]"
                                alt=""
                                src="/vector1.svg"
                            />
                            <b className="relative flex items-center w-[42px] h-[17px] shrink-0">
                                English
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sidebar