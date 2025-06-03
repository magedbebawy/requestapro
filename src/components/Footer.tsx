import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-gray-900 text-sm font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 text-sm font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-900 transition-colors"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RequestAPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
