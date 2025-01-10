import React from "react";

const page = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col items-center py-10 mt-8 px-5">
      <div className="max-w-6xl w-full bg-black  p-2 shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative">
          <img
            src="assets/developer.jpg" // Replace with actual image URL
            alt="About Us Header"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a] bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">About Us</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <p className="text-white leading-7 text-lg">
            Welcome to{" "}
            <span className="font-semibold">Online Expert Pvt Limited</span>,
            your trusted partner in digital marketing, dedicated to driving your
            online success. We provide a comprehensive range of services
            designed to enhance your digital presence, increase engagement, and
            deliver impactful results.
          </p>
          <p className="mt-4 text-white leading-7 text-lg">
            Whether you’re a startup or an established business, our customized
            solutions are tailored to meet your unique objectives. Backed by a
            team of creative minds, data-driven strategies, and cutting-edge
            tools, we ensure measurable success across all digital platforms.
            Let us guide you through the evolving digital landscape and help you
            achieve your business goals.
          </p>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Mission Card */}
            <div className="bg-[#0a0a0a] cursor-pointer p-6 rounded-lg shadow-md">
              <h2 className="text-xl text-white font-bold mb-3">Our Mission</h2>
              <p className=" text-zinc-400 leading-7">
                Our mission is to elevate your online presence and help you
                achieve sustainable growth.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[#0a0a0a] cursor-pointer p-6 rounded-lg shadow-md">
              <h2 className="text-xl text-white font-bold mb-3">Our Vision</h2>
              <p className=" text-zinc-400 leading-7">
                To shape a future where businesses leverage digital innovation
                to unlock their full potential, creating sustainable growth and
                meaningful connections worldwide.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
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
  );
};

export default page;
