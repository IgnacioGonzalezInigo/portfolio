import { FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <h2 className="footer-title">Let's Work Together</h2>
                <p className="footer-subtitle">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <a
                    href="https://www.linkedin.com/in/ignacio-gonz%C3%A1lez-i%C3%B1igo-47318a29a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta"
                >
                    <span>Get In Touch</span>
                    <FaLinkedin />
                </a>
                <div className="footer-info">
                    <p>&copy; 2026 Ignacio González Iñigo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
