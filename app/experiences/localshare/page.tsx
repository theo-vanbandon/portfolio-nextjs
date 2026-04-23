import Link from "next/link";
import Image from "next/image";
import "../../styles/Experiences/rally-stage-generator.css";

export default function LocalShare() {
    return (
        <section id="localshare-project" className="project-detail-section">
            <h2 className="text-2xl font-bold mb-6">LocalShare</h2>
            <p className="project-date">Mars - Avril 2026 (Durée : 3 semaines)</p>

            <h3>Le problème</h3>
            <p>
                Transférer un fichier entre son téléphone et son PC semble anodin, mais en pratique c&apos;est
                souvent fastidieux : câble USB à brancher, application à installer, Bluetooth capricieux...
                Les solutions les plus simples passent par des sites web qui demandent d&apos;uploader ses
                fichiers sur leurs serveurs. Pratique, mais qu&apos;est-ce qu&apos;ils en font ensuite ?
                Pour des fichiers personnels ou professionnels, ce manque de contrôle est un vrai problème.
            </p>

            <h3>La solution existante... et ses limites</h3>
            <p>
                Des outils comme WeTransfer ou Snapdrop résolvent le problème de simplicité, mais au prix de
                la confidentialité : les fichiers transitent par des serveurs tiers, souvent à l&apos;étranger,
                sans réelle garantie sur leur traitement ou leur durée de conservation. Pour quelqu&apos;un qui
                veut juste passer une photo de son téléphone à son PC en quelques secondes, c&apos;est une
                concession difficile à accepter.
            </p>

            <h3>LocalShare</h3>
            <p>
                J&apos;ai donc créé LocalShare : un outil léger de transfert de fichiers et de texte entre
                appareils, qui fonctionne entièrement sur le réseau Wi-Fi local. Aucune donnée ne quitte le
                réseau domestique, aucune installation n&apos;est requise sur le téléphone, il suffit d&apos;ouvrir
                un navigateur et de saisir l&apos;adresse IP affichée dans le terminal.
            </p>

            <Image
                src="/images/localshare-main.webp"
                alt="LocalShare - Interface principale"
                width={800}
                height={450}
                className="project-image"
                loading="lazy"
            />

            <h3>Fonctionnalités principales</h3>
            <ul className="features-list">
                <li>Envoi de fichiers depuis n&apos;importe quel appareil via une dropzone ou un sélecteur</li>
                <li>Liste des fichiers disponibles avec téléchargement en un clic</li>
                <li>Presse-papier partagé synchronisé automatiquement toutes les 3 secondes entre les appareils</li>
                <li>Renommage automatique en cas de doublon (<code>fichier_1.txt</code>, <code>fichier_2.txt</code>…)</li>
                <li>Affichage du dossier de stockage en temps réel dans l&apos;interface</li>
            </ul>

            <h3>Tâches réalisées</h3>
            <ul className="features-list">
                <li>Développement d&apos;un serveur HTTP en Python sans dépendance externe</li>
                <li>Implémentation du routing HTTP et de la logique métier (upload, download, clipboard)</li>
                <li>Création de l&apos;interface web avec dropzone, barre de progression et toasts</li>
                <li>Synchronisation automatique du presse-papier</li>
                <li>Développement d&apos;un installeur Windows (<code>install.bat</code>) générant la configuration et un raccourci bureau</li>
                <li>Scripts de lancement multiplateformes (Windows, Linux, macOS) avec vérification de Python</li>
                <li>Mise en place d&apos;une suite de tests à 100% de couverture côté Python (pytest) et JavaScript (Vitest)</li>
                <li>Rédaction d&apos;une documentation complète (README avec instructions par OS)</li>
            </ul>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>HTTP</li>
                <li>Pytest</li>
                <li>Vitest</li>
            </ul>

            <h3>Architecture du projet</h3>
            <p>
                Le projet suit une séparation claire des responsabilités côté serveur comme côté client :
            </p>
            <ul className="features-list">
                <li><strong>main.py :</strong> point d&apos;entrée, lance le serveur HTTP</li>
                <li><strong>handler.py :</strong> routing HTTP, dispatch les requêtes vers l&apos;API</li>
                <li><strong>api.py :</strong> logique métier - gestion des fichiers et du presse-papier</li>
                <li><strong>utils.py :</strong> fonctions utilitaires (détection IP locale, formatage de taille)</li>
                <li><strong>static/js/ :</strong> modules JS séparés par responsabilité (upload, files, clipboard, ui)</li>
                <li><strong>config.py :</strong> configuration personnelle générée à l&apos;installation</li>
            </ul>

            <h3>Défis techniques rencontrés</h3>
            <ul className="features-list">
                <li>La synchronisation du presse-papier entre le téléphone et le PC a demandé pas mal d&apos;ajustements : gérer les délais, éviter les conflits quand les deux appareils écrivent en même temps, et s&apos;assurer que le texte affiché est toujours le bon sans surcharger le serveur de requêtes</li>
                <li>Garantir 100% de couverture de tests sur du code réseau sans dépendances tierces</li>
                <li>Rendre l&apos;installation aussi simple que possible sur Windows avec un <code>.bat</code> qui génère la config selon la volonté de l&apos;utilisateur et crée un raccourci sur le bureau</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                LocalShare répond à un besoin concret du quotidien avec une contrainte forte : zéro dépendance
                externe, zéro donnée envoyée sur internet. Ce projet m&apos;a permis de mieux comprendre le
                fonctionnement bas niveau du protocole HTTP, de pratiquer le test de code réseau, et de
                concevoir une expérience utilisateur simple. Il reste évolutif : une
                authentification par token ou un mode HTTPS pourraient être ajoutés pour renforcer encore
                la sécurité sur des réseaux partagés.
            </p>

            <div className="link-container">
                <Link href="https://github.com/theo-vanbandon/localshare" className="styled-link" target="_blank">
                    📂 Voir le code sur GitHub
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
