import CardTitle from "../../Layout/Titles/CardTitle";

export function ServiceCard({ service, index, isVisible }) {
  const isImageLeft = service.layout === "image-left";

  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 items-center ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Image Section */}
      <div className={`relative ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative w-full h-96 flex items-center justify-center">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-cyan-500/10 to-transparent rounded-full animate-pulse-glow" />

          {/* Secondary Glow Ring */}
          <div className="absolute inset-8 bg-gradient-radial from-emerald-400/15 via-blue-400/8 to-transparent rounded-full animate-pulse-glow-delayed" />

          {/* Service Image */}
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.imageAlt}
              className="w-80 h-80 object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`space-y-6 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
        <div className="space-y-2">
          <CardTitle title={service.title} />
          <p className="text-base-content leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
