

export function ContactHero({
  backgroundImage,
  title = "Let's Get You Connected",
  subtitle = "Fast. Reliable. Done Right.",
  description = "Serving Houston and surrounding areas.",
  callToAction = "Fill out the form — we'll handle the rest.",
}) {
  return (
    <section className="relative pt-32 pb-16 text-center overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-heading)] mb-6 tracking-tight bg-gradient-to-r from-golden via-white to-golden bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="text-2xl md:text-3xl font-bold mb-4 text-golden">{subtitle}</div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">{description}</p>
        <p className="text-xl font-medium text-white/90">{callToAction}</p>
      </div>
    </section>
  )
}
