"use client";

export default function ContactFooter() {
  const socialLinks = [
    {
      name: "Google",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.35 11.1h-9.4v2.9h5.4c-.25 1.4-1.6 4.1-5.4 4.1-3.25 0-5.9-2.7-5.9-6s2.65-6 5.9-6c1.85 0 3.1.8 3.8 1.5l2.6-2.5C16.6 3.6 14.2 2.5 11 2.5 5.9 2.5 1.9 6.5 1.9 11.5s4 9 9.1 9c5.25 0 8.7-3.7 8.7-8.9 0-.6-.1-1-.25-1.5z" />
        </svg>
      ),
      href: "https://g.page/r/CeTMjhiF6gwJEAE/review",
    },
    {
      name: "Yelp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.46 16.87c-.17-.58-.74-.91-1.3-.74l-3.77 1.1c-.55.16-.86.75-.7 1.31l1.1 3.78c.16.56.74.89 1.3.73l3.77-1.1c.55-.16.87-.75.7-1.31l-1.1-3.77zM15.74 12.36c.47-.38.47-1.1 0-1.49l-3.14-2.51c-.47-.38-1.18-.09-1.28.51l-.62 3.94c-.1.6.4 1.12 1 .98l3.94-.62c.26-.04.49-.18.65-.39zM12.07 2.54c-.6-.1-1.13.43-1 .98l.62 3.94c.1.6.81.89 1.28.51l3.14-2.51c.47-.38.47-1.1 0-1.49L12.07 2.54zM7.34 8.08c.26.21.6.29.91.22l3.94-.62c.6-.1.89-.81.51-1.28L10.19 2.9c-.38-.47-1.1-.47-1.49 0L6.19 6.05c-.38.47-.09 1.18.51 1.28l.64.1zM7.38 12.36l-3.94.62c-.6.1-.89.81-.51 1.28l2.51 3.14c.38.47 1.1.47 1.49 0l2.51-3.14c.38-.47.09-1.18-.51-1.28l-3.55-.62z" />
        </svg>
      ),
      href: "https://www.yelp.com/biz/luxifi-houston",
    },
    {
      name: "Pinterest",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.14 2.53 7.68 6.15 9.18-.09-.78-.17-1.98.04-2.84.19-.81 1.23-5.18 1.23-5.18s-.31-.62-.31-1.53c0-1.43.83-2.5 1.86-2.5.88 0 1.31.66 1.31 1.46 0 .89-.56 2.21-.85 3.44-.24 1.01.5 1.83 1.49 1.83 1.79 0 3.16-1.89 3.16-4.61 0-2.41-1.73-4.09-4.2-4.09-2.86 0-4.55 2.14-4.55 4.35 0 .87.34 1.81.77 2.32.08.1.09.19.07.29-.07.32-.23 1.01-.26 1.15-.04.19-.15.23-.35.14-1.31-.61-2.13-2.52-2.13-4.05 0-3.31 2.4-6.35 6.93-6.35 3.63 0 6.45 2.59 6.45 6.05 0 3.61-2.27 6.52-5.43 6.52-1.06 0-2.05-.55-2.39-1.2l-.65 2.48c-.23.87-.86 1.96-1.29 2.63.97.3 2 .47 3.08.47 5.5 0 9.96-4.46 9.96-9.96s-4.46-9.96-9.96-9.96z" />
        </svg>
      ),
      href: "https://pin.it/4bPdParIk",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      ),
      href: "https://www.linkedin.com/company/luxifi-tx/about/",
    },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">
              WiFi Solutions
            </span>
          </div>
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Empowering connectivity through innovative WiFi solutions.
            <span className="text-accent">
              {" "}
              Ready to transform your network?
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
