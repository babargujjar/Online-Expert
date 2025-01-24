
import React from "react";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="bg-green-600 text-white sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 ">
        {/* Left Side: Contact Info */}
        <div className="flex items-center gap-0 md:gap-7 w-full space-x-2 sm:space-x-4">
          <div className="flex items-center">
            <i className="bx bx-phone-call text-sm sm:text-lg md:text-xl mr-[3px] sm:mr-2"></i>
            <span className="text-sm sm:text-lg md:text-xl">
              +92 321 811 9090
            </span>
          </div>
          <div className="flex items-center">
            <i className="bx bx-envelope text-md md:text-lg sm:text-xl mr-[3px] sm:mr-2"></i>
            <span className="text-sm sm:text-lg md:text-xl">
              contact@onlineexpert.pk
            </span>
          </div>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center space-x-2 text-2xl">
          <Link
            href="https://www.facebook.com/onlineexpert.globalservices"
            target="_blank"
            rel="noopener noreferrer"
            className=" w-4 h-4 md:w-6 md:h-6"
          >
            <img
              className="w-full h-full"
              src="assets/facebook.webp"
              alt="Facebook"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/online-expert-global/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className=" w-4 h-4 md:w-6 md:h-6"
          >
            <img
              className="w-full h-full"
              src="assets/linkedin.webp"
              alt="LinkedIn"
            />
          </Link>
          <Link
            href="https://www.pinterest.com/onlineexpertglobal/"
            target="_blank"
            rel="noopener noreferrer"
            className=" w-4 h-4 md:w-6 md:h-6"
          >
            <img
              className="w-full h-full"
              src="assets/pinterest.png"
              alt="Pinterest"
            />
          </Link>
          <Link
            href="https://onlineexpertglobal.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" w-4 h-4 md:w-6 md:h-6"
          >
            <img
              className="w-full h-full"
              src="assets/blogger.png"
              alt="Blogger"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
