"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="theme-zinc bg-green-700 rounded-md w-full">
      <div className="preview bg-green-700 flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
        <div className="border-white/[0.1] border-t bg-green-700 shadow-lg px-8 py-20 w-full relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-sm text-white flex sm:flex-row flex-col justify-between items-start md:px-8">
            <div>
              <div className="mr-0 md:mr-4 md:flex mb-4">
                <a
                  className="font-normal flex space-x-2 items-center text-sm mr-4 px-2 py-1 relative z-20"
                  href="/"
                >
                  <span className="font-medium text-white">
                    Online Expert LTD.
                  </span>
                </a>
              </div>
              <div className="mt-2 ml-2 text-white">
                © copyright Online Expert Private LTD. 2024. All rights
                reserved.
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 text-white gap-10 items-start mt-10 sm:mt-0 md:mt-0">
              <div className="flex justify-center space-y-4 flex-col">
                <p className="transition-colors cursor-pointer hover:text-green-300 font-semibold">
                  Socials
                </p>
                <ul className="list-none space-y-4">
                  <li>
                    <Link
                      className="transition-colors hover:text-green-300"
                      href="/contact"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="transition-colors hover:text-green-300"
                      href="/contact"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="transition-colors hover:text-green-300"
                      href="/contact"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="transition-colors hover:text-green-300"
                      href="/services"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center space-y-4 flex-col">
                <p className="transition-colors cursor-pointer hover:text-green-300 font-semibold">
                  Legal
                </p>
                <ul className="list-none space-y-4">
                  <li>
                    <a
                      className="transition-colors hover:text-green-300"
                      href="/products"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-green-300"
                      href="/products"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-green-300"
                      href="/products"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="flex justify-center space-y-4 flex-col">
                <p className="transition-colors cursor-pointer hover:text-green-300 font-semibold">
                  Register
                </p>
                <ul className="list-none space-y-4">
                  <li>
                    <a
                      className="transition-colors hover:text-green-300"
                      href="/products"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-green-300"
                      href="/products"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-green-300"
                      href="/products"
                    >
                      Forgot Password
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
