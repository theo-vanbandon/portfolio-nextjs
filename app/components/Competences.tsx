"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { levelToPercent, skillCategories, Skill } from "../data/skills";

const SkillBar = ({ name, color, level, animated }: Skill & { animated: boolean }) => (
    <div className="skill-row">
        <span className="skill-name">{name}</span>
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
    const sectionRef = useRef<HTMLElement>(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setAnimated(entry.isIntersecting),
            { threshold: 0 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="competences" className="section" ref={sectionRef}>
            <SectionTitle index="03" title="Compétences" comment="mon stack technique" />

            <div className="skills-grid">
                {skillCategories.map((category) => (
                    <div key={category.title} className="skills-card">
                        <p className="skills-card-title">{category.title}</p>
                        {category.skills.map((skill) => (
                            <SkillBar key={skill.name} {...skill} animated={animated} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
