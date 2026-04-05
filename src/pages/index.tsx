import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { cities } from "@/data/cityPages";
import {
  TvIcon,
  WifiIcon,
  ShieldCheckIcon,
  StarIcon,
  PhoneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const trustStats = [
  { value: "500+", label: "Installs Completed" },
  { value: "5★", label: "Google Rating" },
  { value: "Same-Day", label: "Appointments Available" },
  { value: "Licensed", label: "& Insured" },
];

const testimonials = [
  {
    name: "Maria G.",
    location: "Rancho Cucamonga",
    text: "Showed up on time, found the studs, and had my 75\" mounted perfectly in under an hour. Cables are completely hidden. Couldn't be happier.",
    service: "TV Mounting",
  },
  {
    name: "James T.",
    location: "Fontana",
    text: "They installed my Ring doorbell and two cameras in one visit. App was set up and working by the time they left. Super professional and efficient.",
    service: "Ring Installation",
  },
  {
    name: "Sandra M.",
    location: "Ontario",
    text: "Our old thermostat was giving us trouble. They installed the Nest, figured out the C-wire issue, and even set up the schedule in the app for us.",
    service: "Nest Installation",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://requestapro.com",
  name: "RequestAPro",
  description:
    "Professional TV mounting, Ring doorbell installation, Nest thermostat setup, smart camera installation, and smart home device installation in Rancho Cucamonga and nearby Inland Empire cities.",
  url: "https://requestapro.com",
  telephone: "+19093898092",
  priceRange: "$69–$150+",
  image: "https://requestapro.com/logo.png",
  logo: "https://requestapro.com/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rancho Cucamonga",
    addressRegion: "CA",
    postalCode: "91730",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "34.1064",
    longitude: "-117.5931",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Technology Installation Services",
    itemListElement: [
      "TV Mounting",
      "Above Fireplace TV Mounting",
      "Wire Concealment",
      "Soundbar Mounting",
      "Ring Doorbell Installation",
      "Ring Camera Installation",
      "Nest Thermostat Installation",
      "Nest Doorbell Installation",
      "Smart Home Device Installation",
      "Security Camera Installation",
      "Smart Lock Installation",
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
};

export default function HomePage() {
  const tvServices = services.filter((s) => s.category === "tv");
  const smartHomeServices = services.filter((s) => s.category === "smart-home");

  return (
    <>
      <NextSeo
        title="TV Mounting & Smart Home Installation in Rancho Cucamonga | RequestAPro"
        description="Professional TV mounting, Ring installation, Nest installation, security camera setup, and smart home device installation in Rancho Cucamonga and nearby cities."
        canonical="https://requestapro.com"
        openGraph={{
          title:
            "TV Mounting & Smart Home Installation in Rancho Cucamonga | RequestAPro",
          description:
            "Professional TV mounting, Ring doorbell installation, Nest thermostat setup, and smart home installation in Rancho Cucamonga, Fontana, Ontario, Upland, and nearby Inland Empire cities.",
          url: "https://requestapro.com",
          type: "website",
          images: [
            {
              url: "https://requestapro.com/hero-bg.png",
              width: 1200,
              height: 630,
              alt: "RequestAPro TV Mounting and Smart Home Installation",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "TV mounting Rancho Cucamonga, Ring doorbell installation, Nest thermostat installation, smart home installation, security camera installation, wire concealment, above fireplace TV mount, Fontana, Ontario, Upland, Inland Empire",
          },
        ]}
      />

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="min-h-screen">
        {/* ── HERO ── */}
        <section className="relative h-[85vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt="Professional TV mounting and smart home installation in Rancho Cucamonga"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-4">
              Serving Rancho Cucamonga & Inland Empire
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
              TV Mounting, Ring, Nest &amp; Smart Home Installation in Rancho
              Cucamonga
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              RequestAPro provides professional TV wall mounting, Ring doorbell
              installation, Nest thermostat setup, smart camera installation,
              and smart home device installation in Rancho Cucamonga, Fontana,
              Ontario, Upland, and nearby areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book/step1"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Book a Service
              </Link>
              <a
                href="tel:+19093898092"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <PhoneIcon className="w-5 h-5" />
                (909) 389-8092
              </a>
            </div>
          </div>
        </section>

        {/* ── TRUST STATS ── */}
        <section className="bg-blue-600 py-6">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO / LOCAL COPY ── */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Local TV &amp; Smart Home Experts — Based in Rancho Cucamonga
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We&apos;re a local service — not a national franchise. When you
              book with RequestAPro, you get an experienced technician who knows
              the Inland Empire, works on stucco and brick homes, and won&apos;t
              leave until everything is working and you know how to use it.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-blue-700 font-medium">
              {[
                "Customer-Provided Devices Welcome",
                "Same-Day Availability",
                "No Trip Fees",
                "Licensed & Insured",
                "App Setup Included",
              ].map((badge) => (
                <span
                  key={badge}
                  className="bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── TV SERVICES ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <TvIcon className="w-7 h-7 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">TV Services</h2>
            </div>
            <p className="text-gray-500 mb-8 ml-10">
              Wall mounting, wire concealment, soundbars, and above-fireplace
              installs.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tvServices.map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow"
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {service.shortTitle}
                  </h3>
                  <p className="text-gray-500 text-sm flex-1 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-auto flex flex-col gap-2">
                    <span className="text-blue-600 text-sm font-semibold">
                      From ${service.basePrice}
                      {service.unit}
                    </span>
                    <div className="flex gap-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex-1 text-center text-sm bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Learn More
                      </Link>
                      <Link
                        href={`/book/step1?service=${service.slug}`}
                        className="flex-1 text-center text-sm bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SMART HOME SERVICES ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <WifiIcon className="w-7 h-7 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Smart Home &amp; Security
              </h2>
            </div>
            <p className="text-gray-500 mb-8 ml-10">
              Ring, Nest, smart locks, security cameras, and connected device
              setup.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {smartHomeServices.slice(0, 4).map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow"
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {service.shortTitle}
                  </h3>
                  <p className="text-gray-500 text-sm flex-1 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-auto flex flex-col gap-2">
                    <span className="text-blue-600 text-sm font-semibold">
                      From ${service.basePrice}
                      {service.unit}
                    </span>
                    <div className="flex gap-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex-1 text-center text-sm bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Learn More
                      </Link>
                      <Link
                        href={`/book/step1?service=${service.slug}`}
                        className="flex-1 text-center text-sm bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {smartHomeServices.slice(4).map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow"
                >
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {service.shortTitle}
                  </h3>
                  <p className="text-gray-500 text-sm flex-1 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-auto flex flex-col gap-2">
                    <span className="text-blue-600 text-sm font-semibold">
                      From ${service.basePrice}
                      {service.unit}
                    </span>
                    <div className="flex gap-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex-1 text-center text-sm bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Learn More
                      </Link>
                      <Link
                        href={`/book/step1?service=${service.slug}`}
                        className="flex-1 text-center text-sm bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Rancho Cucamonga Homeowners Choose RequestAPro
                </h2>
                <ul className="space-y-3">
                  {[
                    "Based locally — faster availability, no travel fees",
                    "We work on drywall, stucco, brick, plaster, and concrete",
                    "Customer-provided devices always welcome",
                    "App setup and walkthrough included with every install",
                    "We test everything before we leave",
                    "Licensed, insured, and background-checked",
                    "Same-day and weekend appointments available",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-72 rounded-xl overflow-hidden">
                <Image
                  src="/tv-service.png"
                  alt="RequestAPro TV mounting installation in Rancho Cucamonga"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((review) => (
                <div
                  key={review.name}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">
                      {review.name}
                    </span>
                    <span className="text-gray-400"> · </span>
                    <span className="text-gray-500">{review.location}</span>
                    <span className="text-gray-400"> · </span>
                    <span className="text-blue-600">{review.service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICE AREAS ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheckIcon className="w-7 h-7 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Service Areas
              </h2>
            </div>
            <p className="text-gray-600 mb-8">
              Proudly serving Rancho Cucamonga, Fontana, Ontario, Upland,
              Rialto, Eastvale, Chino, and surrounding Inland Empire areas.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map((city) => (
                <div
                  key={city.slug}
                  className="bg-white rounded-lg border border-gray-100 p-4 hover:border-blue-200 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {city.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{city.description}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Not seeing your city?{" "}
              <a
                href="tel:+19093898092"
                className="text-blue-600 hover:underline"
              >
                Call us
              </a>{" "}
              — we may still be able to help.
            </p>
          </div>
        </section>

        {/* ── GOOGLE MAP ── */}
        <section className="py-10 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1681235.5769289576!2d-117.28781716122342!3d34.61267629220036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3370605b48fc5%3A0x217e316bdb6e3b71!2sRequest%20a%20pro!5e0!3m2!1sen!2sus!4v1748312391028!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RequestAPro location in Rancho Cucamonga"
              />
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Book a Service?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              TV mounting, Ring installation, Nest thermostat setup, and more —
              available same-day across Rancho Cucamonga and the Inland Empire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book/step1"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Book a Service
              </Link>
              <a
                href="tel:+19093898092"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
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
