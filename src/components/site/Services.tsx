import {
  ShieldAlert,
  Bug,
  Disc3,
  DatabaseBackup,
  Gauge,
  Stethoscope,
  UserCog,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: ShieldAlert,
    name: "Virus & Malware Removal",
    description:
      "Deep scan, removal of adware, browser hijackers and malware, plus hardening so it doesn't come back.",
    price: "From $35",
  },
  {
    icon: Bug,
    name: "Software Troubleshooting",
    description:
      "Crashes, error codes, drivers, printers, Wi-Fi and apps that refuse to cooperate — diagnosed live.",
    price: "From $25",
  },
  {
    icon: Disc3,
    name: "OS Installation & Setup Guidance",
    description:
      "Guided Windows, macOS, Linux or mobile OS installs, upgrades, partitions and post-install setup.",
    price: "From $40",
  },
  {
    icon: DatabaseBackup,
    name: "Data Backup & Recovery Guidance",
    description:
      "Rescue files from failing drives where possible and set up reliable cloud or local backups.",
    price: "From $45",
  },
  {
    icon: Gauge,
    name: "System Performance Tuning",
    description:
      "Startup cleanup, storage reclaim, thermal and background-process checks for a faster machine.",
    price: "From $30",
  },
  {
    icon: Stethoscope,
    name: "Remote Diagnostics & Consultation",
    description:
      "Not sure what's wrong or what to buy? A clear, honest assessment before you spend anything.",
    price: "From $20",
  },
  {
    icon: UserCog,
    name: "App & Account Setup Help",
    description:
      "Email, cloud storage, password managers, two-factor authentication and device migration.",
    price: "From $20",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What I Fix — <span className="text-gradient">Online</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every service below is delivered remotely over a secure session. You stay in control of
            your device the whole time.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.name} delay={i * 60}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
                <span
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <service.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">{service.price}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
