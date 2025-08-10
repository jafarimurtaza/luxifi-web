export function StepCard({ step }) {
  return (
    <div className="relative group">
   
      <div
        className="bg-black border border-white/20 rounded-2xl p-8 h-full transition-all duration-300 hover:border-white/40 hover:shadow-2xl"
        style={{
          boxShadow: `
            9px 0px 12px rgba(255, 255, 255, 0.568), /* subtle left shadow */
            0px 0px 20px rgba(255, 255, 255, 0.349)    /* bottom white glow */
          `,
        }}
      >
        {/* Step Number Badge */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white text-black rounded-lg font-bold text-lg shadow-lg">
            {step.number}
          </div>
        </div>

        {/* Step Title */}
        <h3 className="text-2xl font-bold text-primary mb-6 tracking-wide">{step.title}</h3>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/20 mb-6" />

        {/* Step Description */}
        <p className="text-base-content leading-relaxed text-base">{step.description}</p>
      </div>

    
    </div>
  );
}
