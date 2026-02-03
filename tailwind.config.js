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
                primary: '#FFB600',
                dark: '#1A1A1A',
                light: '#F4F4F4',
            }
        },
    },
    plugins: [],
}
