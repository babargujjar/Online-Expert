"use client"
import { BackgroundBeams } from "../components/ui/background-beams";
import { HoverEffect } from "../components/ui/card-hover-effect";
import AnimatedButton from "../components/AnimatedButton";
import { useState } from "react";

export default function Home() {
    const [isExpanded, setIsExpanded] = useState(false);
    

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
      const projects = [
        {
          title: "Web Development",
          description:
            "Build a dynamic, responsive, and user-friendly website that drives traffic and generates leads for your business.",
        },
        {
          title: "SEO",
          description:
            "Optimize your website to rank higher in search engines and attract more organic traffic, increasing your visibility and business growth.",
        },
        {
          title: "Digital Marketing",
          description:
            "Enhance your brands visibility and engagement across multiple online platforms with targeted strategies tailored to your business goals.",
        },
        {
          title: "Graphic Design",
          description:
            "Our creative team delivers visually compelling designs that align with your brand and make a lasting impression.",
        },
      ];
    
  return (
    <div>
      <div className="relative px-4 ">
        <BackgroundBeams
          beamColor="#00ff77"
          speed={0.02}
          size={1}
          className="max-h-screen -z-10 bg-[#0a0a0a]"
        />
        <div className="flex justify-center items-center py-16 sm:py-20 md:py-24 lg:py-28 pt-16 max-h-screen  max-w-6xl mx-auto text-white  text-5xl">
          <div className="text-center w-full">
            <h2 className="text-2xl md:text-4xl sm:text-3xl lg:text-5xl font-bold mb-8 tracking-tight sm:leading-snug">
              Empowering Your Business <br /> with Innovative Online Solutions
            </h2>
            <div className="leading-6 ">
              {!isExpanded ? (
                <div className="flex text-[13px] md:text-[16px] justify-center items-center">
                  <p>
                    Whether you're a startup or an established business, we are{" "}
                    <br /> here to help you achieve your business goals through{" "}
                    technology. <br /> Streamline processes, and enhance <br />{" "}
                    customer experience.
                    <button
                      onClick={handleToggle}
                      className="text-blue-500 underline"
                    >
                      See More
                    </button>
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-[13px] md:text-[16px]">
                    Whether you're a startup or an established business, we are
                    here to help you achieve your business goals through <br />
                    technology. Together, we build cutting-edge software
                    solutions that drive growth, streamline processes, and
                    enhance customer experience.
                    <button
                      onClick={handleToggle}
                      className="text-blue-500 underline mt-2"
                    >
                      See Less
                    </button>
                  </p>
                </>
              )}

              <div className="mt-8 text-[16px]">
                <AnimatedButton text="Let's Get started" href="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black px-4">
        <div className="pt-10 max-w-6xl mx-auto">
          <h2 className="text-[#7661f3] font-semibold text-center text-[14px] sm:text-[16px] md:text-[20px]">
            Empowering Your Business with Cutting-Edge IT Solutions
          </h2>
          <h2 className="text-white font-bold text-center text-[30px] md:text-[50px] mt-4">
            What We Offer
          </h2>
          <HoverEffect items={projects} />
        </div>
      </div>
      <div className="bg-black pb-5 w-full">
        <div className="max-w-6xl mx-auto w-full bg-[#0a0a0a]  p-2 shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center">
              <h2 className="text-[#7661f3] font-semibold text-[14px] sm:text-[16px] md:text-[20px]">
                Get to Know Us
              </h2>
              <h2 className="text-white font-bold text-[30px] md:text-[50px] mt-4">
                About Us
              </h2>
            </div>
            <div className="w-full flex flex-col md:flex-row mt-5 justify-between  gap-2 items-center">
              <div className="w-full">
                <p className="text-white lg:w-3/4 leading-7 text-md">
                  Welcome to{" "}
                  <span className="font-semibold">
                    Online Expert Pvt Limited
                  </span>
                  , your trusted partner in digital marketing, dedicated to
                  driving your online success. We provide a comprehensive range
                  of services designed to enhance your digital presence,
                  increase engagement, and deliver impactful results.
                </p>
              </div>
              <img
                className="w-full mt-4 h-full rounded-md"
                src="assets/about.jpg"
                alt=""
              />
            </div>

            {/* Mission & Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Mission Card */}
              <div className="bg-black cursor-pointer p-6 rounded-lg shadow-md">
                <h2 className="text-xl text-white font-bold mb-3">
                  Our Mission
                </h2>
                <p className=" text-zinc-400 leading-7">
                  Our mission is to elevate your online presence and help you
                  achieve sustainable growth.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-black cursor-pointer p-6 rounded-lg shadow-md">
                <h2 className="text-xl text-white font-bold mb-3">
                  Our Vision
                </h2>
                <p className=" text-zinc-400 leading-7">
                  To shape a future where businesses leverage digital innovation
                  to unlock their full potential, creating sustainable growth
                  and meaningful connections worldwide.
                </p>
              </div>
            </div>

            {/* Services Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Services
              </h2>
              <ul className="list-disc list-inside space-y-2 text-zinc-400">
                <li>Web Development</li>
                <li>SEO (Search Engine Optimization)</li>
                <li>Graphic Design</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

