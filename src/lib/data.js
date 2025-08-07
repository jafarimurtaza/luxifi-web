// Predefined WiFi coverage configurations
export const wifiConfigurations = {
  mesh: {
    zones: [
      { id: "router", top: "45%", left: "35%", size: "28%", delay: 0, duration: 1.5, intensity: "strong" },
      { id: "living", top: "35%", left: "55%", size: "32%", delay: 0.8, duration: 2, intensity: "strong" },
      { id: "kitchen", top: "55%", left: "55%", size: "30%", delay: 1.2, duration: 2, intensity: "strong" },
      { id: "bedroom1", top: "25%", left: "75%", size: "28%", delay: 2, duration: 2.5, intensity: "strong" },
      { id: "bedroom2", top: "65%", left: "75%", size: "26%", delay: 2.4, duration: 2.5, intensity: "strong" },
      { id: "bathroom", top: "45%", left: "85%", size: "22%", delay: 3.2, duration: 2, intensity: "medium" },
      { id: "garage", top: "45%", left: "15%", size: "24%", delay: 3.8, duration: 2, intensity: "medium" },
      { id: "outdoor", top: "80%", left: "45%", size: "38%", delay: 4.5, duration: 3, intensity: "medium" },
    ],
    color: "#FCD34D"
  },
  
  standard: {
    zones: [
      { id: "router", top: "45%", left: "35%", size: "32%", delay: 0, duration: 2, intensity: "strong" },
      { id: "nearby", top: "40%", left: "55%", size: "28%", delay: 1, duration: 2, intensity: "medium" },
      { id: "weak", top: "55%", left: "65%", size: "20%", delay: 2.5, duration: 1.5, intensity: "weak" },
    ],
    color: "#F59E0B"
  },
  
  enterprise: {
    zones: [
      { id: "ap1", top: "30%", left: "25%", size: "38%", delay: 0, duration: 1.5, intensity: "strong" },
      { id: "ap2", top: "30%", left: "70%", size: "38%", delay: 0.3, duration: 1.5, intensity: "strong" },
      { id: "ap3", top: "70%", left: "50%", size: "42%", delay: 0.6, duration: 1.5, intensity: "strong" },
      { id: "overlap1", top: "45%", left: "47%", size: "35%", delay: 1, duration: 2, intensity: "strong" },
      { id: "outdoor", top: "85%", left: "45%", size: "48%", delay: 1.5, duration: 2, intensity: "strong" },
    ],
    color: "#3B82F6"
  }
}

export const wifiTabs = [
  {
    id: "mesh",
    label: "Mesh Network",
    description: "Experience seamless connectivity throughout your entire home with our advanced mesh network technology. Multiple nodes work together to eliminate dead zones and provide consistent high-speed internet in every corner of your property.",
    stats: {
      speed: "1 Gbps",
      coverage: "5000 sq ft",
      reliability: "99.9%",
      overallExperience: "Excellent"
    }
  },
  {
    id: "standard",
    label: "Standard Router",
    description: "Traditional single-point router solution that provides reliable internet connectivity for smaller homes. Limited range may result in weaker signals in distant rooms and outdoor areas.",
    stats: {
      speed: "300 Mbps",
      coverage: "1500 sq ft",
      reliability: "85%",
      overallExperience: "Fair"
    }
  },
  {
    id: "enterprise",
    label: "Enterprise Pro",
    description: "Professional-grade networking solution with multiple strategically placed access points. Designed for large properties requiring maximum coverage, speed, and reliability with seamless roaming capabilities.",
    stats: {
      speed: "10 Gbps",
      coverage: "10000 sq ft",
      reliability: "99.99%",
      overallExperience: "Outstanding"
    }
  }
]
