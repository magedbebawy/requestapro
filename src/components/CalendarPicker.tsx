import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  TouchEvent,
} from "react";

/**
 * Props for CalendarPicker component.
 */
export interface CalendarPickerProps {
  /** The currently selected date */
  selectedDate: Date;
  /** Callback when a date is selected */
  onDateChange: (date: Date) => void;
  /** The minimum selectable date (inclusive) */
  minDate?: Date;
  /** The maximum selectable date (inclusive) */
  maxDate?: Date;
}

/**
 * CalendarPicker – A11y, mobile-friendly, responsive month-view date picker.
 *
 * @param props CalendarPickerProps
 */
const CalendarPicker: React.FC<CalendarPickerProps> = ({
  selectedDate,
  onDateChange,
  minDate,
  maxDate,
}) => {
  // State for the month/year being displayed
  const [viewDate, setViewDate] = useState<Date>(
    new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
  );
  // For keyboard navigation
  const gridRef = useRef<HTMLDivElement>(null);
  // For swipe gestures
  const touchStartX = useRef<number | null>(null);

  // Generate days for the current month grid
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startDay = firstDayOfMonth.getDay(); // 0 (Sun) - 6 (Sat)
  const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

  // Helper: is date disabled?
  const isDisabled = (date: Date) => {
    if (minDate && date < startOfDay(minDate)) return true;
    if (maxDate && date > startOfDay(maxDate)) return true;
    return false;
  };

  // Helper: is date today?
  const isToday = (date: Date) => {
    const now = new Date();
    return (
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate()
    );
  };

  // Helper: start of day
  function startOfDay(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  // Navigation handlers
  const goToPrevMonth = () => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  };
  const goToNextMonth = () => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  };

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const focusable = Array.from(
      gridRef.current?.querySelectorAll<HTMLButtonElement>(
        "button[data-day]"
      ) || []
    );
    const current = document.activeElement as HTMLButtonElement;
    const idx = focusable.indexOf(current);

    if (idx === -1) return;

    let nextIdx = idx;
    if (e.key === "ArrowRight")
      nextIdx = Math.min(idx + 1, focusable.length - 1);
    else if (e.key === "ArrowLeft") nextIdx = Math.max(idx - 1, 0);
    else if (e.key === "ArrowDown")
      nextIdx = Math.min(idx + 7, focusable.length - 1);
    else if (e.key === "ArrowUp") nextIdx = Math.max(idx - 7, 0);
    else if (e.key === "Home") nextIdx = 0;
    else if (e.key === "End") nextIdx = focusable.length - 1;
    else if (e.key === "PageUp") {
      goToPrevMonth();
      setTimeout(() => {
        // Focus same cell in new month
        const newFocusable = Array.from(
          gridRef.current?.querySelectorAll<HTMLButtonElement>(
            "button[data-day]"
          ) || []
        );
        newFocusable[idx]?.focus();
      }, 0);
      e.preventDefault();
      return;
    } else if (e.key === "PageDown") {
      goToNextMonth();
      setTimeout(() => {
        const newFocusable = Array.from(
          gridRef.current?.querySelectorAll<HTMLButtonElement>(
            "button[data-day]"
          ) || []
        );
        newFocusable[idx]?.focus();
      }, 0);
      e.preventDefault();
      return;
    } else if (e.key === "Enter" || e.key === " ") {
      current.click();
      e.preventDefault();
      return;
    } else {
      return;
    }
    focusable[nextIdx]?.focus();
    e.preventDefault();
  };

  // Touch swipe handlers
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) goToNextMonth();
      else goToPrevMonth();
    }
    touchStartX.current = null;
  };

  // Focus selected date on mount/month change
  useEffect(() => {
    setTimeout(() => {
      const btn = gridRef.current?.querySelector<HTMLButtonElement>(
        'button[aria-selected="true"]'
      );
      btn?.focus();
    }, 0);
  }, [viewDate, selectedDate]);

  // Weekday labels (start on Sunday)
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div
      className="w-full max-w-md mx-auto bg-white rounded-lg shadow p-4 sm:p-6"
      aria-label="Calendar date picker"
    >
      {/* Header: Month/Year and navigation */}
      <div className="flex items-center justify-between mb-2">
        <button
          type="button"
          aria-label="Previous month"
          onClick={goToPrevMonth}
          className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition text-xl font-bold"
        >
          &lt;
        </button>
        <div
          className="flex-1 text-center font-semibold text-lg sm:text-xl"
          aria-live="polite"
        >
          {viewDate.toLocaleString(undefined, {
            month: "long",
            year: "numeric",
          })}
        </div>
        <button
          type="button"
          aria-label="Next month"
          onClick={goToNextMonth}
          className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition text-xl font-bold"
        >
          &gt;
        </button>
      </div>
      {/* Weekday headers */}
      <div className="grid grid-cols-7 text-center text-xs sm:text-sm font-medium text-gray-500 mb-1">
        {weekdays.map((wd) => (
          <div key={wd} className="py-1">
            {wd}
          </div>
        ))}
      </div>
      {/* Days grid */}
      <div
        className="grid grid-cols-7 gap-1 sm:gap-2"
        ref={gridRef}
        role="grid"
        aria-label="Calendar dates"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {Array.from({ length: totalCells }).map((_, i) => {
          const dayNum = i - startDay + 1;
          const date = new Date(year, month, dayNum);
          const inMonth = dayNum > 0 && dayNum <= daysInMonth;
          const selected =
            inMonth &&
            selectedDate.getFullYear() === year &&
            selectedDate.getMonth() === month &&
            selectedDate.getDate() === dayNum;
          const today = inMonth && isToday(date);
          const disabled = !inMonth || isDisabled(date);

          return (
            <button
              key={i}
              type="button"
              data-day={inMonth ? dayNum : undefined}
              tabIndex={selected ? 0 : -1}
              aria-selected={selected}
              aria-label={
                inMonth
                  ? date.toLocaleDateString(undefined, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : undefined
              }
              disabled={disabled}
              onClick={() =>
                inMonth && !disabled && onDateChange(startOfDay(date))
              }
              className={[
                "w-full aspect-square min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg select-none outline-none transition font-medium",
                "text-base sm:text-lg",
                disabled
                  ? "bg-transparent text-gray-300 cursor-default"
                  : selected
                  ? "bg-blue-600 text-white shadow"
                  : today
                  ? "border border-blue-500 text-blue-700 bg-blue-50"
                  : "bg-gray-50 hover:bg-blue-100 active:bg-blue-200 text-gray-900 cursor-pointer",
                "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:z-10",
                "touch-manipulation",
                "sm:p-0 p-0",
              ].join(" ")}
              role="gridcell"
            >
              {inMonth ? dayNum : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarPicker;
