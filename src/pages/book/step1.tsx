import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useBooking } from "@/context/BookingContext";
import { services } from "@/data/services";
import type {
  TVMountingDetails,
  TVSizeRange,
  WallMountType,
  WireManagement,
  LiftingHelp,
  DeviceType,
  NetworkSetup,
  MountingType,
  SmartHomeDetails,
  JobSize,
  FurnitureAssemblyDetails,
} from "@/context/BookingContext";

export default function BookingStep1() {
  const router = useRouter();
  const {
    serviceSlug,
    tvMountingDetails,
    smartHomeDetails,
    furnitureAssemblyDetails,
    setServiceSlug,
    setTVMountingDetails,
    setSmartHomeDetails,
    setFurnitureAssemblyDetails,
    calculateTotal,
  } = useBooking();

  // Add wizard step state for TV Mounting
  const [tvStep, setTVStep] = useState(0);
  const tvSteps = [
    "TV Size",
    "Wall Mount Type",
    "Wire Management",
    "Lifting Help",
    "Exact TV Size",
    "Summary",
  ];

  // Add wizard step state for Smart Home and Furniture Assembly
  const [smartStep, setSmartStep] = useState(0);
  const smartSteps = [
    "Device Type",
    "Device Brand",
    "Device Count",
    "Network Setup",
    "Additional Devices",
    "Summary",
  ];
  const [furnitureStep, setFurnitureStep] = useState(0);
  const furnitureSteps = [
    "Job Size",
    "Item Count",
    "Item Description",
    "Summary",
  ];

  // Pre-select service from query param if available
  useEffect(() => {
    if (router.query.service && typeof router.query.service === "string") {
      setServiceSlug(router.query.service);
      if (router.query.service === "smart-install") {
        setSmartHomeDetails({
          deviceType: "speaker",
          deviceCount: 1,
          networkSetup: "none",
          mountingType: "none",
        });
      }
    }
  }, [router.query.service, setServiceSlug, setSmartHomeDetails]);

  const handleNext = () => {
    if (!serviceSlug) return;
    if (serviceSlug === "tv-mounting" && !tvMountingDetails) return;
    if (serviceSlug === "smart-install" && !smartHomeDetails) return;
    if (serviceSlug === "furniture-assembly" && !furnitureAssemblyDetails)
      return;
    router.push("/book/step2");
  };

  const handleTVMountingDetailsChange = (
    field: keyof TVMountingDetails,
    value: TVMountingDetails[keyof TVMountingDetails]
  ) => {
    setTVMountingDetails((prev: TVMountingDetails | undefined) => {
      const updated: TVMountingDetails = {
        tvSizeRange: "under-40",
        wireManagement: "none",
        liftingHelp: "yes",
        wallMountType: "none",
        ...prev,
        [field]: value,
      };
      return updated;
    });
  };

  const handleSmartHomeDetailsChange = (
    field: keyof SmartHomeDetails,
    value: SmartHomeDetails[keyof SmartHomeDetails]
  ) => {
    setSmartHomeDetails((prev: SmartHomeDetails | undefined) => {
      const updated = {
        deviceType: "speaker" as DeviceType,
        deviceCount: 1,
        networkSetup: "none" as NetworkSetup,
        mountingType: "none" as MountingType,
        ...prev,
        [field]: value,
      };
      return updated;
    });
  };

  const handleFurnitureAssemblyDetailsChange = (
    field: keyof FurnitureAssemblyDetails,
    value: FurnitureAssemblyDetails[keyof FurnitureAssemblyDetails]
  ) => {
    setFurnitureAssemblyDetails(
      (prev: FurnitureAssemblyDetails | undefined) => {
        const updated = {
          jobSize: "small" as JobSize,
          itemCount: 1,
          itemDescription: "",
          ...prev,
          [field]: value,
        };
        return updated;
      }
    );
  };

  const isFormValid = () => {
    if (!serviceSlug) return false;
    if (serviceSlug === "tv-mounting") {
      return !!(
        tvMountingDetails?.tvSizeRange &&
        tvMountingDetails?.exactTVSize &&
        tvMountingDetails?.wireManagement &&
        tvMountingDetails?.liftingHelp &&
        tvMountingDetails?.wallMountType
      );
    }
    if (serviceSlug === "smart-install") {
      const baseValidation = !!(
        smartHomeDetails?.deviceType &&
        smartHomeDetails?.deviceCount &&
        smartHomeDetails?.networkSetup &&
        smartHomeDetails?.deviceBrand
      );

      // If device type is "other", additional devices description is required
      if (smartHomeDetails?.deviceType === "other") {
        return baseValidation && !!smartHomeDetails?.additionalDevices;
      }

      return baseValidation;
    }
    if (serviceSlug === "furniture-assembly") {
      return !!(
        furnitureAssemblyDetails?.jobSize &&
        furnitureAssemblyDetails?.itemCount &&
        furnitureAssemblyDetails?.itemDescription
      );
    }
    return true;
  };

  const wallMountPrices = {
    fixed: {
      "under-40": 50,
      "41-55": 60,
      "56-70": 70,
      "over-70": 90,
    },
    "full-motion": {
      "under-40": 70,
      "41-55": 80,
      "56-70": 90,
      "over-70": 120,
    },
  };
  const selectedSize = tvMountingDetails?.tvSizeRange || "under-40";

  // Only show wizard if TV Mounting is selected
  if (serviceSlug === "tv-mounting") {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2 text-gray-900">
                TV Mounting: Step {tvStep + 1} of {tvSteps.length}
              </h1>
              <p className="text-gray-700 mb-2">{tvSteps[tvStep]}</p>
              <div className="flex gap-2 mb-4">
                {tvSteps.map((step, idx) => (
                  <div
                    key={step}
                    className={`h-2 w-8 rounded-full transition-all ${
                      idx <= tvStep ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 0: TV Size */}
            {tvStep === 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  What&apos;s your TV size? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { value: "under-40", label: 'Under 40" ($69)' },
                    { value: "41-55", label: '41" - 55" ($79)' },
                    { value: "56-70", label: '56" - 70" ($99)' },
                    { value: "over-70", label: 'Over 70" ($149)' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex flex-col items-center justify-center border rounded-lg p-4 cursor-pointer transition-all text-center
                        ${
                          tvMountingDetails?.tvSizeRange === option.value
                            ? "border-blue-600 bg-blue-50 shadow-md"
                            : "border-gray-300 bg-white hover:border-blue-400"
                        }`}
                    >
                      <input
                        type="radio"
                        name="tvSizeRange"
                        value={option.value}
                        checked={
                          tvMountingDetails?.tvSizeRange === option.value
                        }
                        onChange={(e) =>
                          handleTVMountingDetailsChange(
                            "tvSizeRange",
                            e.target.value as TVSizeRange
                          )
                        }
                        className="sr-only"
                        required
                      />
                      <span className="text-base font-medium text-gray-900 mb-1">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setServiceSlug("")}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      tvMountingDetails?.tvSizeRange && setTVStep(1)
                    }
                    disabled={!tvMountingDetails?.tvSizeRange}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 1: Wall Mount Type */}
            {tvStep === 1 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Do you need a TV wall mount? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { value: "none", label: "No" },
                    {
                      value: "fixed",
                      label: `Fixed/Tilting Wall Mount (+$${wallMountPrices.fixed[selectedSize]})`,
                    },
                    {
                      value: "full-motion",
                      label: `Full Motion Wall Mount (+$${wallMountPrices["full-motion"][selectedSize]})`,
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex flex-col items-center justify-center border rounded-lg p-4 cursor-pointer transition-all text-center
                        ${
                          tvMountingDetails?.wallMountType === option.value
                            ? "border-blue-600 bg-blue-50 shadow-md"
                            : "border-gray-300 bg-white hover:border-blue-400"
                        }`}
                    >
                      <input
                        type="radio"
                        name="wallMountType"
                        value={option.value}
                        checked={
                          tvMountingDetails?.wallMountType === option.value
                        }
                        onChange={(e) =>
                          handleTVMountingDetailsChange(
                            "wallMountType",
                            e.target.value as WallMountType
                          )
                        }
                        className="sr-only"
                        required
                      />
                      <span className="text-base font-medium text-gray-900 mb-1">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setTVStep(0)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      tvMountingDetails?.wallMountType && setTVStep(2)
                    }
                    disabled={!tvMountingDetails?.wallMountType}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Wire Management */}
            {tvStep === 2 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  How would you like us to handle the wires? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { value: "none", label: "No management ($0)" },
                    { value: "in-wall", label: "In-wall concealment (+$150)" },
                    { value: "external", label: "External cord cover (+$50)" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex flex-col items-center justify-center border rounded-lg p-4 cursor-pointer transition-all text-center
                        ${
                          tvMountingDetails?.wireManagement === option.value
                            ? "border-blue-600 bg-blue-50 shadow-md"
                            : "border-gray-300 bg-white hover:border-blue-400"
                        }`}
                    >
                      <input
                        type="radio"
                        name="wireManagement"
                        value={option.value}
                        checked={
                          tvMountingDetails?.wireManagement === option.value
                        }
                        onChange={(e) =>
                          handleTVMountingDetailsChange(
                            "wireManagement",
                            e.target.value as WireManagement
                          )
                        }
                        className="sr-only"
                        required
                      />
                      <span className="text-base font-medium text-gray-900 mb-1">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setTVStep(1)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      tvMountingDetails?.wireManagement && setTVStep(3)
                    }
                    disabled={!tvMountingDetails?.wireManagement}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Lifting Help */}
            {tvStep === 3 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Can someone help lift and hold the TV? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { value: "yes", label: "Yes" },
                    {
                      value: "no",
                      label: "No (+$40 for our extra technician)",
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex flex-col items-center justify-center border rounded-lg p-4 cursor-pointer transition-all text-center
                        ${
                          tvMountingDetails?.liftingHelp === option.value
                            ? "border-blue-600 bg-blue-50 shadow-md"
                            : "border-gray-300 bg-white hover:border-blue-400"
                        }`}
                    >
                      <input
                        type="radio"
                        name="liftingHelp"
                        value={option.value}
                        checked={
                          tvMountingDetails?.liftingHelp === option.value
                        }
                        onChange={(e) =>
                          handleTVMountingDetailsChange(
                            "liftingHelp",
                            e.target.value as LiftingHelp
                          )
                        }
                        className="sr-only"
                        required
                      />
                      <span className="text-base font-medium text-gray-900 mb-1">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setTVStep(2)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      tvMountingDetails?.liftingHelp && setTVStep(4)
                    }
                    disabled={!tvMountingDetails?.liftingHelp}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Exact TV Size */}
            {tvStep === 4 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Enter your exact TV size (in inches) *
                </label>
                <input
                  type="number"
                  min="1"
                  max="120"
                  value={tvMountingDetails?.exactTVSize || ""}
                  onChange={(e) =>
                    handleTVMountingDetailsChange(
                      "exactTVSize",
                      parseInt(e.target.value)
                    )
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 mb-8"
                  placeholder="Enter TV size"
                  required
                />
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setTVStep(3)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      tvMountingDetails?.exactTVSize && setTVStep(5)
                    }
                    disabled={!tvMountingDetails?.exactTVSize}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Summary */}
            {tvStep === 5 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Summary
                </h2>
                <ul className="mb-6 space-y-2">
                  <li>
                    <span className="font-medium">TV Size:</span>{" "}
                    {tvMountingDetails?.tvSizeRange}
                  </li>
                  <li>
                    <span className="font-medium">Wall Mount:</span>{" "}
                    {tvMountingDetails?.wallMountType}
                  </li>
                  <li>
                    <span className="font-medium">Wire Management:</span>{" "}
                    {tvMountingDetails?.wireManagement}
                  </li>
                  <li>
                    <span className="font-medium">Lifting Help:</span>{" "}
                    {tvMountingDetails?.liftingHelp}
                  </li>
                  <li>
                    <span className="font-medium">Exact TV Size:</span>{" "}
                    {tvMountingDetails?.exactTVSize} in
                  </li>
                  <li>
                    <span className="font-medium">Total:</span>{" "}
                    <span className="text-blue-600 font-bold">
                      ${calculateTotal()}
                    </span>
                  </li>
                </ul>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setTVStep(4)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={handleNext}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Smart Home Installation Wizard
  if (serviceSlug === "smart-install") {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2 text-gray-900">
                Smart Home Installation: Step {smartStep + 1} of{" "}
                {smartSteps.length}
              </h1>
              <p className="text-gray-700 mb-2">{smartSteps[smartStep]}</p>
              <div className="flex gap-2 mb-4">
                {smartSteps.map((step, idx) => (
                  <div
                    key={step}
                    className={`h-2 w-8 rounded-full transition-all ${
                      idx <= smartStep ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 0: Device Type */}
            {smartStep === 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  What type of device do you need installed? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { value: "camera", label: "Security Camera" },
                    { value: "speaker", label: "Smart Speaker" },
                    { value: "display", label: "Smart Display" },
                    { value: "doorbell", label: "Video Doorbell" },
                    { value: "other", label: "Other Device" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex flex-col items-center justify-center border rounded-lg p-4 cursor-pointer transition-all text-center
                        ${
                          smartHomeDetails?.deviceType === option.value
                            ? "border-blue-600 bg-blue-50 shadow-md"
                            : "border-gray-300 bg-white hover:border-blue-400"
                        }`}
                    >
                      <input
                        type="radio"
                        name="deviceType"
                        value={option.value}
                        checked={smartHomeDetails?.deviceType === option.value}
                        onChange={(e) =>
                          handleSmartHomeDetailsChange(
                            "deviceType",
                            e.target.value as DeviceType
                          )
                        }
                        className="sr-only"
                        required
                      />
                      <span className="text-base font-medium text-gray-900 mb-1">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setServiceSlug("")}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      smartHomeDetails?.deviceType && setSmartStep(1)
                    }
                    disabled={!smartHomeDetails?.deviceType}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 1: Device Brand */}
            {smartStep === 1 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  What brand is your device? *
                </label>
                <input
                  type="text"
                  value={smartHomeDetails?.deviceBrand || ""}
                  onChange={(e) =>
                    handleSmartHomeDetailsChange("deviceBrand", e.target.value)
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 mb-8"
                  placeholder="e.g., Ring, Nest, Arlo, etc."
                  required
                />
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setSmartStep(0)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      smartHomeDetails?.deviceBrand && setSmartStep(2)
                    }
                    disabled={!smartHomeDetails?.deviceBrand}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Device Count */}
            {smartStep === 2 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  How many devices? *
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={smartHomeDetails?.deviceCount || 1}
                  onChange={(e) =>
                    handleSmartHomeDetailsChange(
                      "deviceCount",
                      parseInt(e.target.value)
                    )
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 mb-8"
                  required
                />
                <p className="mt-1 text-sm text-gray-700 mb-4">
                  First device: $69, Additional devices: $39 each
                </p>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setSmartStep(1)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      smartHomeDetails?.deviceCount && setSmartStep(3)
                    }
                    disabled={!smartHomeDetails?.deviceCount}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Network Setup */}
            {smartStep === 3 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Do you need network setup? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      value: "none",
                      label: "No, my network is already set up",
                    },
                    {
                      value: "basic",
                      label: "Yes, I need network setup (+$50)",
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex flex-col items-center justify-center border rounded-lg p-4 cursor-pointer transition-all text-center
                        ${
                          smartHomeDetails?.networkSetup === option.value
                            ? "border-blue-600 bg-blue-50 shadow-md"
                            : "border-gray-300 bg-white hover:border-blue-400"
                        }`}
                    >
                      <input
                        type="radio"
                        name="networkSetup"
                        value={option.value}
                        checked={
                          smartHomeDetails?.networkSetup === option.value
                        }
                        onChange={(e) =>
                          handleSmartHomeDetailsChange(
                            "networkSetup",
                            e.target.value as NetworkSetup
                          )
                        }
                        className="sr-only"
                        required
                      />
                      <span className="text-base font-medium text-gray-900 mb-1">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setSmartStep(2)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      setSmartStep(
                        smartHomeDetails?.deviceType === "other" ? 4 : 5
                      )
                    }
                    disabled={!smartHomeDetails?.networkSetup}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Additional Devices (only if deviceType is 'other') */}
            {smartStep === 4 && smartHomeDetails?.deviceType === "other" && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Please describe your device(s) *
                </label>
                <textarea
                  value={smartHomeDetails?.additionalDevices || ""}
                  onChange={(e) =>
                    handleSmartHomeDetailsChange(
                      "additionalDevices",
                      e.target.value
                    )
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 mb-8"
                  rows={3}
                  placeholder="Describe the devices you need installed..."
                  required
                />
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setSmartStep(3)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      smartHomeDetails?.additionalDevices && setSmartStep(5)
                    }
                    disabled={!smartHomeDetails?.additionalDevices}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Summary */}
            {smartStep === 5 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Summary
                </h2>
                <ul className="mb-6 space-y-2">
                  <li>
                    <span className="font-medium">Device Type:</span>{" "}
                    {smartHomeDetails?.deviceType}
                  </li>
                  <li>
                    <span className="font-medium">Device Brand:</span>{" "}
                    {smartHomeDetails?.deviceBrand}
                  </li>
                  <li>
                    <span className="font-medium">Device Count:</span>{" "}
                    {smartHomeDetails?.deviceCount}
                  </li>
                  <li>
                    <span className="font-medium">Network Setup:</span>{" "}
                    {smartHomeDetails?.networkSetup}
                  </li>
                  {smartHomeDetails?.deviceType === "other" && (
                    <li>
                      <span className="font-medium">Additional Devices:</span>{" "}
                      {smartHomeDetails?.additionalDevices}
                    </li>
                  )}
                  <li>
                    <span className="font-medium">Total:</span>{" "}
                    <span className="text-blue-600 font-bold">
                      ${calculateTotal()}
                    </span>
                  </li>
                </ul>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() =>
                      setSmartStep(
                        smartHomeDetails?.deviceType === "other" ? 4 : 3
                      )
                    }
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={handleNext}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Furniture Assembly Wizard
  if (serviceSlug === "furniture-assembly") {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2 text-gray-900">
                Furniture Assembly: Step {furnitureStep + 1} of{" "}
                {furnitureSteps.length}
              </h1>
              <p className="text-gray-700 mb-2">
                {furnitureSteps[furnitureStep]}
              </p>
              <div className="flex gap-2 mb-4">
                {furnitureSteps.map((step, idx) => (
                  <div
                    key={step}
                    className={`h-2 w-8 rounded-full transition-all ${
                      idx <= furnitureStep ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 0: Job Size */}
            {furnitureStep === 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  What size is your assembly job? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    {
                      value: "small",
                      label: "Small Job ($69)",
                      description:
                        "Examples: TV stand, small bookshelf, coffee table, nightstand",
                    },
                    {
                      value: "medium",
                      label: "Medium Job ($89)",
                      description:
                        "Examples: Dining table, desk, dresser, entertainment center",
                    },
                    {
                      value: "large",
                      label: "Large Job ($119)",
                      description:
                        "Examples: Wardrobe, large bookshelf, bed frame, sectional sofa",
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex flex-col items-center justify-center border rounded-lg p-4 cursor-pointer transition-all text-center
                        ${
                          furnitureAssemblyDetails?.jobSize === option.value
                            ? "border-blue-600 bg-blue-50 shadow-md"
                            : "border-gray-300 bg-white hover:border-blue-400"
                        }`}
                    >
                      <input
                        type="radio"
                        name="jobSize"
                        value={option.value}
                        checked={
                          furnitureAssemblyDetails?.jobSize === option.value
                        }
                        onChange={(e) =>
                          handleFurnitureAssemblyDetailsChange(
                            "jobSize",
                            e.target.value as JobSize
                          )
                        }
                        className="sr-only"
                        required
                      />
                      <span className="text-base font-medium text-gray-900 mb-1">
                        {option.label}
                      </span>
                      <span className="text-xs text-gray-500">
                        {option.description}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setServiceSlug("")}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      furnitureAssemblyDetails?.jobSize && setFurnitureStep(1)
                    }
                    disabled={!furnitureAssemblyDetails?.jobSize}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 1: Item Count */}
            {furnitureStep === 1 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  How many items need assembly? *
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={furnitureAssemblyDetails?.itemCount || 1}
                  onChange={(e) =>
                    handleFurnitureAssemblyDetailsChange(
                      "itemCount",
                      parseInt(e.target.value)
                    )
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 mb-8"
                  required
                />
                <p className="mt-1 text-sm text-gray-700 mb-4">
                  {furnitureAssemblyDetails?.jobSize === "small" &&
                    "First item: $69, Additional items: $69 each"}
                  {furnitureAssemblyDetails?.jobSize === "medium" &&
                    "First item: $89, Additional items: $89 each"}
                  {furnitureAssemblyDetails?.jobSize === "large" &&
                    "First item: $119, Additional items: $119 each"}
                  {!furnitureAssemblyDetails?.jobSize &&
                    "Select a job size to see pricing"}
                </p>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setFurnitureStep(0)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      furnitureAssemblyDetails?.itemCount && setFurnitureStep(2)
                    }
                    disabled={!furnitureAssemblyDetails?.itemCount}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Item Description */}
            {furnitureStep === 2 && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Please describe the items that need assembly *
                </label>
                <textarea
                  value={furnitureAssemblyDetails?.itemDescription || ""}
                  onChange={(e) =>
                    handleFurnitureAssemblyDetailsChange(
                      "itemDescription",
                      e.target.value
                    )
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 mb-8"
                  rows={3}
                  placeholder="Describe the furniture items that need assembly..."
                  required
                />
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setFurnitureStep(1)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() =>
                      furnitureAssemblyDetails?.itemDescription &&
                      setFurnitureStep(3)
                    }
                    disabled={!furnitureAssemblyDetails?.itemDescription}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Summary */}
            {furnitureStep === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                  Summary
                </h2>
                <ul className="mb-6 space-y-2">
                  <li>
                    <span className="font-medium">Job Size:</span>{" "}
                    {furnitureAssemblyDetails?.jobSize}
                  </li>
                  <li>
                    <span className="font-medium">Item Count:</span>{" "}
                    {furnitureAssemblyDetails?.itemCount}
                  </li>
                  <li>
                    <span className="font-medium">Item Description:</span>{" "}
                    {furnitureAssemblyDetails?.itemDescription}
                  </li>
                  <li>
                    <span className="font-medium">Total:</span>{" "}
                    <span className="text-blue-600 font-bold">
                      ${calculateTotal()}
                    </span>
                  </li>
                </ul>
                <div className="flex justify-between">
                  <button
                    className="text-gray-600 px-4 py-2 rounded"
                    onClick={() => setFurnitureStep(2)}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={handleNext}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2 text-gray-900">
              Choose Your Service
            </h1>
            <p className="text-gray-700">Select a service to continue</p>
          </div>

          {/* Service Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Service
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {services.map((service) => {
                const selected = serviceSlug === service.slug;
                return (
                  <label
                    key={service.slug}
                    className={`flex flex-col items-center justify-center border rounded-lg p-4 cursor-pointer transition-all text-center
                      ${
                        selected
                          ? "border-blue-600 bg-blue-50 shadow-md"
                          : "border-gray-300 bg-white hover:border-blue-400"
                      }`}
                  >
                    <input
                      type="radio"
                      name="serviceSlug"
                      value={service.slug}
                      checked={selected}
                      onChange={() => {
                        setServiceSlug(service.slug);
                        if (service.slug === "tv-mounting") {
                          setTVMountingDetails({
                            tvSizeRange: "under-40",
                            wireManagement: "none",
                            liftingHelp: "yes",
                            wallMountType: "none",
                          });
                          setSmartHomeDetails(undefined);
                        } else if (service.slug === "smart-install") {
                          setSmartHomeDetails({
                            deviceType: "speaker",
                            deviceCount: 1,
                            networkSetup: "none",
                            mountingType: "none",
                          });
                          setTVMountingDetails(undefined);
                        } else if (service.slug === "furniture-assembly") {
                          setFurnitureAssemblyDetails(undefined);
                          setTVMountingDetails(undefined);
                          setSmartHomeDetails(undefined);
                        } else {
                          setTVMountingDetails(undefined);
                          setSmartHomeDetails(undefined);
                        }
                      }}
                      className="sr-only"
                      required
                    />
                    <span className="text-base font-medium text-gray-900 mb-1">
                      {service.title}
                    </span>
                    <span className="text-sm text-gray-600">
                      Starting at ${service.basePrice}
                      {service.unit}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <button
              onClick={() => router.push("/services")}
              className="text-gray-700 hover:text-gray-900"
            >
              ← Back to Services
            </button>
            <button
              onClick={handleNext}
              disabled={!isFormValid()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
