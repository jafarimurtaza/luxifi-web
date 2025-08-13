export const wifiConfigurations = {
  mesh: {
    zones: [
      {
        id: "router",
        top: "45%",
        left: "35%",
        size: "28%",
        delay: 0,
        duration: 1.5,
        intensity: "strong",
      },
      {
        id: "living",
        top: "35%",
        left: "55%",
        size: "32%",
        delay: 0.8,
        duration: 2,
        intensity: "strong",
      },
      {
        id: "kitchen",
        top: "55%",
        left: "55%",
        size: "30%",
        delay: 1.2,
        duration: 2,
        intensity: "strong",
      },
      {
        id: "bedroom1",
        top: "25%",
        left: "75%",
        size: "28%",
        delay: 2,
        duration: 2.5,
        intensity: "strong",
      },
      {
        id: "bedroom2",
        top: "65%",
        left: "75%",
        size: "26%",
        delay: 2.4,
        duration: 2.5,
        intensity: "strong",
      },
      {
        id: "bathroom",
        top: "45%",
        left: "85%",
        size: "22%",
        delay: 3.2,
        duration: 2,
        intensity: "medium",
      },
      {
        id: "garage",
        top: "45%",
        left: "15%",
        size: "24%",
        delay: 3.8,
        duration: 2,
        intensity: "medium",
      },
      {
        id: "outdoor",
        top: "80%",
        left: "45%",
        size: "38%",
        delay: 4.5,
        duration: 3,
        intensity: "medium",
      },
    ],
    color: "#FCD34D",
  },

  standard: {
    zones: [
      {
        id: "router",
        top: "45%",
        left: "35%",
        size: "32%",
        delay: 0,
        duration: 2,
        intensity: "strong",
      },
      {
        id: "nearby",
        top: "40%",
        left: "55%",
        size: "28%",
        delay: 1,
        duration: 2,
        intensity: "medium",
      },
      {
        id: "weak",
        top: "55%",
        left: "65%",
        size: "20%",
        delay: 2.5,
        duration: 1.5,
        intensity: "weak",
      },
    ],
    color: "#F59E0B",
  },

  enterprise: {
    zones: [
      {
        id: "ap1",
        top: "30%",
        left: "25%",
        size: "38%",
        delay: 0,
        duration: 1.5,
        intensity: "strong",
      },
      {
        id: "ap2",
        top: "30%",
        left: "70%",
        size: "38%",
        delay: 0.3,
        duration: 1.5,
        intensity: "strong",
      },
      {
        id: "ap3",
        top: "70%",
        left: "50%",
        size: "42%",
        delay: 0.6,
        duration: 1.5,
        intensity: "strong",
      },
      {
        id: "overlap1",
        top: "45%",
        left: "47%",
        size: "35%",
        delay: 1,
        duration: 2,
        intensity: "strong",
      },
      {
        id: "outdoor",
        top: "85%",
        left: "45%",
        size: "48%",
        delay: 1.5,
        duration: 2,
        intensity: "strong",
      },
    ],
    color: "#3B82F6",
  },
};

export const wifiTabs = [
  {
    id: "mesh",
    label: "Mesh Network",
    description:
      "Experience seamless connectivity throughout your entire home with our advanced mesh network technology. Multiple nodes work together to eliminate dead zones and provide consistent high-speed internet in every corner of your property.",
    stats: {
      speed: "1 Gbps",
      coverage: "5000 sq ft",
      reliability: "99.9%",
      overallExperience: "Excellent",
    },
  },
  {
    id: "standard",
    label: "Standard Router",
    description:
      "Traditional single-point router solution that provides reliable internet connectivity for smaller homes. Limited range may result in weaker signals in distant rooms and outdoor areas.",
    stats: {
      speed: "300 Mbps",
      coverage: "1500 sq ft",
      reliability: "85%",
      overallExperience: "Fair",
    },
  },
  {
    id: "enterprise",
    label: "Enterprise Pro",
    description:
      "Professional-grade networking solution with multiple strategically placed access points. Designed for large properties requiring maximum coverage, speed, and reliability with seamless roaming capabilities.",
    stats: {
      speed: "10 Gbps",
      coverage: "10000 sq ft",
      reliability: "99.99%",
      overallExperience: "Outstanding",
    },
  },
];

export const luxifiSolutionTabs = [
  {
    id: "router",
    label: "Just a Router",
    description:
      "A single router often leaves large areas of your home with weak or no signal, leading to frustrating dead zones and buffering.",
    stats: {
      speed: "100 Mbps",
      coverage: "Limited",
      reliability: "Poor",
      overallExperience: "Frustrating",
    },
    visualization: {
      type: "problem",
      baseColor: "#EF4444",
      signalPoints: [
        {
          id: "main-router",
          top: "45%",
          left: "35%",
          type: "standard",
          isActive: true,
          delay: 0,
        },
        {
          id: "weak-zone1",
          top: "30%",
          left: "65%",
          type: "standard",
          isActive: false,
          delay: 1,
        },
        {
          id: "weak-zone2",
          top: "60%",
          left: "70%",
          type: "standard",
          isActive: false,
          delay: 1.5,
        },
      ],
      label: "Unreliable Coverage",
    },
  },
  {
    id: "extenders",
    label: "Extenders",
    description:
      "While extenders might boost signal in some areas, they often create new networks, reduce speed, and lead to frequent disconnections.",
    stats: {
      speed: "250 Mbps",
      coverage: "Spotty",
      reliability: "Inconsistent",
    },
    visualization: {
      type: "failed-solutions",
      baseColor: "#F59E0B",
      signalPoints: [
        {
          id: "main-router",
          top: "45%",
          left: "35%",
          type: "standard",
          isActive: true,
          delay: 0.5,
        },
        {
          id: "extender1",
          top: "30%",
          left: "60%",
          type: "standard",
          isActive: true,
          delay: 1,
        },
        {
          id: "extender2",
          top: "60%",
          left: "65%",
          type: "standard",
          isActive: true,
          delay: 1.5,
        },
        {
          id: "dead-spot",
          top: "20%",
          left: "80%",
          type: "standard",
          isActive: false,
          delay: 2,
        },
      ],
      label: "Partial Solutions",
    },
  },
  {
    id: "luxifi",
    label: "Luxifi",
    description:
      "Luxifi delivers high-performance, enterprise-grade WiFi throughout your home using a fully wired network foundation. Every access point is hardwired for maximum speed, stability, and reach — giving you flawless coverage from room to room and wall to wall.",
    stats: {
      speed: "1 Gbps+",
      coverage: "Whole Home",
      reliability: "Flawless",
      overallExperience: "Seamless",
    },
    visualization: {
      type: "luxifi-solution",
      baseColor: "#10B981",
      signalPoints: [
        {
          id: "ap1",
          top: "40%",
          left: "30%",
          type: "luxifi",
          isActive: true,
          delay: 0,
        },
        {
          id: "ap2",
          top: "30%",
          left: "70%",
          type: "luxifi",
          isActive: true,
          delay: 0.3,
        },
        {
          id: "ap3",
          top: "70%",
          left: "50%",
          type: "luxifi",
          isActive: true,
          delay: 0.6,
        },
        {
          id: "garage",
          top: "45%",
          left: "15%",
          type: "luxifi",
          isActive: true,
          delay: 0.9,
        },
      ],
      label: "Complete LuxiFi Coverage",
    },
  },
];

export const wifiNightmareTabs = [
  {
    id: "router",
    label: "Just a router",
    description:
      "Limited in both range and functionality, a router alone is insufficient for today’s connected home. Other solutions are often sought to supplement these shortfalls, but come with sacrifices.",
    stats: {
      speed: "100 Mbps",
      coverage: "Limited",
      reliability: "Poor",
      overallExperience: "Frustrating",
    },
    visualization: {
      houseImage: "/public/modern-house-layout.png",
      routerPosition: { top: "45%", left: "35%" },
      overallCoverageZone: {
        id: "main-coverage",
        top: "45%",
        left: "45%",
        size: "60%", // Larger, more central coverage
        intensity: "medium",
        delay: 0,
        duration: 2.5,
      },
      garageCoverageZone: {
        id: "garage-coverage",
        top: "60%",
        left: "18%",
        size: "25%", // Garage coverage inside and overlapping
        intensity: "weak",
        delay: 0.5,
        duration: 2,
      },
      color: "#3B82F6", // Blue for Router Only
    },
  },
  {
    id: "extenders",
    label: "Extenders",
    description:
      "While extenders might boost signal in some areas, they often create new networks, reduce speed, and lead to frequent disconnections. It's a partial solution that introduces new headaches.",
    stats: {
      speed: "250 Mbps",
      coverage: "Spotty",
      reliability: "Inconsistent",
      overallExperience: "Annoying",
    },
    visualization: {
      houseImage: "/public/modern-house-layout.png",
      routerPosition: { top: "45%", left: "35%" }, // Main router
      overallCoverageZone: {
        id: "main-coverage",
        top: "45%",
        left: "50%",
        size: "70%", // Slightly larger, more spread out
        intensity: "medium",
        delay: 0,
        duration: 2.5,
      },
      garageCoverageZone: {
        id: "garage-coverage",
        top: "60%",
        left: "18%",
        size: "25%", // Garage coverage inside and overlapping
        intensity: "medium",
        delay: 0.5,
        duration: 2,
      },
      color: "#00BCD4", // Teal for Extenders
    },
  },
  {
    id: "mesh-systems",
    label: "Mesh systems",
    description:
      "WiFi mesh products solve some key issues found in other systems, but are still challenged by factors such as wall density, lack of weather-resistance, and consumer-grade software constraints.",
    stats: {
      speed: "500 Mbps",
      coverage: "Incomplete",
      reliability: "Variable",
      overallExperience: "Disappointing",
    },
    visualization: {
      houseImage: "/public/modern-house-layout.png",
      routerPosition: { top: "45%", left: "35%" }, // Main mesh node
      overallCoverageZone: {
        id: "main-coverage",
        top: "45%",
        left: "50%",
        size: "80%", // Even larger, more encompassing
        intensity: "strong",
        delay: 0,
        duration: 2.5,
      },
      garageCoverageZone: {
        id: "garage-coverage",
        top: "60%",
        left: "18%",
        size: "25%", // Garage coverage inside and overlapping
        intensity: "medium",
        delay: 0.5,
        duration: 2,
      },
      color: "#3B82F6", // Blue for Mesh Systems
    },
  },
];

export const services = [
  {
    id: 1,
    title: "STRUCTURED CABLING",
    description:
      "We build your network from the ground up using the highest-quality copper cable or fiber cabling. It's the invisible powerhouse behind your reliable, high-speed internet.",
    image: "/images/home/service3.webp",
    imageAlt: "Structured Cabling - Ethernet Cable",
    layout: "image-left",
  },
  {
    id: 2,
    title: "WHOLE-HOME WIFI",
    description:
      "We design and deploy cutting-edge UniFi systems for complete coverage, advanced control, and secure connectivity — at a price that makes sense.",
    image: "/images/home/services2.webp",
    imageAlt: "Whole-Home WiFi - UniFi System",
    layout: "image-right",
  },
  {
    id: 3,
    title: "SMART SECURITY CAMERAS",
    description:
      "See your property from anywhere with Luxifi-installed UniFi Protect cameras. AI alerts, night vision, and remote access are just the beginning.",
    image: "/images/home/service1.webp",
    imageAlt: "Smart Security Cameras - UniFi Protect",
    layout: "image-left",
  },
];

export const promiseItems = [
  {
    id: 1,
    title: "BUILT BY",
    subtitle: "SPECIALISTS",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* Network nodes */}
        <circle cx="20" cy="25" r="4" fill="url(#grad1)" />
        <circle cx="40" cy="15" r="4" fill="url(#grad1)" />
        <circle cx="60" cy="25" r="4" fill="url(#grad1)" />
        <circle cx="15" cy="45" r="4" fill="url(#grad1)" />
        <circle cx="40" cy="40" r="4" fill="url(#grad1)" />
        <circle cx="65" cy="45" r="4" fill="url(#grad1)" />
        <circle cx="25" cy="65" r="4" fill="url(#grad1)" />
        <circle cx="55" cy="65" r="4" fill="url(#grad1)" />
        {/* Connections */}
        <path
          d="M20 25 L40 15 M40 15 L60 25 M20 25 L15 45 M60 25 L65 45 M15 45 L25 65 M65 45 L55 65 M40 15 L40 40 M25 65 L55 65"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "ZERO DEAD",
    subtitle: "ZONES",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* WiFi signal waves */}
        <circle cx="40" cy="40" r="6" fill="url(#grad2)" />
        <circle
          cx="40"
          cy="40"
          r="15"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="3"
        />
        <circle
          cx="40"
          cy="40"
          r="25"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="3"
        />
        <circle
          cx="40"
          cy="40"
          r="35"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="3"
        />
        {/* Signal strength bars */}
        <rect x="10" y="60" width="4" height="8" fill="url(#grad2)" />
        <rect x="16" y="55" width="4" height="13" fill="url(#grad2)" />
        <rect x="22" y="50" width="4" height="18" fill="url(#grad2)" />
        <rect x="28" y="45" width="4" height="23" fill="url(#grad2)" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "FULL-SERVICE",
    subtitle: "DELIVERY",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* Truck body */}
        <rect
          x="15"
          y="35"
          width="35"
          height="20"
          rx="2"
          fill="none"
          stroke="url(#grad3)"
          strokeWidth="3"
        />
        <rect
          x="50"
          y="40"
          width="15"
          height="15"
          rx="2"
          fill="none"
          stroke="url(#grad3)"
          strokeWidth="3"
        />
        {/* Wheels */}
        <circle
          cx="25"
          cy="60"
          r="6"
          fill="none"
          stroke="url(#grad3)"
          strokeWidth="3"
        />
        <circle
          cx="55"
          cy="60"
          r="6"
          fill="none"
          stroke="url(#grad3)"
          strokeWidth="3"
        />
        {/* Package */}
        <rect x="20" y="25" width="8" height="8" fill="url(#grad3)" />
        <path d="M20 29 L28 29 M24 25 L24 33" stroke="#000" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "TURNKEY",
    subtitle: "EXECUTION",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* Network diagram */}
        <circle
          cx="40"
          cy="25"
          r="8"
          fill="none"
          stroke="url(#grad4)"
          strokeWidth="3"
        />
        <circle
          cx="20"
          cy="50"
          r="6"
          fill="none"
          stroke="url(#grad4)"
          strokeWidth="3"
        />
        <circle
          cx="60"
          cy="50"
          r="6"
          fill="none"
          stroke="url(#grad4)"
          strokeWidth="3"
        />
        <circle
          cx="40"
          cy="65"
          r="6"
          fill="none"
          stroke="url(#grad4)"
          strokeWidth="3"
        />
        {/* Connections */}
        <path
          d="M35 32 L25 45 M45 32 L55 45 M40 33 L40 59 M26 52 L34 62 M54 52 L46 62"
          stroke="url(#grad4)"
          strokeWidth="3"
          fill="none"
        />
        {/* Center hub */}
        <circle cx="40" cy="25" r="4" fill="url(#grad4)" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "PREMIUM HARDWARE",
    subtitle: "ONLY",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* Router/Hardware */}
        <rect
          x="20"
          y="30"
          width="40"
          height="25"
          rx="3"
          fill="none"
          stroke="url(#grad5)"
          strokeWidth="3"
        />
        <rect
          x="25"
          y="60"
          width="30"
          height="8"
          rx="2"
          fill="none"
          stroke="url(#grad5)"
          strokeWidth="3"
        />
        {/* Antenna */}
        <rect x="35" y="20" width="2" height="10" fill="url(#grad5)" />
        <rect x="43" y="20" width="2" height="10" fill="url(#grad5)" />
        {/* Status lights */}
        <circle cx="30" cy="42" r="2" fill="url(#grad5)" />
        <circle cx="40" cy="42" r="2" fill="url(#grad5)" />
        <circle cx="50" cy="42" r="2" fill="url(#grad5)" />
        {/* Ports */}
        <rect x="25" y="48" width="4" height="2" fill="url(#grad5)" />
        <rect x="31" y="48" width="4" height="2" fill="url(#grad5)" />
        <rect x="37" y="48" width="4" height="2" fill="url(#grad5)" />
        <rect x="43" y="48" width="4" height="2" fill="url(#grad5)" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "OUTAGE",
    subtitle: "PROTECTION",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* Battery */}
        <rect
          x="25"
          y="35"
          width="30"
          height="18"
          rx="2"
          fill="none"
          stroke="url(#grad6)"
          strokeWidth="3"
        />
        <rect x="55" y="40" width="3" height="8" fill="url(#grad6)" />
        {/* Battery level */}
        <rect x="28" y="38" width="6" height="12" fill="url(#grad6)" />
        <rect x="36" y="38" width="6" height="12" fill="url(#grad6)" />
        <rect x="44" y="38" width="6" height="12" fill="url(#grad6)" />
        {/* Lightning bolt */}
        <path
          d="M40 15 L35 30 L42 30 L37 50 L45 35 L38 35 L43 20 Z"
          fill="url(#grad6)"
        />
      </svg>
    ),
  },
  {
    id: 7,
    title: "PROACTIVE",
    subtitle: "SUPPORT",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* Monitor/Screen */}
        <rect
          x="20"
          y="25"
          width="40"
          height="25"
          rx="2"
          fill="none"
          stroke="url(#grad7)"
          strokeWidth="3"
        />
        <rect
          x="35"
          y="50"
          width="10"
          height="5"
          fill="none"
          stroke="url(#grad7)"
          strokeWidth="2"
        />
        <rect x="30" y="55" width="20" height="3" fill="url(#grad7)" />
        {/* Graph/Chart */}
        <path
          d="M25 45 L30 35 L35 40 L40 30 L45 35 L50 25 L55 30"
          stroke="url(#grad7)"
          strokeWidth="2"
          fill="none"
        />
        {/* Data points */}
        <circle cx="30" cy="35" r="2" fill="url(#grad7)" />
        <circle cx="40" cy="30" r="2" fill="url(#grad7)" />
        <circle cx="50" cy="25" r="2" fill="url(#grad7)" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "SECURITY THAT",
    subtitle: "FITS YOU",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* Shield */}
        <path
          d="M40 15 L55 25 L55 45 Q55 60 40 65 Q25 60 25 45 L25 25 Z"
          fill="none"
          stroke="url(#grad8)"
          strokeWidth="3"
        />
        {/* Lock */}
        <circle
          cx="40"
          cy="40"
          r="6"
          fill="none"
          stroke="url(#grad8)"
          strokeWidth="2"
        />
        <rect x="37" y="45" width="6" height="8" fill="url(#grad8)" />
        {/* Keyhole */}
        <circle cx="40" cy="40" r="2" fill="#000" />
        <rect x="39" y="42" width="2" height="4" fill="#000" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "OUTDOOR &",
    subtitle: "INDOOR",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          <linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* House */}
        <path
          d="M25 50 L40 30 L55 50 L25 50"
          fill="none"
          stroke="url(#grad9)"
          strokeWidth="3"
        />
        <rect
          x="30"
          y="50"
          width="20"
          height="15"
          fill="none"
          stroke="url(#grad9)"
          strokeWidth="3"
        />
        {/* Door */}
        <rect
          x="37"
          y="57"
          width="6"
          height="8"
          fill="none"
          stroke="url(#grad9)"
          strokeWidth="2"
        />
        {/* Windows */}
        <rect
          x="32"
          y="53"
          width="4"
          height="4"
          fill="none"
          stroke="url(#grad9)"
          strokeWidth="1"
        />
        <rect
          x="44"
          y="53"
          width="4"
          height="4"
          fill="none"
          stroke="url(#grad9)"
          strokeWidth="1"
        />
        {/* WiFi signals around house */}
        <circle
          cx="20"
          cy="40"
          r="8"
          fill="none"
          stroke="url(#grad9)"
          strokeWidth="2"
          strokeDasharray="2,2"
        />
        <circle
          cx="60"
          cy="40"
          r="8"
          fill="none"
          stroke="url(#grad9)"
          strokeWidth="2"
          strokeDasharray="2,2"
        />
        <circle
          cx="40"
          cy="20"
          r="6"
          fill="none"
          stroke="url(#grad9)"
          strokeWidth="2"
          strokeDasharray="2,2"
        />
      </svg>
    ),
  },
];

export const workSteps = [
  {
    id: 1,
    number: "01.",
    title: "CONSULTATION",
    description:
      "Schedule your free consultation. We'll walk you through the process, answer your questions, and help you understand how Luxifi works.",
  },
  {
    id: 2,
    number: "02.",
    title: "ONSITE ASSESSMENT",
    description:
      "We visit your home to evaluate layout, materials, and signal challenges. Then, we create a detailed, tailored solution — no guesswork.",
  },
  {
    id: 3,
    number: "03.",
    title: "PROFESSIONAL INSTALLATION",
    description:
      "Our team handles everything: cabling, hardware, configuration, testing, and training. Most installs are done in 1-2 days.",
  },
];

export const testimonials = [
  {
    name: "Sarah W.",
    text: "After years of poor WiFi in our estate, Luxifi provided a flawless solution. Professional, discreet, and now we have perfect coverage throughout. Highly recommended!",
    rating: 5,
    title: "Estate Owner",
    avatar: "👩‍💼",
    location: "Beverly Hills, CA",
  },
  {
    name: "Kris Bender",
    text: "Adam (Luxifi) resolved all our network issues with professionalism and patience. Excellent service. Highly recommend it!",
    rating: 5,
    title: "Luxury Homeowner",
    avatar: "👨‍💻",
    location: "Manhattan, NY",
  },
  {
    name: "James Mackenzie",
    text: "Luxifi (Adam) transformed my home office with a flawless Ethernet installation. As a tech-savvy client, I'm impressed by his expertise. Absolutely recommended for networking needs!",
    rating: 5,
    title: "Tech Executive",
    avatar: "👨‍💼",
    location: "Silicon Valley, CA",
  },
  {
    name: "Sam Mishael",
    text: "Luxifi solved our weak WiFi problem with a wired access point. Timely, professional, and effective. Highly recommended!",
    rating: 5,
    title: "Property Owner",
    avatar: "🏡",
    location: "Miami, FL",
  },
  {
    name: "Shawn Conlin",
    text: "Exceptional service from a professional company. Adam was extremely helpful throughout the process!",
    rating: 5,
    title: "Residential Client",
    avatar: "👨‍🏫",
    location: "Austin, TX",
  },
  {
    name: "Melanie Gavrel",
    text: "Adam (Luxifi) brought my project to life quickly and with expertise. Clear communication and fast work. Would definitely hire him again!",
    rating: 5,
    title: "Project Manager",
    avatar: "👩‍🔧",
    location: "Seattle, WA",
  },
  {
    name: "Nigel Ramberansingh",
    text: "Adam is highly professional, honest, and organized. Provided clear estimates and outstanding service. Best company I’ve worked with in years!",
    rating: 5,
    title: "Satisfied Client",
    avatar: "👨‍💼",
    location: "Toronto, ON",
  },
];
