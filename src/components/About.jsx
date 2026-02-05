function About() {
    const skills = [
        'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
        'Python', 'Git', 'MongoDB', 'Bootstrap','Java'
    ]

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="profile-wrapper">
                    <img
                        src="/images/profile.jpg"
                        alt="Ignacio González Iñigo"
                        className="profile-image"
                    />
                </div>

                <div className="about-content">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-text">
                        <p>
                            Hi, I'm Ignacio González Iñigo, a passionate Computer Engineering student specializing in full-stack development.
                            I thrive on creating innovative solutions that bridge the gap between elegant design and robust functionality.
                        </p>
                        <p>
                            With expertise spanning modern web technologies and a deep understanding of software architecture,
                            I'm committed to building applications that make a difference. Whether it's crafting intuitive user interfaces
                            or designing scalable backend systems, I approach each project with creativity and technical precision.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects,
                            and continuously expanding my skill set to stay at the forefront of the ever-evolving tech landscape.
                        </p>
                    </div>

                    <div className="skills-section">
                        <h3 className="skills-title">Technical Skills</h3>
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-pill">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
