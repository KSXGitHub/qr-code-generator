import Document, {Head, Main, NextScript} from 'next/document'
import SharedHead from '../components/SharedHead'
import title from '../models/title'

const pageStyle = {
  margin: '0px',
  padding: '0px',
  border: 'none'
}

export default class MyDocument extends Document {
  static getInitialProps ({renderPage}) {
    return renderPage()
  }

  render () {
    return <html style={pageStyle}>
      <Head>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <SharedHead />
      </Head>
      <body style={pageStyle}>
        <Main />
        <NextScript />
      </body>
    </html>
  }
}
