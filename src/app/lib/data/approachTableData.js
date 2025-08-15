import { FiCheckCircle, FiXCircle } from "react-icons/fi";

export const approachTableData = {
  plans: ["Luxifi", "Other Providers"],
  features: [
    "designed exclusively for homes",
    "expert Wi-Fi engineering",
    "seamless indoor/outdoor coverage",
    "structured cabling in-house",
    "ubiquiti product specialization",
    "remote monitoring & support",
    "personalized security features",
    "design-minded execution",
  ],
  matrix: [
    // Luxifi column
    [
      { icon: <FiCheckCircle className="text-green-500" />, text: "Yes" },
      {
        icon: <FiCheckCircle className="text-green-500" />,
        text: "Core Focus",
      },
      { icon: <FiCheckCircle className="text-green-500" />, text: "Included" },
      {
        icon: <FiCheckCircle className="text-green-500" />,
        text: "Clean Installations",
      },
      {
        icon: <FiCheckCircle className="text-green-500" />,
        text: "Deep Expertise",
      },
      { icon: <FiCheckCircle className="text-green-500" />, text: "Included" },
      {
        icon: <FiCheckCircle className="text-green-500" />,
        text: "Fully Customizable",
      },
      {
        icon: <FiCheckCircle className="text-green-500" />,
        text: "Home Aesthetic First",
      },
    ],
    // Other Providers column
    [
      {
        icon: <FiXCircle className="text-red-500" />,
        text: "Often Commercial",
      },
      { icon: <FiXCircle className="text-red-500" />, text: "Secondary Skill" },
      { icon: <FiXCircle className="text-red-500" />, text: "Rarely Offered" },
      { icon: <FiXCircle className="text-red-500" />, text: "Subcontracted" },
      {
        icon: <FiXCircle className="text-red-500" />,
        text: "Basic Familiarity",
      },
      {
        icon: <FiXCircle className="text-red-500" />,
        text: "Additional Charge",
      },
      {
        icon: <FiXCircle className="text-red-500" />,
        text: "Generic Settings",
      },
      { icon: <FiXCircle className="text-red-500" />, text: "Tech-Led Only" },
    ],
  ],
};
