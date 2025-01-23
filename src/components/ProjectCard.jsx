// import React from 'react'

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="bg-gray-100 border-white/[0.1] border cursor-pointer rounded-md shadow-md p-5 hover:shadow-xl transition duration-300">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-48 object-cover rounded-md mb-4"
//       />
//       <h3 className="text-xl font-semibold text-green-600 ">{project.title}</h3>
//       <p className="text-zinc-700 text-sm mt-2">{project.description}</p>
//       <div className="mt-4">
//         <h4 className="text-black font-semibold text-md">Technologies:</h4>
//         <ul className="list-disc list-inside text-zinc-700 text-sm">
//           {project.technologies.map((tech, index) => (
//             <li key={index}>{tech}</li>
//           ))}
//         </ul>
//       </div>
//       <p className="text-zinc-700 text-sm mt-2">
//         <strong className='text-black'>Database:</strong> {project.database}
//       </p>
//       <p className="text-zinc-700 text-sm mt-2">
//         <strong className='text-black'>UI/UX:</strong> {project.uiux}
//       </p>
//       <p className="text-zinc-700 text-sm mt-2">
//         <strong className='text-black'>Type:</strong> {project.type}
//       </p>
//     </div>
//   );
// }

// export default ProjectCard
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-green-600">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2">{project.description}</p>
        <div className="mt-4">
          <h4 className="text-gray-800 font-medium text-md">Technologies:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-600 text-sm mt-2">
          <strong className="text-gray-800">Database:</strong>{" "}
          {project.database}
        </p>
        <p className="text-gray-600 text-sm mt-2">
          <strong className="text-gray-800">UI/UX:</strong> {project.uiux}
        </p>
        <p className="text-gray-600 text-sm mt-2">
          <strong className="text-gray-800">Type:</strong> {project.type}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
