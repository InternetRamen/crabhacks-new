/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(255,255, 255, 0.35)",
                    "0 0px 65px rgba(255, 255,255, 0.2)",
                ],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#ff8387",

                    secondary: "#ffde7c",

                    accent: "#008800",

                    neutral: "#060606",

                    "base-100": "#B9EAFD",

                    info: "#006efa",

                    success: "#00daaa",

                    warning: "#fa4200",

                    error: "#ff0037",
                },
            },
        ],
    },
};
