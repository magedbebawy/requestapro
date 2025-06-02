import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { format, parseISO } from "date-fns";

type TimeSlot = {
  start: string;
  end: string;
  available: boolean;
};

type Availability = {
  date: string;
  slots: TimeSlot[];
}[];

interface CalendarPickerProps {
  serviceSlug?: string;
  onDateSelect?: (date: Date, slot: TimeSlot) => void;
  selectedDate?: Date;
  selectedSlot?: TimeSlot;
  className?: string;
}

// Add this type for FullCalendar event click info
interface FullCalendarEvent {
  event: {
    startStr: string;
    extendedProps: {
      slot: TimeSlot;
    };
  };
}

export default function CalendarPicker({
  serviceSlug,
  onDateSelect,
  selectedDate,
  selectedSlot,
  className = "",
}: CalendarPickerProps) {
  const [availability, setAvailability] = useState<Availability>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  // Fetch availability when service changes
  useEffect(() => {
    if (!serviceSlug) return;

    setIsLoading(true);
    setError(undefined);

    fetch(`/api/availability?service=${serviceSlug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch availability");
        return res.json();
      })
      .then(setAvailability)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [serviceSlug]);

  // Convert availability to calendar events
  const events = availability.flatMap((day) =>
    day.slots
      .filter((slot) => slot.available)
      .map((slot) => ({
        title: `${slot.start} - ${slot.end}`,
        date: day.date,
        extendedProps: { slot },
        backgroundColor:
          selectedDate && selectedSlot
            ? format(parseISO(day.date), "yyyy-MM-dd") ===
                format(selectedDate, "yyyy-MM-dd") &&
              slot.start === selectedSlot.start &&
              slot.end === selectedSlot.end
              ? "#2563eb" // Selected slot color
              : "#60a5fa" // Available slot color
            : "#60a5fa",
        borderColor: "transparent",
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
      const date = parseISO(event.startStr);
      const slot = event.extendedProps.slot;
      onDateSelect?.(date, slot);
    }
  };

  if (isLoading) {
    return (
      <div
        className={`animate-pulse bg-gray-100 rounded-lg ${className}`}
        style={{ height: "400px" }}
      />
    );
  }

  if (error) {
    return (
      <div className={`bg-red-50 text-red-600 p-4 rounded-lg ${className}`}>
        Error loading availability: {error}
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}
    >
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridWeek"
        events={events}
        eventClick={handleEventClick}
        height="auto"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
        dayMaxEvents={true}
        eventDisplay="block"
        eventMinHeight={30}
        eventMinWidth={30}
        eventMaxStack={1}
        eventOverlap={false}
        eventConstraint={{
          startTime: "09:00",
          endTime: "17:00",
        }}
        slotEventOverlap={false}
        eventContent={(eventInfo) => (
          <div className="p-1 text-xs font-medium text-white truncate">
            {eventInfo.event.title}
          </div>
        )}
      />
    </div>
  );
}
