
import React from "react";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="bg-green-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 ">
        {/* Left Side: Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <i className="bx bx-phone-call text-xl mr-2"></i>
            <span>+92 321 811 9090</span>
          </div>
          <div className="flex items-center">
            <i className="bx bx-envelope text-xl mr-2"></i>
            <span>contact@onlineexpert.pk</span>
          </div>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4 text-2xl">
          <Link
            href="https://www.facebook.com/onlineexpert.globalservices"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link
            href="https://www.linkedin.com/company/online-expert-global/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <i className="bx bxl-linkedin"></i>
          </Link>
          <Link
            href="https://www.pinterest.com/onlineexpertglobal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <i className="bx bxl-pinterest"></i>
          </Link>
          <Link
            href="https://onlineexpertglobal.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <i className="bx bxl-blogger"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
