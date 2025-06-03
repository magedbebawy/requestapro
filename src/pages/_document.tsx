import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Add a version number to force cache refresh
  const version = "1.0.0";

  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link
          rel="icon"
          href={`/logo.png?v=${version}`}
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href={`/logo.png?v=${version}`}
          sizes="180x180"
        />

        {/* Additional favicon sizes for better device support */}
        <link
          rel="icon"
          href={`/logo.png?v=${version}`}
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href={`/logo.png?v=${version}`}
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href={`/logo.png?v=${version}`}
          type="image/png"
          sizes="512x512"
        />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
