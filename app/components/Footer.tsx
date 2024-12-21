import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Réseaux sociaux */}
                    <div className="w-full md:w-1/2 flex flex-col items-start">
                        <div className="social-links">
                            <p className="text-sm font-bold">Réseaux sociaux :</p>
                            <Link href="https://github.com/theo-vanbandon" className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-4 h-4 text-white"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 .5a11.5 11.5 0 00-3.637 22.41c.575.1.787-.25.787-.556v-2.125c-3.201.694-3.875-1.385-3.875-1.385-.523-1.33-1.278-1.683-1.278-1.683-1.043-.714.078-.7.078-.7 1.154.081 1.76 1.184 1.76 1.184 1.024 1.754 2.687 1.247 3.343.953.104-.741.402-1.246.732-1.532-2.553-.291-5.238-1.279-5.238-5.692 0-1.257.448-2.285 1.183-3.09-.118-.29-.512-1.464.112-3.05 0 0 .964-.309 3.164 1.182A11.095 11.095 0 0112 6.844a11.095 11.095 0 012.873.386c2.2-1.491 3.162-1.182 3.162-1.182.625 1.586.231 2.76.113 3.05.737.805 1.183 1.833 1.183 3.09 0 4.426-2.689 5.397-5.251 5.684.414.357.783 1.062.783 2.138v3.168c0 .308.212.658.79.55A11.5 11.5 0 0012 .5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Lien GitHub
                            </Link>
                            <Link href="https://www.linkedin.com/in/th%C3%A9o-vanbandon/" className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-4 h-4 text-white"
                                >
                                    <path
                                        d="M20.452 20.452h-3.916v-5.76c0-1.373-.028-3.14-1.912-3.14-1.916 0-2.209 1.494-2.209 3.035v5.865H8.492V9h3.758v1.561h.053c.524-.99 1.799-2.035 3.705-2.035 3.96 0 4.686 2.608 4.686 6.001v5.925zM5.337 7.433a2.266 2.266 0 11-.002-4.532 2.266 2.266 0 01.002 4.532zM6.27 20.452H2.399V9h3.872v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.452C23.204 24 24 23.226 24 22.271V1.729C24 .774 23.204 0 22.225 0z"
                                    />
                                </svg>
                                Compte LinkedIn
                            </Link>
                        </div>
                    </div>

                    {/* Contactez-moi */}
                    <div className="w-full md:w-1/2 flex flex-col items-start">
                        <div className="contact-info">
                            <p className="text-sm font-bold">Contactez-moi :</p>
                            <p>Téléphone : +33 7 84 95 30 67</p>
                            <p>Email : theo.vanbandon@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div id="copyright" className="mt-6 text-center border-t border-gray-700 pt-4">
                    <p className="text-sm">&copy; 2025 Théo Vanbandon. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
