import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/3">
              <img
                src={project.image}
                width={250} // Increase width
                height={250} // Increase height
                alt={project.title}
                className="mb-6 rounded-lg shadow-lg" // Adjust roundedness and add shadow
              />
            </div>
            <div className="w-full max-w-xl lg:w-2/3">
              <h6 className="mb-2 text-xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
