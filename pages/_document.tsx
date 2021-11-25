import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)

    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument