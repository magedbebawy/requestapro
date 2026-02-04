import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import {
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <>
      <NextSeo
        title="Professional Home Services"
        description="Book trusted professionals for all your home service needs. From installation to repair and maintenance, we've got you covered with our wide range of services."
        canonical="https://requestapro.com"
        openGraph={{
          title: "Professional Home Services | RequestAPro",
          description:
            "Book trusted professionals for all your home service needs. From installation to repair and maintenance, we've got you covered.",
          url: "https://requestapro.com",
          type: "website",
          images: [
            {
              url: "https://requestapro.com/home-og.jpg",
              width: 1200,
              height: 630,
              alt: "RequestAPro Home Services",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "home services, professional installation, repair services, maintenance, home improvement, contractors",
          },
        ]}
      />
      <LocalBusinessJsonLd
        type="ProfessionalService"
        id="https://requestapro.com"
        name="RequestAPro"
        description="Professional home services including TV mounting, smart home installation, and furniture assembly."
        url="https://requestapro.com"
        telephone="+1-9093898092"
        address={{
          addressLocality: "Ranch cucamonga",
          addressRegion: "CA",
          postalCode: "91730",
          addressCountry: "US",
        }}
        geo={{
          latitude: "34.1064",
          longitude: "-117.5931",
        }}
        images={[
          "https://requestapro.com/hero-bg.png",
          "https://requestapro.com/logo.png",
        ]}
        priceRange="$69 - $150+"
        openingHours={[
          {
            opens: "08:00",
            closes: "20:00",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
          },
        ]}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt="Professional home services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Home Services, On Demand
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Expert TV mounting, smart home installation, and furniture
              assembly services
            </p>
            <Link
              href="/book/step1"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Book a Service
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: ClockIcon,
                  title: "Book Online",
                  description:
                    "Choose your service and preferred time slot in minutes",
                },
                {
                  icon: UserGroupIcon,
                  title: "Expert Arrives",
                  description:
                    "Our vetted professional arrives at your scheduled time",
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Quality Guaranteed",
                  description:
                    "100% satisfaction guaranteed on all our services",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-sm"
                >
                  <step.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/${service.image}`}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-semibold">
                        From ${service.basePrice}
                        {service.unit}
                      </span>
                      <span className="text-blue-600">Learn more →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Visit Our Location
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Find us on Google Maps
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1681235.5769289576!2d-117.28781716122342!3d34.61267629220036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3370605b48fc5%3A0x217e316bdb6e3b71!2sRequest%20a%20pro!5e0!3m2!1sen!2sus!4v1748312391028!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
