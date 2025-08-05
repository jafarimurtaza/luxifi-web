export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-base-content rounded-full flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full" />
        </div>
      </div>
      <div className="text-white">
        <div className="text-lg font-bold tracking-wide">LUXIFI</div>
      </div>
    </div>
  );
}
