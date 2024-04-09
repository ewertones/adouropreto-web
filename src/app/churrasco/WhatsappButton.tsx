"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsappButton = () => {
    const router = useRouter();

    const handleClick = async () => {
        // Check if WhatApp installed, if yes open whatsapp else open whatsapp web

        if (navigator.userAgent.includes("WhatsApp")) {
            // WhatsApp is installed
            window.open(`whatsapp://send?phone=31998546167`);
        } else {
            // WhatsApp is not installed, open WhatsApp Web
            window.open("https://web.whatsapp.com/send?phone=31998546167", "_blank");
        }
    };

    return (
        <>
            <div
                className="bg-green-600 w-min m-5 p-2 rounded-full cursor-pointer left-1/2 transform -translate-x-1/2 fixed"
                onClick={handleClick}
            >
                <FaWhatsapp color="white" className="w-10 h-10" />
            </div>
        </>
    );
};

export default WhatsappButton;
