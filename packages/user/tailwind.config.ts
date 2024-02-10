import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                neoBlack: '#1D1D1D',
                charcoal: '#434343',
            },
            spacing: {
                '5.5': '1.375rem',
                '7.5': '1.875rem',
                '13.5': '3.375rem',
                '17': '4.25rem',
                '25': '6.25rem',
            },
        },
    },
    plugins: [],
}
export default config
