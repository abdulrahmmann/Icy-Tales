import {HeroLeftImage} from "../constants/images.ts";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className={`w-full bg-clr-purple relative overflow-hidden`}>
            <img src={HeroLeftImage} alt={"HeroLeftImage"} className={`absolute left-0 bottom-0 h-[300px]`}/>
            <div className={`container mx-auto pt-16 pb-2 relative`}>
                <div className={`grid grid-cols-12`}>
                    <div className={`col-span-12 sm:col-span-6 md:col-span-4`}>
                        <div className="flex flex-row items-center gap-0">
                            <img src="/src/assets/images/home/logo.svg" alt="logo" className="h-[70px]"/>
                            <p className={`-ml-2.5`}>
                                <span className="text-2xl font-berkshire font-normal text-clr-pink">Icy </span>
                                <span className="text-2xl font-berkshire font-normal text-white">Tales</span>
                            </p>
                        </div>
                    </div>
                    <div className={`col-span-12 sm:col-span-6 md:col-span-4`}>
                        <div className={`flex flex-col items-start gap-y-5`}>
                            <div className={`flex items-center gap-x-3 text-sm text-[#CFB6E2]`}>
                                <div className={`size-10 flex items-center justify-center rounded-full bg-white/10`}>
                                    <HiOutlineMail className={`size-4 text-white`}/>
                                </div>
                                121 King Street Melbourne, 3000, Australia
                            </div>
                            <div className={`flex items-center gap-x-3 text-sm text-[#CFB6E2]`}>
                                <div className={`size-10 flex items-center justify-center rounded-full bg-white/10`}>
                                    <FaLocationDot className={`size-4 text-white`}/>
                                </div>
                                info@example.com
                            </div>
                            <div className={`flex items-center gap-x-3 text-sm text-[#CFB6E2]`}>
                                <div className={`size-10 flex items-center justify-center rounded-full bg-white/10`}>
                                    <FaPhone className={`size-4 text-white`}/>
                                </div>
                                +123456780123
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-12 sm:col-span-6 md:col-span-4`}>
                        <div className={`flex items-center gap-3`}>
                            <div className="size-10 flex items-center justify-center rounded-full bg-white/10">
                                <FaFacebookF className={`size-4 text-white`}/>
                            </div>
                            <div className="size-10 flex items-center justify-center rounded-full bg-white/10">
                                <FaInstagram className={`size-4 text-white`}/>
                            </div>
                            <div className="size-10 flex items-center justify-center rounded-full bg-white/10">
                                <FaWhatsapp className={`size-4 text-white`}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`pt-16`}>
                    <p className={`py-5 border-t-2 border-white/15 text-center text-sm text-[#CFB6E2] `}>
                        Copyright © 2024 BlackRise Themes Inc All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;