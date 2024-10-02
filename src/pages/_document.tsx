import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Full stack developer | Algimantas Skara</title>
        <meta
          name="description"
          content="Portfolio website of a skilled full-stack developer specializing in modern web development. Available for freelance or full-time hire. Explore projects and contact for job opportunities."
        />
        <meta name="keywords" content="full-stack, developer, react" />
      </Head>
      <body className="bg-main-background text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
