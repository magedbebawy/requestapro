import { useState } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("");
  const selectedServiceData = services.find(
    (service) => service.slug === selectedService
  );

  return (
    <>
      <NextSeo
        title="Our Services & Pricing"
        description="Explore our professional home services and transparent pricing. From TV mounting to smart home installation, we offer competitive rates with quality guaranteed."
        canonical="https://requestapro.com/services"
        openGraph={{
          title: "Services & Pricing | RequestAPro",
          description:
            "Explore our professional home services and transparent pricing. Quality service at competitive rates.",
          url: "https://requestapro.com/services",
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional installation services for your home and office needs.
              Choose from our range of services below.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="lg:col-span-2 space-y-8">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={`/${service.image}`}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={service.slug === "tv-mounting"}
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-col gap-2 mb-4">
                      <span className="text-blue-600 font-semibold">
                        From ${service.basePrice}
                        {service.unit}
                      </span>
                      {service.pricingNote && (
                        <p className="text-sm text-gray-600">
                          {service.pricingNote}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Learn more →
                      </Link>
                      <Link
                        href={`/book/step1?service=${service.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Book now →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h2 className="text-xl font-semibold mb-6 text-gray-900">
                  Service Details
                </h2>
                <div className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select a Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Service Details */}
                  {selectedServiceData && (
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-medium text-blue-900 mb-2">
                          Pricing Information
                        </h3>
                        <p className="text-blue-800 text-sm">
                          {selectedServiceData.pricingNote}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 mb-4">
                          For a detailed estimate based on your specific needs,
                          please proceed to booking
                        </p>
                        <Link
                          href={`/book/step1?service=${selectedService}`}
                          className="inline-block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
