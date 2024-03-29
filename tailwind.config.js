/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./node_modules/tailwind-datepicker-react/dist/**/*.js",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pistaGreen: "#06bd9c",
                pistaMidGreen: "#10c60f",
                pistaLightGreen: "#beeca0",
                pistaGray: "#000",
                pistaLightGray: "#0E0E0E",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
}
