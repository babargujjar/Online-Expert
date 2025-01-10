import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#0a0a0a] border-white/[0.1] border cursor-pointer rounded-md shadow-md p-5 hover:shadow-xl transition duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="text-zinc-400 text-sm mt-2">{project.description}</p>
      <div className="mt-4">
        <h4 className="text-white font-semibold text-sm">Technologies:</h4>
        <ul className="list-disc list-inside text-zinc-400 text-sm">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <p className="text-zinc-400 text-sm mt-2">
        <strong>Database:</strong> {project.database}
      </p>
      <p className="text-zinc-400 text-sm mt-2">
        <strong>UI/UX:</strong> {project.uiux}
      </p>
      <p className="text-zinc-400 text-sm mt-2">
        <strong>Type:</strong> {project.type}
      </p>
    </div>
  );
}

export default ProjectCard