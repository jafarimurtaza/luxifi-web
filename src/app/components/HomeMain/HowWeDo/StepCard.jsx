export const StepCard = ({ step }) => {
  return (
    <div className="relative group">
      {/* Animated Border Container */}
      <div className="absolute -inset-[1px] rounded-2xl overflow-hidden z-0">
        <div className="absolute w-[200%] h-[200%] bg-[conic-gradient(transparent,transparent,transparent,#dca54d,transparent,transparent,transparent)] animate-spin-slow" />
      </div>

      {/* Main Card */}
      <div className="bg-black relative rounded-2xl p-8 h-full z-10 border border-white/10 transition-all duration-300 group-hover:border-white/30">
        {/* Step Number Badge */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#dca54d]/100 to-[#dca54d]-500 text-primary rounded-lg font-bold text-lg shadow-lg">
            {step.number}
          </div>
        </div>

        {/* Step Title */}
        <h3 className="text-2xl font-bold  bg-clip-text bg-gradient-to-r text-primary mb-6 tracking-wide">
          {step.title}
        </h3>

        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#dca54d]/40 to-transparent mb-6" />

        {/* Step Description */}
        <p className="text-base-content leading-relaxed text-base">
          {step.description}
        </p>
      </div>
    </div>
  );
};
