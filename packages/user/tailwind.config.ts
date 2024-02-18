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
                'neo-black': '#1D1D1D',
                charcoal: '#434343',
                gray60: '#999999',
                gray92: '#ebebeb',
                gray94: '#f0f0f0',
                isabelline: '#f4efeb',
            },
            spacing: {
                '2.5': '0.625rem', // 10px
                '5.5': '1.375rem', // 22px
                '7.5': '1.875rem', // 30px
                '8.5': '2.125rem', // 34px
                '12.5': '3.125rem', // 50px
                '13': '3.25rem', // 52px
                '13.5': '3.375rem', // 54px
                '17': '4.25rem', // 68px
                '25': '6.25rem', // 100px
                '37.5': '9.375rem', // 150px
            },
        },
    },
    plugins: [],
}
export default config
