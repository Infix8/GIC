/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // New Color Palette
                'rose': '#C95386',
                'olive': '#788008',
                'violet': '#564FB0',
                'crimson': '#6E0B36',
                'midnight': '#421B2C',
                // Legacy gold mapped to rose
                'gold': '#C95386',
                'gold-light': '#E178A9',
                // Backgrounds
                'bg-primary': '#1a0d14',
                'bg-secondary': '#241520',
                'bg-card': 'rgba(66, 27, 44, 0.6)',
            },
            fontFamily: {
                'display': ['"Playfair Display"', 'serif'],
                'sans': ['"Outfit"', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
            }
        },
    },
    plugins: [],
}
