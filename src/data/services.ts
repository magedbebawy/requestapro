export type Service = {
  slug: string; // tv-mounting, smart-install, furniture-assembly
  title: string;
  description: string;
  basePrice: number; // e.g. 79, 99, 59
  unit: string; // "/TV", "/device", "/hour"
  image: string; // filename in /public
  pricingNote?: string;
};

export const services: Service[] = [
  {
    slug: "tv-mounting",
    title: "TV Mounting Service",
    description:
      "Professional TV mounting service for all TV sizes. Includes wall mounting, cable management, and basic setup. We handle everything from finding the perfect spot to ensuring your TV is securely mounted and properly connected.",
    basePrice: 69,
    unit: "/TV",
    image: "tv-service.png",
    pricingNote:
      'Starting at $69 for TVs under 40". Additional charges for larger TVs, wire management, and lifting help.',
  },
  {
    slug: "smart-install",
    title: "Smart Home Installation",
    description:
      "Expert installation and setup of smart home devices. From smart speakers and displays to security cameras and doorbells, we'll get your devices connected and configured for optimal performance. Includes device setup, network configuration, and app installation.",
    basePrice: 69,
    unit: "/device",
    image: "smart-install.png",
    pricingNote:
      "First device: $69, Additional devices: $39 each. Network setup available for $50.",
  },
  {
    slug: "furniture-assembly",
    title: "Furniture Assembly",
    description:
      "Professional furniture assembly service for all types of furniture. We'll carefully assemble your furniture according to manufacturer specifications, ensuring everything is sturdy and properly put together. Includes assembly, placement, and cleanup.",
    basePrice: 69,
    unit: "/item",
    image: "furniture-assembly.png",
    pricingNote:
      "Small jobs: $69, Medium jobs: $89, Large jobs: $119. Additional items charged at the same rate.",
  },
];
