export default function Competences() {
    const competences = {
        "Langages de programmation": [
            "Java",
            "PHP",
            "HTML",
            "CSS",
            "TypeScript",
            "JavaScript",
            "Python",
            "C++",
            "Kotlin",
        ],
        Frameworks: [
            "Spring (Java)",
            "Laravel (PHP)",
            "React (TypeScript)",
            "Next.js (TypeScript)",
            "Angular (TypeScript)",
            "CodeIgniter (PHP)",
            "Flask (Python)",
        ],
        IDE: [
            "Suite JetBrains",
            "Visual Studio Code",
            "Eclipse",
        ],
    };

    // Fonction pour générer le chemin des icônes
    const getIconPath = (skill: string) => {
        const formattedSkill = skill
            .toLowerCase() // Met tout en minuscules
            .replace(/\s+/g, '-') // Remplace les espaces par des tirets
            .replace(/[()]/g, ''); // Supprime les parenthèses
        return `/icons/${formattedSkill}.svg`;
    };

    return (
        <section id="competences" className="competences-section">
            <h2 className="text-2xl font-bold mb-6">Compétences</h2>
            <h3>Langages de programmation, outils et autres...</h3>
            <div className="competences-grid">
                {Object.entries(competences).map(([category, skills], index) => (
                    <div key={index} className="competences-category">
                        <h4 className="category-title">{category}</h4>
                        <ul className="skills-list">
                            {skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="skill-item">
                                    {/* Ajout de l'icône */}
                                    <img
                                        src={getIconPath(skill)}
                                        alt={`${skill} logo`}
                                        className="skill-icon"
                                        loading="lazy"
                                    />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
