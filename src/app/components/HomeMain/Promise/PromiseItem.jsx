export default function PromiseItem({ item, isCenter }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mb-6">
        {isCenter && (
          <div className="absolute inset-0 w-28 h-28 rounded-full bg-gradient-radial from-yellow-400/30 via-yellow-400/10 to-transparent animate-pulse -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
        )}
        <div
          className={`relative rounded-full border-2 flex items-center justify-center transition-all duration-700 ${
            isCenter
              ? "w-28 h-28 border-base-content bg-yellow-400/10 shadow-2xl shadow-yellow-400/30 scale-110"
              : "w-20 h-20 border-yellow-400/40 bg-transparent"
          }`}
        >
          <div
            className={`transition-all duration-700 ${
              isCenter
                ? "w-14 h-14 text-base-content/35 scale-110"
                : "w-10 h-10 text-yellow-400/60"
            }`}
          >
            {item.icon}
          </div>
          {isCenter && (
            <div className="absolute inset-0 border border-yellow-400/30 rounded-full animate-spin" />
          )}
        </div>
      </div>

      <div className={`font-bold text-center ${isCenter ? "text-yellow-400" : "text-gray-400"} text-sm`}>
        <div>{item.title}</div>
        <div>{item.subtitle}</div>
      </div>
    </div>
  );
}
