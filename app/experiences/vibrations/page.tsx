import Link from "next/link";
import "../../styles/Experiences/vibrations.css"

export default function VibrationsProject() {
    return (
        <section id="vibrations-project" className="project-detail-section">
            <h2 className="text-2xl font-bold mb-6">Vibration d'un moteur</h2>
            <p className="project-date">Janvier - Juin 2023</p>
            <p className="project-description">
                Création d'une application mesurant les vibrations d'un moteur afin de définir son état de santé.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-4">Technologies utilisées</h3>
            <ul className="technologies-list">
                <li className="technology">ESP32</li>
                <li className="technology">Node.js</li>
                <li className="technology">MQTT</li>
                <li className="technology">Bluetooth</li>
                <li className="technology">Raspberry</li>
                <li className="technology">HTML</li>
                <li className="technology">JavaScript</li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-4">Détails du projet</h3>
            <p>
                Ce projet consiste à développer une application capable de mesurer les vibrations d'un moteur en temps
                réel.
                L'objectif est de détecter les anomalies et de fournir des informations sur l'état de santé du moteur.
                L'application utilise un microcontrôleur ESP32 pour collecter les données de vibration, qui sont ensuite
                transmises via le protocole MQTT à un serveur Node.js pour traitement et analyse.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-4">Fonctionnalités</h3>
            <ul className="features-list">
                <li>Collecte de données de vibration en temps réel</li>
                <li>Transmission des données via MQTT</li>
                <li>Allumage de la colonne lumineuse en fonction de l'état de santé</li>
                <li>Sauvegarde des données dans une base en local</li>
                <li>Envoie des données dans le cloud pour les sucursales</li>
                <li>Interface utilisateur pour visualiser l'état de santé du moteur dans un graphique</li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-4">Résultats</h3>
            <p>
                Le projet a permis de développer une solution efficace pour la surveillance des vibrations d'un moteur.
                Les résultats ont montré que l'application est capable de détecter les anomalies,
                ce qui permet de prévenir les pannes et d'améliorer la maintenance prédictive.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-4">Norme ISO 10816-1</h3>
            <div className="iso-section">
                <h4>Évaluation des vibrations des moteurs</h4>
                <p>
                    La norme ISO 10816-1 classe les moteurs en fonction de leurs vibrations :
                </p>
                <ul>
                    <li>Niveau 1 : Bon état</li>
                    <li>Niveau 2 : Acceptable</li>
                    <li>Niveau 3 : Maintenance recommandée</li>
                    <li>Niveau 4 : Risque élevé de défaillance</li>
                </ul>
                <p>
                    Ces niveaux permettent d’identifier les interventions nécessaires pour maintenir le moteur en bon
                    état.
                </p>
            </div>
            <h3 className="text-xl font-bold mt-6 mb-4">Téléchargement du dossier de projet</h3>
            <p>
                Vous pouvez télécharger le dossier de projet pour consulter les contributions de chaque membre de
                l'équipe et voir en détail qui a fait quoi.
            </p>
            <div className="link-container">
                <Link href="/files/Dossier%20de%20projet%20maintenance%20prédictive%20des%20machines%20tournantes.pdf" className="download-link" download>
                    Télécharger le dossier de projet
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
};
