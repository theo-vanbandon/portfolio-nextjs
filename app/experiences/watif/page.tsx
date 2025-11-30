import Link from "next/link";
import "../../styles/Experiences/watif.css";

export default function WatifProject() {
    return (
        <section id="watif-project" className="project-detail-section">
            <h2 className="text-2xl font-bold mb-6">Réseau social : Watif</h2>
            <p className="project-date">Février 2024 - Mars 2024 (Durée : 6 semaines)</p>

            <h3>Présentation</h3>
            <p>
                Watif est un réseau social permettant aux utilisateurs d&apos;explorer des scénarios hypothétiques en
                répondant à la question
                &quot;Et si ?&quot; et en générant des images basées sur ces scénarios. Le projet a été développé dans
                le cadre d&apos;un projet de 3ᵉ année en BUT Informatique.
                La première semaine du projet a été marquée par une collaboration avec un étudiant Anversois, avec qui
                nous avons conçu les différents modèles de génération d&apos;images.
                Cette collaboration internationale s&apos;est déroulée en anglais, ce qui a renforcé nos compétences en
                communication technique dans un contexte multilingue.
            </p>

            <h3>Objectif du projet</h3>
            <p>
                L&apos;objectif était de concevoir une plateforme complète de type réseau social, combinant une
                interface utilisateur réactive avec un back-end robuste, et intégrant un système de génération
                d&apos;images automatisé à partir de prompts textuels.
            </p>

            <h3>Tâches réalisées</h3>
            <ul className="features-list">
                <li>Création d&apos;un modèle <code>img2img</code> permettant de générer une image à partir d&apos;un
                    prompt textuel et d&apos;une image existante
                </li>
                <li>Développement des fonctionnalités liées aux publications (posts), incluant leur création, affichage
                    et liaison avec les utilisateurs et threads
                </li>
                <li>Mise en place des commentaires et du système de likes sur les publications</li>
                <li>Implémentation de l&apos;authentification sécurisée via Spring Security (connexion, inscription,
                    gestion des tokens JWT)
                </li>
                <li>Sécurisation des routes backend avec des contrôles d&apos;accès selon les rôles</li>
                <li>Respect des exigences RGPD (gestion des données personnelles, droit à l&apos;oubli, etc.)</li>
                <li>Création d&apos;un système de messagerie instantanée entre utilisateurs</li>
                <li>Connexion à la base de données MongoDB pour le stockage des entités non relationnelles</li>
                <li>Documentation du code et suivi de la qualité avec SonarQube</li>
            </ul>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li>Spring</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Python</li>
                <li>Git</li>
                <li>SonarQube</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Ce projet m&apos;a permis de renforcer mes compétences en développement full-stack, notamment sur la
                gestion des API, l&apos;utilisation de MongoDB pour le stockage des données,
                ainsi que l&apos;intégration d&apos;un système de génération d&apos;images. La première semaine de
                collaboration avec un étudiant Anversois a également été très enrichissante,
                car elle m&apos;a permis de travailler en anglais sur des problématiques techniques concrètes.
                Travailler en équipe sur un réseau social complet a été très formateur,
                tant sur le plan technique que sur la coordination entre les membres du groupe.
            </p>

            {/*
            <div className="project-status">
                <p>🚧 Ce projet est en cours de développement. 🚧</p>
            </div>
            */}

            <div className="link-container">
                <Link href="https://github.com/orgs/watif-projects/repositories" className="styled-link"
                      target="_blank">
                    📂 Voir le code sur GitHub
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
