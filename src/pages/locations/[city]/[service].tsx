import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import {
  cityServicePages,
  getAllCityServicePaths,
  getCityServicePage,
  CityServicePage,
} from "@/data/cityPages";
import { services, Service } from "@/data/services";
import {
  HomeIcon,
  ChevronRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface CityServicePageProps {
  page: CityServicePage;
  coreService: Service | null;
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left text-gray-900 font-medium hover:text-blue-600 transition-colors gap-3"
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="pb-4 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  );
}

export default function CityServicePageRoute({
  page,
  coreService,
}: CityServicePageProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://requestapro.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://requestapro.com/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.city,
        item: `https://requestapro.com/locations/${page.citySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: page.h1,
        item: `https://requestapro.com/locations/${page.citySlug}/${page.serviceSlug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RequestAPro",
    url: "https://requestapro.com",
    telephone: "+19093898092",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rancho Cucamonga",
      addressRegion: "CA",
      postalCode: "91730",
      addressCountry: "US",
    },
    areaServed: [
      "Rancho Cucamonga",
      "Fontana",
      "Ontario",
      "Upland",
      "Rialto",
      "Eastvale",
      "Chino",
    ],
  };

  return (
    <>
      <NextSeo
        title={page.seoTitle}
        description={page.metaDescription}
        canonical={`https://requestapro.com/locations/${page.citySlug}/${page.serviceSlug}`}
        openGraph={{
          title: page.seoTitle,
          description: page.metaDescription,
          url: `https://requestapro.com/locations/${page.citySlug}/${page.serviceSlug}`,
          type: "website",
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-11 text-sm text-gray-500 flex-wrap gap-1">
              <Link
                href="/"
                className="hover:text-gray-700 flex items-center gap-1"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <ChevronRightIcon className="h-4 w-4 text-gray-300" />
              <Link href="/locations" className="hover:text-gray-700">
                Locations
              </Link>
              <ChevronRightIcon className="h-4 w-4 text-gray-300" />
              <span className="text-gray-700">{page.city}</span>
              <ChevronRightIcon className="h-4 w-4 text-gray-300" />
              <span className="text-gray-900 font-medium">
                {page.serviceLabel}
              </span>
            </div>
          </div>
        </nav>

        {/* Top CTA bar */}
        <div className="bg-blue-600 text-white py-3 px-4 text-center text-sm">
          <span className="font-medium">
            Serving {page.city} — same-day appointments available.
          </span>{" "}
          <a
            href="tel:+19093898092"
            className="underline font-semibold hover:no-underline"
          >
            Call (909) 389-8092
          </a>{" "}
          or{" "}
          <Link
            href="/book/step1"
            className="underline font-semibold hover:no-underline"
          >
            book online
          </Link>
          .
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="lg:grid lg:grid-cols-3 lg:gap-10">
            {/* ── MAIN ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* H1 block */}
              <div>
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">
                  {page.city}, CA
                </p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {page.h1}
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {page.intro}
                </p>
              </div>

              {/* Body */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Our {page.serviceLabel} Service in {page.city}
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  {page.bodyContent.split("\n\n").map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>
              </div>

              {/* Services offered */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-5">
                  What We Offer in {page.city}
                </h2>
                <ul className="space-y-3">
                  {page.servicesOffered.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Frequently Asked Questions
                </h2>
                <div className="mt-4">
                  {page.faqs.map((faq) => (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>

              {/* Internal link to core service page */}
              {coreService && (
                <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
                  <p className="text-sm text-blue-700 font-medium mb-2">
                    Learn more about this service
                  </p>
                  <Link
                    href={`/services/${coreService.slug}`}
                    className="flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-700">
                        {coreService.shortTitle} — Full Service Page
                      </div>
                      <div className="text-gray-500 text-sm">
                        Pricing, what&apos;s included, all FAQs, and more
                      </div>
                    </div>
                    <ChevronRightIcon className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}

              {/* Other city pages */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {page.serviceLabel} in Other Cities
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {cityServicePages
                    .filter(
                      (p) =>
                        p.serviceSlug === page.serviceSlug &&
                        p.citySlug !== page.citySlug,
                    )
                    .map((p) => (
                      <Link
                        key={p.citySlug}
                        href={`/locations/${p.citySlug}/${p.serviceSlug}`}
                        className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors text-sm group"
                      >
                        <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                          {p.serviceLabel} in {p.city}
                        </span>
                        <ChevronRightIcon className="w-4 h-4 text-gray-300 group-hover:text-blue-400 ml-auto" />
                      </Link>
                    ))}
                  {cityServicePages.filter(
                    (p) =>
                      p.serviceSlug === page.serviceSlug &&
                      p.citySlug !== page.citySlug,
                  ).length === 0 && (
                    <p className="text-gray-500 text-sm col-span-2">
                      We also serve Fontana, Ontario, Upland, Rialto, Eastvale,
                      and Chino.{" "}
                      <a
                        href="tel:+19093898092"
                        className="text-blue-600 hover:underline"
                      >
                        Call us
                      </a>{" "}
                      to check availability in your city.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="sticky top-6 space-y-5">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {page.ctaHeading}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5">{page.ctaBody}</p>
                  <Link
                    href={`/book/step1?service=${page.serviceSlug}`}
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3"
                  >
                    Book Now
                  </Link>
                  <a
                    href="tel:+19093898092"
                    className="flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    (909) 389-8092
                  </a>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    Serving {page.city} · Same-day available
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-sm text-gray-600 space-y-2">
                  {[
                    "✓ Licensed & insured",
                    "✓ Customer-provided devices welcome",
                    "✓ App setup included",
                    "✓ We test before we leave",
                    "✓ Same-day & weekend appts",
                  ].map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>

                {/* All services quick links */}
                <div className="bg-white rounded-xl border border-gray-100 p-5">
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">
                    All Services
                  </h4>
                  <div className="space-y-1.5">
                    {services.slice(0, 6).map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block text-xs text-blue-600 hover:underline"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block text-xs text-gray-500 hover:text-blue-600 mt-2"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="bg-blue-600 py-14 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-3">{page.ctaHeading}</h2>
            <p className="text-blue-100 mb-7">{page.ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/book/step1?service=${page.serviceSlug}`}
                className="inline-block bg-white text-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Book Now
              </Link>
              <a
                href="tel:+19093898092"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                (909) 389-8092
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllCityServicePaths(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CityServicePageProps> = async ({
  params,
}) => {
  const city = params?.city as string;
  const service = params?.service as string;

  const page = getCityServicePage(city, service);
  if (!page) return { notFound: true };

  const coreService = services.find((s) => s.slug === service) ?? null;

  return {
    props: {
      page,
      coreService,
    },
  };
};
