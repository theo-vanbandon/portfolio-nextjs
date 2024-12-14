import "../../styles/Experiences/stage.css";
import Link from "next/link";

export default function Stage() {
    return (
        <section className="project-detail-section">
            <h2>Stage : Refonte d'un site</h2>
            <p className="project-date">21 Mai 2024 - 15 Juillet 2024 (Durée : 8 semaines)</p>

            <h3>Présentation</h3>
            <p>
                Dans le cadre de mon BUT Informatique, j'ai effectué un stage de 8 semaines au sein de l'Association des
                Naturalistes de la Gohelle.
                Ce stage avait pour objectif de moderniser le site web de l'association en le rendant plus interactif et
                "responsive",
                en utilisant le framework Laravel.
            </p>

            <h3>L'objectif du stage</h3>
            <p>
                L’ancien site ne répondait plus aux attentes de l'association, souffrant d'une interface vieillissante
                et de problèmes d’hébergement.
                Mon stage a donc consisté à reprendre et à finaliser le projet de refonte, en équipe avec un autre
                étudiant, Lucas Copin.
            </p>

            <h3>Tâches réalisées</h3>
            <ul className="features-list">
                <li>Restructuration complète de la base de données pour corriger les incohérences et améliorer
                    l’organisation des données.
                </li>
                <li>Implémentation d'une gestion des rôles pour un contrôle d’accès adapté (administrateurs,
                    modérateurs, adhérents).
                </li>
                <li>Mise en place d'un système de gestion des observations avec fonctionnalités CRUD.</li>
                <li>Génération de tracts et listes PDF pour les sorties organisées par l'association.</li>
                <li>Système de réinitialisation de mot de passe avec envoi d’e-mails automatiques via OVH.</li>
                <li>Déploiement final sur un serveur OVH avec migration de la base de données de SQLite vers MySQL et
                    transfert des fichiers via FileZilla.
                </li>
            </ul>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li>Laravel</li>
                <li>HTML</li>
                <li>BDD</li>
                <li>Git</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Ce stage m’a permis d’approfondir mes compétences en développement web, en particulier avec le framework
                Laravel.
                Travailler sur un projet concret pour l'Association des Naturalistes de la Gohelle m’a donné
                l’opportunité de mener une refonte complète
                d’un site en équipe, depuis la restructuration de la base de données jusqu’au déploiement final sur un
                serveur, chose que l'on voit rarement en cours.
            </p>

            <div className="link-container">
                <Link href="https://assonaturegohelle.net/" className="styled-link">
                    Voir le site ici
                </Link>
                <Link href="/files/Rapport%20de%20stage.pdf" className="download-link" download>
                    Télécharger le rapport de stage
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>

    );
}
