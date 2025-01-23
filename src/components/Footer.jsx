"use client";
import React from "react";
import Link from "next/link";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    <div className=" bg-green-700 w-full">
      <div className=" bg-green-700 flex w-full justify-between max-w-7xl mx-auto py-3 items-center">
        <div className="flex flex-col items-start">
          <Link
            className="font-normal flex space-x-2 items-center text-sm mr-4 px-2 py-1 relative z-20"
            href="/"
          >
            <span className="font-medium text-white">Online Expert Pvt.</span>
          </Link>
          <div className=" text-white">
            © copyright Online Expert Private Pvt. 2024. All rights reserved.
          </div>
        </div>
        <div className="flex text-white space-x-4 text-2xl">
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

export default Footer;
