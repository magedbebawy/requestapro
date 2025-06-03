import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useBooking } from "@/context/BookingContext";
import { format } from "date-fns";
import { NextSeo } from "next-seo";

// Form validation schema
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address is required"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function BookingStep3() {
  const router = useRouter();
  const {
    serviceSlug,
    date,
    timeSlot,
    contactInfo,
    setContactInfo,
    getSelectedService,
    calculateTotal,
    tvMountingDetails,
    smartHomeDetails,
    furnitureAssemblyDetails,
  } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: contactInfo,
  });

  // Redirect if required booking info is missing
  useEffect(() => {
    if (!serviceSlug || !date || !timeSlot) {
      router.push("/book/step1");
    }
  }, [serviceSlug, date, timeSlot, router]);

  const handleSubmitBooking = async (data: FormData) => {
    if (isSubmitting || hasSubmitted) return;

    setIsSubmitting(true);
    setError(undefined);
    setContactInfo(data);

    try {
      const response = await fetch("/api/submit-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: getSelectedService(),
          date,
          timeSlot,
          contactInfo: data,
          total: calculateTotal(),
          tvDetails:
            serviceSlug === "tv-mounting"
              ? {
                  tvSizeRange: tvMountingDetails?.tvSizeRange,
                  exactTVSize: tvMountingDetails?.exactTVSize,
                  wireManagement: tvMountingDetails?.wireManagement,
                  liftingHelp: tvMountingDetails?.liftingHelp,
                }
              : undefined,
          smartHomeDetails:
            serviceSlug === "smart-install"
              ? {
                  deviceType: smartHomeDetails?.deviceType,
                  deviceCount: smartHomeDetails?.deviceCount,
                  deviceBrand: smartHomeDetails?.deviceBrand,
                  networkSetup: smartHomeDetails?.networkSetup,
                  mountingType: smartHomeDetails?.mountingType,
                  additionalDevices: smartHomeDetails?.additionalDevices,
                }
              : undefined,
          furnitureDetails:
            serviceSlug === "furniture-assembly"
              ? {
                  jobSize: furnitureAssemblyDetails?.jobSize,
                  itemCount: furnitureAssemblyDetails?.itemCount,
                  itemDescription: furnitureAssemblyDetails?.itemDescription,
                }
              : undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }

      setHasSubmitted(true);
      setIsSuccess(true);
    } catch (err) {
      console.error("Booking error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while submitting your booking"
      );
      setIsSubmitting(false);
    }
  };

  const service = getSelectedService();
  if (!service) return null;

  if (isSuccess) {
    return (
      <>
        <NextSeo
          title="Complete Your Booking | Book Professional Home Services"
          description="Enter your contact information to complete your booking. Secure and easy online booking process for professional home services."
          canonical="https://requestapro.com/book/step3"
          noindex={true}
          openGraph={{
            title: "Complete Your Booking | Book Professional Home Services",
            description:
              "Enter your contact information to complete your booking. Secure and easy online booking process for professional home services.",
            url: "https://requestapro.com/book/step3",
            type: "website",
          }}
        />
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="mb-6">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="h-10 w-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-4 text-gray-900">
                Booking Submitted Successfully!
              </h1>
              <p className="text-gray-700 mb-8 text-lg">
                Thank you for choosing our service. A technician will be
                assigned to your order and will contact you shortly to confirm
                the appointment.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left border border-gray-100">
                <h2 className="font-semibold text-gray-900 mb-4 text-lg">
                  Booking Details
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-medium text-gray-900">Service:</span>{" "}
                    {service.title}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Date:</span>{" "}
                    {format(date!, "EEEE, MMMM d, yyyy")}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Time:</span>{" "}
                    {timeSlot}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Total:</span>{" "}
                    <span className="text-blue-600 font-semibold">
                      ${calculateTotal()}
                      {service.unit}
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => router.push("/")}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NextSeo
        title="Complete Your Booking | Book Professional Home Services"
        description="Enter your contact information to complete your booking. Secure and easy online booking process for professional home services."
        canonical="https://requestapro.com/book/step3"
        noindex={true}
        openGraph={{
          title: "Complete Your Booking | Book Professional Home Services",
          description:
            "Enter your contact information to complete your booking. Secure and easy online booking process for professional home services.",
          url: "https://requestapro.com/book/step3",
          type: "website",
        }}
      />
      <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-8">
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                    Complete Your Booking
                  </h1>
                  <p className="text-sm sm:text-base text-gray-700">
                    Please provide your contact information to confirm your
                    appointment
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm sm:text-base text-red-600">{error}</p>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit(handleSubmitBooking)}
                  className="space-y-4 sm:space-y-6"
                  noValidate
                >
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        inputMode="tel"
                        {...register("phone")}
                        placeholder="(555) 555-5555"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Service Address *
                      </label>
                      <input
                        type="text"
                        {...register("address")}
                        placeholder="123 Main St, City, State ZIP"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.address.message}
                        </p>
                      )}
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        {...register("notes")}
                        rows={3}
                        placeholder="Any special instructions or requirements..."
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || hasSubmitted}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800 touch-manipulation"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : hasSubmitted ? (
                        "Submitted"
                      ) : (
                        "Submit Booking"
                      )}
                    </button>
                    <p className="mt-2 text-sm text-gray-500 text-center">
                      * Required fields
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-4 sm:top-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">
                  Booking Summary
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Service
                    </h3>
                    <p className="text-gray-900">{service.title}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Date & Time
                    </h3>
                    <p className="text-gray-900">
                      {date && format(date, "EEEE, MMMM d, yyyy")}
                    </p>
                    <p className="text-gray-900">{timeSlot}</p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-blue-600">
                        ${calculateTotal()}
                        {service.unit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
