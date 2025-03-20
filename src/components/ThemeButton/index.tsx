"use client"; // Required for Next.js 13+ in App Router

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // Icon Library
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid hydration mismatch

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all hover:bg-gray-300 dark:hover:bg-gray-700"
        >
            {theme === "dark" ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
        </button>
    );
};

export default ThemeButton;


export function ThemeProvider({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>; // Render children only when mounted
    }

    return (
        <NextThemesProvider attribute="class">
            {children}
        </NextThemesProvider>
    );
}