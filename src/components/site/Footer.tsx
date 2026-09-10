import { Wrench, Mail, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Booking", href: "#booking" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground"
              >
                <Wrench className="size-4.5" />
              </span>
              <span className="font-semibold">Zakaria — Tech Support</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Independent phone &amp; PC technician. Remote support today, in-person hardware repair
              coming soon.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold">Quick links</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a className="text-muted-foreground hover:text-primary" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                <a className="hover:text-primary" href="tel:+212600000000">
                  +212 600 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <a className="break-all hover:text-primary" href="mailto:hello@zakaria-tech.com">
                  hello@zakaria-tech.com
                </a>
              </li>
            </ul>
            <ul className="mt-4 flex gap-2">
              {[
                { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/212600000000" },
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="size-4.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Working hours</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Mon – Fri: 09:00 – 21:00</li>
              <li>Saturday: 10:00 – 18:00</li>
              <li>Sunday: Emergencies only</li>
              <li>Timezone: GMT+1</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zakaria — Tech Support. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
