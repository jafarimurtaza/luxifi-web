import Link from "next/link";
import { Phone } from "lucide-react";
import { FooterCopyright } from "./FooterCopyright";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "tech", href: "/tech" },
  { name: "approach", href: "/approach" },
  { name: "maintenance", href: "/maintenance" },
  { name: "blog", href: "/blog" },
];

export function FooterMenu() {
  return (
    <footer className="bg-background text-foreground py-8 px-8 md:px-12 lg:px-16 xl:px-20 border-t border-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
        <Link
          href="mailto:hello@luxifi.us"
          className="text-gray-400 hover:underline"
        >
          hello@luxifi.us
        </Link>
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:underline uppercase"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link
          href="tel:+16282363433"
          className="flex items-center gap-2 text-gray-400 hover:underline"
        >
          <Phone className="h-4 w-4" />
          <span>Call us at 832 810 4045</span>
        </Link>
      </div>

      <div className="text-center text-xs text-gray-500 space-y-2 pt-6 border-t border-gray-800">
        <h3 className="font-semibold text-gray-400">Privacy Statement</h3>
        <p className="max-w-3xl mx-auto text">
          No mobile information will be shared with third parties or affiliates
          for marketing or promotional purposes. Additionally, all categories of
          data collection exclude text messaging originator opt-in data and
          consent; this specific information will not be shared with any third
          parties.
        </p>
        <FooterCopyright />
      </div>
    </footer>
  );
}
