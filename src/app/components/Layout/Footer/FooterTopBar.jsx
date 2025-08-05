
import { Instagram } from "lucide-react"
import Link from "next/link"



export function FooterTopBar() {

 const navItems = [
  { name: "HOME", href: "/" },
  { name: "TECH", href: "/tech" },
  { name: "APPROACH", href: "/approach" },
  { name: "MAINTENANCE", href: "/maintenance" },
  { name: "TEAM", href: "/team" },
];
  return (
    <div className="border-b border-slate-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0">
          {/* Email */}
          <Link href={`mailto:${email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
            {email}
          </Link>

          {/* Navigation Menu */}
          <nav className="flex flex-col items-center space-y-2 md:flex-row md:space-x-8 md:space-y-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <Link
              href={instagramLink}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Call us at {phoneNumber}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
