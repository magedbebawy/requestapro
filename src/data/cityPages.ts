export type CityPageFAQ = {
  question: string;
  answer: string;
};

export type CityServicePage = {
  city: string;
  citySlug: string;
  serviceSlug: string;
  serviceLabel: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bodyContent: string;
  servicesOffered: string[];
  faqs: CityPageFAQ[];
  ctaHeading: string;
  ctaBody: string;
};

export type City = {
  name: string;
  slug: string;
  description: string; // Short blurb for this city used in area sections
};

// All cities served — easily add more here
export const cities: City[] = [
  {
    name: "Rancho Cucamonga",
    slug: "rancho-cucamonga",
    description:
      "Our home base. We serve all neighborhoods including Etiwanda, Alta Loma, Victoria Gardens area, and Day Creek.",
  },
  {
    name: "Fontana",
    slug: "fontana",
    description:
      "Serving Fontana homeowners across Sierra Lakes, South Fontana, and Summit Heights.",
  },
  {
    name: "Ontario",
    slug: "ontario",
    description:
      "Serving Ontario including the Ontario Ranch area, Park Place, and communities near Ontario Mills.",
  },
  {
    name: "Upland",
    slug: "upland",
    description:
      "Serving Upland neighborhoods including North Upland, Colony District, and San Antonio Heights.",
  },
  {
    name: "Rialto",
    slug: "rialto",
    description:
      "Serving Rialto homeowners across North Rialto and the Renaissance area.",
  },
  {
    name: "Eastvale",
    slug: "eastvale",
    description:
      "Serving Eastvale residents in all neighborhoods of this fast-growing Inland Empire city.",
  },
  {
    name: "Chino",
    slug: "chino",
    description:
      "Serving Chino including Preserve, Chino Hills border communities, and central Chino.",
  },
];

// Unique city+service content pages
export const cityServicePages: CityServicePage[] = [
  // ─────────────────────────────────────────────
  // RANCHO CUCAMONGA — TV MOUNTING
  // ─────────────────────────────────────────────
  {
    city: "Rancho Cucamonga",
    citySlug: "rancho-cucamonga",
    serviceSlug: "tv-mounting",
    serviceLabel: "TV Mounting",
    seoTitle:
      "TV Mounting in Rancho Cucamonga | Same-Day Wall Mount Install | RequestAPro",
    metaDescription:
      "Professional TV mounting in Rancho Cucamonga. We mount any size TV, hide wires, and install soundbars. Same-day available. Serving Etiwanda, Alta Loma, and Victoria Gardens area.",
    h1: "TV Mounting in Rancho Cucamonga",
    intro:
      "RequestAPro is based in Rancho Cucamonga, which means when you book a TV mounting appointment, you're not getting someone driving 45 minutes from LA. We know the neighborhoods — Etiwanda, Alta Loma, Day Creek, Victoria Gardens — and we're usually available same-day or next morning. Whether it's a 55\" OLED in the living room or a bathroom TV above the vanity, we mount it right the first time.",
    bodyContent: `Rancho Cucamonga homes range from newer construction in the Etiwanda area with standard drywall to older homes in Alta Loma with plaster walls and brick exteriors. We work on all of them. Plaster walls require different anchors than drywall. Stucco exteriors need masonry anchors. We carry all of it and don't charge extra for the drill bit.

Most of our Rancho Cucamonga TV mount calls follow a similar pattern: the customer bought a new TV, assembled the stand, tried it for a week, and realized they want it on the wall. We show up, locate the studs, mount the bracket level, hang the TV, dress the cables, and leave the room clean. The whole job takes 30–60 minutes for most living room installs.

If you're mounting above the fireplace or want wires hidden inside the wall, those are add-ons — but common ones. We do both regularly throughout Rancho Cucamonga.`,
    servicesOffered: [
      "TV wall mounting (all sizes)",
      "Above fireplace TV mounting",
      "Wire concealment — in-wall and raceway",
      "Soundbar mounting",
      "Tilting and full-motion mount installs",
      "Same-day appointments",
    ],
    faqs: [
      {
        question: "Do you offer same-day TV mounting in Rancho Cucamonga?",
        answer:
          "Yes — we're based locally and often have same-day or next-morning availability. Book online or call to check current availability.",
      },
      {
        question:
          "Can you mount a TV in an apartment or rental in Rancho Cucamonga?",
        answer:
          "Yes. We mount TVs in apartments and rentals throughout the area. Just check with your landlord about wall mounting policies. We patch screw holes cleanly if you move out.",
      },
      {
        question: "Do you work in the Etiwanda area?",
        answer:
          "Yes — Etiwanda, Alta Loma, Day Creek, Victoria Gardens, and all Rancho Cucamonga neighborhoods are in our primary service area.",
      },
      {
        question: "What size TVs do you mount?",
        answer:
          'We mount TVs from 24" up to 85". For TVs above 75", we recommend a two-person team — we handle that at no extra charge.',
      },
    ],
    ctaHeading: "Book TV Mounting in Rancho Cucamonga",
    ctaBody:
      "Same-day available. We bring the tools, find the studs, hang the TV, and clean up. Request a quote or book online now.",
  },

  // ─────────────────────────────────────────────
  // FONTANA — TV MOUNTING
  // ─────────────────────────────────────────────
  {
    city: "Fontana",
    citySlug: "fontana",
    serviceSlug: "tv-mounting",
    serviceLabel: "TV Mounting",
    seoTitle:
      "TV Mounting in Fontana, CA | Wall Mount Installation | RequestAPro",
    metaDescription:
      "Professional TV wall mounting in Fontana, CA. We install TVs of all sizes, conceal wires, and mount soundbars. Serving Sierra Lakes, South Fontana, and Summit Heights. Same-day available.",
    h1: "TV Mounting in Fontana, CA",
    intro:
      "Fontana homeowners in Sierra Lakes, Summit Heights, and South Fontana have been using RequestAPro for clean, professional TV installs on standard drywall, brick veneer, and stucco exterior walls. We're just a few minutes away in Rancho Cucamonga and keep our schedule flexible for Fontana calls throughout the work week and on weekends.",
    bodyContent: `Fontana has a mix of newer tract homes with standard drywall and older mid-century construction with lathe-and-plaster walls. Plaster walls require toggle bolts or specific plaster anchors — not the same approach as drywall. We know the difference and carry the right hardware.

Sierra Lakes area homes often have open floor plans with high ceilings and stone fireplace surrounds — a common scenario for above-fireplace TV mounting. South Fontana homes closer to the 10 freeway are typically 1970s–1990s construction with more conventional wall types.

We also serve multifamily properties in Fontana. If you're in a condo or apartment, let us know and we'll bring a selection of anchor options for whatever wall you have.

All Fontana TV mounting appointments include: stud finding, bracket install, TV hang, cable dress, and post-install cleanup. Wire concealment is available as an add-on.`,
    servicesOffered: [
      "TV wall mounting in Fontana homes and condos",
      "Above fireplace TV mounting",
      "Wire concealment and cable management",
      "Soundbar mounting",
      "Same-day and weekend appointments",
    ],
    faqs: [
      {
        question: "How far is Fontana from your base in Rancho Cucamonga?",
        answer:
          "About 5–10 minutes depending on the neighborhood. We're in Fontana regularly and can often offer same-day or next-morning slots.",
      },
      {
        question: "Do you work in the Sierra Lakes area?",
        answer:
          "Yes. Sierra Lakes, Summit Heights, and all Fontana east-side neighborhoods are part of our regular service area.",
      },
      {
        question:
          "Can you hide wires in older Fontana homes with plaster walls?",
        answer:
          "In-wall routing through plaster is possible but we typically recommend surface raceways for plaster walls — they're faster, just as clean-looking, and avoid disturbing plaster that can crack during drilling.",
      },
      {
        question: "Do you bring your own TV mount hardware?",
        answer:
          "Yes. If you need a mount, we carry a selection of flat, tilt, and full-motion brackets. Just let us know your TV model when you book.",
      },
    ],
    ctaHeading: "Book TV Mounting in Fontana",
    ctaBody:
      "We're nearby in Rancho Cucamonga and serve Fontana regularly. Book online or call for a fast quote.",
  },

  // ─────────────────────────────────────────────
  // ONTARIO — RING INSTALLATION
  // ─────────────────────────────────────────────
  {
    city: "Ontario",
    citySlug: "ontario",
    serviceSlug: "ring-doorbell-installation",
    serviceLabel: "Ring Doorbell Installation",
    seoTitle: "Ring Doorbell Installation in Ontario, CA | RequestAPro",
    metaDescription:
      "Professional Ring doorbell installation in Ontario, CA. We mount, wire, and configure Ring Video Doorbells on any surface. Serving Ontario Ranch, Park Place, and surrounding areas.",
    h1: "Ring Doorbell Installation in Ontario, CA",
    intro:
      "Ontario is growing fast — especially Ontario Ranch, where new construction homes are going up throughout the area. Whether you're in a brand-new home or an older property near downtown Ontario, RequestAPro installs Ring doorbells with the full setup: mounting, wiring, Wi-Fi connection, and app configuration. You'll see your front door live on your phone before we leave.",
    bodyContent: `Ontario Ranch homes are newer construction with standard drywall interiors and stucco exteriors. Stucco is the most common surface we mount Ring doorbells on throughout the Inland Empire — we carry masonry anchors and the right drill bit, and it adds only a few minutes to the install.

Older Ontario homes near the historic downtown or along Euclid Avenue often have original doorbell wiring from the 1960s or 1970s. We check the transformer first. Many older Ring-compatible installations need a transformer with at least 16V; the stock 10V transformers from that era won't reliably power a Ring Pro. We carry compatible replacements and swap them during the visit.

After mounting and wiring, we connect your Ring doorbell to your home Wi-Fi, open the Ring app, set your motion zones, and do a full test: live view, two-way audio, and motion alert trigger. The whole process takes 30–45 minutes for most Ontario homes.`,
    servicesOffered: [
      "Ring Video Doorbell installation (all models)",
      "Ring Pro and Ring Pro 2 wired installation",
      "Battery Ring doorbell setup",
      "Transformer check and replacement",
      "Ring app setup and motion zone config",
      "Ring camera installation (add-on)",
    ],
    faqs: [
      {
        question: "Do you install Ring doorbells in Ontario Ranch homes?",
        answer:
          "Yes. Ontario Ranch is in our regular service area. New construction stucco homes are our most common install type — we're set up for them.",
      },
      {
        question:
          "My Ontario home is older and has original doorbell wiring. Will Ring work?",
        answer:
          "It depends on the transformer. Many older systems use 10V transformers that don't support Ring Pro. We check yours and replace it if needed — typically a $20–30 part we can swap during the visit.",
      },
      {
        question: "Do you set up the Ring app after installation?",
        answer:
          "Yes. We connect the doorbell to your Wi-Fi, open the Ring app on your phone, configure motion zones, and verify live view and two-way audio before we leave.",
      },
      {
        question: "Can you install Ring cameras in addition to the doorbell?",
        answer:
          "Yes. We offer Ring camera installation as a standalone service or as an add-on to your doorbell install. Multi-device visits get a discounted rate.",
      },
    ],
    ctaHeading: "Get Your Ring Doorbell Installed in Ontario",
    ctaBody:
      "From Ontario Ranch to downtown Ontario — we handle the full install. Book online or call for same-day service.",
  },

  // ─────────────────────────────────────────────
  // UPLAND — NEST INSTALLATION
  // ─────────────────────────────────────────────
  {
    city: "Upland",
    citySlug: "upland",
    serviceSlug: "nest-thermostat-installation",
    serviceLabel: "Nest Thermostat Installation",
    seoTitle:
      "Nest Thermostat Installation in Upland, CA | Smart Thermostat Setup | RequestAPro",
    metaDescription:
      "Professional Nest thermostat installation in Upland, CA. We check HVAC compatibility, handle C-wire issues, and configure the Google Home app. Serving North Upland, Colony District, and San Antonio Heights.",
    h1: "Nest Thermostat Installation in Upland, CA",
    intro:
      "Upland homeowners — especially in the older Colony District and San Antonio Heights neighborhoods — run into C-wire issues with Nest thermostat installs more often than newer construction. It's a wiring problem from the era when thermostats didn't need continuous power. RequestAPro checks your HVAC wiring first, installs the C-wire adapter if needed, and configures the full Nest setup so your thermostat is running and connected before we leave.",
    bodyContent: `San Antonio Heights and the original Colony District neighborhoods feature some of Upland's oldest homes — often 1950s to 1970s construction with HVAC systems wired without a C-wire. Nest's included adapter solves this in most cases, but it requires opening the furnace or air handler and following the correct wiring diagram. We do this routinely.

North Upland's newer tracts from the 1990s and 2000s are more likely to have complete 5-wire HVAC systems with the C-wire already in place. In those homes, the install is straightforward: remove the old thermostat, label the wires, connect to the Nest base plate, and power it up.

After installation, we connect your Nest to your home Wi-Fi, pair it to the Google Home app, set your heating and cooling schedule, and enable Home/Away Assist so the thermostat adjusts automatically when you leave. We also verify that both heating and cooling function correctly before wrapping up.

Upland's summer temperatures regularly hit the 90s, making a smart thermostat a real comfort and energy saving upgrade — not just a novelty.`,
    servicesOffered: [
      "Nest Learning Thermostat installation",
      "Nest Thermostat E installation",
      "Nest Thermostat (2020) installation",
      "C-wire adapter installation",
      "Google Home app setup and account linking",
      "HVAC compatibility assessment",
      "Schedule and Home/Away configuration",
    ],
    faqs: [
      {
        question: "Do you install Nest in older Upland homes without a C-wire?",
        answer:
          "Yes — this is one of our most common Upland calls. Nest includes a C-wire adapter for systems without one. We install and configure it at the furnace or air handler.",
      },
      {
        question: "Do you serve San Antonio Heights and North Upland?",
        answer:
          "Yes. All Upland neighborhoods — San Antonio Heights, Colony District, North Upland, and surrounding areas — are in our service zone.",
      },
      {
        question: "Will Nest work with my older Upland HVAC system?",
        answer:
          "Nest is compatible with most 24V systems, which covers the vast majority of residential HVAC in the Inland Empire. We confirm before proceeding.",
      },
      {
        question: "How long does a Nest thermostat install take in Upland?",
        answer:
          "Between 45 minutes and 1.5 hours, depending on whether a C-wire adapter is needed and how long HVAC wiring testing takes. We give you a time window when you book.",
      },
      {
        question: "Do you also install Nest doorbells in Upland?",
        answer:
          "Yes. Nest Doorbell installation is a separate service. We can bundle both in the same visit if you'd like the Nest thermostat and Nest Doorbell installed together.",
      },
    ],
    ctaHeading: "Get Your Nest Thermostat Installed in Upland",
    ctaBody:
      "We handle the C-wire, app setup, and HVAC testing. No guesswork. Book online or call for service in Upland.",
  },

  // ─────────────────────────────────────────────
  // RIALTO — TV MOUNTING
  // ─────────────────────────────────────────────
  {
    city: "Rialto",
    citySlug: "rialto",
    serviceSlug: "tv-mounting",
    serviceLabel: "TV Mounting",
    seoTitle:
      "TV Mounting in Rialto, CA | Wall Mount Installation | RequestAPro",
    metaDescription:
      "Professional TV mounting in Rialto, CA. We mount TVs of all sizes, conceal wires, and install soundbars. Serving North Rialto, Renaissance, and surrounding areas.",
    h1: "TV Mounting in Rialto, CA",
    intro:
      "RequestAPro serves Rialto homeowners with the same clean, professional TV mounting service we provide across the Inland Empire. Whether you're in a newer North Rialto home or an older property near downtown, we bring the right hardware, find the studs, and leave your TV mounted level and secure.",
    bodyContent: `Rialto has a mix of building eras — older homes near the historic downtown with concrete block or plaster walls, and newer construction in the north closer to the 210 freeway. Each wall type calls for a different anchor approach. We carry all of them.

TV mounting in Rialto typically follows the standard process: assess the wall, locate studs, install the bracket level, hang the TV, route cables, and clean up. For stucco exteriors or concrete block interior walls, we use masonry anchors that are just as reliable as stud mounts.

If you want wires hidden inside the wall or a soundbar mounted below your TV, we can add those to the same visit. Most Rialto TV mounting appointments wrap up in under an hour.`,
    servicesOffered: [
      "TV wall mounting (all sizes and brands)",
      "Above fireplace TV mounting",
      "Wire concealment — in-wall and raceway",
      "Soundbar installation",
      "Same-day and weekend availability",
    ],
    faqs: [
      {
        question: "Do you serve all of Rialto?",
        answer:
          "Yes — North Rialto, the Renaissance area, and all Rialto neighborhoods. We're about 10–15 minutes from most of Rialto.",
      },
      {
        question: "Do you install TVs in Rialto apartments?",
        answer:
          "Yes. We mount TVs in apartments and condos. If you're renting, ask about our no-damage raceway option for cables.",
      },
      {
        question: "Can you hide wires in a concrete block wall?",
        answer:
          "In-wall routing through concrete block isn't practical, but surface raceways give you a clean result on any hard surface wall.",
      },
    ],
    ctaHeading: "Book TV Mounting in Rialto",
    ctaBody:
      "Fast, clean, professional. Book online or call to schedule your Rialto TV mount.",
  },

  // ─────────────────────────────────────────────
  // EASTVALE — SMART HOME INSTALLATION
  // ─────────────────────────────────────────────
  {
    city: "Eastvale",
    citySlug: "eastvale",
    serviceSlug: "smart-home-installation",
    serviceLabel: "Smart Home Installation",
    seoTitle:
      "Smart Home Installation in Eastvale, CA | Ring, Nest & More | RequestAPro",
    metaDescription:
      "Professional smart home installation in Eastvale, CA. We install Ring doorbells, Nest thermostats, smart locks, cameras, and more. Full app setup included. Book same-day service.",
    h1: "Smart Home Installation in Eastvale, CA",
    intro:
      "Eastvale is one of the newest cities in the Inland Empire, with planned communities and newer construction homes that are perfect for smart home upgrades. RequestAPro installs Ring doorbells and cameras, Nest thermostats, smart locks, and other connected devices in Eastvale homes — complete with app setup and a full walkthrough so you know how everything works.",
    bodyContent: `Eastvale's newer construction homes typically have standard 5-wire HVAC setups, strong Wi-Fi infrastructure, and stucco exteriors — all of which make smart home installs more straightforward. Nest thermostats install cleanly because the C-wire is usually present. Ring doorbells mount well on stucco with masonry anchors. Smart locks drop right in because doors are standard residential dimensions.

Popular smart home setups in Eastvale homes we install: Ring Video Doorbell + 2-4 Ring cameras + Nest thermostat + smart lock. We can complete a package like this in a single 2–3 hour visit and have everything connected and configured by the time we leave.

Every smart home install includes Wi-Fi signal check at each device location, app pairing, account setup, and a walkthrough so you understand what you have, how to use it, and how to grant access to family members.`,
    servicesOffered: [
      "Ring doorbell and camera installation",
      "Nest thermostat installation",
      "Smart lock installation (Schlage, Kwikset, August)",
      "Smart speaker and display setup",
      "Google Home / Alexa ecosystem configuration",
      "Wi-Fi signal assessment",
      "Full customer walkthrough",
    ],
    faqs: [
      {
        question: "Do you offer smart home package installs in Eastvale?",
        answer:
          "Yes. If you want Ring doorbell, Nest thermostat, and a smart lock installed in one visit, we schedule extra time and offer multi-device pricing.",
      },
      {
        question: "How far is Eastvale from your base in Rancho Cucamonga?",
        answer:
          "About 15–20 minutes. We're in Eastvale regularly and can schedule same-day or next-morning appointments.",
      },
      {
        question: "Do you help set up the Google Home or Ring app?",
        answer:
          "Yes, always. App setup and device configuration is part of every install — not an optional add-on.",
      },
    ],
    ctaHeading: "Book Smart Home Installation in Eastvale",
    ctaBody:
      "One device or a full system — we install, configure, and walk you through it. Book online or call for service in Eastvale.",
  },

  // ─────────────────────────────────────────────
  // CHINO — RING CAMERA INSTALLATION
  // ─────────────────────────────────────────────
  {
    city: "Chino",
    citySlug: "chino",
    serviceSlug: "ring-camera-installation",
    serviceLabel: "Ring Camera Installation",
    seoTitle:
      "Ring Camera Installation in Chino, CA | Spotlight, Floodlight & Stick Up | RequestAPro",
    metaDescription:
      "Professional Ring camera installation in Chino, CA. We mount, wire, and configure Ring Spotlight, Floodlight, and Stick Up cameras. App setup included. Serving The Preserve and surrounding areas.",
    h1: "Ring Camera Installation in Chino, CA",
    intro:
      "Chino homeowners in The Preserve and surrounding communities use Ring cameras to monitor their driveways, side gates, and backyards. RequestAPro handles the full setup — mounting at the right height and angle, running wiring for hardwired cameras, connecting to your Ring account, and setting motion zones so you get alerts that matter, not constant false triggers.",
    bodyContent: `The Preserve and other Chino planned communities feature newer construction with standard stucco exteriors and covered eaves — ideal positions for Ring Spotlight Cam and Floodlight Cam installs. We mount cameras under eaves for weather protection, at the corner of the home for wide coverage, and at door-height for package detection.

Ring Floodlight Cam requires a hardwired 120V connection. Most homes have outdoor light fixtures at the garage or back patio — we connect to the existing wiring at the fixture box, which avoids any need to run new circuits.

Ring Stick Up Cam (battery) goes anywhere without wiring — ideal for side gates, interior spaces, or locations where running power cable isn't practical.

After all cameras are mounted, we connect each to your Ring account, configure motion zones and sensitivity, and review live view with you on your phone. We serve Chino, The Preserve, and the nearby Chino Hills border communities.`,
    servicesOffered: [
      "Ring Spotlight Cam installation (wired and battery)",
      "Ring Floodlight Cam installation (hardwired)",
      "Ring Stick Up Cam mounting",
      "Ring Indoor Cam setup",
      "Multi-camera system installs",
      "Ring app configuration and motion zone setup",
    ],
    faqs: [
      {
        question: "Do you install Ring Floodlight Cam in Chino?",
        answer:
          "Yes. Floodlight Cam requires hardwired 120V power. We connect to an existing outdoor fixture box — no new electrical circuit needed in most homes.",
      },
      {
        question: "Do you serve The Preserve in Chino?",
        answer:
          "Yes. The Preserve and all Chino neighborhoods are in our service area. We're about 20 minutes from most of Chino.",
      },
      {
        question: "Can you install a Ring camera on a stucco soffit?",
        answer:
          "Yes. Soffit mounting on stucco requires masonry anchors. It's one of the most popular camera locations for Chino homes and we handle it routinely.",
      },
      {
        question: "Do you configure the Ring app after mounting the cameras?",
        answer:
          "Yes. We connect every camera to your Ring account, set motion zones, and verify live view and event recording before we leave.",
      },
    ],
    ctaHeading: "Get Your Ring Cameras Installed in Chino",
    ctaBody:
      "One camera or a full system. We handle mounting, wiring, and app setup. Book online or call for service in Chino.",
  },
];

// Helper to get all unique city+service slug combos for static path generation
export function getAllCityServicePaths() {
  return cityServicePages.map((page) => ({
    params: { city: page.citySlug, service: page.serviceSlug },
  }));
}

// Helper to find a specific city+service page
export function getCityServicePage(
  citySlug: string,
  serviceSlug: string,
): CityServicePage | undefined {
  return cityServicePages.find(
    (p) => p.citySlug === citySlug && p.serviceSlug === serviceSlug,
  );
}
