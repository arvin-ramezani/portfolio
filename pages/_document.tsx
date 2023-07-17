import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html
        lang="en"
        style={{ scrollBehavior: 'smooth', direction: 'ltr' }}
      >
        <Head>
          <meta charSet="utf-8" />

          <link
            rel="icon"
            href="/images/a-plus-logo.svg"
          />

          <meta
            property="og:title"
            content="Arvin Ramezani - Web Developer Portfolio"
          />
          <meta
            property="og:description"
            content="Meet Arvin Ramezani, an aspiring full-stack developer with a focus on ReactJS, NodeJS and TypeScript. Explore his portfolio of web application practice projects and discover the breadth of his skills and experience. You can also find a collection of valuable tutorials he has watched to supplement his learning."
          />
          <meta
            property="og:image"
            content="https://imarvin.ir/images/portfolio.jpg"
          />
          <meta
            property="og:url"
            content="https://imarvin.ir"
          />
          <meta
            property="og:type"
            content="website"
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
