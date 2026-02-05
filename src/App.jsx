import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'

function App() {
    const [selectedProject, setSelectedProject] = useState(null)

    const openModal = (project) => {
        setSelectedProject(project)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }

    return (
        <div className="app">
            <Hero />
            <About />
            <Certifications />
            <Projects onProjectClick={openModal} />
            <Footer />
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </div>
    )
}

export default App
