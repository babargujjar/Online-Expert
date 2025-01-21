import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react'

const page = () => {

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

  return (
    <div className="bg-white pt-8 px-4"
    >
      <div className="pt-10 max-w-6xl mx-auto">
        <h2 className="text-green-600 mt-3 font-semibold text-center text-[14px] sm:text-[16px] md:text-[20px]">
          Empowering you to elevate your online presence and help you achieve
          sustainable growth.
        </h2>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export default page