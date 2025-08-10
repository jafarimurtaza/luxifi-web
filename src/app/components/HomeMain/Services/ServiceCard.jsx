

export function ServiceCard({ service, index, isVisible }) {
  const isImageLeft = service.layout === "image-left"

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
          <h3 className="text-3xl md:text-4xl font-bold text-primary leading-tight">{service.title}</h3>
          <p className="text-base-content leading-relaxed">{service.description}</p>
        </div>
        <button className="group px-6 cursor-pointer py-3 border-2 border-white/30 text-primary font-semibold rounded-lg transition-all duration-300 hover:border-base-200  hover:shadow-lg  hover:scale-105">
          <span className="flex items-center gap-3">
            LEARN MORE
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}
