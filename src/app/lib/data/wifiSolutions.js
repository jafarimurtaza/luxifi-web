export const wifiSolutions = {
  router: {
    title: "ROUTER ONLY",
    description:
      "Limited in both range and functionality, a router alone is insufficient for today's connected home. Dead zones and weak signals plague most areas of your home.",
    signals: [
      {
        name: "router",
        id: 1,
        x: "77%",
        y: "42%",
      },
    ],
    problems: ["Limited Range", "Dead Zones", "Weak Signal", "Frequent Drops"],
  },
  extender: {
    title: "ROUTER + EXTENDER",
    description:
      "Wi-Fi extenders offer a small boost to the router's range, however there is a significant trade-off in performance and user experience. Signal quality degrades significantly.",
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
      "Reduced Speed",
      "Signal Degradation",
      "Network Switching",
      "Still Patchy",
    ],
  },
  mesh: {
    title: "Wi-Fi MESH",
    description:
      "Wi-Fi mesh products solve some key issues found in other systems, but are still challenged by factors such as wall density and consumer-grade software constraints.",
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
      "Wall Interference",
      "Weather Sensitive",
      "Inconsistent Performance",
      "Software Limits",
    ],
  },
};
