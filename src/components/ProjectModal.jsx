import { useState, useEffect } from 'react'
import { FaTimes, FaMobileAlt, FaTabletAlt, FaLaptop, FaExternalLinkAlt } from 'react-icons/fa'
import './ProjectModal.css'

const ProjectModal = ({ project, onClose }) => {
    const [device, setDevice] = useState('desktop') // 'mobile', 'tablet', 'desktop'
    const [isLoading, setIsLoading] = useState(true)

    // Reset loading state when device or project changes
    useEffect(() => {
        setIsLoading(true)
    }, [device, project])

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose()
    }

    return (
        <div className="modal-overlay" onClick={handleBackdropClick}>
            
            {/* Header: Title, Link, Close Button */}
            <div className="modal-header">
                <div className="header-left">
                    <h3 className="project-title">{project.title}</h3>
                </div>
                
                {/* Device Switcher Controls */}
                <div className="device-controls">
                    <button 
                        className={`control-btn ${device === 'mobile' ? 'active' : ''}`}
                        onClick={() => setDevice('mobile')}
                        title="iPhone View"
                    >
                        <FaMobileAlt />
                    </button>
                    <button 
                        className={`control-btn ${device === 'tablet' ? 'active' : ''}`}
                        onClick={() => setDevice('tablet')}
                        title="iPad View"
                    >
                        <FaTabletAlt />
                    </button>
                    <button 
                        className={`control-btn ${device === 'desktop' ? 'active' : ''}`}
                        onClick={() => setDevice('desktop')}
                        title="Desktop View"
                    >
                        <FaLaptop />
                    </button>
                </div>

                <button className="close-btn" onClick={onClose}>
                    <FaTimes />
                </button>
            </div>

            {/* The Device Preview Area */}
            <div className="modal-content">
                <div className={`device-wrapper ${device}`}>
                    
                    {/* The Physical Device Frame */}
                    <div className="device-frame">
                        {/* Hardware Details */}
                        {device === 'mobile' && <div className="notch"></div>}
                        {device === 'desktop' && <div className="camera-dot"></div>}

                        {/* Screen Area */}
                        <div className="screen-content">
                            
                            {/* Loading Spinner */}
                            {isLoading && (
                                <div className="loader-container">
                                    <div className="spinner"></div>
                                    <p>Loading App...</p>
                                </div>
                            )}

                            {/* The Interactive Website */}
                            <iframe
                                src={project.url}
                                title={project.title}
                                className="interactive-iframe"
                                onLoad={() => setIsLoading(false)}
                                /* Allow permissions for a real app feel */
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </div>

                        {device === 'mobile' && <div className="home-indicator"></div>}
                    </div>
                    
                    {/* MacBook Base (only for desktop) */}
                    {device === 'desktop' && <div className="mac-base"></div>}
                </div>
            </div>
        </div>
    )
}

export default ProjectModal