const signalConfigs = (isMobile) => {
  return {
    router: {
      color: "#FF6B6B",
      gradientColor: "rgb(255 107 107 / 61%)",
      maxRadius: isMobile ? 40 : 60,
      coverage: "limited",
      rings: 2,
    },
    extender: {
      color: "#4ECDC4",
      gradientColor: "rgb(0 99 183 / 87%)",
      maxRadius: isMobile ? 35 : 45,
      coverage: "fragmented",
      rings: 1,
    },
    routerAndExtender: {
      color: "#FFA726",
      gradientColor: "rgba(255, 167, 38, 0.3)",
      maxRadius: isMobile ? 50 : 70,
      coverage: "patchy",
      rings: 3,
    },
    mesh: {
      color: "#45B7D1",
      gradientColor: "rgba(69, 183, 209, 0.3)",
      maxRadius: isMobile ? 45 : 60,
      coverage: "good",
      rings: 3,
    },
    meshSystem: {
      color: "#66BB6A",
      gradientColor: "rgb(50 152 40)",
      maxRadius: isMobile ? 50 : 65,
      coverage: "excellent",
      rings: 4,
    },
    luxifi: {
      color: "#DCA54D",
      gradientColor: "rgba(220, 165, 77, 0.4)",
      maxRadius: isMobile ? 40 : 50,
      coverage: "perfect",
      rings: 5,
    },
  };
};

export default signalConfigs;
