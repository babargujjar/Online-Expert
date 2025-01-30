"use client";
import React, { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FiHome, FiPlusCircle, FiCheckCircle } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import Link from "next/link";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure Sidebar renders only after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents server-side rendering

  return (
    <div className="h-screen">
      <ProSidebar
        collapsed={!isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="transition-all duration-300"
      >
        <div className="p-4 text-xl font-bold text-center">Admin Panel</div>
        <Menu iconShape="circle">
          <MenuItem icon={<FiHome />}>
            <Link href="/admin">Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<FiPlusCircle />}>
            <Link href="/admin/add-service">Add Service</Link>
          </MenuItem>
          <MenuItem icon={<FiCheckCircle />}>
            <Link href="/admin/add-completed-projects">Completed Projects</Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
