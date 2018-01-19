import Document, {Head, Main, NextScript} from 'next/document'
import title from '../models/title'

export default class MyDocument extends Document {
  static getInitialProps ({renderPage}) {
    return renderPage()
  }

  render () {
    return <html>
      <Head>
        <meta charSet='utf-8' />
        <title>{title}</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  }
}
