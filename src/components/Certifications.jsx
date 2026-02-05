import { certificationsData } from '../data/certifications'

function Certifications() {
    return (
        <section id="certifications" className="certifications">
            <div className="certifications-container">
                <h2 className="section-title">Professional Certifications</h2>

                <div className="certifications-grid">
                    {certificationsData.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="certification-image"
                            />
                            <h4 className="certification-title">{cert.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
