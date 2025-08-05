import Link from "next/link"

export function Navigation() {

  const navigationItems= [
  { label: "HOME", href: "/" },
  { label: "TECH", href: "Tech" },
  { label: "APPROACH", href: "approach" },
  { label: "MAINTENANCE", href: "#" },
  { label: "TEAM", href: "#" },
  { label: "BLOG", href: "#" },
]

  return (
    <nav className={`hidden lg:flex items-center gap-8 `}>
      {navigationItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-primary hover:text-base-content transition-colors font-medium"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
