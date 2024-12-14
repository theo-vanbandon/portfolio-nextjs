import Link from "next/link";

type Study = {
    year: string;
    title: string;
    location: string;
    locationLink: string;
    detailsLink: string;
};

const studies: Study[] = [
    {
        year: "Septembre 2023 à aujourd'hui",
        title: "BUT Informatique",
        location: "IUT de Lens",
        locationLink: "http://www.iut-lens.univ-artois.fr/",
        detailsLink: "https://www.letudiant.fr/etudes/dut/but-informatique-ex-dut-informatique.html",
    },
    {
        year: "Septembre 2021 à Juillet 2023",
        title: "BTS SNIR",
        location: "Lycée Gustave Eiffel, Armentières",
        locationLink: "https://lycee-gustave-eiffel.fr/",
        detailsLink: "https://www.letudiant.fr/etudes/bts/bts-sn-systemes-numeriques.html",
    },
    {
        year: "Septembre 2018 à Juillet 2021",
        title: "Bac STI2D",
        location: "Lycée Saint-Joseph, Hazebrouck",
        locationLink: "https://lycee-saintjoseph.eu/",
        detailsLink:
            "https://www.onisep.fr/formation/apres-la-3-la-voie-generale-et-technologique/qu-est-ce-que-la-voie-generale-et-technologique/la-voie-technologique-en-premiere-et-terminale/le-bac-sti2d-sciences-et-technologies-de-l-industrie-et-du-developpement-durable",
    },
];

export default function Studies() {
    return (
        <section id="formations" className="studies-section">
            <h2 className="text-2xl font-bold mb-6">Formations</h2>
            <div className="studies-timeline">
                {studies.map((study, index) => (
                    <div key={index} className="study-item">
                        <div className="study-year">{study.year}</div>
                        <div className="study-details">
                            <Link href={study.detailsLink} target="_blank" className="study-title">
                                {study.title}
                            </Link>
                            <Link href={study.locationLink} target="_blank" className="study-location">
                                {study.location}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
