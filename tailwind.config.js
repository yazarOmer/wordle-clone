/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                popScale: {
                    "0%, 100%": { transform: "scale(1)" },
                    "40%": { transform: "scale(1.1)" },
                },
            },
            animation: {
                pop: "popScale .1s",
            },
        },
    },
    plugins: [],
};
