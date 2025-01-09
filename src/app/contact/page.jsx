import React from "react";
// import world from "../../../public/assets/worls.svg"

const page = () => {

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
          <h2 className="mt-9 bg-gradient-to-b from-neutral-800 to-neutral-900 bg-clip-text text-left text-xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-300 md:text-3xl lg:text-5xl">
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
            <div className="mb-4 w-full relative z-20">
              <label
                className="text-neutral-300 text-sm font-medium mb-2 inline-block"
                htmlFor="name"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Manu Arora"
                className="h-10 pl-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
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
                id="email"
                type="email"
                placeholder="contact@aceternity.com"
                className="h-10 pl-4 w-full  rounded-md text-sm bg-charcoal border border-neutral-800  placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
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
                id="company"
                type="text"
                placeholder="Your Company"
                className="h-10 pl-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
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
                rows="5"
                placeholder="Type your message here"
                className="pl-4 pt-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
              ></textarea>
            </div>
            <button className="group hover:-translate-y-0.5 active:scale-[0.98] bg-neutral-800 relative z-10 hover:bg-neutral-900 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center shadow-[0px_1px_0px_0px_#FFFFFF20_inset]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
