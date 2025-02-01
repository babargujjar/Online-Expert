"use client";
import supabase from "@/config/supabaseClient";
import React, { useEffect, useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    file:"",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  if (!formData.name || !formData.email) {
    setError("Please fill in all required fields.");
    return;
  }

  setIsSubmitting(true);

  try {
    let uploadedFilePath = null;

    if (formData.file instanceof File) {
      uploadedFilePath = await fileUpload(formData.file);
    }

    const { data, error } = await supabase
      .from("contacts")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message || null,
          file: uploadedFilePath || null},
      ])
      .select();

    if (error) {
      console.log("Supabase Error:", error);
      setError(
        "An error occurred while submitting the form. Please try again."
      );
      setIsSubmitting(false);
      return;
    }

    if (data) {
      console.log("Form Submitted:", data);
      setSuccess("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        file: null,
        message: "",
      });
    }
  } catch (err) {
    console.error("Unexpected Error:", err);
    setError("An unexpected error occurred. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

const fileUpload = async (file) => {
  try {
    if (!file) return null;

    const fileName = `${Date.now()}`;
    const { data, error } = await supabase.storage
      .from("resumes")
      .upload(fileName, file);

    if (error) {
      console.error("Upload error:", error);
      return null;
    }

    console.log("File uploaded successfully:", data);
    return data.path; 
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
};

const handleFileChange = (e) => {
  if (e.target.files.length > 0) {
    const file = e.target.files[0];

    setFormData((prevData) => ({
      ...prevData,
      file: file, 
    }));
  }
};



  return (
    <div className="preview relative bg-white flex min-h-[350px] w-full justify-center pt-2 sm:pt-10 items-start">
      {isSubmitting && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <svg
            className="animate-spin h-10 w-10 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0V4a8 8 0 00-8 8h4z"
            ></path>
          </svg>
        </div>
      )}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 md:px-6 md:py-10 lg:grid-cols-2">
        <div className="relative lg:pt-10 flex flex-col items-center overflow-hidden lg:items-start">
          <div className="flex items-start justify-start">
            <div className="relative h-14 w-14 rounded-md bg-gradient-to-b from-gray-50 to-neutral-200 p-[4px] flex items-center justify-center overflow-hidden">
              <div className="relative z-20 h-full w-full rounded-[5px] bg-gray-50 flex items-center justify-center overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-500"
                >
                  <path
                    d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                  <path
                    d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg"></div>
              <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:h-[8px] dark:blur-sm"></div>
            </div>
          </div>
          <h2 className="mt-5 bg-gradient-to-b bg-clip-text text-left text-xl font-bold text-transparent from-green-200 to-green-500 md:text-3xl lg:text-5xl">
            Contact us
          </h2>
          <p className="mt-8 max-w-lg text-center text-base text-neutral-600 md:text-left">
            We are always looking for ways to improve our products and services.
            Contact us and let us know how we can help you.
          </p>
          <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
            <p className="text-md cursor-pointer text-black ">
              contact@onlineexpert.pk
            </p>
            <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400"></div>
            <p className="text-md text-black">+92 321 811 9090</p>
          </div>
          <div className="div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
            <div
              className="pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500 right-1 top-0"
              style={{ transform: "translateZ(1px)" }}
            ></div>
          </div>
        </div>
        <div className="relative flex  flex-col justify-center overflow-hidden py-3 sm:py-0">
          <div className="flex flex-col items-start gap-4 max-w-2xl w-full mx-auto bg-gradient-to-b from-green-700 to-green-800 px-10 py-8 rounded-3xl relative overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
              <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10"
                >
                  <defs>
                    <pattern
                      id="pattern-id"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                      x="-12"
                      y="4"
                    >
                      <path d="M.5 20V.5H20" fill="none"></path>
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                    fill="url(#pattern-id)"
                  ></rect>
                  <svg x="-12" y="4" className="overflow-visible">
                    <rect
                      strokeWidth="0"
                      width="21"
                      height="21"
                      x="200"
                      y="20"
                    ></rect>
                    <rect
                      strokeWidth="0"
                      width="21"
                      height="21"
                      x="140"
                      y="80"
                    ></rect>
                    <rect
                      strokeWidth="0"
                      width="21"
                      height="21"
                      x="140"
                      y="120"
                    ></rect>
                    <rect
                      strokeWidth="0"
                      width="21"
                      height="21"
                      x="140"
                      y="40"
                    ></rect>
                    <rect
                      strokeWidth="0"
                      width="21"
                      height="21"
                      x="180"
                      y="100"
                    ></rect>
                  </svg>
                </svg>
              </div>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit}>
                <div className="mb-2 w-full relative z-20">
                  <label
                    className="text-neutral-300 text-sm font-medium mb-1 inline-block"
                    htmlFor="name"
                  >
                    Full name<span className="text-xl text-red-600">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded border-gray-300 p-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your name"
                    aria-label="Name"
                    required
                  />
                </div>
                <div className="mb-2 w-full relative z-20">
                  <label
                    className="text-neutral-300 text-sm font-medium mb-1 inline-block"
                    htmlFor="email"
                  >
                    Email Address<span className="text-xl text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded border-gray-300 p-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your email"
                    aria-label="Email"
                    required
                  />
                </div>
                <div className="mb-2 w-full relative z-20">
                  <label
                    className="text-neutral-300 text-sm font-medium mb-1 inline-block"
                    htmlFor="company"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded border-gray-300 p-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your company (optional)"
                    aria-label="Company"
                  />
                </div>
                <div className="mb-2 w-full relative z-20">
                  <label
                    className="text-neutral-300 text-sm font-medium mb-1 inline-block"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded border-gray-300 p-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Write your message"
                    rows="3"
                    aria-label="Message"
                  ></textarea>
                  <div className="mb-3 w-full relative z-20">
                    <label
                      htmlFor="file"
                      className="w-full flex items-center justify-center border border-gray-300 rounded bg-white p-2 text-gray-700 cursor-pointer focus-within:border-blue-500 focus-within:ring-blue-500"
                    >
                      {formData.file ? formData.file.name : "Upload a file"}
                      <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}

                <button
                  type="submit"
                  className="w-full rounded bg-black py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
