"use client";
import { BackgroundBeams } from "../components/ui/background-beams";
import { HoverEffect } from "../components/ui/card-hover-effect";
import AnimatedButton from "../components/AnimatedButton";
import { useEffect, useState } from "react";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % myProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const projects = [
    {
      title: "Web Development",
      img: "assets/web.svg",
      description:
        "Build a dynamic, responsive, and user-friendly website that drives traffic and generates leads for your business.",
    },
    {
      title: "SEO",
      img: "assets/SEO.svg",
      description:
        "Optimize your website to rank higher in search engines and attract more organic traffic, increasing your visibility and business growth.",
    },
    {
      title: "Digital Marketing",
      img: "assets/digital.svg",
      description:
        "Enhance your brands visibility and engagement across multiple online platforms with targeted strategies tailored to your business goals.",
    },
    {
      title: "Graphic Design",
      img: "assets/graphic.svg",
      description:
        "Our creative team delivers visually compelling designs that align with your brand and make a lasting impression.",
    },
  ];

  const myProjects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "An online store offering a wide range of products.",
      technologies: ["React", "Node.js", "MongoDB"],
      database: "MongoDB",
      uiux: "Responsive and user-friendly design",
      type: "Web",
      image: "/assets/developer.jpg",
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      description: "A mobile app to track fitness activities and goals.",
      technologies: ["React Native", "Firebase"],
      database: "Firebase",
      uiux: "Interactive and intuitive interface",
      type: "Mobile App",
      image: "/assets/about.jpg",
    },
  ];

  return (
    <div>
      <div className="bg-white pt-9 px-4">
        <div className="pt-10 max-w-6xl mx-auto">
          <h2 className="text-green-600 text-center text-[15px] sm:text-[18px] md:text-[20px] font-semibold">
            Empowering you to elevate your online presence and help you achieve
            sustainable growth.
          </h2>
          <HoverEffect items={projects} />
        </div>
      </div>
      <div className="bg-gray-100 pb-5 w-full">
        <div className="max-w-6xl mx-auto w-full p-2 shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="text-center mb-6">
              <h2 className="text-green-700 font-bold text-[25px] md:text-[45px]">
                About Us
              </h2>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between gap-2 items-start">
              <div className="w-full pt-5">
                <p className="text-gray-700 lg:w-3/4 leading-7 text-[16px]">
                  Welcome to{" "}
                  <span className="font-semibold text-green-700">
                    Online Expert Pvt Limited
                  </span>
                  , your trusted partner in digital marketing, dedicated to
                  driving your online success.
                </p>
              </div>
              <img
                className="w-full h-full rounded-md"
                src="assets/about.jpg"
                alt=""
              />
            </div>
            {/* Other sections */}
            {/* Mission & Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Mission Card */}
              <div className="bg-white cursor-pointer p-6 rounded-lg shadow-md">
                <h2 className="text-xl text-green-500 font-bold mb-3">
                  Our Mission
                </h2>
                <p className=" text-black leading-7">
                  Our mission is to elevate your online presence and help you
                  achieve sustainable growth.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white cursor-pointer p-6 rounded-lg shadow-md">
                <h2 className="text-xl text-green-500 font-bold mb-3">
                  Our Vision
                </h2>
                <p className=" text-black leading-7">
                  To shape a future where businesses leverage digital innovation
                  to unlock their full potential, creating sustainable growth
                  and meaningful connections worldwide.
                </p>
              </div>
            </div>

            {/* Services Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                Our Services
              </h2>
              <ul className="list-disc list-inside space-y-2 text-black">
                <li>Web Development</li>
                <li>SEO (Search Engine Optimization)</li>
                <li>Graphic Design</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white  pt-5 pb-10 px-5">
          <h2 className="text-green-500 font-bold mb-5 text-center text-[25px] md:text-[45px] mt-4">
            What We Have Done
          </h2>
          <div className="max-w-6xl mx-auto flex md:flex-row flex-col items-center justify-between overflow-hidden">
            {/* Left Content */}
            <div
              key={myProjects[currentIndex].id}
              className="w-full md:w-1/2 pb-3 md:pb-0 transition-all duration-1000 transform"
            >
              <h2 className="text-black font-bold text-2xl">
                {myProjects[currentIndex].title}
              </h2>
              <p className="text-black mt-4 leading-relaxed">
                {myProjects[currentIndex].description}
              </p>
              <div className="mt-4">
                <h4 className="text-green-400 font-semibold text-lg">
                  Technologies:
                </h4>
                <ul className="list-disc list-inside text-black text-sm">
                  {myProjects[currentIndex].technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <p className="text-black text-sm mt-4">
                <strong>Database:</strong> {myProjects[currentIndex].database}
              </p>
              <p className="text-black text-sm mt-2">
                <strong>UI/UX:</strong> {myProjects[currentIndex].uiux}
              </p>
              <p className="text-black text-sm mt-2">
                <strong>Type:</strong> {myProjects[currentIndex].type}
              </p>
            </div>

            {/* Right Image */}
            <div
              className="w-full md:w-1/2 transition-all duration-1000 transform"
              style={{ transform: "translateX(0)" }}
            >
              <img
                src={myProjects[currentIndex].image}
                alt={myProjects[currentIndex].title}
                className="w-full h-96 object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
