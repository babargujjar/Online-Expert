"use client";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the JWT token cookie
    Cookies.remove("isLoggedIn", { path: "/" });

    router.push("/login");
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Online Expert Pvt.</div>
      <div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
