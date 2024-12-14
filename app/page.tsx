import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";
const Studies = dynamic(() => import('./components/Studies'));
const Experiences = dynamic(() => import('./components/Experiences'));
const Competences = dynamic(() => import('./components/Competences'));


export default function HomePage() {
    return (
        <section id="home">
            <div className="hero">
                {/* Zone de texte */}
                <div className="hero-text">
                    <h1>Bienvenue sur mon</h1>
                    <p>PORTFOLIO</p>
                    <p>
                        Je suis Théo Vanbandon, développeur passionné par la création d&apos;applications web et
                        logicielles.
                        Mon approche consiste à allier technologie et simplicité pour répondre aux besoins des
                        utilisateurs.
                    </p>
                    <p>
                        Toujours curieux d&apos;apprendre et d&apos;explorer de nouvelles technologies, je
                        m&apos;efforce de livrer des
                        projets qui respectent à la fois les attentes des utilisateurs et les bonnes pratiques du
                        développement.
                    </p>
                    <p>
                        Explorez mon portfolio pour découvrir mes expériences, projets et aspirations.
                    </p>
                </div>

                {/* Photo */}
                <div className="hero-photo">
                    <Image
                        src="/images/me.webp"
                        alt="Théo Vanbandon"
                        width={800}
                        height={450}
                    />
                </div>
            </div>

            <div className="link-container">
            <Link href="/files/CV%20Théo%20Vanbandon.pdf" className="back-link" download>
                    Téléchargez mon CV ici
                </Link>
            </div>

            {/* Barre horizontale */}
            <hr className="horizontal-bar"/>

            <Studies/>

            {/* Barre horizontale */}
            <hr className="horizontal-bar"/>

            <Experiences/>

            {/* Barre horizontale */}
            <hr className="horizontal-bar"/>

            <Competences/>

        </section>
    );
}
