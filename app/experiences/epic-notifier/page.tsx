import Link from "next/link";
import Image from "next/image";
import "../../styles/Experiences/rally-stage-generator.css";

export default function EpicNotifier() {
    return (
        <section id="epic-notifier-project" className="project-detail-section">
            <h2 className="text-2xl font-bold mb-6">Epic Games Free Notifier</h2>
            <p className="project-date">Décembre 2025 (Durée : 4 jours)</p>

            <h3>Présentation</h3>
            <p>
                Epic Games Free Notifier est un script Node.js automatisé qui récupère chaque semaine les jeux 
                gratuits disponibles sur l&apos;Epic Games Store et envoie une notification par email stylisée. 
                Le projet utilise GitHub Actions pour une exécution automatique sans nécessiter de serveur dédié, 
                tout en respectant les standards de qualité du code (SonarQube).
            </p>

            <h3>Objectif du projet</h3>
            <p>
                L&apos;objectif était de créer un système de notification entièrement automatisé pour ne jamais 
                manquer les jeux gratuits hebdomadaires d&apos;Epic Games. Le projet devait être fiable, 
                économique (sans serveur 24h/24), maintenable et respecter les bonnes pratiques de développement 
                modernes.
            </p>

            <Image
                src="/images/epic-notifier.webp"
                alt="Epic Games Free Notifier - Email Preview"
                width={800}
                height={450}
                className="project-image"
                loading="lazy"
            />

            <h3>Fonctionnalités principales</h3>
            <ul className="features-list">
                <li>Récupération automatique des jeux gratuits via l&apos;API publique Epic Games Store</li>
                <li>Filtrage intelligent des promotions actuellement actives (vérification des dates et prix)</li>
                <li>Envoi d&apos;emails HTML stylisés avec images et liens directs vers chaque jeu</li>
                <li>Exécution automatique tous les jeudis à 18h (jour de renouvellement Epic Games)</li>
            </ul>

            <h3>Tâches réalisées</h3>
            <ul className="features-list">
                <li>Développement de l&apos;intégration avec l&apos;API Epic Games Store (Axios)</li>
                <li>Implémentation d&apos;un système de filtrage des jeux réellement gratuits (prix = 0€ et promotion active)</li>
                <li>Création d&apos;emails HTML responsives avec Nodemailer et templates personnalisés</li>
                <li>Configuration de GitHub Actions pour l&apos;automatisation hebdomadaire (CRON)</li>
                <li>Mise en place de la gestion sécurisée des secrets (GitHub Secrets pour SMTP et API keys)</li>
                <li>Adoption du top-level await (ES2022) pour un code plus moderne et lisible</li>
                <li>Respect des standards de qualité SonarQube (0 code smells, 0 bugs)</li>
                <li>Rédaction d&apos;une documentation complète (README avec badges professionnels)</li>
                <li>Architecture avec dossier <code>src/</code> et séparation des responsabilités</li>
            </ul>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li>Node.js</li>
                <li>GitHub Actions</li>
                <li>Nodemailer</li>
                <li>Axios</li>
                <li>dotenv</li>
                <li>Epic Games API</li>
                <li>SonarQube</li>
                <li>Git & GitHub</li>
            </ul>

            <h3>Architecture du projet</h3>
            <p>
                Le projet suit une architecture modulaire claire avec une séparation des responsabilités :
            </p>
            <ul className="features-list">
                <li><strong>epic.js :</strong> Service dédié à la récupération et au filtrage des jeux gratuits depuis l&apos;API Epic Games</li>
                <li><strong>mailer.js :</strong> Service gérant la création et l&apos;envoi d&apos;emails HTML stylisés via SMTP</li>
                <li><strong>index.js :</strong> Orchestrateur principal avec gestion d&apos;erreurs et parsing des arguments CLI</li>
                <li><strong>GitHub Actions :</strong> Workflow YAML configuré pour l&apos;exécution automatique et l&apos;injection sécurisée des secrets</li>
                <li><strong>.env / GitHub Secrets :</strong> Gestion hybride des variables d&apos;environnement (local vs production)</li>
            </ul>

            <h3>Défis techniques rencontrés</h3>
            <ul className="features-list">
                <li>Comprendre et naviguer dans la structure complexe de l&apos;API Epic Games (promotions imbriquées)</li>
                <li>Distinguer les jeux actuellement gratuits des promotions futures ou expirées</li>
                <li>Configuration correcte de GitHub Actions avec gestion sécurisée des secrets SMTP</li>
                <li>Mise en conformité avec les recommandations SonarQube (remplacement du <code>.catch()</code> par top-level await)</li>
                <li>Conception d&apos;emails HTML qui s&apos;affichent correctement sur tous les clients mail</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Ce projet m&apos;a permis de développer des compétences en automatisation (CI/CD), en intégration 
                d&apos;APIs externes, et en respect des bonnes pratiques de développement. L&apos;utilisation de 
                GitHub Actions pour un déploiement sans serveur m&apos;a appris à optimiser les coûts tout en 
                garantissant la fiabilité. La conformité SonarQube et l&apos;adoption d&apos;ES2022 démontrent 
                mon engagement pour un code maintenable et moderne. Ce projet constitue une base solide pour 
                des évolutions futures (intégration X/Twitter, notifications multi-canaux).
            </p>

            <div className="link-container">
                <Link href="https://github.com/theo-vanbandon/epic-free-games-notifier" className="styled-link" target="_blank">
                    📂 Voir le code sur GitHub
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
