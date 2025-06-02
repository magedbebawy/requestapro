import type { NextApiRequest, NextApiResponse } from "next";
import { addDays, format, setHours, setMinutes } from "date-fns";

type TimeSlot = {
  start: string;
  end: string;
  available: boolean;
};

type Availability = {
  date: string;
  slots: TimeSlot[];
}[];

// Generate time slots for a given date
const generateTimeSlots = (date: Date): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const startHour = 17; // 5 PM
  const endHour = 22; // 10 PM

  // Generate all possible slots
  for (let hour = startHour; hour < endHour; hour++) {
    const startTime = setMinutes(setHours(date, hour), 0);
    const endTime = setMinutes(setHours(date, hour + 1), 0);

    slots.push({
      start: format(startTime, "HH:mm"),
      end: format(endTime, "HH:mm"),
      available: false, // Default to unavailable
    });
  }

  // Randomly select 2-3 slots to be available
  const numAvailableSlots = Math.floor(Math.random() * 2) + 2; // 2-3 slots
  const availableIndices = new Set<number>();

  while (availableIndices.size < numAvailableSlots) {
    const randomIndex = Math.floor(Math.random() * slots.length);
    availableIndices.add(randomIndex);
  }

  // Mark selected slots as available
  availableIndices.forEach((index) => {
    slots[index].available = true;
  });

  return slots;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Availability>
) {
  if (req.method !== "GET") {
    return res.status(405).json([]);
  }

  // Generate availability for the next 7 days
  const availability: Availability = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(new Date(), i);
    return {
      date: format(date, "yyyy-MM-dd"),
      slots: generateTimeSlots(date),
    };
  });

  // Add a cache header to prevent too frequent updates
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=300, stale-while-revalidate=600"
  );

  res.status(200).json(availability);
}
