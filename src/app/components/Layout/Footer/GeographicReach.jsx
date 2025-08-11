import Image from "next/image";

export function GeographicReach() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/map/luxifi-houston.jpg"
        width={600}
        height={600}
        alt="Map of San Francisco Bay Area"
        className="w-full h-auto max-w-[900px]  object-cover"
      />
    </div>
  );
}
