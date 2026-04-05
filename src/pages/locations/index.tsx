import { NextSeo } from "next-seo";
import Link from "next/link";
import { cities, cityServicePages } from "@/data/cityPages";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function LocationsPage() {
  return (
    <>
      <NextSeo
        title="Service Areas | TV Mounting & Smart Home Installation Near You | RequestAPro"
        description="RequestAPro serves Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, Chino, and surrounding Inland Empire areas for TV mounting, Ring installation, Nest setup, and smart home services."
        canonical="https://requestapro.com/locations"
        openGraph={{
          title:
            "Service Areas | TV Mounting & Smart Home Installation | RequestAPro",
          description:
            "Serving Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, Chino, and surrounding Inland Empire areas.",
          url: "https://requestapro.com/locations",
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-11 text-sm text-gray-500 gap-2">
              <Link
                href="/"
                className="hover:text-gray-700 flex items-center gap-1"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <ChevronRightIcon className="h-4 w-4 text-gray-300" />
              <span className="text-gray-900 font-medium">Locations</span>
            </div>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              TV Mounting &amp; Smart Home Installation Near You
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              RequestAPro serves Rancho Cucamonga and all surrounding Inland
              Empire cities. Find your city below to see local services and book
              an appointment.
            </p>
          </div>

          {/* Cities grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {cities.map((city) => {
              const cityPages = cityServicePages.filter(
                (p) => p.citySlug === city.slug,
              );
              return (
                <div
                  key={city.slug}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <h2 className="text-lg font-bold text-gray-900 mb-1">
                    {city.name}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    {city.description}
                  </p>
                  {cityPages.length > 0 ? (
                    <div className="space-y-2">
                      {cityPages.map((p) => (
                        <Link
                          key={p.serviceSlug}
                          href={`/locations/${p.citySlug}/${p.serviceSlug}`}
                          className="flex items-center justify-between text-sm text-blue-600 hover:text-blue-700 group"
                        >
                          <span>{p.serviceLabel}</span>
                          <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">
                      We serve {city.name}.{" "}
                      <a
                        href="tel:+19093898092"
                        className="text-blue-600 hover:underline"
                      >
                        Call for availability.
                      </a>
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* All services quick access */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Don&apos;t See Your City?
            </h2>
            <p className="text-gray-600 mb-5">
              We may still be able to help. Call us or book online and
              we&apos;ll confirm availability for your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book/step1"
                className="inline-block bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Book a Service
              </Link>
              <a
                href="tel:+19093898092"
                className="inline-block border border-gray-300 text-gray-700 px-7 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
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
