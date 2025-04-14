/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./node_modules/tailwind-datepicker-react/dist/**/*.js",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        'hover:bg-primary/10',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "var(--color-primary)",
                    light: "var(--color-primary-light)",
                    dark: "var(--color-primary-dark)",
                },
                background: {
                    DEFAULT: "var(--color-background)",
                    dark: "var(--color-background-dark)",
                    card: "var(--color-background-card)",
                },
                text: {
                    DEFAULT: "var(--color-text)",
                    light: "var(--color-text-light)",
                    dark: "var(--color-text-dark)",
                    inverse: "var(--color-text-inverse)",
                },
                accent: {
                    DEFAULT: "var(--color-accent)",
                    light: "var(--color-accent-light)",
                },
                success: "var(--color-success)",
                error: "var(--color-error)",
                // Legacy colors for backward compatibility
                pistaGreen: "var(--color-primary)",
                pistaMidGreen: "var(--color-primary-dark)",
                pistaLightGreen: "var(--color-primary-light)",
                pistaGray: "#000000",
                pistaLightGray: "#0E0E0E",
            },
            fontFamily: {
                sans: ["Philosopher", "sans-serif"],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                },
            },
        },
    },
    plugins: [require("flowbite/plugin")],
}
