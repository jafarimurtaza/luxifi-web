export function LogoCard({ brand }) {
  return (
    <div className="group relative flex-shrink-0 w-full flex flex-col items-center">
      {/* Inner glow effect */}
      <div className="relative w-36 h-36 rounded-full sm:w-40 sm:h-40 p-4 sm:p-6  bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-amber-500/20">
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

        <div className="relative z-10 flex items-center justify-center h-full">
          {brand.image ? (
            <img
              src={brand.image || "/placeholder.svg"}
              alt={brand.name}
              className="w-20 h-20  md:w-32 md:h-32 object-contain group-hover:brightness-100  transition-all duration-300"
            />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br  rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg sm:text-xl">{brand.name.charAt(0)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 sm:mt-4 text-center w-full max-w-[200px]">
        <span className="text-base-content text-sm sm:text-base font-semibold tracking-wide uppercase text-shadow-sm block">
          {brand.name}
        </span>
      </div>
    </div>
  )
}
