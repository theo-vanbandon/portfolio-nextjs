import Link from "next/link";

type Project = {
    title: string;
    description: string;
    link: string;
    technologies: string[];
    date: string;
    duree: string;
};

const projects: Project[] = [
    {
        title: "Générateur de spéciale de rallye",
        description: "Application web de génération automatique de spéciales de rallye basée sur OpenStreetMap avec détection d'intersections et export multi-formats.",
        link: "/experiences/rally-stage-generator",
        technologies: ["React", "Node.js", "Express", "Leaflet", "OpenStreetMap"],
        date: "Novembre 2025",
        duree: "3 semaines",
    },
    {
        title: "Réseau social : Watif",
        description: "Réalisation d'un réseau social basé sur la question \"Et si ?\" avec de la génération d'images.",
        link: "/experiences/watif",
        technologies: ["Spring", "React", "MongoDB", "Python"],
        date: "",
        duree: "6 semaines",
    },
    {
        title: "Stage refonte d'un site",
        description: "Refonte du site web de l'Association des Naturalistes de la Gohelle en partant d'un projet existant.",
        link: "/experiences/stage",
        technologies: ["Laravel", "HTML", "BDD", "Git"],
        date: "21 Mai 2024 - 15 Juillet 2024",
        duree: "8 semaines",
    },
    {
        title: "Marathon du web",
        description: "Participation à un marathon pour développer une application innovante en 36 heures.",
        link: "/experiences/marathon-web",
        technologies: ["Laravel", "HTML", "BDD"],
        date: "20 Décembre 2023 - 21 Décembre 2023",
        duree: "48 heures",
    },
    {
        title: "Ray Tracing",
        description: "Génération de formes (sphères, triangles) en ajoutant des lumières et calculer leurs ombres et reflets.",
        link: "/experiences/ray-tracing",
        technologies: ["Java"],
        date: "23 Octobre 2023 - 27 Octobre 2023",
        duree: "5 jours",
    },
    {
        title: "Vibration d'un moteur",
        description: "Création d'une application mesurant les vibrations d'un moteur afin de définir son état de santé.",
        link: "/experiences/vibrations",
        technologies: ["ESP32", "Node.js", "MQTT"],
        date: "Janvier - Juin 2023",
        duree: "",
    },
    {
        title: "Stage à la DSI",
        description: "Masterisation de postes visant à remplacer l'actuel parc informatique.",
        link: "/experiences/dsi",
        technologies: ["Boot PXE", "Masterisation", "Téléphonie"],
        date: "30 Mai 2022 - 8 Juillet 2022",
        duree: "6 semaines",
    },
];

export default function Experiences() {
    return (
        <section id="experiences" className="experiences-section">
            <h2 className="text-2xl font-bold mb-6">Expériences</h2>
            <h3>Stage et projets</h3>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h4 className="project-title">{project.title}</h4>
                        {project.date && (
                            <p className="project-date">{project.date}</p>
                        )}
                        {project.duree && (
                            <p className="project-duree">{project.duree}</p>
                        )}
                        <p className="project-description">{project.description}</p>
                        <ul className="technologies-list">
                            {project.technologies.map((tech, techIndex) => (
                                <li key={techIndex} className="technology">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <Link href={project.link} className="project-link">
                            En savoir plus →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
