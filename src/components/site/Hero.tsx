import { MonitorSmartphone, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const trust = [
  { icon: CheckCircle2, label: "100+ Sessions Completed" },
  { icon: Clock, label: "Same-Day Availability" },
  { icon: ShieldCheck, label: "Remote & Secure" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-glow">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <MonitorSmartphone className="size-4 text-primary" aria-hidden="true" />
            Remote support available today
          </p>
          <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Fast, Reliable Phone &amp; PC Support — <span className="text-gradient">Anywhere, Online</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I diagnose and fix software problems remotely through secure screen sharing, guided
            troubleshooting and virtual consultations — no shipping, no waiting rooms, no jargon.
            In-person hardware repair is launching soon.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="shadow-glow">
              <a href="#booking">Book a Session</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#portfolio">View My Work</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <ul className="mt-14 grid gap-3 sm:grid-cols-3">
            {trust.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 shadow-soft"
              >
                <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0 text-sm font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
