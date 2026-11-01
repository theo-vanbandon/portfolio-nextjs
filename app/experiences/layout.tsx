import Link from "next/link";
import "../styles/project.css";

export default function ExperienceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="project-page">
            <Link href="/#experiences" className="project-breadcrumb">
                <span className="accent">cd</span> ../experiences
            </Link>
            {children}
        </div>
    );
}
