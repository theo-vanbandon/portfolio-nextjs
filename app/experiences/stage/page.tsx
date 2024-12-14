import "../../styles/Experiences/stage.css";
import Link from "next/link";

export default function Stage() {
    return (
        <section className="project-detail-section">
            <h2>Stage : Refonte d&apos;un site</h2>
            <p className="project-date">21 Mai 2024 - 15 Juillet 2024 (Durée : 8 semaines)</p>

            <h3>Présentation</h3>
            <p>
                Dans le cadre de mon BUT Informatique, j&apos;ai effectué un stage de 8 semaines au sein de
                l&apos;Association des
                Naturalistes de la Gohelle.
                Ce stage avait pour objectif de moderniser le site web de l&apos;association en le rendant plus
                interactif et
                &#34;responsive&#34;,
                en utilisant le framework Laravel.
            </p>

            <h3>L&apos;objectif du stage</h3>
            <p>
                L&apos;ancien site ne répondait plus aux attentes de l&apos;association, souffrant d&apos;une interface
                vieillissante
                et de problèmes d&apos;hébergement.
                Mon stage a donc consisté à reprendre et à finaliser le projet de refonte, en équipe avec un autre
                étudiant, Lucas Copin.
            </p>

            <h3>Tâches réalisées</h3>
            <ul className="features-list">
                <li>Restructuration complète de la base de données pour corriger les incohérences et améliorer
                    l&apos;organisation des données.
                </li>
                <li>Implémentation d&apos;une gestion des rôles pour un contrôle d&apos;accès adapté (administrateurs,
                    modérateurs, adhérents).
                </li>
                <li>Mise en place d&apos;un système de gestion des observations avec fonctionnalités CRUD.</li>
                <li>Génération de tracts et listes PDF pour les sorties organisées par l&apos;association.</li>
                <li>Système de réinitialisation de mot de passe avec envoi d&apos;e-mails automatiques via OVH.</li>
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
                Ce stage m&apos;a permis d&apos;approfondir mes compétences en développement web, en particulier avec le
                framework
                Laravel.
                Travailler sur un projet concret pour l&apos;Association des Naturalistes de la Gohelle m&apos;a donné
                l&apos;opportunité de mener une refonte complète
                d&apos;un site en équipe, depuis la restructuration de la base de données jusqu&apos;au déploiement
                final sur un
                serveur, chose que l&apos;on voit rarement en cours.
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
