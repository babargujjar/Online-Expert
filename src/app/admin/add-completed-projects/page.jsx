"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar";
import Navbar from "../Navbar";
import supabase from "@/config/supabaseClient";
import { X, Upload, MoreVertical } from "lucide-react";

const Page = () => {
  const [projects, setProjects] = useState([]);
    const [openDropdownId, setOpenDropdownId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: [""],
    database: "",
    uiux: "",
    type: "",
    image: null,
  });
  const [editingProject, setEditingProject] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  console.log("projects", projects);

    const toggleDropdown = (id) => {
      setOpenDropdownId(openDropdownId === id ? null : id);
    };


  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) console.error("Error fetching projects:", error);
    else setProjects(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("All fields are required!");
      return;
    }

    let uploadedUrl = "";
    if (formData.image) {
      const fileName = `${Date.now()}-${formData.image.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("projects-images")
        .upload(fileName, formData.image);
      if (uploadError) {
        console.error("Upload error:", uploadError);
        return;
      }
      const { data: publicData } = supabase.storage
        .from("projects-images")
        .getPublicUrl(fileName);
      uploadedUrl = publicData.publicUrl;
    }

    const payload = { ...formData, image: uploadedUrl || null };
    console.log("payload", payload);

    let response;
    if (editingProject) {
      response = await supabase
        .from("projects")
        .update(payload)
        .match({ id: editingProject.id });
    } else {
      response = await supabase.from("projects").insert([payload]);
    }

    if (response.error) {
      console.error("Error saving project:", response.error);
    } else {
      setFormData({
        title: "",
        description: "",
        technologies: [""],
        database: "",
        uiux: "",
        type: "",
        image: null,
      });
      setPopupOpen(false);
      setEditingProject(null);
      fetchProjects();
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (!confirmDelete) return;

    const { error } = await supabase.from("projects").delete().match({ id });
    if (error) {
      console.error("Error deleting project:", error);
    } else {
      fetchProjects();
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title || "",
      description: project.description || "",
      technologies: project.technologies || [""],
      database: project.database || "",
      uiux: project.uiux || "",
      type: project.type || "",
      image: project.image || null, 
    });
    setPopupOpen(true);
  };

  const closePopup = () => {
    setEditingProject(null);
    setFormData({
      title: "",
      description: "",
      technologies: [""],
      database: "",
      uiux: "",
      type: "",
      image: null,
    });
    setPopupOpen(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Completed Projects</h2>
            <button
              onClick={() => setPopupOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
              + Add Project
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="border p-4 rounded shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded"
                />
                <div className="flex justify-between mt-2 relative items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="absolute top-0 right-0">
                    <MoreVertical
                      className="cursor-pointer"
                      onClick={() => toggleDropdown(project.id)}
                    />
                    {openDropdownId === project.id && (
                      <div className="absolute right-0 w-32 bg-white border rounded-lg shadow-lg z-50">
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                          onClick={() => {
                            handleEdit(project);
                            setOpenDropdownId(null);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600"
                          onClick={() => {
                            handleDelete(project.id);
                            setOpenDropdownId(null);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {popupOpen && (
            <div
              onClick={closePopup}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto relative overflow-y-auto max-h-[80vh] py-5">
                <button className="absolute top-4 right-2" onClick={closePopup}>
                  <X size={20} />
                </button>
                <h2 className="text-xl font-semibold mb-4">
                  {editingProject ? "Edit Project" : "Add Project"}
                </h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Title"
                    value={formData.title || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder=" Add Database"
                    value={formData.database || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, database: e.target.value })
                    }
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Type"
                    value={formData.type || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="text"
                    placeholder="uiux"
                    value={formData.uiux || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, uiux: e.target.value })
                    }
                    className="w-full p-2 border rounded mb-2"
                  />
                  <textarea
                    placeholder="Description"
                    value={formData.description || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full p-2 border rounded mb-2"
                  ></textarea>
                  {formData.technologies.map((tech, index) => (
                    <input
                      key={index}
                      type="text"
                      value={tech || ""}
                      onChange={(e) => {
                        const newTech = [...formData.technologies];
                        newTech[index] = e.target.value;
                        setFormData({ ...formData, technologies: newTech });
                      }}
                      className="w-full p-2 border rounded mb-2"
                      placeholder="Technology"
                    />
                  ))}
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-2 py-1 rounded mb-2"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        technologies: [...formData.technologies, ""],
                      })
                    }
                  >
                    + Add Technology
                  </button>
                  <div
                    className="w-full h-32 mb-2 border-2 border-dashed flex items-center justify-center rounded cursor-pointer relative"
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    {formData.image ? (
                      <img
                        src={
                          typeof formData.image === "string"
                            ? formData.image
                            : URL.createObjectURL(formData.image)
                        }
                        alt="Project"
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <div className="flex flex-col items-center text-gray-500">
                        <Upload size={32} />
                        <p className="text-sm">Upload Image</p>
                      </div>
                    )}
                    <input
                      id="fileInput"
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.files[0] })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded w-full"
                  >
                    Save
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

export default Page;
