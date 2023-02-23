import { Html, Head, Main, NextScript } from 'next/document'
import Document from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head/>
          <link
            href="https://fonts.googleapis.com/css2?family=BioRhyme:wght@300&family=Gloock&display=swap"
            rel="stylesheet"
          />   

          <link
              rel="preload"
              href="/fonts/BioRhyme-Bold.ttf"
              as="font"
              crossOrigin="anonymous"
            ></link>

          <link
              rel="preload"
              href="./public/fonts/BioRhyme-Light.ttf"
              as="font"
              crossOrigin="anonymous"
            ></link>   

          <link
            rel="preload"
            href="./public/fonts/BioRhyme-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>       
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument