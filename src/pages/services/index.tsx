import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ServicesPage() {
  return (
    <>
      <NextSeo
        title="TV Mounting & Smart Home Services in Rancho Cucamonga | RequestAPro"
        description="Browse all services: TV mounting, above fireplace mounting, wire concealment, Ring doorbell installation, Nest thermostat setup, security cameras, smart locks, and more in Rancho Cucamonga and the Inland Empire."
        canonical="https://requestapro.com/services"
        openGraph={{
          title: "TV Mounting & Smart Home Services | RequestAPro",
          description:
            "Professional TV mounting, Ring installation, Nest thermostat setup, security camera installation, and smart home services in Rancho Cucamonga and nearby Inland Empire cities.",
          url: "https://requestapro.com/services",
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-11 text-sm text-gray-500 gap-2">
              <Link
                href="/"
                className="hover:text-gray-700 flex items-center gap-1"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <ChevronRightIcon className="h-4 w-4 text-gray-300" />
              <span className="text-gray-900 font-medium">Services</span>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              TV Mounting &amp; Smart Home Services in Rancho Cucamonga
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional installation for TVs, Ring doorbells, Nest
              thermostats, security cameras, smart locks, and more. Serving
              Rancho Cucamonga, Fontana, Ontario, Upland, and nearby cities.
            </p>
          </div>

          {/* TV Services */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              TV Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {services
                .filter((s) => s.category === "tv")
                .map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-row"
                  >
                    <div className="relative h-40 sm:w-40 sm:h-auto flex-shrink-0">
                      <Image
                        src={`/${service.image}`}
                        alt={service.shortTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="160px"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center">
                      <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                        {service.shortTitle}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-2">
                        {service.description}
                      </p>
                      <span className="text-blue-600 text-sm font-semibold">
                        From ${service.basePrice}
                        {service.unit}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

          {/* Smart Home Services */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Smart Home &amp; Security
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {services
                .filter((s) => s.category === "smart-home")
                .map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-row"
                  >
                    <div className="relative h-40 sm:w-40 sm:h-auto flex-shrink-0">
                      <Image
                        src={`/${service.image}`}
                        alt={service.shortTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="160px"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center">
                      <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                        {service.shortTitle}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-2">
                        {service.description}
                      </p>
                      <span className="text-blue-600 text-sm font-semibold">
                        From ${service.basePrice}
                        {service.unit}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-xl font-bold mb-2">
              Not sure which service you need?
            </h2>
            <p className="text-blue-100 mb-5">
              Call us and we&apos;ll help you figure out what&apos;s needed.
              Same-day appointments available across Rancho Cucamonga and the
              Inland Empire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book/step1"
                className="inline-block bg-white text-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Book a Service
              </Link>
              <a
                href="tel:+19093898092"
                className="inline-block border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Call (909) 389-8092
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
