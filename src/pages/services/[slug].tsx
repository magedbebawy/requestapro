import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { services, Service } from "@/data/services";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ServicePageProps {
  service: Service;
}

export default function ServicePage({ service }: ServicePageProps) {
  const getServiceDetails = (service: Service) => {
    switch (service.slug) {
      case "tv-mounting":
        return {
          included: [
            "Professional wall mounting",
            "Finding the perfect viewing height",
            "Basic cable management",
            "Clean up after installation",
            "100% satisfaction guarantee",
          ],
          note: 'Additional charges may apply for TVs over 40", wire management, and lifting help.',
        };
      case "smart-install":
        return {
          included: [
            "Professional device installation",
            "Network assessment",
            "Device setup",
            "Clean up after installation",
            "100% satisfaction guarantee",
          ],
          note: "First device: $69, Additional devices: $39 each. Network setup available for $50.",
        };
      case "furniture-assembly":
        return {
          included: [
            "Professional furniture assembly",
            "Assembly according to specifications",
            "Quality check",
            "Clean up of packaging",
            "100% satisfaction guarantee",
          ],
          note: "Small jobs: $69, Medium jobs: $89, Large jobs: $119. Additional items charged at the same rate.",
        };
      default:
        return {
          included: [
            "Professional service",
            "Quality workmanship",
            "Clean up after service",
            "100% satisfaction guarantee",
          ],
          note: service.pricingNote,
        };
    }
  };

  const serviceDetails = getServiceDetails(service);

  return (
    <>
      <NextSeo
        title={`${service.title} | Professional Installation Services`}
        description={`Professional ${service.title.toLowerCase()} services starting at $${
          service.basePrice
        }. ${service.description}`}
        canonical={`https://requestapro.com/services/${service.slug}`}
        openGraph={{
          title: `${service.title} | Professional Installation Services`,
          description: `Professional ${service.title.toLowerCase()} services starting at $${
            service.basePrice
          }. ${service.description}`,
          url: `https://requestapro.com/services/${service.slug}`,
          type: "website",
          images: [
            {
              url: `https://requestapro.com/${service.image}`,
              width: 1200,
              height: 630,
              alt: service.title,
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `${service.title.toLowerCase()}, professional installation, home services, ${
              service.slug
            }, installation services`,
          },
        ]}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-12">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                <HomeIcon className="h-5 w-5" />
              </Link>
              <ChevronRightIcon className="h-5 w-5 text-gray-400 mx-2" />
              <Link
                href="/services"
                className="text-gray-500 hover:text-gray-700"
              >
                Services
              </Link>
              <ChevronRightIcon className="h-5 w-5 text-gray-400 mx-2" />
              <span className="text-gray-900">{service.title}</span>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Banner */}
              <div className="relative h-64 rounded-lg overflow-hidden mb-8">
                <Image
                  src={`/${service.image}`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2 text-white">
                    {service.title}
                  </h1>
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold">
                    From ${service.basePrice}
                    {service.unit}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                  About This Service
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                {service.pricingNote && (
                  <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                    {service.pricingNote}
                  </p>
                )}
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                  What&apos;s Included
                </h2>
                <ul className="space-y-4">
                  {serviceDetails.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-3 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Book This Service
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Starting at:</span>
                    <span>
                      ${service.basePrice}
                      {service.unit}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <Link
                      href={`/book/step1?service=${service.slug}`}
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    Get a detailed quote during booking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = services.map((service) => ({
    params: { slug: service.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async ({
  params,
}) => {
  const service = services.find((s) => s.slug === params?.slug);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      service,
    },
  };
};
