"use client";
import React, { useState, useEffect } from "react";
import { Plus, MoreVertical, X } from "lucide-react";
import supabase from "@/config/supabaseClient";
import Sidebar from "../SideBar";
import Navbar from "../Navbar";

const page = () => {
  
  const [services, setServices] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    img: null,
    description: "",
  });
  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

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

  const handleInputChange = (e) => {
    if (e.target.name === "img") {
      setFormData((prev) => ({ ...prev, img: e.target.files }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.title || !formData.img || !formData.description) {
    alert("All fields are required!");
    return;
  }

  let uploadedUrls = [];
  for (let i = 0; i < formData.img.length; i++) {
    const imageFile = formData.img[i];
    const fileName = `${Date.now()}-${imageFile.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("services-images")
      .upload(fileName, imageFile);
    if (uploadError) {
      console.error("Upload error:", uploadError);
      return;
    }
    const { data: publicData } = supabase.storage
      .from("services-images")
      .getPublicUrl(fileName);
    uploadedUrls.push(publicData.publicUrl);
  }

  const payload = {
    title: formData.title,
    img: uploadedUrls.join(","),
    description: formData.description,
  };

  let response;
  if (editingService) {
    response = await supabase
      .from("services")
      .update(payload)
      .match({ id: editingService.id });
  } else {
    response = await supabase.from("services").insert([payload]);
  }

  if (response.error) {
    console.error("Error saving service:", response.error);
  } else {
    setPopupOpen(false);
    setEditingService(null);
    fetchServices();
  }
};
  const handleAddService = () => {
    setFormData({
      title: "",
      img: null,
      description: "",
    });
    setPopupOpen(true);
  };
  const handleEdit = (service) => {
    setEditingService(service);
    setFormData(service);
    setPopupOpen(true);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("services").delete().match({ id });
    if (error) console.error("Error deleting service:", error);
    else fetchServices();
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Services</h2>
            <button
              className="flex gap-1 border px-2 py-1 text-white bg-blue-600 rounded-md"
              onClick={handleAddService}
            >
              <Plus className="w-5 h-5" /> Add Service
            </button>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-5 border"
                >
                  {/* Service Image */}
                  {service.img && (
                    <img
                      src={service.img.split(",")[0]}
                      alt={service.title}
                      className="w-11 h-11 object-cover rounded-md mb-2"
                    />
                  )}

                  {/* Service Info */}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {service.description}
                  </p>
                  <div className="absolute top-2 right-2">
                    <MoreVertical
                      className="cursor-pointer"
                      onClick={() => toggleDropdown(service.id)}
                    />
                    {openDropdownId === service.id && (
                      <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-50">
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                          onClick={() => {
                            handleEdit(service);
                            setOpenDropdownId(null);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600"
                          onClick={() => {
                            handleDelete(service);
                            setOpenDropdownId(null);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {popupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded shadow-lg w-1/3 relative">
                <button
                  onClick={() => {
                    setFormData({
                      title: "",
                      img: null,
                      description: "",
                    });
                    setPopupOpen(false);
                    setEditingService(null)
                  }}
                  className="absolute top-2 right-2"
                >
                  <X />
                </button>
                <h2 className="text-xl font-bold mb-4">
                  {editingService ? "Edit Service" : "Add Service"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                  <input
                    type="file"
                    name="img"
                    accept="image/*"
                    multiple
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  ></textarea>
                  <button type="submit" className="w-full">
                    {editingService ? "Update Service" : "Add Service"}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
