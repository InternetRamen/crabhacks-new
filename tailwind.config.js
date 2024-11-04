/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {},
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
