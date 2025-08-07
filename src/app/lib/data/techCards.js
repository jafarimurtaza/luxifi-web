import {
  FaNetworkWired,
  FaWifi,
  FaCloud,
  FaServer,
  FaCamera,
  FaTv,
  FaShieldAlt,
  FaDoorOpen,
} from "react-icons/fa";

export const techCards = [
  {
    id: 1,
    icon: FaWifi,
    title: "In-Wall WiFi Access Points",
    image: "/images/tech/in-wall-wifi-access-points.webp",
    description:
      "These low-profile WiFi 6 access points mount directly on your wall and deliver powerful wireless performance. They include 4 built-in Ethernet ports to support wired connections where needed.",
    dimensions:
      "What It Helps:\n• Eliminates clutter from extenders and cables\n• Keeps performance high in rooms that need strong WiFi\n• Lets you hardwire smart TVs, gaming consoles, and desktops\n\nWhere It Works:\n• Bedrooms, offices, media rooms, condos, apartments",
    features:
      'What It Does:\n• WiFi 6 technology\n• 4 built-in gigabit ethernet ports\n• Low profile, less than 1" protrusion\n• Easy to install',
    isLeft: true,
  },
  {
    id: 2,
    icon: FaWifi,
    title: "Ceiling-Mount Access Points",
    image: "/images/tech/ceiling-mount.webp",
    description:
      "Ceiling-mounted units distribute a wide, balanced WiFi signal from above — perfect for open-plan layouts or large rooms.",
    dimensions:
      "What It Helps:\n• Ensures stable coverage across wide areas\n• Blends discreetly into ceilings\n• Handles multiple devices without drop-offs\n\nWhere It Works:\n• Living rooms, kitchens, basements, commercial zones",
    features:
      "What It Does:\n• Broad signal coverage\n• Discrete, low-profile design\n• Easy ceiling installation\n• Supports multiple SSIDs",
    isLeft: false,
  },
  {
    id: 3,
    icon: FaCloud,
    title: "Cloud Control System – Dream Machine Pro",
    image: "/images/tech/cloud-control-systems.webp",
    description:
      "This all-in-one controller manages your entire network. It acts as a high-end router, firewall, managed switch, and cloud-based control system. Add a hard drive to record video from your UniFi cameras.",
    dimensions:
      "What It Helps:\n• Gives you full control over your network and security\n• Handles heavy traffic with speed and reliability\n• Lets you monitor or adjust settings from anywhere\n\nWhere It Works:\n• Smart homes, tech-forward households, multi-user environments",
    features:
      "What It Does:\n• Security gateway & router\n• Managed switch capabilities\n• Cloud network controller\n• Optional NVR with HDD installation",
    isLeft: true,
  },
  {
    id: 4,
    icon: FaWifi,
    title: "Outdoor WiFi Access Points – U6 Mesh",
    image: "/images/tech/outdoor-access-points.webp",
    description:
      "These waterproof WiFi 6 mesh access points expand your network outdoors. They cast all-directional coverage to keep your entire property connected.",
    dimensions:
      "What It Helps:\n• Adds seamless WiFi to yards, patios, and garages\n• Withstands rain and heat\n• Great for smart lighting, outdoor cameras, and guests\n\nWhere It Works:\n• Backyards, gardens, rooftops, detached buildings, driveways",
    features:
      "What It Does:\n• IPX-5 waterproof casing\n• All-directional signal coverage\n• Suitable for indoor/outdoor\n• Mesh networking capable",
    isLeft: false,
  },
  {
    id: 5,
    icon: FaNetworkWired,
    title: "Premium Data Cabling – Cat6a",
    image: "/images/tech/premium-data-cabling.webp",
    description:
      "Our high-performance Cat6a cabling runs behind the walls, providing the backbone for your network — supporting ultra-fast and interference-free connectivity.",
    dimensions:
      "What It Helps:\n• Keeps your network fast and reliable long-term\n• Future-proofs your home for more devices\n• Leaves no mess — installed invisibly and professionally\n\nWhere It Works:\n• Everywhere in the home (walls, ceilings, structured panels)",
    features:
      "What It Does:\n• Cat6a standard cable\n• Supports 10Gbps speeds\n• Low crosstalk and interference\n• Expert clean installation",
    isLeft: true,
  },
  {
    id: 6,
    icon: FaCamera,
    title: "Pro Cameras – UniFi Protect",
    image: "/images/tech/camera.webp",
    description:
      "Capture every detail with these AI-powered, weather-resistant indoor/outdoor cameras. View footage anytime from your phone or computer.",
    dimensions:
      "What It Helps:\n• Monitors your home 24/7 with ultra HD clarity\n• Sends smart alerts for motion or unusual activity\n• Deters threats and protects what matters most\n\nWhere It Works:\n• Driveways, entrances, backyards, garages, indoor spaces",
    features:
      "What It Does:\n• Ultra HD resolution\n• Weather-resistant casing\n• AI motion detection\n• Indoor and outdoor use",
    isLeft: false,
  },
  {
    id: 7,
    icon: FaServer,
    title: "Network Video Recorders (NVR)",
    image: "/images/tech/network-video-recorders.webp",
    description:
      "These secure devices store and organize your camera footage locally. They support large camera networks and provide easy access to recordings.",
    dimensions:
      "What It Helps:\n• Stores video safely without relying on cloud\n• Supports up to 50 security cameras\n• Makes reviewing or exporting footage simple\n\nWhere It Works:\n• Homes with multiple cameras, commercial offices, large properties",
    features:
      "What It Does:\n• Supports up to 50 cameras\n• Flexible storage options\n• Seamless UniFi integration\n• Easy-to-use interface",
    isLeft: true,
  },
  {
    id: 8,
    icon: FaTv,
    title: "ViewPort – Live Camera Streaming Display",
    image: "/images/tech/office-graphic.jpg",
    description:
      "Plug this device into any TV or monitor and stream live camera feeds instantly — no computer needed.",
    dimensions:
      "What It Helps:\n• Lets you monitor your property in real time\n• Works without logging into an app\n• Ideal for entry visibility or 24/7 surveillance screens\n\nWhere It Works:\n• Living rooms, offices, entryways, reception areas",
    features:
      "What It Does:\n• Plug-and-play setup\n• Compatible with any TV/monitor\n• Real-time streaming\n• No computer required",
    isLeft: false,
  },
  {
    id: 9,
    icon: FaShieldAlt,
    title: "Dome Cameras",
    image: "/images/tech/dome-cameras.webp",
    description:
      "These compact, versatile cameras offer night vision and ultra HD video in a clean dome design for wall or ceiling mounting.",
    dimensions:
      "What It Helps:\n• Records clear footage day or night\n• Low-profile and weather-resistant\n• Easy to install in tight or visible spots\n\nWhere It Works:\n• Front doors, hallways, porches, indoor/outdoor entry points",
    features:
      "What It Does:\n• Infrared night vision\n• Weather resistant\n• Ultra HD resolution\n• Multiple mounting options",
    isLeft: true,
  },
  {
    id: 10,
    icon: FaDoorOpen,
    title: "Smart Doorbells",
    image: "/images/tech/doorbells.webp",
    description:
      "See and talk to visitors from anywhere using high-definition video, motion alerts, and two-way audio — all from your smartphone.",
    dimensions:
      "What It Helps:\n• Instantly know who's at the door\n• Talk to guests, deliveries, or strangers without opening\n• Adds convenience and safety to your home entrance\n\nWhere It Works:\n• Main entry doors, side gates, rental units, guesthouses",
    features:
      "What It Does:\n• Crystal-clear video\n• Two-way audio\n• Advanced motion detection\n• Easy installation",
    isLeft: false,
  },
];
