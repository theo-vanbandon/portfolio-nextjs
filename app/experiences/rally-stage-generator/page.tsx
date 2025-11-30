import Link from "next/link";
import "../../styles/Experiences/rally-stage-generator.css";

export default function RallyStageGenerator() {
    return (
        <section id="rally-stage-project" className="project-detail-section">
            <h2 className="text-2xl font-bold mb-6">Rally Stage Generator</h2>
            <p className="project-date">Novembre 2025 (Durée : 3 semaines)</p>

            <h3>Présentation</h3>
            <p>
                Rally Stage Generator est une application web permettant de générer automatiquement des tracés de
                spéciales de rallye à partir des données cartographiques d&apos;OpenStreetMap. Le projet combine
                une interface React interactive avec une API Node.js robuste pour analyser les routes et proposer
                des parcours optimisés avec détection automatique des intersections (Points Kilométriques).
            </p>

            <h3>Objectif du projet</h3>
            <p>
                L&apos;objectif était de créer une plateforme complète permettant aux passionnés de rallye de
                générer rapidement des spéciales réalistes en France, avec visualisation sur carte interactive,
                statistiques détaillées (dénivelé, pente moyenne, distance) et export dans plusieurs formats
                (GeoJSON, KML, GPX).
            </p>

            <h3>Fonctionnalités principales</h3>
            <ul className="features-list">
                <li>Génération automatique de spéciales de rallye basée sur les données OpenStreetMap</li>
                <li>Filtrage intelligent des routes adaptées au rallye (exclusion autoroutes, chemins piétons, etc.)</li>
                <li>Détection automatique des intersections et placement des Points Kilométriques (PK)</li>
                <li>Visualisation interactive sur carte Leaflet avec marqueurs de départ/arrivée</li>
                <li>Calcul des statistiques complètes : longueur, dénivelé positif/négatif, pente moyenne, altitude min/max</li>
                <li>Export du tracé en trois formats : GeoJSON, KML (Google Earth) et GPX (GPS)</li>
                <li>Interface utilisateur intuitive avec validation des données en temps réel</li>
            </ul>

            <h3>Tâches réalisées</h3>
            <ul className="features-list">
                <li>Développement d&apos;une API REST Node.js/Express pour interroger Overpass API (OpenStreetMap)</li>
                <li>Implémentation d&apos;un algorithme de graphe pour générer des parcours optimisés</li>
                <li>Création d&apos;un système de filtrage avancé des routes selon des critères rallye</li>
                <li>Détection des intersections par analyse géométrique et topologique du réseau routier</li>
                <li>Intégration de l&apos;API Open-Elevation pour récupérer les données d&apos;altitude réelles</li>
                <li>Développement de l&apos;interface React avec React-Leaflet pour la cartographie</li>
                <li>Mise en place de tests unitaires avec Jest et React Testing Library (couverture : Backend 79%, Frontend 93%)</li>
                <li>Architecture modulaire avec séparation claire des responsabilités (services, composants, utils)</li>
                <li>Respect des bonnes pratiques de code avec validation SonarQube</li>
                <li>Déploiement sur Render (backend et frontend)</li>
            </ul>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li>React</li>
                <li>Node.js & Express</li>
                <li>Leaflet & React-Leaflet</li>
                <li>OpenStreetMap & Overpass API</li>
                <li>Turf.js (calculs géospatiaux)</li>
                <li>Graphlib (algorithmes de graphe)</li>
                <li>Jest & React Testing Library</li>
                <li>Axios</li>
                <li>Git & GitHub</li>
                <li>SonarQube</li>
            </ul>

            <h3>Architecture du projet</h3>
            <p>
                Le projet suit une architecture client-serveur avec une séparation claire entre le frontend et le backend :
            </p>
            <ul className="features-list">
                <li><strong>Backend :</strong> API REST modulaire avec services dédiés (géocodage, Overpass,
                    filtrage, génération de spéciale)</li>
                <li><strong>Frontend :</strong> Application React structurée en composants réutilisables avec
                    services pour les appels API et les calculs de statistiques</li>
                <li><strong>Tests :</strong> Suite complète de tests unitaires (47 tests au total) garantissant
                    la qualité du code</li>
            </ul>

            <h3>Défis techniques rencontrés</h3>
            <ul className="features-list">
                <li>Gestion de la mémoire lors du traitement de grandes quantités de données cartographiques
                    (limitation du rayon de recherche)</li>
                <li>Détection précise des intersections en évitant les faux positifs (routes en prolongement)</li>
                <li>Optimisation des performances avec algorithmes de graphe efficaces</li>
                <li>Configuration CORS pour permettre la communication frontend-backend en production</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Ce projet m&apos;a permis de continuer à développer mes compétences en développement full-stack, notamment
                sur la manipulation de données géospatiales complexes, l&apos;optimisation d&apos;algorithmes,
                et l&apos;intégration d&apos;APIs tierces. La mise en place d&apos;une architecture propre et
                testée, ainsi que le déploiement en production, ont également été des aspects très formateurs
                du projet.
            </p>

            <div className="link-container">
                <Link href="https://rally-stage-generator-front.onrender.com" className="styled-link" target="_blank">
                    🚀 Voir l&apos;application en ligne
                </Link>
                <Link href="https://github.com/theo-vanbandon/rally-stage-generator" className="styled-link" target="_blank">
                    📂 Voir le code sur GitHub
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
