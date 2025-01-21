import React from "react";

const page = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-16 px-5">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-3xl text-green-600 mb-2">About Us</h2>
          <p className="text-black leading-7 text-lg">
            Welcome to{" "}
            <span className="font-semibold">Online Expert Pvt Limited</span>,
            your trusted partner in digital marketing, dedicated to driving your
            online success. We provide a comprehensive range of services
            designed to enhance your digital presence, increase engagement, and
            deliver impactful results.
          </p>
          <p className="mt-2 text-black leading-7 text-lg">
            Whether you’re a startup or an established business, our customized
            solutions are tailored to meet your unique objectives. Backed by a
            team of creative minds, data-driven strategies, and cutting-edge
            tools, we ensure measurable success across all digital platforms.
          </p>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Mission Card */}
            <div className="bg-gray-100 cursor-pointer p-5 rounded-lg shadow-md">
              <h2 className="text-xl text-green-500 font-bold mb-3">Our Mission</h2>
              <p className=" text-black leading-7">
                Our mission is to elevate your online presence and help you
                achieve sustainable growth.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gray-100 cursor-pointer p-5 rounded-lg shadow-md">
              <h2 className="text-xl text-green-500 font-bold mb-3">Our Vision</h2>
              <p className=" text-black leading-7">
                To shape a future where businesses leverage digital innovation
                to unlock their full potential, creating sustainable growth and
                meaningful connections worldwide.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-2 w-full">
            <h2 className="text-2xl font-bold text-green-500 mb-2">Our Services</h2>
            <ul className="list-disc list-inside space-y-1 text-black">
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
