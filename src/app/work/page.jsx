import ProjectCard from "@/components/ProjectCard";
import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "An online store offering a wide range of products.",
    technologies: ["React", "Node.js", "MongoDB"],
    database: "MongoDB",
    uiux: "Responsive and user-friendly design",
    type: "Web",
    image: "/assets/developer.jpg", 
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "A mobile app to track fitness activities and goals.",
    technologies: ["React Native", "Firebase"],
    database: "Firebase",
    uiux: "Interactive and intuitive interface",
    type: "Mobile App",
    image: "/assets/about.jpg", 
  },
];


const Page = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-7">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-green-500 mt-9 font-extrabold text-center text-2xl md:text-4xl">
          Our Projects
        </h1>
        <p className="text-zinc-400 text-center text-sm md:text-lg mt-2">
          Showcasing our expertise and dedication to delivering exceptional
          solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

// import ProjectCard from "@/components/ProjectCard";
// import React from "react";

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Website",
//     description: "An online store offering a wide range of products.",
//     technologies: ["React", "Node.js", "MongoDB"],
//     database: "MongoDB",
//     uiux: "Responsive and user-friendly design",
//     type: "Web",
//     image: "/assets/developer.jpg",
//   },
//   {
//     id: 2,
//     title: "Fitness Tracker App",
//     description: "A mobile app to track fitness activities and goals.",
//     technologies: ["React Native", "Firebase"],
//     database: "Firebase",
//     uiux: "Interactive and intuitive interface",
//     type: "Mobile App",
//     image: "/assets/about.jpg",
//   },
// ];

// const Page = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen py-10 px-7">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-green-600 font-extrabold text-center text-2xl md:text-4xl">
//           Our Projects
//         </h1>
//         <p className="text-gray-500 text-center text-sm md:text-lg mt-2">
//           Showcasing our expertise and dedication to delivering exceptional
//           solutions.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
