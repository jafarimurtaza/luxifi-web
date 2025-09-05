export function LogoCard({ brand }) {
  return (
    <div className="group relative flex-shrink-0 w-full flex flex-col items-center justify-center">
      {/* Inner glow effect */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full p-3 sm:p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-amber-500/20 flex items-center justify-center mx-auto">
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

        <div className="relative z-10 flex items-center justify-center h-full">
          {brand.image ? (
            <img
              src={brand.image || "/placeholder.svg"}
              alt={`${brand.name} logo`}
              className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 object-contain group-hover:brightness-100 transition-all duration-300 mx-auto"
            />
          ) : (
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm sm:text-lg">
                {brand.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-2 sm:mt-3 text-center w-full max-w-[160px] mx-auto">
        <span className="text-base-content text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase text-shadow-sm block">
          {brand.name}
        </span>
      </div>
    </div>
  );
}
