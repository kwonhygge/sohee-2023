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
                charcoal: '#434343',
            },
            spacing: {
                '7.5': '1.875rem',
                '13.5': '3.375rem',
                '25': '6.25rem',
            },
        },
    },
    plugins: [],
}
export default config
