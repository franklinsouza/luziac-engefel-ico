import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pt-BR" id="top">
            <Head />
            <link rel="shortcut icon" href="/assets/img/favicon.png" />
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=montserrat:200,300,400,500,600,700|tenor-sans:400" rel="stylesheet" />
            <body>
                <Main />
                <NextScript />
                <script dangerouslySetInnerHTML={{ __html: "window.trackerConfig = { site: 'ico-real-parque' };" }} />
                <script src="https://luziac-static.vercel.app/tracker/v1/tracker.js" defer />
                <script src="https://luziac-static.vercel.app/mailer/v1/mailer.js" defer></script>
            </body>
        </Html>
    )
}
