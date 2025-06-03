import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
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
                {/* Calendar */}
                <div className="mb-6 sm:mb-8">
                  <div className="fc fc-media-screen fc-direction-ltr fc-theme-standard mobile-calendar">
                    <FullCalendar
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                      ]}
                      initialView="dayGridWeek"
                      events={events}
                      eventClick={handleEventClick}
                      height="auto"
                      headerToolbar={{
                        left: "prev,next",
                        center: "title",
                        right: "dayGridWeek,timeGridDay",
                      }}
                      views={{
                        dayGridWeek: {
                          titleFormat: { month: "short", day: "numeric" },
                          dayHeaderFormat: { weekday: "short" },
                        },
                        timeGridDay: {
                          titleFormat: { month: "short", day: "numeric" },
                        },
                      }}
                      eventTimeFormat={{
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }}
                      slotMinTime="17:00:00"
                      slotMaxTime="22:00:00"
                      allDaySlot={false}
                      dayHeaderFormat={{ weekday: "short" }}
                      eventDisplay="block"
                      eventMinHeight={40}
                      stickyHeaderDates={true}
                      nowIndicator={true}
                      expandRows={true}
                      handleWindowResize={true}
                      contentHeight="auto"
                      aspectRatio={1.35}
                      buttonText={{
                        today: "Today",
                        month: "Month",
                        week: "Week",
                        day: "Day",
                      }}
                      eventContent={(eventInfo) => (
                        <div className="fc-event-main-frame p-1">
                          <div className="fc-event-time font-medium">
                            {format(
                              parseISO(
                                `2000-01-01T${eventInfo.event.extendedProps.slot.start}`
                              ),
                              "h:mm a"
                            )}
                          </div>
                          <div className="fc-event-title font-medium">
                            Available
                          </div>
                        </div>
                      )}
                    />
                  </div>
                </div>

                {/* Instructions */}
                <div className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  <p>Click on an available time slot to select it</p>
                </div>

                {/* Add mobile-specific styles */}
                <style jsx global>{`
                  @media (max-width: 640px) {
                    .fc {
                      font-size: 16px !important;
                    }
                    .fc .fc-toolbar {
                      flex-direction: column;
                      gap: 0.75rem;
                      padding: 0.75rem;
                      background-color: #f8fafc;
                      border-radius: 0.5rem;
                      margin-bottom: 1rem;
                    }
                    .fc .fc-toolbar-title {
                      font-size: 1.25rem !important;
                      color: #1f2937 !important;
                      font-weight: 600 !important;
                      text-align: center;
                      margin: 0.5rem 0;
                    }
                    .fc .fc-button {
                      padding: 0.5em 0.75em;
                      font-size: 0.875rem !important;
                      font-weight: 500 !important;
                      background-color: #3b82f6 !important;
                      border-color: #3b82f6 !important;
                      color: white !important;
                      border-radius: 0.375rem !important;
                      height: auto !important;
                      line-height: 1.25 !important;
                    }
                    .fc .fc-button:hover {
                      background-color: #2563eb !important;
                      border-color: #2563eb !important;
                    }
                    .fc .fc-button-group {
                      display: flex;
                      gap: 0.5rem;
                      flex-wrap: wrap;
                      justify-content: center;
                    }
                    .fc .fc-col-header-cell {
                      padding: 0.5rem 0;
                      background-color: #f8fafc;
                    }
                    .fc .fc-col-header-cell-cushion {
                      padding: 0.5rem;
                      font-size: 0.875rem !important;
                      color: #1f2937 !important;
                      font-weight: 600 !important;
                      text-decoration: none !important;
                    }
                    .fc .fc-daygrid-day {
                      min-height: 3em;
                    }
                    .fc .fc-daygrid-day-number {
                      padding: 0.5rem;
                      font-size: 0.875rem !important;
                      color: #1f2937 !important;
                      font-weight: 500 !important;
                      text-decoration: none !important;
                    }
                    .fc .fc-event {
                      margin: 0.25rem 0;
                      padding: 0.25rem 0.5rem;
                      border-radius: 0.375rem;
                      background-color: #3b82f6 !important;
                      border-color: #3b82f6 !important;
                    }
                    .fc .fc-event-time {
                      font-size: 0.875rem !important;
                      font-weight: 500 !important;
                      color: white !important;
                    }
                    .fc .fc-event-title {
                      font-size: 0.875rem !important;
                      font-weight: 500 !important;
                      color: white !important;
                    }
                    .fc .fc-day-today {
                      background-color: #eff6ff !important;
                    }
                    .fc .fc-day-today .fc-daygrid-day-number {
                      background-color: #3b82f6;
                      color: white;
                      border-radius: 50%;
                      width: 1.75rem;
                      height: 1.75rem;
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                    }
                    .fc .fc-view-harness {
                      min-height: 400px;
                      border-radius: 0.5rem;
                      overflow: hidden;
                      border: 1px solid #e5e7eb;
                    }
                    .fc .fc-scrollgrid {
                      border-radius: 0.5rem;
                      overflow: hidden;
                    }
                    .fc .fc-scrollgrid-section-header {
                      background-color: #f8fafc;
                    }
                    .fc .fc-daygrid-body {
                      width: 100% !important;
                    }
                    .fc .fc-daygrid-day-frame {
                      min-height: 3em;
                    }
                    .fc .fc-daygrid-day-events {
                      padding: 0.25rem;
                    }
                    .fc .fc-daygrid-event {
                      margin: 0.25rem 0;
                    }
                    .fc .fc-daygrid-event-dot {
                      border-color: #3b82f6;
                    }
                    .fc .fc-daygrid-event-harness {
                      margin-top: 0.25rem;
                    }
                    .fc .fc-daygrid-more-link {
                      font-size: 0.875rem !important;
                      padding: 0.25rem 0.5rem;
                      color: #3b82f6 !important;
                      font-weight: 500 !important;
                    }
                    .fc .fc-toolbar-chunk {
                      display: flex;
                      gap: 0.5rem;
                      flex-wrap: wrap;
                      justify-content: center;
                    }
                    .fc .fc-toolbar-chunk:last-child {
                      margin-top: 0.5rem;
                    }
                    .fc .fc-button-primary:not(:disabled):active,
                    .fc .fc-button-primary:not(:disabled).fc-button-active {
                      background-color: #2563eb !important;
                      border-color: #2563eb !important;
                    }
                    .fc .fc-button-primary:not(:disabled):focus {
                      box-shadow: 0 0 0 2px #fff, 0 0 0 4px #3b82f6;
                    }
                    .fc .fc-event-main-frame {
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      min-height: 2.5rem;
                      font-size: 1rem !important;
                      color: #fff !important;
                      font-weight: 700 !important;
                      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
                      overflow: visible !important;
                    }
                    .fc .fc-event-time,
                    .fc .fc-event-title {
                      color: #fff !important;
                      font-size: 1rem !important;
                      font-weight: 700 !important;
                      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
                    }
                  }
                `}</style>
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
