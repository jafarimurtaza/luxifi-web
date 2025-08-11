'use client'

export default function PromiseIcon({ iconType, className = '' }) {
  const getIconContent = (type) => {
    switch (type) {
      case "network":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-8 border-2 border-current rounded-full"></div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-current rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-current rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-current rounded-full"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-current rounded-full"></div>
            </div>
          </div>
        );
      case "results":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-current rounded-full relative">
              <div className="absolute top-2 left-4 w-3 h-1 bg-current rounded"></div>
            </div>
          </div>
        );
      case "delivery":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-6 border-2 border-current rounded"></div>
              <div className="absolute top-1 left-1 right-1 h-1 bg-current rounded"></div>
              <div className="absolute bottom-1 left-1 right-1 h-1 bg-current rounded"></div>
              <div className="absolute -right-2 top-1 w-3 h-4 bg-current rounded-r"></div>
            </div>
          </div>
        );
      case "turnkey":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-6 border-2 border-current rounded-t-lg"></div>
              <div className="w-10 h-2 bg-current rounded-b-lg -mt-1"></div>
            </div>
          </div>
        );
      case "hardware":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-10 h-6 border-2 border-current rounded relative">
              <div className="absolute inset-1 grid grid-cols-3 gap-0.5">
                <div className="w-1 h-1 bg-current rounded-full"></div>
                <div className="w-1 h-1 bg-current rounded-full"></div>
                <div className="w-1 h-1 bg-current rounded-full"></div>
              </div>
            </div>
          </div>
        );
      case "battery":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-6 h-10 border-2 border-current rounded"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-1 bg-current rounded-t"></div>
              <div className="absolute bottom-2 left-1 right-1 h-1 bg-current rounded"></div>
            </div>
          </div>
        );
      case "cloud":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-5 bg-current rounded-full"></div>
              <div className="absolute top-2 left-1 w-6 h-4 bg-current rounded-full"></div>
              <div className="absolute top-1 right-0 w-4 h-3 bg-current rounded-full"></div>
            </div>
          </div>
        );
      case "security":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-8 h-10 border-2 border-current rounded-t-full"></div>
              <div className="absolute bottom-0 left-1 w-6 h-6 border-2 border-current rounded"></div>
              <div className="absolute bottom-2 left-3 w-2 h-2 bg-current rounded-full"></div>
            </div>
          </div>
        );
      case "outdoor":
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="relative">
              <div className="w-10 h-6 border-2 border-current rounded-lg"></div>
              <div className="absolute top-1 left-1 right-1 h-1 bg-current rounded"></div>
              <div className="absolute bottom-1 left-2 right-2 h-1 bg-current rounded"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-current rounded-full"></div>
          </div>
        );
    }
  };

  return (
    <div
      className={`w-24 h-24 rounded-full bg-transparent border-2 border-primary flex items-center justify-center text-primary ${className}`}
    >
      {getIconContent(iconType)}
    </div>
  );
}
