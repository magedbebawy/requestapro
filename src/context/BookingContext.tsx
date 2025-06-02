import { createContext, useContext, useState, ReactNode } from "react";
import { services } from "@/data/services";

export type TVSizeRange = "under-40" | "41-55" | "56-70" | "over-70";
export type WireManagement = "none" | "in-wall" | "external";
export type LiftingHelp = "yes" | "no";
export type DeviceType =
  | "camera"
  | "speaker"
  | "display"
  | "doorbell"
  | "other";
export type NetworkSetup = "none" | "basic";
export type JobSize = "small" | "medium" | "large";
export type MountingType = "none" | "wall" | "ceiling";
export type WallMountType = "none" | "fixed" | "full-motion";

export interface TVMountingDetails {
  tvSizeRange: TVSizeRange;
  exactTVSize?: number;
  wireManagement: WireManagement;
  liftingHelp: LiftingHelp;
  wallMountType: WallMountType;
}

export interface SmartHomeDetails {
  deviceType: DeviceType;
  deviceCount: number;
  deviceBrand?: string;
  networkSetup: NetworkSetup;
  mountingType: MountingType;
  additionalDevices?: string;
}

export interface FurnitureAssemblyDetails {
  jobSize: JobSize;
  itemCount: number;
  itemDescription: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes?: string;
  tvMountingDetails?: TVMountingDetails;
  smartHomeDetails?: SmartHomeDetails;
  furnitureAssemblyDetails?: FurnitureAssemblyDetails;
}

interface BookingContextType {
  serviceSlug?: string;
  date?: Date;
  timeSlot?: string;
  contactInfo?: ContactInfo;
  tvMountingDetails?: TVMountingDetails;
  smartHomeDetails?: SmartHomeDetails;
  furnitureAssemblyDetails?: FurnitureAssemblyDetails;
  packageOption?: string;
  setServiceSlug: (slug: string) => void;
  setDateTime: (date: Date, timeSlot: string) => void;
  setContactInfo: (info: ContactInfo) => void;
  setTVMountingDetails: (
    details:
      | TVMountingDetails
      | undefined
      | ((prev: TVMountingDetails | undefined) => TVMountingDetails)
  ) => void;
  setSmartHomeDetails: (
    details:
      | SmartHomeDetails
      | undefined
      | ((prev: SmartHomeDetails | undefined) => SmartHomeDetails)
  ) => void;
  setFurnitureAssemblyDetails: (
    details:
      | FurnitureAssemblyDetails
      | undefined
      | ((
          prev: FurnitureAssemblyDetails | undefined
        ) => FurnitureAssemblyDetails)
  ) => void;
  resetBooking: () => void;
  getSelectedService: () => (typeof services)[0] | undefined;
  calculateTotal: () => number;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [serviceSlug, setServiceSlug] = useState<string>();
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState<string>();
  const [contactInfo, setContactInfo] = useState<ContactInfo>();
  const [tvMountingDetails, setTVMountingDetails] =
    useState<TVMountingDetails>();
  const [smartHomeDetails, setSmartHomeDetails] = useState<SmartHomeDetails>();
  const [furnitureAssemblyDetails, setFurnitureAssemblyDetails] =
    useState<FurnitureAssemblyDetails>();
  const [packageOption, setPackageOption] = useState<string>();

  const getSelectedService = () => {
    return services.find((s) => s.slug === serviceSlug);
  };

  const calculateTotal = () => {
    const service = getSelectedService();
    if (!service) return 0;

    let total = 0;

    if (service.slug === "tv-mounting" && tvMountingDetails) {
      const basePrices = {
        "under-40": 69,
        "41-55": 79,
        "56-70": 99,
        "over-70": 149,
      };
      total = basePrices[tvMountingDetails.tvSizeRange];

      // Wall mount pricing
      if (tvMountingDetails.wallMountType === "fixed") {
        const wallMountPrices = {
          "under-40": 50,
          "41-55": 60,
          "56-70": 70,
          "over-70": 90,
        };
        total += wallMountPrices[tvMountingDetails.tvSizeRange];
      } else if (tvMountingDetails.wallMountType === "full-motion") {
        const wallMountPrices = {
          "under-40": 70,
          "41-55": 80,
          "56-70": 90,
          "over-70": 120,
        };
        total += wallMountPrices[tvMountingDetails.tvSizeRange];
      }

      if (tvMountingDetails.wireManagement === "in-wall") {
        total += 150;
      } else if (tvMountingDetails.wireManagement === "external") {
        total += 50;
      }

      if (tvMountingDetails.liftingHelp === "no") {
        total += 40;
      }
    } else if (service.slug === "smart-install" && smartHomeDetails) {
      total = 69 + Math.max(0, smartHomeDetails.deviceCount - 1) * 39;

      if (smartHomeDetails.networkSetup === "basic") {
        total += 50;
      }
    } else if (
      service.slug === "furniture-assembly" &&
      furnitureAssemblyDetails
    ) {
      const basePrices = {
        small: 69,
        medium: 89,
        large: 119,
      };

      const basePrice = basePrices[furnitureAssemblyDetails.jobSize];

      total = basePrice;

      if (furnitureAssemblyDetails.itemCount > 1) {
        total += basePrice * (furnitureAssemblyDetails.itemCount - 1);
      }
    } else {
      total = service.basePrice;
    }

    return total;
  };

  const setDateTime = (newDate: Date, newTimeSlot: string) => {
    setDate(newDate);
    setTimeSlot(newTimeSlot);
  };

  const resetBooking = () => {
    setServiceSlug(undefined);
    setDate(undefined);
    setTimeSlot(undefined);
    setContactInfo(undefined);
    setTVMountingDetails(undefined);
    setSmartHomeDetails(undefined);
    setFurnitureAssemblyDetails(undefined);
    setPackageOption(undefined);
  };

  return (
    <BookingContext.Provider
      value={{
        serviceSlug,
        date,
        timeSlot,
        contactInfo,
        tvMountingDetails,
        smartHomeDetails,
        furnitureAssemblyDetails,
        packageOption,
        setServiceSlug,
        setDateTime,
        setContactInfo,
        setTVMountingDetails,
        setSmartHomeDetails,
        setFurnitureAssemblyDetails,
        resetBooking,
        getSelectedService,
        calculateTotal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
