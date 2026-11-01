export type Level = "débutant" | "intermédiaire" | "avancé";

export type Skill = {
    name: string;
    color: string;
    level: Level;
};

export type SkillCategory = {
    title: string;
    skills: Skill[];
};

export const levelToPercent: Record<Level, number> = {
    "débutant": 25,
    "intermédiaire": 55,
    "avancé": 80,
};

// Couleurs des logos, éclaircies quand elles seraient invisibles sur le fond sombre.
// Les logos noirs utilisent var(--text) pour suivre le thème clair / sombre.
export const skillCategories: SkillCategory[] = [
    {
        title: "Langages de programmation",
        skills: [
            { name: "Java", color: "#F89820", level: "avancé" },
            { name: "PHP", color: "#8892BF", level: "avancé" },
            { name: "HTML", color: "#E34F26", level: "avancé" },
            { name: "CSS", color: "#2D8FE0", level: "avancé" },
            { name: "TypeScript", color: "#3178C6", level: "avancé" },
            { name: "JavaScript", color: "#F7DF1E", level: "avancé" },
            { name: "Python", color: "#4B8BBE", level: "intermédiaire" },
            { name: "C++", color: "#659AD2", level: "débutant" },
            { name: "Kotlin", color: "#7F52FF", level: "débutant" },
        ],
    },
    {
        title: "Frameworks & bibliothèques",
        skills: [
            { name: "Spring", color: "#6DB33F", level: "avancé" },
            { name: "Laravel", color: "#FF2D20", level: "avancé" },
            { name: "Next.js", color: "var(--text)", level: "avancé" },
            { name: "React", color: "#61DAFB", level: "avancé" },
            { name: "Symfony", color: "var(--text)", level: "intermédiaire" },
            { name: "Angular", color: "#DD0031", level: "intermédiaire" },
            { name: "Flask", color: "var(--text)", level: "débutant" },
        ],
    },
    {
        title: "Bases de données",
        skills: [
            { name: "MySQL", color: "#4479A1", level: "avancé" },
            { name: "MongoDB", color: "#47A248", level: "avancé" },
            { name: "SQLite", color: "#0F80CC", level: "avancé" },
            { name: "PostgreSQL", color: "#336791", level: "débutant" },
            { name: "Neo4j", color: "#008CC1", level: "débutant" },
        ],
    },
];
