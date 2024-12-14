import "../../styles/Experiences/raytracing.css";
import Link from "next/link";
import Image from "next/image";

export default function RayTracing() {
    return (
        <section className="project-detail-section">
            <h2>Ray Tracing</h2>
            <p className="project-date">23 Octobre 2023 - 27 Octobre 2023 (Durée : 5 jours)</p>

            <h3>Introduction</h3>
            <p>
                Le ray tracing est une méthode de rendu graphique qui simule de manière réaliste le comportement de la
                lumière
                dans une scène 3D. Utilisé dans les jeux vidéo, les films d&apos;animation et la conception graphique,
                il permet de
                créer des images avec des reflets, des ombres et des éclairages précis.
            </p>

            <h3>Objectif</h3>
            <p>
                L&apos;objectif de ce projet est d&apos;implémenter un moteur de rendu simple en ray tracing en
                utilisant des
                concepts
                fondamentaux comme les rayons, les intersections et les matériaux.
            </p>

            <Image
                src="/images/raytracing.webp"
                alt="Ray Tracing"
                width={800}
                height={450}
                className="project-image"
            />

            <h3>Étapes principales</h3>
            <ul className="features-list">
                <li>Génération de rayons pour chaque pixel de l&apos;image.</li>
                <li>Calcul des intersections entre les rayons et les objets de la scène.</li>
                <li>Application de modèles d&apos;éclairage pour les matériaux (Lambert, Phong, etc.).</li>
                <li>Ajout de fonctionnalités avancées comme les reflets et la réfraction.</li>
            </ul>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li>Java</li>
                <li>OpenGL</li>
                <li>Shaders</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Ce projet m&apos;a permis de découvrir les bases du ray tracing tout en consolidant mes compétences en
                programmation
                graphique. C&apos;est une étape importante pour mieux comprendre les moteurs de rendu modernes.
            </p>

            <div className="link-container">
                <Link href="https://github.com/theo-vanbandon/ray-tracing-project" className="download-link" download>
                    Lien du projet
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
