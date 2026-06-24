/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./node_modules/tailwind-datepicker-react/dist/**/*.js",
        "./app/**/*.{js,ts,jsx,tsx}",
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
                    bright: "var(--color-pista-bright)",
                },
                background: {
                    DEFAULT: "var(--color-background)",
                    dark: "var(--color-background-dark)",
                    card: "var(--color-background-card)",
                },
                ink: {
                    DEFAULT: "var(--color-ink)",
                    soft: "var(--color-text-light)",
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
            },
            fontFamily: {
                sans: ["var(--font-body)", "system-ui", "sans-serif"],
                display: ["var(--font-display)", "system-ui", "sans-serif"],
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
