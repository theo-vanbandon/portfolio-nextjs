import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/projects";

export default function Experiences() {
    return (
        <section id="experiences" className="section">
            <SectionTitle index="02" title="Expériences" comment="stages et projets" />
            <div className="projects-grid">
                {projects.map((project) => (
                    <Link key={project.link} href={project.link} className="project-card">
                        <div className="project-card-top">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="project-card-icon"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                />
                            </svg>
                            <span className="project-card-arrow" aria-hidden="true">↗</span>
                        </div>
                        <p className="project-card-date">
                            {project.date}
                            {project.duree && <> · {project.duree}</>}
                        </p>
                        <h3 className="project-card-title">{project.title}</h3>
                        <p className="project-card-description">{project.description}</p>
                        <ul className="tag-list">
                            {project.technologies.map((tech) => (
                                <li key={tech} className="tag">{tech}</li>
                            ))}
                        </ul>
                    </Link>
                ))}
            </div>
        </section>
    );
}
