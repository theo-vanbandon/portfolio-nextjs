"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const navLinks = [
    { href: "/#formations", label: "formations" },
    { href: "/#experiences", label: "expériences" },
    { href: "/#competences", label: "compétences" },
    { href: "/#contact", label: "contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="site-header">
            <nav className="nav wrap">
                <Link href="/#home" className="nav-logo" onClick={closeMenu}>
                    <span className="accent">~/</span>theo-vanbandon<span className="cursor" aria-hidden="true">_</span>
                </Link>

                <div className="nav-right">
                    <ul id="nav-menu" className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
                        {navLinks.map((link, index) => (
                            <li key={link.href}>
                                <Link href={link.href} onClick={closeMenu}>
                                    <span className="accent">0{index + 1}.</span>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ThemeSwitch />

                    <button
                        className="nav-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Ouvrir le menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="nav-menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={isMenuOpen ? "M6 18 18 6M6 6l12 12" : "M4.5 6h15M4.5 12h15M4.5 18h15"}
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}
