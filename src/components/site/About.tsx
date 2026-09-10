import { ShieldCheck, MonitorUp, HeartHandshake } from "lucide-react";
import aboutImage from "@/assets/about-zakaria.jpg";
import { Reveal } from "./Reveal";

const stats = [
  { value: "100+", label: "Sessions completed" },
  { value: "4.9/5", label: "Average rating" },
  { value: "< 2h", label: "Average response time" },
];

const points = [
  {
    icon: MonitorUp,
    title: "Tools I work with",
    text: "AnyDesk, TeamViewer, Google Meet and Zoom screen share, plus vendor diagnostic utilities.",
  },
  {
    icon: ShieldCheck,
    title: "You stay in control",
    text: "Access is session-based and permission-only. You watch everything and can end it instantly.",
  },
  {
    icon: HeartHandshake,
    title: "Honest by default",
    text: "If a problem can't be fixed remotely, I say so up front — and you don't pay for the attempt.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-surface/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <img
                src={aboutImage}
                alt="Zakaria working at a desk with two monitors showing diagnostic software during a remote support session"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              About <span className="text-gradient">Zakaria</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I'm an independent phone and PC technician with several years of hands-on experience
              troubleshooting Windows, macOS, Linux, Android and iOS. Today I work entirely
              remotely, which means most software problems get solved the same day, without you
              leaving home or handing over your device.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sessions run over secure screen sharing or remote access software you approve. I talk
              you through what I'm doing in plain language, and you keep a record of every change.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary"
                  >
                    <Icon className="size-4.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">{title}</span>
                    <span className="block text-sm text-muted-foreground">{text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <dl className="mt-10 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-xl font-semibold text-primary sm:text-2xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
