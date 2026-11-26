import Link from "next/link";
import Image from "next/image";

export default function PortWatch() {
    return (
        <section id="portwatch-project" className="project-detail-section">
            <h2>Serveur domestique &amp; PortWatch</h2>
            <p className="project-date">Octobre 2026 (Durée : 2 semaines)</p>

            <h3>Le point de départ</h3>
            <p>
                Tout est parti d&apos;un carton de matériel électronique récupéré. Il y avait un Raspberry Pi 3B de
                2015, un écran tactile, un module de refroidissement et différents capteurs. J&apos;ai d&apos;abord
                cherché à quoi ce matériel pouvait servir mais aucune des pistes envisagées (serveur média, bloqueur
                de publicités, caméra thermique, boîtier de diagnostic auto) ne répondait à un vrai besoin.
            </p>
            <p>
                J&apos;ai donc changé d&apos;approche en partant de mes besoins plutôt que du matériel. Le Raspberry
                est donc devenu un petit serveur domestique qui héberge deux applications : LocalShare mon outil de
                transfert de fichiers déjà existant et PortWatch que j&apos;ai développé pour l&apos;occasion.
            </p>

            <h3>Le serveur</h3>
            <p>
                Le Raspberry tourne sous Raspberry Pi OS Lite sans interface graphique pour économiser la RAM.
                De ce fait, je le gère à distance en SSH. Chaque application tourne comme un service systemd. Elle démarre toute seule avec la machine et redémarre
                toute seule après un plantage ou une coupure de courant. Les deux applications se partagent
                les ports, 5000 pour PortWatch et 5001 pour LocalShare.
            </p>

            <Image
                src="/images/portwatch-raspberry.webp"
                alt="Le Raspberry Pi 3B utilisé comme serveur, dans son boîtier"
                width={1600}
                height={1200}
                className="project-image"
                loading="lazy"
            />

            <h3>Objectif de PortWatch</h3>
            <p>
                Avec plusieurs services qui tournent sur le réseau local, il fallait ouvrir chaque adresse une par
                une pour savoir s&apos;ils fonctionnaient encore. PortWatch répond à ce besoin avec une page web qui
                montre d&apos;un coup d&apos;œil l&apos;état de chaque service.
            </p>

            <Image
                src="/images/portwatch-app.webp"
                alt="Interface de PortWatch avec le formulaire d'ajout et deux services en ligne"
                width={1060}
                height={661}
                className="project-image"
                loading="lazy"
            />

            <h3>Fonctionnalités principales</h3>
            <ul className="features-list">
                <li><strong>Ajout de services</strong> depuis la page web avec un hôte et un port. On peut surveiller le Raspberry lui-même, les applications hébergées sur celui-ci, mais aussi la box, un autre ordinateur ou une imprimante réseau</li>
                <li><strong>Deux modes de vérification.</strong> Le mode TCP vérifie que le port accepte une connexion, le mode HTTP vérifie que le serveur répond vraiment. Un port ouvert ne prouve pas qu&apos;un service fonctionne, un processus bloqué peut le garder ouvert sans plus rien servir</li>
                <li><strong>État de chaque service</strong> en ligne ou hors ligne, avec le temps de réponse et un éventuel motif d&apos;échec (nom introuvable, connexion refusée, délai dépassé)</li>
                <li><strong>Actions</strong> pour retester un service, tout actualiser ou supprimer une entrée</li>
                <li><strong>Lien direct</strong> vers chaque service web qui fonctionne</li>
            </ul>

            <h3>Le bug principal</h3>
            <p>
                Un service installé sur la même machine que PortWatch mettait 2 secondes à répondre alors
                qu&apos;il aurait dû répondre presque instantanément. J&apos;ai d&apos;abord tenté une correction en
                devinant la cause, sans résultat. J&apos;ai alors écrit un petit outil qui chronomètre chaque étape
                de la connexion pour faire apparaître le problème.
            </p>
            <p>
                Pour joindre un service sur sa propre machine, on utilise l&apos;adresse &quot;localhost&quot;. Elle
                correspond à deux adresses, une en IPv6 et une en IPv4. Le service n&apos;écoutait qu&apos;en IPv4,
                mais PortWatch essayait d&apos;abord l&apos;IPv6 et attendait 2 secondes avant de passer à la
                bonne.
            </p>
            <p>
                PortWatch essaie maintenant toutes les adresses en même temps et garde la première qui répond. Le
                temps de réponse est passé de 2 secondes à quelques millisecondes.
            </p>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>API REST</li>
                <li>Raspberry Pi</li>
                <li>Linux</li>
                <li>systemd</li>
                <li>SSH</li>
            </ul>

            <h3>Architecture du projet</h3>
            <p>
                PortWatch est écrit en Python sans aucune bibliothèque externe. La liste des services est
                enregistrée dans un simple fichier JSON plutôt que dans une base de données. Cela suffit pour une
                vingtaine d&apos;entrées sans historique à conserver.
            </p>
            <ul className="features-list">
                <li><strong>Backend :</strong> un serveur Python qui gère à la fois l&apos;API et l&apos;affichage de la page. Le code est réparti en plusieurs fichiers, un pour les routes, un pour les vérifications et la sauvegarde, et un pour les fonctions utilitaires</li>
                <li><strong>Frontend :</strong> modules JavaScript séparés par rôle (appels à l&apos;API, affichage de la liste, notifications)</li>
                <li><strong>Outils :</strong> script de diagnostic des temps de connexion et modèle de service systemd pour le déploiement</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
                Aujourd&apos;hui les deux applications PortWatch et LocalShare tournent en continu sur le Raspberry
                et me servent dès que j&apos;en ai besoin. Ce projet concret m&apos;a permis de renforcer ma
                pratique de Linux et de choisir mes outils en fonction des limites du matériel.
            </p>
            <p>
                Par la suite j&apos;aimerais remplacer le bloc d&apos;alimentation. Faute d&apos;avoir celui
                d&apos;origine, j&apos;utilise un bloc de récupération qui alimente mal le Raspberry. Cela
                provoque des baisses de tension qui ralentissent la machine et pourraient à terme abîmer la carte
                SD. Je prévois aussi d&apos;ajouter une boîte à outils pour les PDF, pour les découper, les
                fusionner, en retirer une page ou les compresser. Un système de compression pourrait également
                être ajouté pour les images, en restant dans les limites du Raspberry.
            </p>

            <div className="link-container">
                <Link href="/experiences/localshare" className="download-link">
                    🔗 Voir le projet LocalShare
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
