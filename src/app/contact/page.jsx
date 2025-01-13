"use client";
import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulating API call
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setIsSubmitting(false);
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 2000);
  };
  return (
    <div className="preview bg-[#08090a] flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2">
        <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
          <div className="flex items-start justify-start">
            <div className="relative h-14 w-14 rounded-md bg-gradient-to-b from-gray-50 to-neutral-200 p-[4px] dark:from-neutral-800 dark:to-neutral-950 flex items-center justify-center overflow-hidden">
              <div className="relative z-20 h-full w-full rounded-[5px] bg-gray-50 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
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
          <h2 className="mt-9 bg-gradient-to-b bg-clip-text text-left text-xl font-bold text-transparent from-neutral-200 to-neutral-300 md:text-3xl lg:text-5xl">
            Contact us
          </h2>
          <p className="mt-8 max-w-lg text-center text-base text-neutral-600 dark:text-neutral-400 md:text-left">
            We are always looking for ways to improve our products and services.
            Contact us and let us know how we can help you.
          </p>
          <div className="mt-10 hidden flex-col items-center gap-4 md:flex-row lg:flex">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              contact@yoursaas.ai
            </p>
            <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              +92 (800) 123 XX21
            </p>
            <div className="h-1 w-1 rounded-full bg-neutral-500 dark:bg-neutral-400"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              support@yoursaas.ai
            </p>
          </div>
          <div className="div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
            <div
              className="pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500 right-1 top-0"
              style={{ transform: "translateZ(1px)" }}
            >
              <div className="h-full w-full">
                <div className="absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-neutral-200 px-2 py-1 text-xs font-normal text-neutral-700 dark:bg-neutral-800 dark:text-white">
                  We are here
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-blue-400/90 to-blue-400/0 transition-opacity duration-500"></span>
                </div>
                <div
                  className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    perspective: "800px",
                    transform: "rotateX(70deg) translateZ(0px)",
                  }}
                >
                  {/* Your inner content */}
                </div>
                <div className="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-blue-500 blur-[2px]"></div>
              </div>
            </div>
            {/* <img
              alt="world map"
              loading="lazy"
              width="300"
              height="300"
              // decoding="async"
              // data-nimg="1"
              // className="[transform:rotateX(45deg)_translateZ(0px)] dark:invert border border-red-500 dark:filter"
              src="/assets/world.svg"
              // style={{ color: "transparent" }}
            /> */}
          </div>
        </div>
        <div className="relative bg-[#08090a] flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
          <div className="flex flex-col items-start gap-4 max-w-2xl w-full mx-auto bg-gradient-to-b from-neutral-900 to-neutral-950 p-10 rounded-3xl relative overflow-hidden">
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
                <div className="mb-4 w-full relative z-20">
                  <label
                    className="text-neutral-300 text-sm font-medium mb-2 inline-block"
                    htmlFor="name"
                  >
                    Full name
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
                <div className="mb-4 w-full relative z-20">
                  <label
                    className="text-neutral-300 text-sm font-medium mb-2 inline-block"
                    htmlFor="email"
                  >
                    Email Address
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
                <div className="mb-4 w-full relative z-20">
                  <label
                    className="text-neutral-300 text-sm font-medium mb-2 inline-block"
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
                <div className="mb-4 w-full relative z-20">
                  <label
                    className="text-neutral-300 text-sm font-medium mb-2 inline-block"
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
                    rows="5"
                    aria-label="Message"
                    required
                  ></textarea>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}

                <button
                  type="submit"
                  className="w-full rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
// "use client"
// import React, { useState } from "react";

// const page = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     // Basic Validation
//     if (!formData.name || !formData.email || !formData.message) {
//       setError("Please fill in all required fields.");
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulating API call
//     setTimeout(() => {
//       console.log("Form Submitted:", formData);
//       setIsSubmitting(false);
//       setSuccess("Your message has been sent successfully!");
//       setFormData({ name: "", email: "", company: "", message: "" });
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-5">
//       <h1 className="text-center text-4xl font-bold text-gray-800">
//         Contact Us
//       </h1>
//       <div className="mt-10 flex flex-wrap justify-center gap-10">
//         {/* Contact Info Section */}
//         <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-md">
//           <h2 className="text-2xl font-semibold text-gray-700">We are here</h2>
//           <p className="mt-4 text-gray-600">
//             If you have any questions or need assistance, please don’t hesitate
//             to contact us.
//           </p>
//           <ul className="mt-6 space-y-3">
//             <li className="text-gray-600">
//               <span className="font-semibold">Email:</span> contact@company.com
//             </li>
//             <li className="text-gray-600">
//               <span className="font-semibold">Phone:</span> +1 (123) 456-7890
//             </li>
//             <li className="text-gray-600">
//               <span className="font-semibold">Address:</span> 123 Main Street,
//               City, Country
//             </li>
//           </ul>
//         </div>

//         {/* Contact Form Section */}
//         <div className="w-full max-w-lg rounded-lg bg-white p-5 shadow-md">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-700">
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full rounded border-gray-300 p-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
//                 placeholder="Enter your name"
//                 aria-label="Name"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full rounded border-gray-300 p-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
//                 placeholder="Enter your email"
//                 aria-label="Email"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="company" className="block text-gray-700">
//                 Company
//               </label>
//               <input
//                 type="text"
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full rounded border-gray-300 p-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
//                 placeholder="Enter your company (optional)"
//                 aria-label="Company"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="message" className="block text-gray-700">
//                 Message <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full rounded border-gray-300 p-2 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
//                 placeholder="Write your message"
//                 rows="5"
//                 aria-label="Message"
//                 required
//               ></textarea>
//             </div>

//             {error && <p className="text-red-500">{error}</p>}
//             {success && <p className="text-green-500">{success}</p>}

//             <button
//               type="submit"
//               className="w-full rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Sending..." : "Submit"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
