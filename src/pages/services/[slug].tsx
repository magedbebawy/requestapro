import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { services, Service } from "@/data/services";
import { serviceDetails, ServiceDetail } from "@/data/serviceDetails";
import {
  HomeIcon,
  ChevronRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface ServicePageProps {
  service: Service;
  detail: ServiceDetail;
  relatedServices: Service[];
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

const serviceAreas = [
  "Rancho Cucamonga",
  "Fontana",
  "Ontario",
  "Upland",
  "Rialto",
  "Eastvale",
  "Chino",
];

export default function ServicePage({
  service,
  detail,
  relatedServices,
}: ServicePageProps) {
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
        name: "Services",
        item: "https://requestapro.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: detail.h1,
        item: `https://requestapro.com/services/${service.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: detail.h1,
    description: detail.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "RequestAPro",
      url: "https://requestapro.com",
      telephone: "+19093898092",
    },
    areaServed: serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    offers: {
      "@type": "Offer",
      price: service.basePrice.toString(),
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: service.basePrice,
        priceCurrency: "USD",
        unitText: service.unit,
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <NextSeo
        title={detail.seoTitle}
        description={detail.metaDescription}
        canonical={`https://requestapro.com/services/${service.slug}`}
        openGraph={{
          title: detail.seoTitle,
          description: detail.metaDescription,
          url: `https://requestapro.com/services/${service.slug}`,
          type: "website",
          images: [
            {
              url: `https://requestapro.com/${service.image}`,
              width: 1200,
              height: 630,
              alt: detail.h1,
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `${service.shortTitle} Rancho Cucamonga, ${service.shortTitle} Fontana, ${service.shortTitle} Ontario, ${service.shortTitle} Upland, Inland Empire ${service.shortTitle}`,
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* ── BREADCRUMB ── */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-11 text-sm text-gray-500">
              <Link
                href="/"
                className="hover:text-gray-700 flex items-center gap-1"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-300" />
              <Link href="/services" className="hover:text-gray-700">
                Services
              </Link>
              <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-300" />
              <span className="text-gray-900 font-medium">
                {service.shortTitle}
              </span>
            </div>
          </div>
        </nav>

        {/* ── TOP CTA BAR ── */}
        <div className="bg-blue-600 text-white py-3 px-4 text-center text-sm">
          <span className="font-medium">
            Same-day appointments available in Rancho Cucamonga &amp; nearby
            cities.
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="lg:grid lg:grid-cols-3 lg:gap-10">
            {/* ── MAIN CONTENT ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero image + H1 */}
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={`/${service.image}`}
                  alt={`${detail.h1} — RequestAPro`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    {detail.h1}
                  </h1>
                  <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    From ${service.basePrice}
                    {service.unit}
                  </div>
                </div>
              </div>

              {/* Intro */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {detail.intro}
                </p>
              </div>

              {/* Body content */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  About This Service
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  {detail.bodyContent.split("\n\n").map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>
              </div>

              {/* What's included */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-5">
                  What&apos;s Included
                </h2>
                <ul className="space-y-3">
                  {detail.whatIsIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why us */}
              <div className="bg-blue-50 rounded-xl border border-blue-100 p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-5">
                  Why Choose RequestAPro
                </h2>
                <ul className="space-y-3">
                  {detail.whyUs.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Areas We Serve
                </h2>
                <p className="text-gray-600 mb-4">
                  Proudly serving Rancho Cucamonga, Fontana, Ontario, Upland,
                  Rialto, Eastvale, Chino, and surrounding Inland Empire areas.
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((city) => (
                    <span
                      key={city}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Frequently Asked Questions
                </h2>
                <div className="mt-4">
                  {detail.faqs.map((faq) => (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>

              {/* Related services */}
              {relatedServices.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
                  <h2 className="text-xl font-bold text-gray-900 mb-5">
                    Related Services
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/services/${rel.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 group-hover:text-blue-700 text-sm">
                            {rel.shortTitle}
                          </div>
                          <div className="text-gray-400 text-xs">
                            From ${rel.basePrice}
                            {rel.unit}
                          </div>
                        </div>
                        <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── BOOKING SIDEBAR ── */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="sticky top-6 space-y-5">
                {/* Book card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {detail.ctaHeading}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5">{detail.ctaBody}</p>
                  <div className="flex justify-between text-gray-600 text-sm mb-4">
                    <span>Starting at</span>
                    <span className="font-semibold text-gray-900">
                      ${service.basePrice}
                      {service.unit}
                    </span>
                  </div>
                  <Link
                    href={`/book/step1?service=${service.slug}`}
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3"
                  >
                    Book Now
                  </Link>
                  <a
                    href="tel:+19093898092"
                    className="flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    (909) 389-8092
                  </a>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    Same-day available · No trip fee
                  </p>
                </div>

                {/* Trust signals */}
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

                {/* Pricing note */}
                {service.pricingNote && (
                  <div className="bg-blue-50 rounded-xl border border-blue-100 p-5 text-sm text-blue-800">
                    <strong>Pricing Note:</strong> {service.pricingNote}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <section className="bg-blue-600 py-14 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-3">{detail.ctaHeading}</h2>
            <p className="text-blue-100 mb-7">{detail.ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/book/step1?service=${service.slug}`}
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
  const paths = services.map((service) => ({
    params: { slug: service.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async ({
  params,
}) => {
  const service = services.find((s) => s.slug === params?.slug);
  if (!service) return { notFound: true };

  const detail = serviceDetails.find((d) => d.slug === service.slug);
  if (!detail) return { notFound: true };

  const relatedServices = service.relatedSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as Service[];

  return {
    props: { service, detail, relatedServices },
  };
};
