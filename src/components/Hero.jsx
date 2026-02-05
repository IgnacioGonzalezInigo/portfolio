import { FaChevronDown } from 'react-icons/fa'

function Hero() {
    const scrollToAbout = (e) => {
        e.preventDefault()
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-name">IGNACIO GONZÁLEZ IÑIGO</h1>
                <p className="hero-subtitle">Computer Engineering Student & Full-Stack Developer</p>
                <div className="hero-divider"></div>
                <div className="scroll-indicator">
                    <a href="#about" className="scroll-link" onClick={scrollToAbout}>
                        <FaChevronDown />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
