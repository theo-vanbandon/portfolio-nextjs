import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { studies } from "../data/studies";

export default function Studies() {
    return (
        <section id="formations" className="section">
            <SectionTitle index="01" title="Formations" comment="mon parcours" />
            <ol className="timeline">
                {studies.map((study) => (
                    <li key={study.title} className="timeline-item">
                        <p className="timeline-date">{study.year}</p>
                        <Link href={study.detailsLink} target="_blank" rel="noopener noreferrer" className="timeline-title">
                            {study.title}
                        </Link>
                        <Link href={study.locationLink} target="_blank" rel="noopener noreferrer" className="timeline-location">
                            @ {study.location}
                        </Link>
                    </li>
                ))}
            </ol>
        </section>
    );
}
