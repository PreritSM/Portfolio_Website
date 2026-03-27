import portfolio from '../data/portfolio';
import { GitHubIcon } from './Icons';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-heading text-center">Projects</h2>
        <p className="section-subheading text-center">
          A showcase of my work and side projects
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.projects.map((project, index) => (
            <div
              key={index}
              className="card group overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-48 -mx-6 -mt-6 mb-6 bg-gradient-to-br from-dark-800 to-dark-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 group-hover:from-primary-500/20 group-hover:to-purple-500/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-50">💻</span>
                </div>
                
                {/* Status Badge */}
                {project.status === 'coming-soon' && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-dark-900/90 backdrop-blur-sm text-dark-300 text-xs font-medium rounded-full border border-dark-700">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-dark-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-dark-800">
                {project.repoHref ? (
                  <a
                    href={project.repoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    Source
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm text-dark-500 cursor-not-allowed">
                    <GitHubIcon className="w-4 h-4" />
                    Private
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
