"use client";

import { useEffect, useRef, useState } from "react";

type Level = "débutant" | "intermédiaire" | "avancé";

const levelToPercent: Record<Level, number> = {
    "débutant": 25,
    "intermédiaire": 55,
    "avancé": 80,
};

const SkillBar = ({ name, color, level, animated }: {
    name: string;
    color: string;
    level: Level;
    animated: boolean;
}) => (
    <div className="skill-row">
        <span className="skill-pill">{name}</span>
        <div className="bar-bg">
            <div
                className="bar-fill"
                style={{
                    width: animated ? `${levelToPercent[level]}%` : "0%",
                    backgroundColor: color,
                    transition: animated ? "width 1.4s ease" : "none",
                }}
            />
        </div>
        <span className="bar-label">{level}</span>
    </div>
);

export default function Competences() {
    const langages: { name: string; color: string; level: Level }[] = [
        { name: "Java", color: "#F89820", level: "avancé" },
        { name: "PHP", color: "#777BB4", level: "avancé" },
        { name: "HTML", color: "#E34F26", level: "avancé" },
        { name: "CSS", color: "#1572B6", level: "avancé" },
        { name: "TypeScript", color: "#3178C6", level: "avancé" },
        { name: "JavaScript", color: "#F7DF1E", level: "avancé" },
        { name: "Python", color: "#3776AB", level: "intermédiaire" },
        { name: "C++", color: "#00599C", level: "débutant" },
        { name: "Kotlin", color: "#7F52FF", level: "débutant" },
    ];

    const frameworks: { name: string; color: string; level: Level }[] = [
        { name: "Spring", color: "#6DB33F", level: "avancé" },
        { name: "Laravel", color: "#FF2D20", level: "avancé" },
        { name: "Next.js", color: "#000000", level: "avancé" },
        { name: "React", color: "#61DAFB", level: "avancé" },
        { name: "Symfony", color: "#000000", level: "intermédiaire" },
        { name: "Angular", color: "#DD0031", level: "intermédiaire" },
        { name: "Flask", color: "#000000", level: "débutant" },
        { name: "CodeIgniter", color: "#EF4223", level: "débutant" },
    ];

    const databases: { name: string; color: string; level: Level }[] = [
        { name: "MySQL", color: "#4479A1", level: "avancé" },
        { name: "MongoDB", color: "#47A248", level: "avancé" },
        { name: "SQLite", color: "#003B57", level: "avancé" },
        { name: "PostgreSQL", color: "#336791", level: "débutant" },
        { name: "Neo4j", color: "#008CC1", level: "débutant" },
    ];

    const sectionRef = useRef<HTMLElement>(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimated(true);
                } else {
                    setAnimated(false);
                }
            },
            { threshold: 0 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="competences" className="competences-section" ref={sectionRef}>
            <h2 className="text-2xl font-bold mb-6">Compétences</h2>
            <h3>mon stack technique...</h3>

            <div className="competences-block">
                <p className="competences-category-title">Langages de programmation</p>
                <div className="competences-card">
                    {langages.map((skill) => (
                        <SkillBar key={skill.name} {...skill} animated={animated} />
                    ))}
                </div>
            </div>

            <div className="competences-two-col">
                <div className="competences-block">
                    <p className="competences-category-title">Frameworks & bibliothèques</p>
                    <div className="competences-card">
                        {frameworks.map((skill) => (
                            <SkillBar key={skill.name} {...skill} animated={animated} />
                        ))}
                    </div>
                </div>

                <div className="competences-block">
                    <p className="competences-category-title">Bases de données</p>
                    <div className="competences-card">
                        {databases.map((skill) => (
                            <SkillBar key={skill.name} {...skill} animated={animated} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
