import Link from "next/link";
import { NextSeo } from "next-seo";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="Page Not Found | RequestAPro"
        description="The page you are looking for does not exist. Return to RequestAPro's homepage to book professional home services."
        noindex={true}
      />
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600">404</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <HomeIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
