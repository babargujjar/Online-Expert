"use client"
import { HoverEffect } from '@/components/ui/card-hover-effect';
import supabase from "@/config/supabaseClient";
import React, { useEffect, useState } from 'react'

const page = () => {
  const [services, setServices] = useState([]);
  const [loading,setLoading] = useState(false)

    useEffect(() => {
      fetchServices();
    }, []);

    const fetchServices = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("services").select("*");
      if (error) console.error("Error fetching services:", error);
      else setServices(data);
      setLoading(false);
    };


  return (
    <div className="bg-white pt-8 px-4"
    >
      <div className="pt-9 max-w-6xl mx-auto">
        <h2 className="text-green-600 mt-1 font-semibold text-center text-[14px] sm:text-[16px] md:text-[20px]">
          Empowering you to elevate your online presence and help you achieve
          sustainable growth.
        </h2>
        <HoverEffect items={services} />
      </div>
    </div>
  );
}

export default page