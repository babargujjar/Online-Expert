"use client";
import React from "react";
import Link from "next/link";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    <div className=" bg-green-700 w-full">
      <div className=" bg-green-700 flex w-full justify-between max-w-7xl mx-auto py-1 items-center">
        <div className="flex gap-5 items-center justify-start">
          
          <div className=" text-white">
            © copyright Online Expert Private Limited.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
