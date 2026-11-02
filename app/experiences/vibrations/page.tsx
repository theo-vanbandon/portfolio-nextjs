import Link from "next/link";

export default function VibrationsProject() {
    return (
        <section id="vibrations-project" className="project-detail-section">
            <h2>Maintenance prédictive des machines tournantes</h2>
            <p className="project-date">Janvier - Juin 2023</p>

            <h3>Présentation</h3>
            <p>
                Ce projet de fin de BTS SNIR a été réalisé en équipe de quatre, avec un partenaire professionnel.
                Le site Emerson d&apos;Armentières, qui fabrique des vannes, des régulateurs et des équipements de
                contrôle pour l&apos;industrie. L&apos;objectif était de concevoir un prototype capable de surveiller
                en temps réel l&apos;état de santé des moteurs d&apos;une machine en mesurant leurs vibrations.
            </p>

            <h3>Pourquoi la maintenance prédictive ?</h3>
            <p>
                Il existe plusieurs façons d&apos;entretenir une machine. La maintenance <strong>corrective</strong>{" "}
                consiste à réparer une fois la panne arrivée, au risque qu&apos;une pièce défectueuse en abîme
                d&apos;autres et fasse grimper la facture. La maintenance <strong>préventive</strong> remplace les
                pièces à date fixe, même quand elles ne sont pas encore usées.
            </p>
            <p>
                La maintenance <strong>prédictive</strong> se situe entre les deux. On mesure en continu
                l&apos;état du moteur, ici ses vibrations, pour intervenir avant la panne et seulement quand
                c&apos;est nécessaire.
            </p>

            <h3>Fonctionnement du système</h3>
            <ul className="features-list">
                <li><strong>Mesure :</strong> un ESP32 équipé d&apos;un accéléromètre ADXL345 mesure les vibrations du moteur sur 3 axes et calcule leur spectre en fréquence</li>
                <li><strong>Transmission :</strong> les mesures sont envoyées en MQTT à une passerelle Edge (un Raspberry Pi) qui les enregistre dans une base MySQL</li>
                <li><strong>Analyse :</strong> un programme Node.js calcule le niveau global de vibration et le compare aux seuils de la norme ISO 10816-1</li>
                <li><strong>Alerte sur place :</strong> une colonne lumineuse installée sur la machine s&apos;allume en orange quand une maintenance est à prévoir</li>
                <li><strong>Suivi :</strong> une application web affiche les graphiques en temps réel et l&apos;historique de chaque moteur</li>
                <li><strong>À distance :</strong> les niveaux globaux sont envoyés sur le cloud pour notifier le responsable sur son téléphone, même hors de l&apos;entreprise</li>
            </ul>

            <h3>Évaluer l&apos;état d&apos;un moteur : la norme ISO 10816-1</h3>
            <p>
                Pour savoir si un moteur vibre « trop », le système s&apos;appuie sur la norme ISO 10816-1. Elle range
                d&apos;abord les moteurs en classes selon leur puissance. Notre moteur faisant moins de 15 kW, il 
                appartient à la classe 1. Pour chaque classe, elle définit ensuite des seuils qui découpent le
                niveau de vibration en quatre zones.
            </p>
            <div className="iso-section">
                <h4>Les quatre zones de vibration</h4>
                <ul>
                    <li><strong>Zone A :</strong> niveau d&apos;une machine neuve</li>
                    <li><strong>Zone B :</strong> acceptable pour un fonctionnement à long terme</li>
                    <li><strong>Zone C :</strong> insatisfaisant, une maintenance est à prévoir</li>
                    <li><strong>Zone D :</strong> vibrations assez fortes pour endommager la machine</li>
                </ul>
                <p>
                    Dans notre système, la colonne lumineuse reste éteinte en zone A ou B et s&apos;allume en orange
                    dès que le moteur passe en zone C ou D.
                </p>
            </div>

            <h3>Ma partie : configuration des ESP32 en Bluetooth</h3>
            <p>
                Chaque ESP32 doit être configuré par un technicien depuis une tablette, en Bluetooth Low Energy
                (une contrainte du sujet). La configuration n&apos;est pas la même pour un ESP qui mesure les
                vibrations et pour un ESP qui commande la colonne lumineuse.
            </p>
            <ul className="features-list">
                <li>Formulaire web en deux étapes : une partie commune (type d&apos;objet, nom et mot de passe du Wi-Fi), puis la fréquence de mesure et l&apos;identifiant du moteur, ou l&apos;identifiant de la machine pour une colonne</li>
                <li>Envoi de la configuration en BLE depuis le navigateur sous forme d&apos;un JSON unique, plutôt qu&apos;une caractéristique BLE par valeur</li>
                <li>Stockage de la configuration dans la mémoire non volatile (NVS) de l&apos;ESP32 pour qu&apos;elle soit conservée même s&apos;il est débranché</li>
                <li>Vérification du contenu de la NVS avec un petit script Python</li>
            </ul>

            <h3>Ma partie : commande de la colonne lumineuse</h3>
            <ul className="features-list">
                <li>Programme Node.js sur la passerelle Edge : réception des mesures en MQTT, calcul du niveau global, puis comparaison avec les seuils des zones stockés en base</li>
                <li>Recherche de la machine à laquelle appartient le moteur mesuré, puis envoi de la zone et de l&apos;identifiant de la machine sur le topic MQTT « Alerte »</li>
                <li>Côté ESP32 : chaque colonne lit le message, vérifie qu&apos;il concerne bien sa machine en comparant l&apos;identifiant à celui de sa NVS, puis s&apos;allume si besoin</li>
                <li>Pilotage de la colonne, alimentée en 24 V, par l&apos;ESP32 via un transistor MOSFET</li>
            </ul>

            <h3>Technologies utilisées</h3>
            <ul className="technologies-list">
                <li className="technology">ESP32</li>
                <li className="technology">C++ (Arduino)</li>
                <li className="technology">Bluetooth Low Energy</li>
                <li className="technology">Node.js</li>
                <li className="technology">MQTT</li>
                <li className="technology">MySQL</li>
                <li className="technology">Raspberry Pi</li>
                <li className="technology">HTML</li>
                <li className="technology">JavaScript</li>
            </ul>

            <h3>Résultats</h3>
            <p>
                Une fois les parties des quatre membres de l&apos;équipe assemblées, le système fonctionnait de A à
                Z. Les vibrations mesurées sur le moteur remontaient jusqu&apos;à la passerelle Edge, étaient
                analysées, s&apos;affichaient dans l&apos;application web et sur le cloud, et la colonne lumineuse
                de la machine s&apos;allumait en orange dès que le moteur passait en zone C ou D.
            </p>
            <p>
                Avant cet assemblage, j&apos;avais validé ma partie de mon côté en simulant avec l&apos;outil
                mqtt-spy des mesures correspondant à un moteur en zone D. Le programme Node.js identifiait bien la
                zone et la machine concernée, et la bonne colonne s&apos;allumait.
            </p>
            <p>
                Ce projet m&apos;a fait travailler sur l&apos;ensemble d&apos;un système connecté, de
                l&apos;électronique (ESP32, transistor, colonne 24 V) jusqu&apos;au serveur et à la base de
                données, en coordonnant mon travail avec celui des trois autres membres de l&apos;équipe.
            </p>

            <h3>Téléchargement du dossier de projet</h3>
            <p>
                Le dossier de projet complet détaille la partie de chaque membre de l&apos;équipe : mesure des
                vibrations, configuration et colonne lumineuse, application d&apos;analyse et cloud.
            </p>
            <div className="link-container">
                <Link href="/files/Dossier%20de%20projet%20maintenance%20prédictive%20des%20machines%20tournantes.pdf"
                      className="download-link" download>
                    📥 Télécharger le dossier de projet
                </Link>
                <Link href="/#experiences" className="back-link">
                    ← Retour aux expériences
                </Link>
            </div>
        </section>
    );
}
