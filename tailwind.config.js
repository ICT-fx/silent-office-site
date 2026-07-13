/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Manrope', 'sans-serif'],
            },
            colors: {
                primary: '#027333',
                secondary: '#025928',
                accent: '#93BF9E',
                dark: '#262626',
                light: '#F2F1DF',
            }
        },
    },
    plugins: [],
}
