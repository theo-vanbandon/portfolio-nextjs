"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "dark" | "light";

// Distance parcourue par le bouton rond entre les deux positions (en px, cf. .theme-switch)
const TRAVEL = 24;

function applyTheme(theme: Theme) {
    if (theme === "light") {
        document.documentElement.dataset.theme = "light";
    } else {
        delete document.documentElement.dataset.theme;
    }
    try {
        localStorage.setItem("theme", theme);
    } catch {
        // Stockage indisponible (navigation privée...) : le thème ne sera juste pas mémorisé
    }
}

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>("dark");
    const [dragOffset, setDragOffset] = useState<number | null>(null);
    const drag = useRef({ startX: 0, moved: false });

    useEffect(() => {
        setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
    }, []);

    const changeTheme = (next: Theme) => {
        setTheme(next);
        applyTheme(next);
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = { startX: e.clientX, moved: false };
        setDragOffset(theme === "light" ? TRAVEL : 0);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
        if (dragOffset === null) return;
        const dx = e.clientX - drag.current.startX;
        if (Math.abs(dx) > 3) drag.current.moved = true;
        const base = theme === "light" ? TRAVEL : 0;
        setDragOffset(Math.min(TRAVEL, Math.max(0, base + dx)));
    };

    const handlePointerUp = () => {
        if (dragOffset !== null && drag.current.moved) {
            changeTheme(dragOffset > TRAVEL / 2 ? "light" : "dark");
        }
        setDragOffset(null);
    };

    const handleClick = () => {
        // Un glissement déclenche aussi un clic : il a déjà été traité au relâchement
        if (drag.current.moved) {
            drag.current.moved = false;
            return;
        }
        changeTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            type="button"
            role="switch"
            aria-checked={theme === "light"}
            aria-label="Activer le thème clair"
            className="theme-switch"
            onClick={handleClick}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => setDragOffset(null)}
        >
            <span
                className={`theme-switch-knob ${dragOffset !== null ? "dragging" : ""}`}
                style={dragOffset !== null ? { transform: `translateX(${dragOffset}px)` } : undefined}
            >
                {/* Lune : thème sombre */}
                <svg className="icon-moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
                {/* Soleil : thème clair */}
                <svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            </span>
        </button>
    );
}
