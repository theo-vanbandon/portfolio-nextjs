export type Study = {
    year: string;
    title: string;
    location: string;
    locationLink: string;
    detailsLink: string;
};

export const studies: Study[] = [
    {
        year: "Septembre 2023 à Juillet 2026",
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
