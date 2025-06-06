function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex space-x-4">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;