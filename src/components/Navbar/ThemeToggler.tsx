import { useEffect } from "react";
import './styles/navbarStyle.css'

import { ThemeType, useTheme } from "../../theme/ThemeContext";

const themeOptions: Array<{ label: string, value: ThemeType }> = [
    { label: "Unicorn", value: "unicorn" },
    { label: "Saber", value: "saber" },
];

export function ThemeToggler() {
    const { setCurrentTheme, themeType } = useTheme();

    useEffect(() => {
        const themeData = localStorage.getItem("theme");
        if (themeData === "saber" || themeData === "unicorn") {
            setCurrentTheme(themeData);
        }
    }, [setCurrentTheme])

    const handleClick = (nextTheme: ThemeType) => {
        setCurrentTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
    }

    return (
        <div className="toggle-container">
            <div className="theme-mode-switch" aria-label="Theme mode">
                {themeOptions.map(option => (
                    <button
                        aria-pressed={themeType === option.value}
                        className={`theme-mode-button${themeType === option.value ? " selected" : ""}`}
                        key={option.value}
                        onClick={() => handleClick(option.value)}
                        type="button"
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
