import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react'

const page = () => {

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
     <div className="bg-[#0a0a0a] pt-8 px-4">
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
  )
}

export default page