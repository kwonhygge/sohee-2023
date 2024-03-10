import { Noto_Sans_KR } from 'next/font/google'
import './globals.scss'
import Header from '@/components/Header'
import Script from 'next/script'
import GoogleAnalytics from '@/lib/GoogleAnalytics'
import { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'portfolio | sohee.park',
    description: 'Brand Marketer & Strategist',
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko">
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GTM_ID}');
        `}
            </Script>
            <body className={notoSansKR.className}>
                {process.env.GA_ID ? (
                    <GoogleAnalytics ga_id={process.env.GA_ID} />
                ) : null}
                <SpeedInsights />
                <Analytics />
                <Header />
                <main>{children}</main>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
                    }}
                />
            </body>
        </html>
    )
}
