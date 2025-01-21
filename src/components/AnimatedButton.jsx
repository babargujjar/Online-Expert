import React from "react";

const AnimatedButton = ({
  text = "Reach Us",
  href = "/contact",
  isScrolled,
}) => {
  return (
    <a
      href={href}
      className={`relative inline-block px-6 py-3 ${
        isScrolled ? "text-green-600 bg-white" : "text-white bg-green-600"
      }  rounded-lg group`}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform  rounded-lg blur-sm group-hover:blur-md"></span>
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform  rounded-lg group-hover:scale-110"></span>
      <span className="relative z-10">{text}</span>
    </a>
  );
};

export default AnimatedButton;
