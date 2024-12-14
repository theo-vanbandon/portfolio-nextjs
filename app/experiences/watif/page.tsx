import Link from "next/link";
import "../../styles/Experiences/watif.css";

export default function WatifProject() {
    return (
        <section id="watif-project" className="project-detail-section">
            <h2 className="text-2xl font-bold mb-6">Réseau social: Watif</h2>
            <p className="project-date">Durée: 6 semaines</p>
            <p className="project-description">
                Le projet vise à permettre aux utilisateurs d&apos;explorer des scénarios hypothétiques en
                répondant à la question &#34;Et si ?&#34; et en générant des images basées sur ces scénarios.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-4">Technologies utilisées</h3>
            <ul className="technologies-list">
                <li className="technology">Spring</li>
                <li className="technology">React</li>
                <li className="technology">MongoDB</li>
                <li className="technology">Python</li>
            </ul>
            <div className="project-status">
                <p>🚧 Ce projet est en cours de développement. 🚧</p>
            </div>
            <div className="link-container">
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
