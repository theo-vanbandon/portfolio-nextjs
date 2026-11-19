import Link from "next/link";

export default function RallyStageGenerator() {
    return (
        <section id="rally-stage-project" className="project-detail-section">
            <h2>Rally Stage Generator</h2>
            <p className="project-date">Novembre 2025 (V1, 3 semaines) · Novembre 2026 (refonte V2, 2 semaines)</p>

            <h3>Présentation</h3>
            <p>
                Rally Stage Generator est une application web qui génère automatiquement des spéciales de rallye
                réalistes autour d&apos;une commune française. Elle prépare aussi ce qu&apos;un organisateur doit
                prévoir autour : l&apos;ordre du rallye, les liaisons entre les épreuves, le point stop, le roadbook
                et les exports GPS.
            </p>
            <p>
                La V2 s&apos;appuie sur le réseau routier officiel de l&apos;IGN (BD TOPO®) qui est bien plus riche
                qu&apos;OpenStreetMap pour cette utilisation. On y trouve les revêtements, la largeur et le sens de
                circulation des routes, les zones urbaines, les altitudes, ainsi que les cours d&apos;eau et plans
                d&apos;eau. Une interface React affiche le tout sur une carte IGN interactive.
            </p>

            <h3>Objectif du projet</h3>
            <p>
                Proposer aux passionnés et aux organisateurs de rallye un outil qui ne se contente pas de tracer un
                parcours, mais qui prépare une journée de rallye cohérente. Il fournit trois spéciales qu&apos;on
                peut courir le même jour sans qu&apos;elles se gênent, des liaisons praticables entre elles et un
                roadbook au format organisateur, téléchargeable en PDF.
            </p>

            <h3>Fonctionnalités principales</h3>
            <ul className="features-list">
                <li><strong>Génération de spéciales</strong> sur les petites routes hors agglomération, avec revêtement (asphalte, terre, mixte) et longueur au choix. L&apos;algorithme favorise les routes sinueuses et évite les lignes droites, les allers-retours et les tracés déjà proposés</li>
                <li><strong>Trois tracés compatibles</strong> sans carrefour commun, avec au moins 250 m d&apos;écart, et sans départ, arrivée ou point stop bloqué par une autre spéciale, puisqu&apos;elles sont toutes fermées en même temps</li>
                <li><strong>Boucles</strong> en option (passage au même carrefour ou portion commune parcourue deux fois) avec des flèches de sens sur la carte</li>
                <li><strong>Sens inverse</strong> de chaque tracé, avec son propre roadbook, son profil et son point stop</li>
                <li><strong>Ordre du rallye</strong> réglable par glisser-déposer, et <strong>liaisons</strong> calculées entre les ES par le trajet le plus rapide en respectant les sens interdits. Une liaison est toujours proposée, avec le compromis signalé si besoin</li>
                <li><strong>Point stop</strong> placé environ 300 m après l&apos;arrivée lancée, jamais dans une impasse ni derrière une autre spéciale</li>
                <li><strong>Vigilance eau</strong> qui repère les rares endroits où une étendue d&apos;eau borde l&apos;extérieur d&apos;un virage et où des plongeurs peuvent être nécessaires</li>
                <li><strong>Roadbook d&apos;organisateur</strong> à l&apos;écran, avec cases numérotées, kilométrages total et partiel, tulipes dessinées, dangers, CH, arrivée lancée et point stop. Un clic sur une case la montre sur la carte</li>
                <li><strong>Roadbook des liaisons</strong> avec des cases uniquement là où le pilote doit agir, les ronds-points avec leur numéro de sortie et le temps imparti selon une moyenne réglable</li>
                <li><strong>Roadbook PDF</strong> en A5 ou A4 avec page de garde, ordre du rallye, plan d&apos;ensemble et tulipes vectorielles</li>
                <li><strong>Exports GPX, KML et GeoJSON</strong> avec waypoints (départ, arrivée, point stop, passages de boucle). En GPX un fichier par spéciale regroupés dans une archive zip</li>
                <li><strong>Profil altimétrique</strong> interactif, statistiques (sinuosité, lignes droites, dénivelé, pente max, revêtement) et lien de partage qui rouvre exactement la même vue</li>
            </ul>

            <h3>Tâches réalisées</h3>
            <h4>Données et algorithmes (backend Node.js / Express)</h4>
            <ul className="features-list">
                <li>Migration d&apos;OpenStreetMap vers la BD TOPO de l&apos;IGN, avec téléchargement paginé, compactage des tronçons et cache disque compressé</li>
                <li>Construction d&apos;un graphe routier écrit à la main (réseau des spéciales et réseau des liaisons, sens de circulation, repérage des agglomérations par densité de rues)</li>
                <li>Génération par marches aléatoires pondérées avec une note pour chaque candidat (sinuosité, longueur, revêtement, zones habitées, proximité du tracé avec lui-même) et des critères assouplis quand une zone est pauvre en routes adaptées au rallye</li>
                <li>Algorithmes de boucle par recherche de carrefours pivots et marche aller puis retour par Dijkstra</li>
                <li>Sélection de spéciales compatibles avec écart minimal mesuré sur une grille spatiale</li>
                <li>Liaisons par Dijkstra sur le temps de parcours, avec 5 niveaux de compromis et un nouvel essai sur une zone élargie</li>
                <li>Roadbook avec regroupement des carrefours, tulipes calculées sur la vraie courbure des routes, détection des ronds-points et suppression des cases inutiles</li>
                <li>Détection des zones où une voiture qui sort de la route risque de finir dans l&apos;eau en croisant les cours d&apos;eau et plans d&apos;eau de l&apos;IGN avec les virages rapides dont l&apos;extérieur borde l&apos;eau</li>
            </ul>

            <h4>Interface (React)</h4>
            <ul className="features-list">
                <li>Interface responsive avec carte IGN (Leaflet) et légende dynamique</li>
                <li>Spéciales réordonnables par glisser-déposer, au clavier ou avec des boutons, et sélecteur de roadbook</li>
                <li>Dessin des tulipes en SVG, partagé avec la génération du PDF</li>
                <li>Génération du PDF dans le navigateur avec jsPDF</li>
                <li>Exports GPX, KML et GeoJSON</li>
            </ul>

            <h4>Qualité</h4>
            <ul className="features-list">
                <li>342 tests unitaires et d&apos;intégration (Jest, React Testing Library, Supertest) avec une couverture en lignes de 97 % côté backend et 83 % côté frontend</li>
                <li>Banc de validation sur données réelles qui contrôle automatiquement chaque génération sur une trentaine de communes de toute la France (montagne, littoral, plaine, métropoles, îles)</li>
                <li>Mentions légales (éditeur, hébergeur, sources des données, avertissement)</li>
            </ul>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li>React</li>
                <li>Leaflet & React-Leaflet</li>
                <li>Node.js & Express 5</li>
                <li>IGN BD TOPO® & Géoplateforme</li>
                <li>geo.api.gouv.fr</li>
                <li>jsPDF</li>
                <li>Jest & React Testing Library</li>
                <li>Supertest</li>
                <li>Git & GitHub</li>
                <li>Render</li>
            </ul>

            <h3>Architecture du projet</h3>
            <ul className="features-list">
                <li><strong>Backend :</strong> API REST découpée en routes (<code>/generate</code>, <code>/liaisons</code>, <code>/water</code>) et en services (téléchargement IGN, graphe routier, génération des spéciales, liaisons, vigilance eau, cache)</li>
                <li><strong>Frontend :</strong> composants React réutilisables (carte, onglets, roadbook, tulipes, profil, popup), services pour l&apos;API, les exports et le PDF, et utilitaires de géométrie partagés</li>
                <li><strong>Tests et validation :</strong> tests unitaires sur des réseaux synthétiques et banc de validation sur les données IGN réelles</li>
            </ul>

            <h3>Défis techniques rencontrés</h3>
            <ul className="features-list">
                <li><strong>Mémoire sur un hébergement gratuit (512 Mo) :</strong> Une zone de 20 km compte plus de 100 000 tronçons. Il a fallu stocker les géométries en tableaux typés, libérer les données brutes pendant la construction du graphe et plafonner le cache pour éviter les redémarrages du serveur. Le pic mesuré est passé de 439 à 383 Mo</li>
                <li><strong>Réalisme rallye :</strong> Un point stop qui ne finit jamais dans une impasse, des spéciales qui ne bloquent pas l&apos;accès aux autres, et des liaisons sans demi-tour qui respectent les sens interdits</li>
                <li><strong>Lisibilité des roadbooks :</strong> Les données IGN découpent un carrefour en plusieurs nœuds (ronds-points, îlots, terre-pleins). Il a fallu les regrouper, n&apos;afficher une case que là où le pilote doit agir et dessiner des tulipes compréhensibles</li>
                <li><strong>Validation sur données réelles :</strong> Les tests unitaires ne suffisent pas pour un algorithme de génération. Il a fallu concevoir un banc de validation qui teste automatiquement chaque génération sur une trentaine de communes de toute la France</li>
            </ul>

            <h3>Méthode de travail</h3>
            <p>
                Pour la V2, j&apos;ai utilisé Claude Code comme assistant pour accélérer l&apos;écriture du code. Les
                décisions restaient les miennes, qu&apos;il s&apos;agisse des fonctionnalités, des règles d&apos;un
                vrai rallye (point stop, liaisons, roadbook) ou de la validation de chaque génération sur de vraies
                communes.
            </p>

            <h3>Conclusion</h3>
            <p>
                La V1 m&apos;avait fait découvrir les données géospatiales et les algorithmes de graphe. Avec la
                refonte, je suis allé plus loin en concevant des algorithmes complets pour la génération, la
                compatibilité des spéciales, les liaisons et le roadbook. J&apos;ai aussi appris à faire tenir une
                application dans très peu de mémoire en production, et à valider un algorithme sur des données
                réelles, pas seulement avec des tests unitaires. Le projet est passé d&apos;un générateur de tracé à
                un véritable outil de préparation de rallye, pensé pour les organisateurs.
            </p>

            <div className="link-container">
                <Link href="https://rally-stage-generator-front.onrender.com" className="styled-link" target="_blank" rel="noopener noreferrer">
                    🚀 Voir l&apos;application en ligne
                </Link>
                <Link href="https://github.com/theo-vanbandon/rally-stage-generator" className="styled-link" target="_blank" rel="noopener noreferrer">
                    📂 Voir le code sur GitHub
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
