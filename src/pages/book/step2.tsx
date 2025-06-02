import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useBooking } from "@/context/BookingContext";
import { format, parseISO, isToday, isPast } from "date-fns";

type TimeSlot = {
  start: string;
  end: string;
  available: boolean;
};

type Availability = {
  date: string;
  slots: TimeSlot[];
}[];

// Add this type for FullCalendar event click info
interface FullCalendarEvent {
  event: {
    startStr: string;
    extendedProps: {
      slot: TimeSlot;
    };
  };
}

export default function BookingStep2() {
  const router = useRouter();
  const { serviceSlug, setDateTime } = useBooking();
  const [availability, setAvailability] = useState<Availability>([]);
  const [selectedDate, setSelectedDate] = useState<string>();
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot>();
  const [view, setView] = useState<"calendar" | "timeSlots">("calendar");

  // Fetch availability when component mounts
  useEffect(() => {
    if (!serviceSlug) {
      router.push("/book/step1");
      return;
    }

    fetch(`/api/availability?service=${serviceSlug}`)
      .then((res) => res.json())
      .then(setAvailability)
      .catch(console.error);
  }, [serviceSlug, router]);

  // Convert availability to calendar events
  const events = availability.flatMap((day) =>
    day.slots
      .filter((slot) => slot.available)
      .map((slot) => ({
        title: `${format(
          parseISO(`2000-01-01T${slot.start}`),
          "h:mm a"
        )} - ${format(parseISO(`2000-01-01T${slot.end}`), "h:mm a")}`,
        date: day.date,
        start: `${day.date}T${slot.start}`,
        end: `${day.date}T${slot.end}`,
        extendedProps: { slot },
        backgroundColor: "#3B82F6",
        borderColor: "#3B82F6",
        textColor: "#ffffff",
      }))
  );

  // Update handleEventClick to use FullCalendarEvent instead of any
  const handleEventClick = (info: unknown) => {
    if (
      typeof info === "object" &&
      info !== null &&
      "event" in info &&
      typeof (info as FullCalendarEvent).event === "object" &&
      (info as FullCalendarEvent).event !== null &&
      "startStr" in (info as FullCalendarEvent).event
    ) {
      const event = (info as FullCalendarEvent).event;
      const date = event.startStr.split("T")[0];
      if (isPast(parseISO(date)) && !isToday(parseISO(date))) return;
      setSelectedDate(date);
      setSelectedSlot(event.extendedProps.slot);
      setView("timeSlots");
    }
  };

  const handleNext = () => {
    if (!selectedDate || !selectedSlot) return;
    setDateTime(
      parseISO(selectedDate),
      `${selectedSlot.start}-${selectedSlot.end}`
    );
    router.push("/book/step3");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2 text-gray-900">
              Choose Date & Time
            </h1>
            <p className="text-gray-700">
              Select your preferred appointment slot
            </p>
          </div>

          {view === "calendar" ? (
            <>
              {/* Calendar */}
              <div className="mb-8">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="dayGridWeek"
                  events={events}
                  eventClick={handleEventClick}
                  height="auto"
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridWeek,timeGridDay",
                  }}
                  eventTimeFormat={{
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }}
                  slotMinTime="17:00:00"
                  slotMaxTime="22:00:00"
                  allDaySlot={false}
                  dayHeaderFormat={{ weekday: "long" }}
                  eventDisplay="block"
                  eventMinHeight={30}
                />
              </div>

              {/* Instructions */}
              <div className="text-center text-gray-600 mb-8">
                <p>Click on an available time slot to select it</p>
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
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Back Button (only in calendar view) */}
          {view === "calendar" && (
            <div className="mt-8">
              <button
                onClick={() => router.back()}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-3 py-1"
              >
                ← Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
