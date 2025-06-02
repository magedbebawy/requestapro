import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Layout from "../components/Layout";
import { BookingProvider } from "../context/BookingContext";
import "../styles/globals.css";

const defaultSEOConfig = {
  titleTemplate: "%s | RequestAPro",
  defaultTitle: "RequestAPro - Professional Home Services",
  description:
    "Book professional home services including installation, repair, and maintenance. Fast, reliable, and trusted by thousands of homeowners.",
  canonical: "https://requestapro.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://requestapro.com",
    siteName: "RequestAPro",
    images: [
      {
        url: "https://requestapro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RequestAPro - Professional Home Services",
      },
    ],
  },
  twitter: {
    handle: "@requestapro",
    site: "@requestapro",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#2563eb",
    },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BookingProvider>
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BookingProvider>
  );
}
