import React from "react";

const AnimatedButton = ({ text = "Reach Us", href = "/contact" }) => {
  return (
    <a
      href={href}
      className="relative inline-block px-6 py-3 font-bold text-white rounded-lg group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg blur-sm group-hover:blur-md"></span>
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg group-hover:scale-110"></span>
      <span className="relative z-10">{text}</span>
    </a>
  );
};

export default AnimatedButton;
