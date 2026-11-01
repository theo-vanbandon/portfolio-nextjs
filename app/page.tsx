import Link from "next/link";
import Image from "next/image";
import Studies from "./components/Studies";
import Experiences from "./components/Experiences";
import Competences from "./components/Competences";
import "./styles/home.css";

export default function HomePage() {
    return (
        <>
            <section id="home" className="hero">
                <div className="hero-text">
                    <p className="hero-prompt">
                        <span className="accent">$</span> whoami
                    </p>
                    <h1 className="hero-name">Théo Vanbandon</h1>
                    <p className="hero-role">
                        Développeur web &amp; logiciel<span className="cursor" aria-hidden="true">_</span>
                    </p>
                    <p>
                        Développeur passionné par la création d&apos;applications web et logicielles. Mon approche
                        consiste à allier technologie et simplicité pour répondre aux besoins des utilisateurs.
                    </p>
                    <p>
                        Toujours curieux d&apos;apprendre et d&apos;explorer de nouvelles technologies, je
                        m&apos;efforce de livrer des projets qui respectent à la fois les attentes des utilisateurs et
                        les bonnes pratiques du développement.
                    </p>

                    <div className="hero-actions">
                        <Link href="/files/CV%20Vanbandon%20Théo.pdf" className="btn btn-primary" download>
                            Télécharger mon CV
                        </Link>
                        <Link href="/#experiences" className="btn btn-ghost">
                            Voir mes projets →
                        </Link>
                    </div>
                </div>

                <div className="hero-photo">
                    <Image
                        src="/images/me.webp"
                        alt="Théo Vanbandon"
                        width={800}
                        height={450}
                        priority
                    />
                </div>
            </section>

            <Studies />
            <Experiences />
            <Competences />
        </>
    );
}
