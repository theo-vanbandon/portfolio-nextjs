import "../../styles/Experiences/marathonweb.css";
import Link from "next/link";

export default function MarathonWeb() {
    return (
        <section className="project-detail-section">
            <h2>Marathon du Web</h2>
            <p className="project-date">20 Décembre 2023 - 21 Décembre 2023 (Durée : 36 heures)</p>

            <h3>Présentation du projet</h3>
            <p>
                Dans le cadre du BUT, nous avons participé à un marathon de 36 heures sur le thème <em>&#34;Une histoire
                dont vous êtes le héros&#34;</em>.
                L&apos;objectif était de concevoir une application web où le contenu évolue selon les choix des
                lecteurs.
            </p>
            <p>
                Chaque équipe était composée d&apos;étudiants en BUT Informatique et BUT MMI, permettant une
                collaboration
                entre
                back-end, design et gestion de projet.
            </p>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li>Laravel</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>GitLab</li>
            </ul>

            <h3>Logiciels utilisés</h3>
            <ul className="technologies-list">
                <li>PhpStorm</li>
                <li>Visual Studio Code</li>
            </ul>

            <h3>Fonctionnalités</h3>
            <ul className="features-list">
                <li>Page d&apos;accueil affichant toutes les histoires présentes dans la base de données.</li>
                <li>Page de détails d&apos;une histoire avec avis des utilisateurs.</li>
                <li>Formulaire permettant de créer un chapitre pour une histoire.</li>
                <li>Fonctionnalité de lecture interactive avec choix utilisateur.</li>
            </ul>

            <div className="link-container">
                <a href="/files/sujet-marathon/index.html" className="styled-link" target="_blank"
                   rel="noopener noreferrer">
                    📄 Voir le sujet ici
                </a>
            </div>

            <h3>Difficultés rencontrées</h3>
            <p>
                L&apos;intégration continue via GitLab entraînait des soucis d&apos;affichage sur le serveur distant
                (images et CSS), alors que tout fonctionnait en local. La fatigue, notamment à 6h du matin, a aussi été
                un défi.
            </p>

            <h3>Bilan du marathon</h3>
            <p>
                Cette expérience m&apos;a permis de travailler en équipe avec des étudiants MMI, d&apos;approfondir mes
                compétences
                back-end, et de comprendre l&apos;importance de la gestion de projet en conditions intensives.
            </p>
            <p>
                Malgré les défis, l&apos;organisation était excellente, avec un environnement de travail stimulant
                (bornes d&apos;arcade, baby-foot) et des pauses bienvenues.
            </p>

            <div className="link-container">
                <Link href="https://github.com/theo-vanbandon/web-marathon-project" className="download-link" download>
                    📂 Voir le code sur GitHub
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
