import "../../styles/Experiences/dsi.css";
import Link from "next/link";

export default function Dsi() {
    return (
        <section className="project-detail-section">
            <h2>Stage à la DSI</h2>
            <p className="project-date">30 Mai 2022 - 8 Juillet 2022 (Durée : 6 semaines)</p>

            <h3>Présentation</h3>
            <p>
                Dans le cadre de mon BTS SNIR, j'ai effectué un stage de 6 semaines au sein de la Direction des Systèmes
                d'Information (DSI) de la société Semences de France, située à La Chapelle-d'Armentières.
                Ce stage a été l'occasion de participer à la masterisation de postes dans le cadre du renouvellement du
                parc informatique de l'entreprise.
            </p>

            <h3>Localisation du stage</h3>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952.158118851688!2d2.88122920766937!3d50.67802203135077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcd65da9bf330f%3A0x86f1161f1aeb2cbc!2sSemences%20de%20France!5e1!3m2!1sfr!2sfr!4v1734128858010!5m2!1sfr!2sfr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <h3>L'objectif du stage</h3>
            <p>
                L'objectif de mon stage était de participer au remplacement du parc informatique vieillissant. De
                nombreux nouveaux ordinateurs sont arrivés et ont dû être installés, avec la mise en place d'un
                environnement adapté aux besoins de l'entreprise.
                J'ai été en charge de la masterisation des postes afin de remplacer les anciens ordinateurs qui étaient
                devenus trop lents et ne répondaient plus aux exigences de l'entreprise (manque de RAM et de stockage).
            </p>

            <h3>Tâches réalisées</h3>
            <ul className="features-list">
                <li>Masterisation de postes (installation et configuration d'images système).</li>
                <li>Installation et configuration de logiciels nécessaires à l'activité de l'entreprise.</li>
                <li>Intégration des postes dans le domaine Active Directory et suivi du parc informatique.</li>
                <li>Gestion du réseau et de la téléphonie en entreprise (configuration des équipements réseau et des
                    téléphones IP).
                </li>
                <li>Support technique pour les utilisateurs internes.</li>
            </ul>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li>Boot PXE</li>
                <li>Masterisation</li>
                <li>Téléphonie en entreprise</li>
            </ul>

            <h3>Ce que le stage m'a apporté</h3>
            <ul className="features-list">
                <li>Notion de gestion de domaine avec Active Directory.</li>
                <li>Compréhension du réseau physique et des équipements tels que les baies de brassage, les switches, et
                    l'alimentation POE (Power Over Ethernet).
                </li>
                <li>Découverte de la téléphonie en entreprise avec le système OmniPCX.</li>
                <li>Pratique de la masterisation de postes avec des images disque au format .wim.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Ce stage m’a permis d'acquérir de solides compétences en gestion de parc informatique, en réseau et en
                téléphonie d'entreprise. J'ai également pu me familiariser avec des outils de masterisation et de
                gestion de domaine, tout en apportant une contribution importante à la mise à jour du parc informatique
                de l'entreprise.
            </p>

            <div className="link-container">
                <Link href="/files/Rapport%20de%20stage%20Semences%20de%20France.pdf" className="download-link" download>
                    Télécharger le rapport de stage
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
