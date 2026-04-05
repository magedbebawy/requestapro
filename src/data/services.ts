export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  basePrice: number;
  unit: string;
  image: string;
  pricingNote?: string;
  category: "tv" | "smart-home" | "other";
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "tv-mounting",
    title: "TV Mounting Service",
    shortTitle: "TV Mounting",
    description:
      "Professional TV wall mounting for any size TV. We find studs, mount the bracket securely, connect your cables, and clean up. Same-day appointments available in Rancho Cucamonga and nearby cities.",
    basePrice: 69,
    unit: "/TV",
    image: "tv-service.png",
    category: "tv",
    relatedSlugs: [
      "above-fireplace-tv-mounting",
      "wire-concealment",
      "soundbar-mounting",
    ],
    pricingNote:
      'Starting at $69 for TVs under 40". Larger TVs, wire concealment, and above-fireplace installs quoted separately.',
  },
  {
    slug: "above-fireplace-tv-mounting",
    title: "Above Fireplace TV Mounting in Rancho Cucamonga",
    shortTitle: "Above Fireplace TV Mounting",
    description:
      "Mounting a TV above a fireplace requires special hardware and precise cable routing. We handle the full install — tilting mount, heat shield assessment, in-wall wire concealment — so it looks built-in.",
    basePrice: 149,
    unit: "/install",
    image: "tv-service.png",
    category: "tv",
    relatedSlugs: ["tv-mounting", "wire-concealment"],
    pricingNote:
      "Pricing includes tilt mount install. In-wall wiring and drywall work quoted on-site.",
  },
  {
    slug: "wire-concealment",
    title: "TV Wire Concealment & Cable Management in Rancho Cucamonga",
    shortTitle: "Wire Concealment",
    description:
      "No more dangling cables. We route your TV and speaker wires through the wall or use professional raceways for a clean, code-compliant result on any wall material — drywall, stucco, or brick.",
    basePrice: 79,
    unit: "/job",
    image: "tv-service.png",
    category: "tv",
    relatedSlugs: ["tv-mounting", "above-fireplace-tv-mounting"],
    pricingNote:
      "In-wall wiring starts at $79. Raceway/surface concealment available as a lower-cost alternative.",
  },
  {
    slug: "soundbar-mounting",
    title: "Soundbar Mounting Service in Rancho Cucamonga",
    shortTitle: "Soundbar Mounting",
    description:
      "We mount your soundbar directly below or above your TV, connect it cleanly, and verify the audio output. Works with all major brands including Sonos, Samsung, LG, and Bose.",
    basePrice: 49,
    unit: "/soundbar",
    image: "tv-service.png",
    category: "tv",
    relatedSlugs: ["tv-mounting", "wire-concealment"],
    pricingNote:
      "Starting at $49 when combined with a TV mount. $69 standalone.",
  },
  {
    slug: "ring-doorbell-installation",
    title: "Ring Doorbell Installation in Rancho Cucamonga",
    shortTitle: "Ring Doorbell Installation",
    description:
      "We install your Ring doorbell on any door type — wood, stucco, brick, or stone — wire it to existing doorbell wiring or set it up with a battery configuration, then connect it to your Wi-Fi and app.",
    basePrice: 79,
    unit: "/device",
    image: "smart-install.png",
    category: "smart-home",
    relatedSlugs: [
      "ring-camera-installation",
      "smart-home-installation",
      "security-camera-installation",
    ],
    pricingNote:
      "Standard installation $79. Wiring upgrades or transformer replacements quoted on-site.",
  },
  {
    slug: "ring-camera-installation",
    title: "Ring Camera Installation in Rancho Cucamonga",
    shortTitle: "Ring Camera Installation",
    description:
      "From Ring Spotlight to Ring Floodlight and Ring Stick Up cameras, we mount, angle, wire, and connect each camera. We walk you through the Ring app so you can see live view and motion alerts right away.",
    basePrice: 69,
    unit: "/camera",
    image: "smart-install.png",
    category: "smart-home",
    relatedSlugs: [
      "ring-doorbell-installation",
      "security-camera-installation",
      "smart-home-installation",
    ],
    pricingNote:
      "First camera $69, additional cameras $49 each. Multi-camera discounts available.",
  },
  {
    slug: "nest-thermostat-installation",
    title: "Nest Thermostat Installation in Rancho Cucamonga",
    shortTitle: "Nest Thermostat Installation",
    description:
      "We install your Nest Learning Thermostat or Nest Thermostat E, verify your HVAC compatibility, connect the C-wire if needed, and set up the Google Home app so your home's climate is under control from day one.",
    basePrice: 89,
    unit: "/thermostat",
    image: "smart-install.png",
    category: "smart-home",
    relatedSlugs: [
      "nest-doorbell-installation",
      "smart-home-installation",
      "smart-lock-installation",
    ],
    pricingNote:
      "Installation $89. C-wire add-on adapter included when needed. Old thermostat disposal available.",
  },
  {
    slug: "nest-doorbell-installation",
    title: "Nest Doorbell Installation in Rancho Cucamonga",
    shortTitle: "Nest Doorbell Installation",
    description:
      "We install the Nest Doorbell (wired or battery) at your door, ensure optimal camera angle for your entryway, connect it to your Google Home or Nest app, and test motion alerts and two-way audio.",
    basePrice: 79,
    unit: "/device",
    image: "smart-install.png",
    category: "smart-home",
    relatedSlugs: [
      "nest-thermostat-installation",
      "ring-doorbell-installation",
      "smart-home-installation",
    ],
    pricingNote:
      "Standard installation $79. Existing wired doorbell integration included.",
  },
  {
    slug: "smart-home-installation",
    title: "Smart Home Device Installation in Rancho Cucamonga",
    shortTitle: "Smart Home Installation",
    description:
      "From smart speakers and displays to smart plugs, switches, and hubs — we set up, connect, and configure your devices so they actually work together. Includes Wi-Fi connection, app setup, and a full walkthrough.",
    basePrice: 69,
    unit: "/device",
    image: "smart-install.png",
    category: "smart-home",
    relatedSlugs: [
      "ring-doorbell-installation",
      "nest-thermostat-installation",
      "smart-lock-installation",
    ],
    pricingNote:
      "First device $69, additional devices $39 each. Whole-home setup packages available.",
  },
  {
    slug: "security-camera-installation",
    title: "Security Camera Installation in Rancho Cucamonga",
    shortTitle: "Security Camera Installation",
    description:
      "We install wired and wireless security cameras from brands like Arlo, Wyze, Reolink, and Ring. We handle mounting, cable routing, DVR/NVR setup, and app configuration for remote viewing.",
    basePrice: 79,
    unit: "/camera",
    image: "smart-install.png",
    category: "smart-home",
    relatedSlugs: [
      "ring-camera-installation",
      "ring-doorbell-installation",
      "smart-home-installation",
    ],
    pricingNote:
      "Per-camera pricing. System setup and DVR/NVR configuration quoted separately.",
  },
  {
    slug: "smart-lock-installation",
    title: "Smart Lock Installation in Rancho Cucamonga",
    shortTitle: "Smart Lock Installation",
    description:
      "We install smart locks from Schlage, Kwikset, August, and Yale — retrofit or full replacement. Includes deadbolt alignment check, app pairing, code setup, and integration with Google Home, Alexa, or Ring.",
    basePrice: 89,
    unit: "/lock",
    image: "smart-install.png",
    category: "smart-home",
    relatedSlugs: [
      "ring-doorbell-installation",
      "smart-home-installation",
      "nest-thermostat-installation",
    ],
    pricingNote:
      "Starting at $89 per lock. Includes door hardware alignment and app setup.",
  },
];
