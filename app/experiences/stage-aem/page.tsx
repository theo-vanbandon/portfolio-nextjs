import Link from "next/link";
import "../../styles/Experiences/rally-stage-generator.css";

export default function StageAem() {
    return (
        <section id="stage-aem-project" className="project-detail-section">
            <h2 className="text-2xl font-bold mb-6">Stage chez AEM</h2>
            <p className="project-date">24 Juin 2026 - 30 Septembre 2026 (Durée : 14 semaines)</p>

            <h3>Présentation</h3>
            <p>
                Dans le cadre de ma troisième année de BUT Informatique à l&apos;IUT de Lens, j&apos;ai effectué
                mon stage chez AEM (Atelier Engrenages Mécaniques), à La Chapelle-d&apos;Armentières. Cette entreprise
                assure aujourd&apos;hui la fourniture et la réparation de moto-réducteurs.
            </p>

            <h3>Le point de départ</h3>
            <p>
                À mon arrivée, l&apos;informatique de l&apos;entreprise reposait sur un PC de 2013 sous Windows 7,
                le logiciel de comptabilité CIEL La Solution 2001 (obsolète depuis longtemps) et des stocks gérés
                sur papier. Il n&apos;y avait pas de site web, seulement une fiche Google. Trois missions étaient
                prévues : moderniser le parc informatique, créer un site web et développer un outil de gestion
                des stocks.
            </p>
            <p>
                J&apos;ai travaillé seul, en trois phases : à l&apos;IUT jusqu&apos;au 21 juillet, puis sur place,
                puis de nouveau à l&apos;IUT du 26 août au 30 septembre. Le suivi du projet se faisait sur GitHub,
                avec une branche par fonctionnalité et des labels (TO DO, DOING, DONE, TEST, BUG, NEXT MAJ).
            </p>

            <h3>L&apos;imprévu</h3>
            <p>
                Le 15 juillet, CIEL s&apos;est corrompu : plus d&apos;impression possible, des menus inutilisables,
                et surtout l&apos;entreprise ne pouvait plus émettre ni devis ni factures. J&apos;ai tenté plusieurs
                restaurations : une réinstallation (bloquée par un conflit de chemins entre C:/ et G:/), une
                machine virtuelle Windows XP sous VirtualBox, puis une mise à jour de la v7 vers une version
                compatible avec les données de la v10, qui s&apos;est arrêtée sur un mot de passe non documenté.
            </p>
            <p>
                Avec le gérant, nous avons décidé de développer une application de facturation de remplacement.
                Elle est devenue la priorité et le site web a été mis en pause.
            </p>

            <h3>Application de facturation</h3>
            <p>
                Développée avec Laravel et MySQL et utilisée en local, elle reproduit le circuit documentaire de
                l&apos;entreprise. C&apos;est une solution de transition en attendant la facturation électronique
                obligatoire.
            </p>
            <ul className="features-list">
                <li>Suivi complet d&apos;une affaire : devis (brouillon, validé ou non retenu), bon de livraison puis facture</li>
                <li>Factures non modifiables, à l&apos;exception de leur statut (en attente / payée), accusés de réception et avoirs si besoin</li>
                <li>Génération des PDF avec DomPDF : double rendu pour afficher la pagination « 1/2 », montants recalculés à partir des articles (remise puis TVA), logo encodé en base64</li>
                <li>Archivage automatique classé par client / année / affaire, avec un dossier renommé au fil du processus (<code>DE2000</code>, puis <code>DE2000 - BL4500</code>, puis <code>DE2000 - BL4500 - AEM5200</code>)</li>
                <li>PDF versionnés (<code>_v2</code>) et suppression des dossiers vides</li>
                <li>Tests automatisés sur les contrôleurs et les règles métier (impossible de modifier un document validé)</li>
                <li>Page de statistiques et guide utilisateur</li>
            </ul>

            <h3>Modernisation du parc informatique</h3>
            <ul className="features-list">
                <li>Achat d&apos;un Dell OptiPlex 7070 d&apos;occasion (i5-9500, 16 Go, SSD NVMe) pour environ 171 €, installation propre de Windows 11 et de l&apos;antivirus Bitdefender</li>
                <li>Déploiement de l&apos;application de facturation en local sur ce poste avec Laragon (Apache, PHP 8.3, MySQL), lancé au démarrage</li>
                <li>Sauvegarde quotidienne de la base de l&apos;application de facturation par tâche planifiée à 12h : comparaison de hash pour supprimer les doublons et copie sur disque externe s&apos;il est branché, avec rattrapage des sauvegardes manquantes</li>
                <li>Passage de l&apos;imprimante en Ethernet pour régler les impressions bloquées</li>
            </ul>

            <h3>Site web</h3>
            <p>
                Une fois la facturation en place, j&apos;ai repris le site vitrine, développé avec Laravel et MySQL
                et hébergé chez OVHcloud. J&apos;ai d&apos;abord réalisé des maquettes sur Canva, validées avec le
                gérant. C&apos;était la première fois que je faisais des maquettes, et la page de rendez-vous a été
                refaite en 3 étapes à cette occasion.
            </p>
            <ul className="features-list">
                <li>Pages : accueil, atelier (parc machines et vidéo de taillage), prise de rendez-vous en 3 étapes, galerie de réalisations et contact</li>
                <li>Tableau de bord admin : calendrier des rendez-vous, gestion des réalisations et des périodes de fermeture</li>
                <li>Authentification admin écrite à la main, sans Fortify : seulement connexion et déconnexion, pour limiter la surface d&apos;attaque</li>
                <li>Anti-spam : honeypot qui renvoie un faux message de succès et captcha local (gregwar/captcha, sans reCAPTCHA) rafraîchi en AJAX. Aucun spam reçu depuis la mise en ligne</li>
                <li>Tests PHPUnit sur SQLite en mémoire avec <code>RefreshDatabase</code></li>
                <li>SEO : title, description et robots définis pour chaque page</li>
                <li>Mails envoyés depuis une adresse noreply du domaine, avec Reply-To renseigné et SPF / DKIM validés</li>
            </ul>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li>Laravel</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Blade</li>
                <li>DomPDF</li>
                <li>PHPUnit</li>
                <li>OVHcloud</li>
                <li>Git</li>
                <li>GitHub Actions (CI)</li>
            </ul>

            <h3>Défis techniques rencontrés</h3>
            <ul className="features-list">
                <li>Déployer sur un hébergement mutualisé OVH, choisi pour son prix de renouvellement, sans accès SSH : envoi en SFTP avec WinSCP (environ 35 minutes, surtout à cause de <code>vendor</code>) et import de la base via phpMyAdmin</li>
                <li>Adapter le projet à ces contraintes : racine du site sur <code>public/</code>, images dans <code>public/images</code> faute de <code>storage:link</code>, purge des rendez-vous de plus de 2 mois au chargement du tableau de bord faute de cron</li>
                <li>Un bug de configuration mail qui n&apos;apparaissait qu&apos;en production</li>
                <li>Maîtriser DomPDF pour obtenir des documents fiables : pagination, calcul des montants, images</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Ce stage m&apos;a appris à gérer un imprévu en repriorisant les missions, à concevoir en amont
                et à travailler en complète autonomie, sans relecture de code. C&apos;était aussi mon premier vrai
                déploiement, dont je retiens deux leçons : se renseigner sur l&apos;hébergement avant de développer
                et toujours tester en production. Les deux outils appartiennent à l&apos;entreprise (hébergement à
                son nom, application sur son matériel). Cette expérience m&apos;a conforté dans mon projet de
                devenir développeur fullstack.
            </p>

            <div className="link-container">
                <Link href="https://atelier-engrenages-mecaniques.fr" className="styled-link" target="_blank" rel="noopener noreferrer">
                    🚀 Voir le site en ligne
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
