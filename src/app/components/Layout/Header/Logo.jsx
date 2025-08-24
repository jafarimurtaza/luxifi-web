import Link from "next/link";

export function Logo() {
  return (
    <div className="flex">
      <Link href="/">
        <img
          src="/images/home/logo.png"
          alt="Luxifi Logo"
          className="w-48 h-48 "
        />
      </Link>
    </div>
  );
}
