import { FaArrowRight } from 'react-icons/fa'
import { projectsData } from '../data/projects'

function Projects({ onProjectClick }) {
    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2 className="section-title">Selected Work</h2>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <button
                                    className="btn-preview"
                                    onClick={() => onProjectClick(project)}
                                >
                                    <span>Preview</span>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
