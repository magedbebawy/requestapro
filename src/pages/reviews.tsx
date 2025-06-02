import { NextSeo } from "next-seo";

export default function ReviewsPage() {
  return (
    <>
      <NextSeo
        title="Customer Reviews | RequestAPro"
        description="Read what our customers say about our services. Real reviews from Google and Yelp."
        canonical="https://requestapro.com/reviews"
        openGraph={{
          url: "https://requestapro.com/reviews",
          title: "Customer Reviews | RequestAPro",
          description:
            "Read what our customers say about our services. Real reviews from Google and Yelp.",
          type: "website",
        }}
      />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Customer Reviews
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              See what our customers are saying about our services
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {/* Google Reviews section removed */}
            {/* Yelp Reviews section removed */}
          </div>
        </div>
      </div>
    </>
  );
}
