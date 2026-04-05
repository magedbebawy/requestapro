import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) =>
    router.pathname === path || router.pathname.startsWith(path + "/");

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/locations", label: "Locations" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-44">
              <Image
                src="/logo.png"
                alt="RequestAPro Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
                className="hover:opacity-90 transition-opacity"
              />
            </div>
            <span className="sr-only">RequestAPro</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex sm:items-center sm:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  isActive(link.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+19093898092"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              (909) 389-8092
            </a>
            <Link
              href="/book/step1"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden p-2 rounded text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="sm:hidden border-t border-gray-100 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded transition-colors ${
                  isActive(link.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3 pb-1 space-y-2">
              <a
                href="tel:+19093898092"
                className="flex items-center gap-2 text-sm text-gray-700 font-medium"
              >
                <PhoneIcon className="w-4 h-4" />
                (909) 389-8092
              </a>
              <Link
                href="/book/step1"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
