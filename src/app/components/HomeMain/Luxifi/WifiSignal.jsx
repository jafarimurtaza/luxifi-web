export function WifiSignal({ signal, index, animationKey }) {
  return (
    <div key={`${signal.id}-${animationKey}`} className="absolute inset-0">
    
      <div
        className="absolute rounded-full transition-all duration-2000 ease-out"
        style={{
          left: signal.x,
          top: signal.y,
          width: signal.size,
          height: signal.size,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${signal.color}40 0%, ${signal.color}20 50%, transparent 80%)`,
          filter: "blur(20px)",
          opacity: 0.4,
          animation: `gentle-pulse 4s ease-in-out infinite ${index * 0.6}s`,
        }}
      />

     
      <div
        className="absolute rounded-full transition-all duration-2000 ease-out"
        style={{
          left: signal.x,
          top: signal.y,
          width: signal.innerSize,
          height: signal.innerSize,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${signal.color}50 0%, ${signal.color}25 60%, transparent 80%)`,
          filter: "blur(12px)",
          opacity: 0.5,
          animation: `gentle-pulse 3.5s ease-in-out infinite ${index * 0.4}s`,
        }}
      />

  
      {[1, 2, 3].map((wave) => (
        <div
          key={`wave-${signal.id}-${wave}`}
          className="absolute border rounded-full"
          style={{
            left: signal.x,
            top: signal.y,
            width: `${60 + wave * 30}px`,
            height: `${60 + wave * 30}px`,
            transform: "translate(-50%, -50%)",
            borderColor: signal.ringColor,
            borderWidth: "1px",
            opacity: 0.3 - wave * 0.08,
            animation: `gentle-expand 4s ease-out infinite ${index * 0.5 + wave * 0.5}s`,
          }}
        />
      ))}

     
      <div
        className="absolute rounded-full border-2 border-white"
        style={{
          left: signal.x,
          top: signal.y,
          width: "12px",
          height: "12px",
          transform: "translate(-50%, -50%)",
          backgroundColor: signal.ringColor,
          animation: `signal-point-glow 2s ease-in-out infinite ${index * 0.3}s`,
          boxShadow: `0 0 15px ${signal.ringColor}, 0 0 25px ${signal.ringColor}80, inset 0 0 8px rgba(255,255,255,0.3)`,
        }}
      />

      {/* Signal Point Inner Glow */}
      <div
        className="absolute rounded-full"
        style={{
          left: signal.x,
          top: signal.y,
          width: "6px",
          height: "6px",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255,255,255,0.9)",
          animation: `signal-inner-glow 2s ease-in-out infinite ${index * 0.3}s`,
          boxShadow: `0 0 8px rgba(255,255,255,0.8)`,
        }}
      />
    </div>
  )
}
