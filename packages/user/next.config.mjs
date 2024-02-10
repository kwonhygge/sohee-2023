/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [{
            source: '/',
            destination: '/list',
            permanent: true
        }]
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: {
                                            removeViewBox: false,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
