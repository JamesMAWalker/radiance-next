import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='preload'
          href='/fonts/MPLUSCodeLatin-Bold.ttf'
          as='font'
          crossOrigin='true'
        />
        <link
          rel='preload'
          href='/fonts/MPLUSCodeLatin-SemiBold.ttf'
          as='font'
          crossOrigin='true'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
