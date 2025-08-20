export const wifiSolutions = {
  router: {
    title: "ROUTER ONLY",
    description:
      "Your home deserves seamless connection, but a single router simply can't keep up. The result is dead zones, weak signals, and constant interruptions that disrupt daily life.",
    signals: [
      {
        name: "router",
        id: 1,
        x: "77%",
        y: "42%",
      },
    ],
    problems: [
      {
        title: "Limited range",
        quote: "My WiFi barely reaches half the house.",
      },
      {
        title: "Dead zones",
        quote:
          "Every time I step into the guest suite or patio, the connection disappears.",
      },
      {
        title: "Weak signal",
        quote: "Streaming upstairs is impossible without constant buffering.",
      },
      {
        title: "Frequent drops",
        quote: "Important calls cut out as I move from room to room.",
      },
    ],
    conclusion:
      "In a home designed for comfort, WiFi shouldn't be the source of constant frustration.",
  },
  extender: {
    title: "ROUTER + EXTENDER",
    description:
      "Extenders seem like a quick fix, but they sacrifice performance for coverage. Instead of reliable WiFi, you end up with slower speeds, awkward network names, and an inconsistent experience.",
    signals: [
      {
        name: "extender",
        id: 1,
        x: "50%",
        y: "45%",
      },
      {
        name: "routerAndExtender",
        id: 2,
        x: "76%",
        y: "46%",
      },
    ],
    problems: [
      {
        title: "Slower speeds",
        quote: "The extender works, but everything feels twice as slow.",
      },
      {
        title: "Multiple networks",
        quote: "Why do I have to keep switching WiFi names in my own house?",
      },
      {
        title: "Lag & delay",
        quote: "Zoom freezes mid-meeting — it's embarrassing.",
      },
      {
        title: "Gaps remain",
        quote: "Even with extenders, certain rooms are still offline.",
      },
    ],
    conclusion:
      "Instead of peace of mind, extenders create more hassle — leaving you managing WiFi instead of enjoying your home.",
  },
  mesh: {
    title: "Wi-Fi MESH",
    description:
      "Mesh Wi-Fi feels modern, but in larger homes with multiple floors, thick walls, and dozens of devices, it simply can't deliver consistent, high-performance coverage.",
    signals: [
      {
        name: "mesh",
        id: 1,
        x: "49%",
        y: "38%",
      },
      {
        name: "meshSystem",
        id: 2,
        x: "75%",
        y: "40%",
      },
    ],
    problems: [
      {
        title: "Bandwidth loss",
        quote:
          "The farther I go from the main hub, the slower everything gets.",
      },
      {
        title: "Weak through walls/floors",
        quote: "Rooms with thicker walls feel cut off from the internet.",
      },
      {
        title: "Poor roaming",
        quote: "My phone clings to weak WiFi until I manually reset it.",
      },
      {
        title: "Device overload",
        quote: "With all our smart devices, the network keeps crashing.",
      },
    ],
    conclusion:
      "For homes filled with technology and activity, mesh still feels like a compromise.",
  },
};
