import { NextSeo } from "next-seo";
import Image from "next/image";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const stats = [
  { label: "Years in Business", value: "7+" },
  { label: "Happy Customers", value: "10,000+" },
  { label: "Services Completed", value: "25,000+" },
  { label: "Team Members", value: "50+" },
];

const values = [
  {
    title: "Quality Guaranteed",
    description:
      "We stand behind every service with our 100% satisfaction guarantee. If you&apos;re not completely satisfied, we&apos;ll make it right.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Expert Team",
    description:
      "Our technicians are highly trained, certified, and experienced in their respective fields. We invest in continuous training to stay ahead of industry standards.",
    icon: UserGroupIcon,
  },
  {
    title: "On-Time Service",
    description:
      "We value your time. Our team arrives promptly at scheduled appointments and completes work efficiently without compromising quality.",
    icon: ClockIcon,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees or surprises. We provide clear, upfront pricing and detailed estimates before starting any work.",
    icon: CheckCircleIcon,
  },
];

const guarantees = [
  "Licensed and insured technicians",
  "Background-checked team members",
  "Warranty on all installations",
  "Free estimates",
  "Satisfaction guaranteed",
];

export default function AboutPage() {
  return (
    <>
      <NextSeo
        title="About RequestAPro - Your Trusted Home Service Partner"
        description="With over 7 years of experience, RequestAPro delivers quality home services with guaranteed satisfaction. Learn about our values, team, and commitment to excellence."
        canonical="https://requestapro.com/about"
        openGraph={{
          title: "About RequestAPro - Your Trusted Home Service Partner",
          description:
            "With over 7 years of experience, RequestAPro delivers quality home services with guaranteed satisfaction. Learn about our values, team, and commitment to excellence.",
          url: "https://requestapro.com/about",
        }}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-blue-600 py-24">
          <div className="absolute inset-0">
            <Image
              src="/about-hero.png"
              alt="Our team at work"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Your Trusted Home Service Partner
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              With over 7 years of experience, we&apos;ve been helping
              homeowners transform their living spaces with professional
              installation and repair services.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-blue-600">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
              <p className="mt-4 text-xl text-gray-600">
                We&apos;re committed to delivering exceptional service with
                integrity and professionalism
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <value.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="relative h-64 lg:h-96 mb-8 lg:mb-0">
                <Image
                  src="/team-working.png"
                  alt="Our team working together"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Founded in 2017, RequestAPro began with a simple mission: to
                    provide homeowners with reliable, professional home services
                    they could trust. What started as a small team of dedicated
                    technicians has grown into a full-service company serving
                    thousands of satisfied customers.
                  </p>
                  <p className="mt-4">
                    Over the years, we&apos;ve expanded our services while
                    maintaining our commitment to quality and customer
                    satisfaction. Our growth is a testament to the trust our
                    customers place in us, and we work hard every day to earn
                    and maintain that trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-12 sm:px-12 lg:px-16">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Our Guarantees
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guarantees.map((guarantee) => (
                      <div
                        key={guarantee}
                        className="flex items-center text-white"
                      >
                        <CheckCircleIcon className="h-6 w-6 text-blue-200 mr-3" />
                        <span>{guarantee}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the RequestAPro Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied customers who trust us with their home
              services
            </p>
            <Link
              href="/book/step1"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Book Your Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
