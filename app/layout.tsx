import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
    src: "../public/fonts/GeistVF.woff",
    variable: "--font-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "../public/fonts/GeistMonoVF.woff",
    variable: "--font-mono",
    weight: "100 900",
});

// Exécuté avant l'affichage pour appliquer le thème enregistré sans flash (sombre par défaut)
const themeInitScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

export const metadata: Metadata = {
    title: "Théo Vanbandon - Portfolio",
    description: "Portfolio de Théo Vanbandon, développeur web et logiciel : formations, stages, projets et compétences.",
    icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body>
                <Header />
                <main className="wrap">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
