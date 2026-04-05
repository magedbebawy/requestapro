export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatIsIncluded: string[];
  whyUs: string[];
  bodyContent: string;
  faqs: ServiceFAQ[];
  ctaHeading: string;
  ctaBody: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "tv-mounting",
    seoTitle:
      "TV Mounting in Rancho Cucamonga | Wall Mount Installation | RequestAPro",
    metaDescription:
      "Professional TV wall mounting in Rancho Cucamonga. We install TVs of all sizes, hide wires, mount soundbars, and deliver a clean same-day setup. Serving Fontana, Ontario, Upland, and nearby cities.",
    h1: "TV Mounting in Rancho Cucamonga",
    intro:
      "Getting a TV mounted correctly is more than just drilling a hole in the wall. At RequestAPro, we assess your wall type, locate studs accurately, select the right mount for your TV size and weight, and leave you with a level, rock-solid install every time. We serve Rancho Cucamonga and the surrounding Inland Empire area.",
    whatIsIncluded: [
      "Stud-finding and wall assessment",
      'Bracket installation for TVs up to 85"',
      "TV hang and cable connection",
      "Basic cable management",
      "Viewing angle adjustment",
      "Post-install cleanup",
      "100% satisfaction guarantee",
    ],
    whyUs: [
      "We work on all wall types: drywall, stucco, plaster, and brick",
      "We carry mounts if you need one — no extra shopping trips",
      "Same-day and weekend appointments available",
      "We support customer-provided TVs and mounts",
      "Licensed, insured, and background-checked technicians",
    ],
    bodyContent: `Most TV mounting jobs in Rancho Cucamonga take 30 to 60 minutes. We bring the tools, locate the studs, and mount the bracket level before hanging your TV. After installation, we dress the cables so nothing hangs loose.

We work with flat, tilt, and full-motion mounts. If you want to swivel the TV to different seating areas or need a low-profile fixed mount for a bedroom, we'll recommend the right hardware. We also install TVs on brick fireplaces, concrete walls, and tile — surfaces where a stud finder doesn't help and the approach changes completely.

Whether you have a 32" bedroom TV or an 85" living room display, the install process is the same: careful, clean, and done right the first time. We serve homeowners, renters, and businesses across Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, and Chino.`,
    faqs: [
      {
        question: "Do you install TVs on stucco or brick walls?",
        answer:
          "Yes. We use masonry anchors and the appropriate drill bits for stucco, brick, and concrete installs. These take a bit longer but the result is just as secure.",
      },
      {
        question: "Can you hide the cables in the wall after mounting?",
        answer:
          "Yes — wire concealment is a separate add-on service. We route cables through the wall using an in-wall cable management kit so nothing is visible. We can also use surface raceways if in-wall routing isn't possible.",
      },
      {
        question: "Do you install TVs above fireplaces?",
        answer:
          "Yes, we offer above-fireplace TV mounting as a dedicated service. It requires a tilting mount and proper heat assessment. Check our Above Fireplace TV Mounting page for details.",
      },
      {
        question: "Do you install customer-provided TVs and mounts?",
        answer:
          "Absolutely. We work with whatever you have. If you already purchased your TV and mount, we'll handle the install. We also carry common bracket sizes if you need one.",
      },
      {
        question: "How long does a TV mount take?",
        answer:
          "Most standard TV mounts take 30–60 minutes. Above-fireplace installs or in-wall wiring may take 1–2 hours depending on wall type and cable routing.",
      },
      {
        question: "What cities do you serve?",
        answer:
          "We primarily serve Rancho Cucamonga and also cover Fontana, Ontario, Upland, Rialto, Eastvale, and Chino. Contact us for areas outside this zone.",
      },
    ],
    ctaHeading: "Ready to Get Your TV Mounted?",
    ctaBody:
      "Request a quote or book online. Same-day appointments available in Rancho Cucamonga and nearby cities.",
  },
  {
    slug: "above-fireplace-tv-mounting",
    seoTitle: "Above Fireplace TV Mounting in Rancho Cucamonga | RequestAPro",
    metaDescription:
      "Professional above-fireplace TV mounting in Rancho Cucamonga. We use tilting mounts, assess heat exposure, and conceal wires for a clean built-in look. Serving Fontana, Ontario, Upland, and the IE.",
    h1: "Above Fireplace TV Mounting in Rancho Cucamonga",
    intro:
      "Mounting a TV above a fireplace is one of the most requested — and most mishandled — TV installs in the Inland Empire. Done wrong, it leaves wires exposed, the TV at a painful viewing angle, or worse, damage from heat. RequestAPro does this right: tilting mount so you're not craning your neck, in-wall wire routing so nothing shows, and a full heat assessment of the mounting zone.",
    whatIsIncluded: [
      "Site assessment for heat and wall type",
      "Tilting or full-motion mount installation",
      "In-wall wire concealment behind fireplace wall",
      "Cable connection and TV hang",
      "Viewing angle optimization",
      "Drywall patching if needed (small penetrations)",
      "Post-install cleanup",
    ],
    whyUs: [
      "We only use tilting mounts above fireplaces — no fixed mounts that strain your neck",
      "We assess heat output before recommending placement height",
      "In-wall wiring keeps the space completely clean",
      "Experience with brick, stone, drywall, and tile surrounds",
      "Serving Rancho Cucamonga homeowners for years",
    ],
    bodyContent: `The challenge with above-fireplace installs is the combination of a masonry or tile surface, heat exposure, and the need for clean wire routing. Stucco or brick above the firebox requires masonry anchors — regular drywall anchors won't hold. The correct approach uses a heavy-duty tilting or articulating mount so you can angle the TV downward to a comfortable viewing height.

We always use a tilting mount for above-fireplace installs. A fixed mount centered above a standard fireplace puts the screen at roughly 65–72 inches — too high for comfortable long-term viewing. A tilting mount lets you angle it down 15 degrees so the image quality stays accurate and your neck doesn't ache after an hour.

Wire concealment is almost always necessary for above-fireplace installs because the outlet is typically below the mantle, several feet from where the TV sits. We route cables through the wall using a recessed outlet kit so there's nothing visible — just the TV and the wall.

We serve Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, and Chino.`,
    faqs: [
      {
        question: "Is it safe to mount a TV above a gas fireplace?",
        answer:
          "It depends on how high the heat rises and how often the fireplace is used. We assess the mounting zone during the visit. In most cases, keeping the TV 12–18 inches above the firebox opening and using a tilting mount creates a safe, comfortable setup.",
      },
      {
        question: "What kind of mount do you use for above-fireplace installs?",
        answer:
          "We use tilting or full-motion mounts — never fixed mounts. This allows you to angle the screen down for a proper viewing angle from a seated position.",
      },
      {
        question: "Can you hide the wires when the TV is above the fireplace?",
        answer:
          "Yes. We route the power and HDMI cables through the fireplace wall using an in-wall recessed outlet kit. This is the cleanest solution and it meets electrical code requirements.",
      },
      {
        question:
          "What if the fireplace surround is brick or stone, not drywall?",
        answer:
          "We work with all surround materials. Brick and stone require masonry anchors and a hammer drill, which we bring. The install takes a bit longer but is equally secure.",
      },
      {
        question: "Do you patch the drywall after running wires?",
        answer:
          "We use low-profile wall plates and recessed outlet kits that don't require drywall repair. If any larger cuts are needed, we discuss that with you before cutting.",
      },
    ],
    ctaHeading: "Get a Clean Above-Fireplace TV Install",
    ctaBody:
      "We'll assess your fireplace wall, recommend the right mount, and handle wiring so the result looks built-in. Book online or call today.",
  },
  {
    slug: "wire-concealment",
    seoTitle:
      "TV Wire Concealment in Rancho Cucamonga | Cable Management | RequestAPro",
    metaDescription:
      "Professional TV wire concealment and cable management in Rancho Cucamonga. We hide wires inside walls or use surface raceways on any wall type. Serving Fontana, Ontario, Upland, and the IE.",
    h1: "TV Wire Concealment & Cable Management in Rancho Cucamonga",
    intro:
      "A wall-mounted TV with cables hanging down the wall defeats the whole point. At RequestAPro, we route your TV, soundbar, and console cables through the wall or conceal them with professional raceways — clean, code-compliant, and invisible from across the room.",
    whatIsIncluded: [
      "In-wall cable routing using low-voltage recessed outlet kits",
      "Surface raceway installation as an alternative",
      "Power outlet relocation coordination (licensed electrician required for new circuits)",
      "Cable labeling and organization",
      "Works for TV, soundbar, gaming console, and streaming device cables",
    ],
    whyUs: [
      "We work on drywall, stucco, plaster, brick, and tile",
      "We use proper UL-listed in-wall rated cables",
      "Raceways are painted or color-matched where possible",
      "No wall damage — recessed outlet kits handle the penetrations cleanly",
      "We can add this service to any TV mount job for a bundled price",
    ],
    bodyContent: `There are two main approaches to hiding TV cables: in-wall routing and surface raceways. In-wall routing is cleaner but requires accessible wall cavities. Surface raceways are faster and less invasive — they run along the baseboard or wall surface and can be painted to blend in.

For in-wall routing, we use recessed outlet kits that accept HDMI and power cables. These are code-compliant, don't require a licensed electrician for low-voltage cables, and leave your wall looking like the TV is floating with no wires.

We serve homeowners, renters, and businesses across Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, and Chino.`,
    faqs: [
      {
        question: "Can wires be hidden on any wall type?",
        answer:
          "In-wall routing works best on standard drywall. For stucco, brick, or concrete, we use surface raceways, which are easier to install and still look professional when painted.",
      },
      {
        question: "Do I need a licensed electrician to hide the power cable?",
        answer:
          "For routing existing power cables through the wall using an in-wall recessed outlet kit, no electrician is needed. If you need a new outlet installed behind the TV, we coordinate with a licensed electrician.",
      },
      {
        question: "Can you hide wires if I'm renting?",
        answer:
          "Yes — surface raceways are a tenant-friendly option. They stick to the wall surface without cutting drywall and can be removed without damage when you move.",
      },
      {
        question: "Is wire concealment included in TV mounting?",
        answer:
          "Basic cable management (bundling visible cables) is included with TV mounting. Full in-wall concealment or raceway installation is an add-on. We'll quote it when you book.",
      },
    ],
    ctaHeading: "Hide Your TV Cables the Right Way",
    ctaBody:
      "We'll assess your wall, recommend the best concealment method, and handle the full install. Book online or call to get a quote.",
  },
  {
    slug: "soundbar-mounting",
    seoTitle:
      "Soundbar Mounting in Rancho Cucamonga | Professional Installation | RequestAPro",
    metaDescription:
      "Professional soundbar mounting in Rancho Cucamonga. We mount your soundbar under or above your TV, connect it cleanly, and verify audio. Serving Fontana, Ontario, Upland, and surrounding IE cities.",
    h1: "Soundbar Mounting in Rancho Cucamonga",
    intro:
      "A soundbar on a stand looks like an afterthought. Mounted cleanly under your wall-mounted TV, it looks intentional and sounds better with the audio closer to the screen. RequestAPro installs soundbars for all brands including Sonos, Samsung, LG, Bose, and Sony — aligned, wired, and tested.",
    whatIsIncluded: [
      "Soundbar bracket installation below or above TV",
      "Cable connection (optical, HDMI ARC, Bluetooth verify)",
      "Alignment with your TV centerline",
      "Audio test after installation",
      "Wall type compatibility check",
    ],
    whyUs: [
      "Works with any soundbar brand and most wall types",
      "Bundled pricing when added to a TV mount",
      "We connect and verify audio — not just mount and leave",
      "Same-day appointments in Rancho Cucamonga and nearby cities",
    ],
    bodyContent: `Soundbar mounting adds one clean step to your TV wall setup. We mount the soundbar bracket to studs or use appropriate anchors, hang the soundbar, route the cable to your TV or receiver, and test the audio so you hear it working before we leave.

Most soundbars use HDMI ARC or optical connections. We handle both. If your soundbar is Bluetooth-only, we'll pair it and verify it connects cleanly.

We serve Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, and Chino.`,
    faqs: [
      {
        question: "Does soundbar mounting require studs?",
        answer:
          "Ideally yes, especially for heavier soundbars. For lighter models, heavy-duty drywall anchors work well. We assess the wall and choose the right approach.",
      },
      {
        question: "Can you mount a soundbar on stucco?",
        answer:
          "Yes. We use masonry anchors for stucco and brick surfaces. The result is just as secure as a stud mount.",
      },
      {
        question: "What if I don't have a soundbar bracket?",
        answer:
          "We carry universal soundbar brackets for most sizes. Let us know your soundbar model when you book and we'll bring the right hardware.",
      },
      {
        question: "Do you connect the soundbar to the TV?",
        answer:
          "Yes. We connect via HDMI ARC, optical, or Bluetooth and verify the audio is working through the soundbar before we leave.",
      },
    ],
    ctaHeading: "Add a Soundbar to Your TV Wall Setup",
    ctaBody:
      "Bundle it with a TV mount for the best price. Book online or call — same-day available in Rancho Cucamonga.",
  },
  {
    slug: "ring-doorbell-installation",
    seoTitle: "Ring Doorbell Installation in Rancho Cucamonga | RequestAPro",
    metaDescription:
      "Professional Ring doorbell installation in Rancho Cucamonga. We mount, wire, connect, and configure Ring Video Doorbells on any door material. Serving Fontana, Ontario, Upland, and the IE.",
    h1: "Ring Doorbell Installation in Rancho Cucamonga",
    intro:
      "Installing a Ring doorbell sounds simple until you're standing on a ladder trying to figure out if your existing doorbell wiring supports it. RequestAPro handles the full installation — mounting the bracket on any surface, connecting to your existing wiring or configuring battery mode, connecting to your Wi-Fi, and walking you through the Ring app so you can see your front door in real time before we leave.",
    whatIsIncluded: [
      "Doorbell bracket mounting on wood, stucco, brick, or metal",
      "Wired connection to existing doorbell wiring (where available)",
      "Battery configuration for wireless Ring models",
      "Wi-Fi connection and network pairing",
      "Ring app setup and motion zone configuration",
      "Live view test and two-way audio verification",
      "Angle adjustment for best camera coverage",
    ],
    whyUs: [
      "We install on stucco, brick, wood, and metal — no surface is a problem",
      "We check your transformer compatibility and upgrade it if needed",
      "Customer-provided Ring devices fully supported",
      "We configure the app so you leave knowing how to use it",
      "Serving Rancho Cucamonga homeowners for years",
    ],
    bodyContent: `The Ring Video Doorbell line includes wired and battery models, and the installation process varies by model and your existing doorbell setup. The Ring Pro and Ring Pro 2 require a working 16–24V AC transformer — we check yours and replace it on the spot if it's underpowered. The standard Ring Video Doorbell works on battery or with existing wiring.

For stucco and brick homes — which are common throughout Rancho Cucamonga and the surrounding Inland Empire — we use masonry anchors and the right drill bit to mount the bracket securely before attaching the doorbell. Most installations take 30–45 minutes.

After installation, we open the Ring app on your phone, connect the doorbell to your Wi-Fi, set your motion zones, and run a live view test so you see your entry on screen before we wrap up.

We serve Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, and Chino.`,
    faqs: [
      {
        question: "Do you install Ring doorbells on stucco homes?",
        answer:
          "Yes. Stucco is the most common exterior in this area. We use masonry anchors and the proper drill bit for a secure mount.",
      },
      {
        question: "What if I don't have existing doorbell wiring?",
        answer:
          "No problem. The Ring Video Doorbell (standard model) runs on battery and doesn't require wiring. We configure it wirelessly and connect it to your Wi-Fi.",
      },
      {
        question: "Do you set up the Ring app too?",
        answer:
          "Yes. We connect the doorbell to your Wi-Fi and walk you through the Ring app — live view, motion alerts, and two-way talk — so you're confident using it.",
      },
      {
        question:
          "My transformer is old. Can you replace it during the install?",
        answer:
          "Yes. We carry compatible transformers and can swap the existing one during the visit. We recommend this for Ring Pro models that need 16V or higher.",
      },
      {
        question: "Do you install customer-provided Ring devices?",
        answer:
          "Absolutely. If you purchased a Ring doorbell online or from a retailer, we'll install it. You bring the device — we handle everything else.",
      },
    ],
    ctaHeading: "Get Your Ring Doorbell Installed Today",
    ctaBody:
      "We handle the full install — mounting, wiring, app setup, and testing. Book online or call for same-day service in Rancho Cucamonga.",
  },
  {
    slug: "ring-camera-installation",
    seoTitle:
      "Ring Camera Installation in Rancho Cucamonga | Spotlight, Floodlight & Stick Up | RequestAPro",
    metaDescription:
      "Professional Ring camera installation in Rancho Cucamonga. We mount, wire, and configure Ring Spotlight, Floodlight, and Stick Up cameras. Serving Fontana, Ontario, Upland, and the IE.",
    h1: "Ring Camera Installation in Rancho Cucamonga",
    intro:
      "Ring cameras protect your home from every angle — but only if they're positioned and configured correctly. RequestAPro installs Ring Spotlight Cams, Floodlight Cams, Stick Up Cams, and Indoor Cams at the right height and angle, connects them to your Wi-Fi and Ring account, and sets up motion zones before we leave.",
    whatIsIncluded: [
      "Camera bracket mounting at optimal height and angle",
      "Hardwired connections for Ring Spotlight Cam Wired and Floodlight Cam",
      "Wi-Fi pairing and Ring app configuration",
      "Motion zone setup to reduce false alerts",
      "Live view test and event recording verification",
      "Camera angle walkthrough with homeowner",
    ],
    whyUs: [
      "We install wired and battery Ring cameras",
      "We run outdoor wiring neatly where hardwiring is needed",
      "Motion zone setup is included — not skipped",
      "Multi-camera discounts for 2+ cameras",
      "Serving Rancho Cucamonga and all IE cities",
    ],
    bodyContent: `Ring cameras come in wired and battery models, and each installs differently. The Ring Floodlight Cam and Ring Spotlight Cam Wired require a hardwired 120V connection — we handle the wiring run and connect to an existing outdoor outlet or junction box. The battery models are easier to install but still need proper placement for meaningful coverage.

For most homes in Rancho Cucamonga, we recommend a Ring camera covering the driveway, one at each entry point, and a stick-up cam covering the backyard access. We advise on placement during the visit and mount them at the height and angle that covers the most ground without false triggers from cars passing on the street.

After mounting, we connect each camera to your Ring account, configure motion sensitivity, and review live view with you on your phone. We serve Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, and Chino.`,
    faqs: [
      {
        question: "Do you install Ring Floodlight Cam?",
        answer:
          "Yes. The Floodlight Cam requires a hardwired connection to an outdoor light fixture or junction box. We handle the wiring and mount the camera at the right angle.",
      },
      {
        question: "Do you install Ring Stick Up Cam on soffit?",
        answer:
          "Yes. Soffit mounting is a popular location for Ring cameras. We use the appropriate mounting bracket and route the cable neatly for wired versions.",
      },
      {
        question: "Can you install multiple Ring cameras in one visit?",
        answer:
          "Yes. Multi-camera installs get a discounted per-camera rate. Book your full system and we'll plan the visit to cover all locations.",
      },
      {
        question: "Do you set up the Ring app for cameras?",
        answer:
          "Yes. We connect every camera to your Ring account, configure motion zones, and verify live view and event recording before we leave.",
      },
      {
        question: "What Ring camera models do you install?",
        answer:
          "We install Ring Spotlight Cam (wired and battery), Ring Floodlight Cam, Ring Stick Up Cam, Ring Indoor Cam, and Ring Doorbell cameras.",
      },
    ],
    ctaHeading: "Get Your Ring Cameras Installed Right",
    ctaBody:
      "Book one camera or a full system. We handle mounting, wiring, and app setup. Same-day available in Rancho Cucamonga.",
  },
  {
    slug: "nest-thermostat-installation",
    seoTitle:
      "Nest Thermostat Installation in Rancho Cucamonga | Thermostat Setup | RequestAPro",
    metaDescription:
      "Professional Nest thermostat installation in Rancho Cucamonga. We check HVAC compatibility, install the C-wire if needed, and configure the Google Home app. Serving Fontana, Ontario, Upland, and the IE.",
    h1: "Nest Thermostat Installation in Rancho Cucamonga",
    intro:
      "A Nest thermostat can lower your energy bill and let you control your home's temperature from anywhere — but only if it's installed with the right wiring. RequestAPro verifies your HVAC system compatibility, installs the C-wire adapter if your system doesn't have one, mounts the thermostat, and walks you through the Google Home and Nest app.",
    whatIsIncluded: [
      "HVAC wiring assessment and compatibility check",
      "C-wire adapter installation if your system lacks one",
      "Nest thermostat mounting and wiring",
      "Google Home app connection and account setup",
      "Home/Away assist and schedule configuration",
      "System test — heating and cooling verified",
      "Old thermostat disposal available",
    ],
    whyUs: [
      "We verify compatibility before proceeding — no trial and error",
      "C-wire adapters included when needed at no extra charge",
      "We support Nest Learning Thermostat, Nest Thermostat E, and Nest Thermostat",
      "Customer-provided Nest devices welcome",
      "Serving Rancho Cucamonga homeowners for years",
    ],
    bodyContent: `The most common issue with DIY Nest thermostat installs is the C-wire — the common wire that powers smart thermostats. Older homes in Rancho Cucamonga and the Inland Empire often have systems wired without a C-wire because older thermostats didn't need it. Nest includes a C-wire adapter in the box, but installing it correctly requires opening the HVAC air handler and following the right wiring diagram. We do this routinely and it adds only a few minutes to the install.

Once the wiring is confirmed, we mount the Nest base plate level, connect the wires by label (R, C, G, Y, W), snap on the display, and power the system on. We then open the Nest or Google Home app to connect your thermostat to your Wi-Fi, set up your schedule, and verify both heating and cooling functions work correctly.

We serve Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, and Chino.`,
    faqs: [
      {
        question: "Does my home need a C-wire for Nest?",
        answer:
          "The Nest Learning Thermostat and Nest Thermostat E work best with a C-wire. We check during the install and install the included adapter if your system doesn't have one.",
      },
      {
        question: "Do you install Nest thermostats in homes with heat pumps?",
        answer:
          "Yes. Heat pump systems have different wiring (O/B wire for reversing valve), and we configure the Nest correctly for heat pump vs. conventional heating.",
      },
      {
        question: "Will Nest work with my current HVAC system?",
        answer:
          "Nest works with most 24V HVAC systems. We assess compatibility during the visit. If your system is incompatible (e.g., high-voltage baseboard heat), we'll let you know before proceeding.",
      },
      {
        question: "Do you set up the app and schedule too?",
        answer:
          "Yes. We connect your Nest to your Google Home account, configure Home/Away assist, and help you set a basic schedule if you'd like.",
      },
      {
        question:
          "What's the difference between Nest Learning Thermostat and Nest Thermostat?",
        answer:
          "The Nest Learning Thermostat auto-programs based on your habits. The standard Nest Thermostat requires manual scheduling but still connects to Google Home. We install both models.",
      },
    ],
    ctaHeading: "Get Your Nest Thermostat Installed Correctly",
    ctaBody:
      "We handle compatibility, wiring, and app setup. No guesswork. Book online or call — same-day available in Rancho Cucamonga.",
  },
  {
    slug: "nest-doorbell-installation",
    seoTitle:
      "Nest Doorbell Installation in Rancho Cucamonga | Wired & Battery | RequestAPro",
    metaDescription:
      "Professional Nest Doorbell installation in Rancho Cucamonga. We mount, wire, and configure your Nest Doorbell (wired or battery) in the Google Home app. Serving Fontana, Ontario, Upland, and the IE.",
    h1: "Nest Doorbell Installation in Rancho Cucamonga",
    intro:
      "The Nest Doorbell integrates tightly with the Google Home ecosystem, giving you camera alerts, two-way talk, and package detection right in the Google Home app. RequestAPro installs the Nest Doorbell (wired and battery versions), assesses the door mounting surface, routes wiring cleanly, and configures everything in your Google Home account.",
    whatIsIncluded: [
      "Doorbell bracket mounting on any door surface",
      "Wired connection to existing low-voltage doorbell wiring",
      "Battery model setup if no existing wiring",
      "Transformer compatibility check and upgrade if needed",
      "Google Home app setup and account link",
      "Activity zone configuration",
      "Live view and motion alert test",
    ],
    whyUs: [
      "We install on stucco, wood, brick, and metal surfaces",
      "Compatible with Google Home, Alexa, and SmartThings",
      "We check transformer voltage for wired models",
      "Customer-provided Nest Doorbell devices supported",
      "Serving Rancho Cucamonga and Inland Empire",
    ],
    bodyContent: `The wired Nest Doorbell connects to your existing 8–24V AC doorbell wiring. We check your transformer's output and, if it's too low, swap it for a compatible one. The battery Nest Doorbell goes anywhere — no wiring needed — and we configure it wirelessly.

After mounting, we connect the Nest Doorbell to your Google Home account, walk through event history, and set activity zones to alert you when someone crosses the front path but not every car on the street.

We serve Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, and Chino.`,
    faqs: [
      {
        question:
          "What's the difference between the wired and battery Nest Doorbell?",
        answer:
          "The wired model connects to existing 8–24V AC doorbell wiring and stays continuously powered. The battery model installs anywhere and recharges via USB. Both work with Google Home.",
      },
      {
        question: "Do you install Nest Doorbell on stucco?",
        answer:
          "Yes. We use masonry anchors for stucco surfaces. It's the most common exterior in Rancho Cucamonga and we handle it routinely.",
      },
      {
        question: "Does the Nest Doorbell work with Google Home?",
        answer:
          "Yes. It's a native Google Home device. We set it up in the app so you get live view, package alerts, and two-way talk right from your phone or Google Nest Hub.",
      },
      {
        question: "Can I use a Nest Doorbell without existing doorbell wiring?",
        answer:
          "Yes — choose the battery model. We mount it at your door, configure it wirelessly, and connect it to your Google Home account.",
      },
    ],
    ctaHeading: "Get Your Nest Doorbell Installed",
    ctaBody:
      "We handle the full setup — mounting, wiring, and Google Home configuration. Book online or call for same-day service.",
  },
  {
    slug: "smart-home-installation",
    seoTitle:
      "Smart Home Device Installation in Rancho Cucamonga | RequestAPro",
    metaDescription:
      "Professional smart home installation in Rancho Cucamonga. We set up Ring, Nest, smart locks, switches, cameras, and hubs. Full Wi-Fi setup, app configuration, and customer walkthrough included.",
    h1: "Smart Home Device Installation in Rancho Cucamonga",
    intro:
      "Smart home devices work great — when they're installed and configured correctly. At RequestAPro, we handle the full setup: mounting, Wi-Fi connection, app pairing, and a walkthrough so you know exactly how to use what you just installed. From a single Nest thermostat to a full Ring security system, we've got you covered.",
    whatIsIncluded: [
      "Device mounting or placement (cameras, doorbells, hubs, displays)",
      "Wi-Fi network connection and optimization",
      "App installation and account setup",
      "Smart home hub integration (Google Home, Amazon Alexa, SmartThings)",
      "Device-to-device automation setup",
      "Full customer walkthrough after installation",
    ],
    whyUs: [
      "We work with all major smart home ecosystems: Google Home, Amazon Alexa, Apple HomeKit, SmartThings",
      "Customer-provided devices are always welcome",
      "We don't just install — we configure and test",
      "Multi-device discounts for 3+ devices",
      "Serving Rancho Cucamonga and all Inland Empire cities",
    ],
    bodyContent: `Smart home installations fail most often at three points: weak Wi-Fi signal at the device location, wrong app configuration, and incomplete device pairing. We address all of these. Before installing, we check signal strength at the planned device location and recommend a Wi-Fi extender if needed.

Common devices we install and configure: Ring doorbells and cameras, Nest thermostats and doorbells, smart locks (Schlage, Kwikset, August, Yale), smart switches (Kasa, Lutron, Leviton), smart plugs, Google Nest Hubs, Amazon Echo devices, and Arlo cameras.

After installation, we walk you through every device so you leave knowing how to use your new setup — not just that it works.

We serve Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, and Chino.`,
    faqs: [
      {
        question: "Do you set up the app and connect devices to my account?",
        answer:
          "Yes. Setting up the app and connecting devices to your smart home ecosystem is part of every installation. We don't mount and leave.",
      },
      {
        question: "Can you install devices from different brands together?",
        answer:
          "Yes. We work with Google Home, Amazon Alexa, Apple HomeKit, and Samsung SmartThings ecosystems and can connect compatible devices across brands.",
      },
      {
        question:
          "What if my Wi-Fi signal is weak in the area where I need the device?",
        answer:
          "We check signal strength during setup. If it's too weak, we recommend and can install a Wi-Fi extender or mesh node to ensure reliable connectivity.",
      },
      {
        question: "Do you install customer-provided smart home devices?",
        answer:
          "Yes, always. Bring your own device or we'll bring commonly requested ones. Either way, we handle the full install and configuration.",
      },
      {
        question: "What cities do you serve?",
        answer:
          "We primarily serve Rancho Cucamonga and also cover Fontana, Ontario, Upland, Rialto, Eastvale, and Chino across the Inland Empire.",
      },
    ],
    ctaHeading: "Get Your Smart Home Set Up Right",
    ctaBody:
      "One device or a full system — we install, configure, and walk you through it. Book online or call for same-day service in Rancho Cucamonga.",
  },
  {
    slug: "security-camera-installation",
    seoTitle:
      "Security Camera Installation in Rancho Cucamonga | Wired & Wireless | RequestAPro",
    metaDescription:
      "Professional security camera installation in Rancho Cucamonga. We install wired and wireless cameras from Ring, Arlo, Reolink, and more. App setup and remote viewing included. Serving the IE.",
    h1: "Security Camera Installation in Rancho Cucamonga",
    intro:
      "A security camera system is only as good as its installation. Poorly aimed cameras, loose mounts, and unconfigured apps leave you with blind spots and recordings you can't find. RequestAPro installs wired and wireless cameras with clean cable routing, proper angle alignment, and full app configuration so you can monitor your home remotely from day one.",
    whatIsIncluded: [
      "Camera mounting at optimal locations and angles",
      "Wiring run for hardwired cameras (Ethernet PoE or coaxial)",
      "Wireless camera pairing and Wi-Fi connection",
      "DVR/NVR setup and hard drive configuration",
      "Remote viewing app setup for iOS and Android",
      "Motion zone and alert configuration",
      "Full system review with homeowner",
    ],
    whyUs: [
      "We install systems from Ring, Arlo, Reolink, Wyze, Hikvision, Lorex, and more",
      "Both wired PoE systems and wireless Wi-Fi cameras",
      "Clean cable routing with no exposed wiring",
      "Multi-camera system discounts available",
      "Serving Rancho Cucamonga and all Inland Empire cities",
    ],
    bodyContent: `Security camera systems fall into two main categories: wireless Wi-Fi cameras and wired PoE (Power over Ethernet) systems. Wireless cameras are easier to install and reposition; wired systems are more reliable and don't depend on battery life or Wi-Fi congestion.

For wired installs, we run Cat6 Ethernet cable from each camera location to your DVR or NVR, usually through attic space or via exterior cable routing with weatherproof conduit. For wireless installs, we mount and aim each camera, connect it to your Wi-Fi, and add it to your account.

After installation, we set up remote viewing on your phone so you can see live feeds and playback from anywhere. We also configure motion zones so alerts are meaningful — not triggered every time a car passes.

We serve Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, and Chino.`,
    faqs: [
      {
        question: "What camera brands do you install?",
        answer:
          "We install Ring, Arlo, Reolink, Wyze, Hikvision, Lorex, Annke, and most consumer and prosumer security camera systems.",
      },
      {
        question: "Can you run wiring through my attic or walls?",
        answer:
          "Yes. For wired PoE systems, we run Cat6 cable through attic space where possible for the cleanest look. We discuss the routing plan with you before cutting any holes.",
      },
      {
        question: "Do you set up remote viewing on my phone?",
        answer:
          "Yes. Remote viewing setup is included. By the time we leave, you'll be able to see live camera feeds and play back recordings from your phone.",
      },
      {
        question: "How many cameras do you recommend for a typical home?",
        answer:
          "Most single-family homes benefit from 4–6 cameras: front door, garage, driveway, and at least one backyard view. We advise on placement during the visit.",
      },
      {
        question: "Do you install customer-provided cameras and systems?",
        answer:
          "Yes. If you've already purchased a system or individual cameras, we'll install them. Just let us know the brand and model when you book.",
      },
    ],
    ctaHeading: "Protect Your Home with a Professional Camera Install",
    ctaBody:
      "We install, wire, and configure your full camera system. Book online or call for same-day service in Rancho Cucamonga.",
  },
  {
    slug: "smart-lock-installation",
    seoTitle:
      "Smart Lock Installation in Rancho Cucamonga | Schlage, Kwikset, August | RequestAPro",
    metaDescription:
      "Professional smart lock installation in Rancho Cucamonga. We install Schlage, Kwikset, August, and Yale smart locks with full app setup. Integrates with Ring, Google Home, and Alexa.",
    h1: "Smart Lock Installation in Rancho Cucamonga",
    intro:
      "A smart lock is one of the highest-impact smart home upgrades — no more spare keys, remote access from your phone, and auto-lock when you leave. RequestAPro installs smart locks from leading brands, aligns the deadbolt, configures the app, and integrates your lock with Ring, Google Home, or Alexa if you'd like.",
    whatIsIncluded: [
      "Lock removal and smart lock installation (retrofit or full replacement)",
      "Deadbolt alignment and door gap assessment",
      "Battery installation and low-battery alert setup",
      "App setup and user code configuration",
      "Smart home integration (Ring, Google Home, Alexa, SmartThings)",
      "Auto-lock configuration",
      "Physical key test and function verification",
    ],
    whyUs: [
      "We install Schlage Encode, Kwikset Halo, August Wi-Fi, Yale Assure, and more",
      "Door alignment issues identified and addressed during install",
      "Full app setup and code configuration included",
      "Smart home ecosystem integration included",
      "Serving Rancho Cucamonga and all Inland Empire cities",
    ],
    bodyContent: `Smart lock installation involves more than swapping hardware. The door gap between the door and frame must be correct — too tight and the lock will strain. The deadbolt throw must extend cleanly into the strike plate. We check both during installation and make minor door adjustments if needed.

Most smart locks are retrofit deadbolts — they replace the interior thumb turn only, keeping your existing exterior keyway. Full replacement smart locks replace both sides. We handle both types.

After hardware installation, we connect the lock to your Wi-Fi (for Wi-Fi enabled models) or Z-Wave/Zigbee hub, configure your access codes, set auto-lock timing, and link it to your Ring, Google Home, or Alexa account if you have one.

We serve Rancho Cucamonga, Fontana, Ontario, Upland, Rialto, Eastvale, and Chino.`,
    faqs: [
      {
        question: "What smart lock brands do you install?",
        answer:
          "We install Schlage Encode, Kwikset SmartCode and Halo, August Wi-Fi Smart Lock, Yale Assure, and most major consumer smart lock brands.",
      },
      {
        question: "Do you need to replace the whole deadbolt?",
        answer:
          "Not always. Many smart locks are retrofit — they replace the interior assembly only, keeping your existing exterior hardware and key. August and some Yale models work this way.",
      },
      {
        question: "Can the smart lock integrate with my Ring or Google Home?",
        answer:
          "Yes — we configure the integration during installation. Most Wi-Fi smart locks work with Ring, Google Home, Amazon Alexa, and Samsung SmartThings.",
      },
      {
        question: "What if my door doesn't close perfectly?",
        answer:
          "We check door gap and alignment before installing. Minor adjustments to the strike plate or deadbolt position are handled during the visit. Major door issues may need a separate door service.",
      },
      {
        question: "Do you set up user access codes?",
        answer:
          "Yes. We configure up to 4 user codes during installation. Additional codes can be added in the app at any time.",
      },
    ],
    ctaHeading: "Upgrade to a Smart Lock Today",
    ctaBody:
      "We install, configure, and integrate your smart lock with your home system. Book online or call for service in Rancho Cucamonga.",
  },
];
