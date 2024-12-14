import "./styles/globals.css";
import './styles/fonts.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
        <head>
            {/* Favicon SVG */}
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <title>Théo Vanbandon - Portfolio</title>
            {/* Autres meta informations */}
        </head>
        <body className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow container mx-auto p-4">
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
