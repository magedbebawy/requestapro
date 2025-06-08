import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useBooking } from "@/context/BookingContext";
import { format, parseISO, addDays, setHours, setMinutes } from "date-fns";
import CalendarPicker from "@/components/CalendarPicker";

type TimeSlot = {
  start: string;
  end: string;
  available: boolean;
};

type Availability = {
  date: string;
  slots: TimeSlot[];
}[];

// Generate time slots for a given date (same as backend)
const generateTimeSlots = (date: Date): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const startHour = 17; // 5 PM
  const endHour = 22; // 10 PM

  for (let hour = startHour; hour < endHour; hour++) {
    const startTime = setMinutes(setHours(date, hour), 0);
    const endTime = setMinutes(setHours(date, hour + 1), 0);
    slots.push({
      start: format(startTime, "HH:mm"),
      end: format(endTime, "HH:mm"),
      available: false,
    });
  }

  // Randomly select 2-3 slots to be available
  const numAvailableSlots = Math.floor(Math.random() * 2) + 2;
  const availableIndices = new Set<number>();
  while (availableIndices.size < numAvailableSlots) {
    const randomIndex = Math.floor(Math.random() * slots.length);
    availableIndices.add(randomIndex);
  }
  availableIndices.forEach((index) => {
    slots[index].available = true;
  });
  return slots;
};

export default function BookingStep2() {
  const router = useRouter();
  const { serviceSlug, setDateTime } = useBooking();
  const [availability, setAvailability] = useState<Availability>([]);
  const [selectedDate, setSelectedDate] = useState<string>();
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot>();
  const [view, setView] = useState<"calendar" | "timeSlots">("calendar");

  // Generate availability for the next 31 days on mount
  useEffect(() => {
    if (!serviceSlug) {
      router.push("/book/step1");
      return;
    }
    const avail: Availability = Array.from({ length: 31 }, (_, i) => {
      const date = addDays(new Date(), i);
      return {
        date: format(date, "yyyy-MM-dd"),
        slots: generateTimeSlots(date),
      };
    });
    setAvailability(avail);
  }, [serviceSlug, router]);

  const handleNext = () => {
    if (!selectedDate || !selectedSlot) return;
    setDateTime(
      parseISO(selectedDate),
      `${selectedSlot.start}-${selectedSlot.end}`
    );
    router.push("/book/step3");
  };

  return (
    <>
      <NextSeo
        title="Choose Date & Time | Book Professional Home Services"
        description="Select your preferred date and time for your professional home service. Book your appointment with flexible scheduling options."
        canonical="https://requestapro.com/book/step2"
        noindex={true} // Since this is a booking step, we don't want it indexed
        openGraph={{
          title: "Choose Date & Time | Book Professional Home Services",
          description:
            "Select your preferred date and time for your professional home service. Book your appointment with flexible scheduling options.",
          url: "https://requestapro.com/book/step2",
          type: "website",
        }}
      />
      <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-8">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                Choose Date & Time
              </h1>
              <p className="text-sm sm:text-base text-gray-700">
                Select your preferred appointment slot
              </p>
            </div>

            {view === "calendar" ? (
              <>
                {/* CalendarPicker */}
                <div className="mb-6 sm:mb-8">
                  <CalendarPicker
                    selectedDate={
                      selectedDate ? new Date(selectedDate) : new Date()
                    }
                    onDateChange={(date) => {
                      setSelectedDate(date.toISOString().slice(0, 10));
                      setSelectedSlot(undefined);
                      setView("timeSlots");
                    }}
                    minDate={new Date()}
                    maxDate={
                      new Date(
                        new Date().getFullYear(),
                        new Date().getMonth() + 1,
                        0
                      )
                    }
                  />
                </div>
                <div className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  <p>Tap a date to see available time slots</p>
                </div>
              </>
            ) : (
              <>
                {/* Selected Slot Summary */}
                {selectedDate && selectedSlot && (
                  <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Selected Appointment
                    </h3>
                    <p className="text-blue-800">
                      {format(parseISO(selectedDate), "EEEE, MMMM d, yyyy")}
                      <br />
                      {format(
                        parseISO(`2000-01-01T${selectedSlot.start}`),
                        "h:mm a"
                      )}{" "}
                      -{" "}
                      {format(
                        parseISO(`2000-01-01T${selectedSlot.end}`),
                        "h:mm a"
                      )}
                    </p>
                  </div>
                )}

                {/* Time slots for selectedDate */}
                <div className="mb-8">
                  <h2 className="font-semibold mb-2 text-gray-800">
                    Available Times
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {availability
                      .find((day) => day.date === selectedDate)
                      ?.slots.filter((slot) => slot.available)
                      .map((slot) => (
                        <button
                          key={slot.start}
                          onClick={() => setSelectedSlot(slot)}
                          className={`px-3 py-2 rounded-lg font-medium border transition text-sm sm:text-base
                            ${
                              selectedSlot === slot
                                ? "bg-blue-600 text-white border-blue-700"
                                : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
                            }`}
                        >
                          {format(
                            parseISO(`2000-01-01T${slot.start}`),
                            "h:mm a"
                          )}{" "}
                          -{" "}
                          {format(parseISO(`2000-01-01T${slot.end}`), "h:mm a")}
                        </button>
                      )) || (
                      <div className="col-span-full text-gray-400">
                        No available times
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setView("calendar")}
                    className="text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-3 py-1"
                  >
                    ← Back to Calendar
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    disabled={!selectedSlot}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* Back Button (only in calendar view) */}
            {view === "calendar" && (
              <div className="mt-6 sm:mt-8">
                <button
                  onClick={() => router.back()}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-3 py-2 text-sm sm:text-base"
                >
                  ← Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
