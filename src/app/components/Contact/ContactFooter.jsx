import SocialLink from "./SociaLink";


export function ContactFooter({
  title = "Let's talk",
  socialLinks = [
    { name: "Facebook", href: "#", icon: "f" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "Instagram", href: "#", icon: "ig" },
    { name: "Twitter", href: "#", icon: "tw" },
  ],
  address = "Serving Houston and surrounding areas",
  email = "hello@luxifi.us",
  phone = "832-810-4045",

}) {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">{title}</h3>
            <div className="flex space-x-4 ">
              {socialLinks.map((link) => (
                <SocialLink key={link.name} {...link} />
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-0 text-center md:text-right">
            <p className="text-muted-foreground text-sm mb-2">{address}</p>
            <p className="text-muted-foreground text-sm mb-4">
              {email}
              <br />
              {phone}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
