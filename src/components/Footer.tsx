import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { services } from "@/data/services";
import { cities } from "@/data/cityPages";

export default function Footer() {
  const tvServices = services.filter((s) => s.category === "tv");
  const smartHomeServices = services.filter((s) => s.category === "smart-home");

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-white font-bold text-lg">
              RequestAPro
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Professional TV mounting, Ring installation, Nest thermostat
              setup, and smart home services in Rancho Cucamonga and the Inland
              Empire.
            </p>
            <a
              href="tel:+19093898092"
              className="inline-flex items-center gap-2 mt-4 text-white font-semibold hover:text-blue-400 transition-colors text-sm"
            >
              <PhoneIcon className="w-4 h-4" />
              (909) 389-8092
            </a>
            <p className="text-xs mt-1 text-gray-500">Mon–Sun, 8am–8pm</p>
          </div>

          {/* TV Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              TV Services
            </h3>
            <ul className="space-y-2">
              {tvServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Smart Home */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Smart Home &amp; Security
            </h3>
            <ul className="space-y-2">
              {smartHomeServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href="/locations"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View all locations →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} RequestAPro. All rights reserved.
          </p>
          <p className="text-gray-500 text-center">
            Proudly serving Rancho Cucamonga, Fontana, Ontario, Upland, Rialto,
            Eastvale, Chino &amp; surrounding Inland Empire areas.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/locations"
              className="hover:text-white transition-colors"
            >
              Locations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
