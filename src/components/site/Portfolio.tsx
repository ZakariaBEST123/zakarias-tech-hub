import { useState } from "react";
import { Laptop, Smartphone, Monitor, Tablet, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

type Category = "Software" | "Data Recovery" | "Setup & Optimization";

const filters = ["All", "Software", "Data Recovery", "Setup & Optimization"] as const;

const deviceIcons = {
  Laptop,
  Smartphone,
  "Desktop PC": Monitor,
  Tablet,
} as const;

const cases: {
  title: string;
  category: Category;
  device: keyof typeof deviceIcons;
  before: string;
  after: string;
  turnaround: string;
}[] = [
  {
    title: "Adware-riddled browser cleaned up",
    category: "Software",
    device: "Laptop",
    before: "Pop-ups on every click, search engine hijacked, three unknown extensions installed.",
    after: "Malware removed, browser reset, real-time protection configured and verified clean.",
    turnaround: "55 min",
  },
  {
    title: "Windows stuck in a boot loop",
    category: "Software",
    device: "Desktop PC",
    before: "Repeated crash on startup after a driver update, no access to the desktop.",
    after: "Safe-mode rollback over screen share, driver replaced, stable boot for weeks since.",
    turnaround: "1h 20m",
  },
  {
    title: "Photos rescued from a failing drive",
    category: "Data Recovery",
    device: "Laptop",
    before: "Clicking external drive, 12 years of family photos unreadable in Explorer.",
    after: "Guided imaging and recovery pulled back 94% of files, then set up cloud backup.",
    turnaround: "2 days",
  },
  {
    title: "Accidentally deleted work folder",
    category: "Data Recovery",
    device: "Desktop PC",
    before: "Emptied recycle bin, project files gone the night before a deadline.",
    after: "Recovery tool run under supervision, all documents restored the same evening.",
    turnaround: "40 min",
  },
  {
    title: "Five-year-old laptop made usable again",
    category: "Setup & Optimization",
    device: "Laptop",
    before: "Four-minute boot, 100% disk usage, 40 startup apps fighting for resources.",
    after: "Startup trimmed, storage reclaimed, thermal check — boot down to 22 seconds.",
    turnaround: "1h",
  },
  {
    title: "New phone migration and account setup",
    category: "Setup & Optimization",
    device: "Smartphone",
    before: "New device, no access to old email, two-factor codes locked on the old phone.",
    after: "Accounts recovered, data transferred, password manager and 2FA properly configured.",
    turnaround: "45 min",
  },
];

export function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? cases : cases.filter((c) => c.category === active);

  return (
    <section id="portfolio" className="scroll-mt-24 bg-surface/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Recent <span className="text-gradient">Fixes</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real remote sessions, written up as short before/after case studies.
          </p>
        </Reveal>

        <div
          role="group"
          aria-label="Filter case studies by category"
          className="mt-8 flex flex-wrap gap-2"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={active === filter ? "default" : "outline"}
              size="sm"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => {
            const DeviceIcon = deviceIcons[item.device];
            return (
              <Reveal as="li" key={item.title} delay={i * 60}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
                      <DeviceIcon className="size-4" aria-hidden="true" />
                      {item.device}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-medium text-destructive">Before</dt>
                      <dd className="mt-1 text-muted-foreground">{item.before}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-primary">After</dt>
                      <dd className="mt-1 text-muted-foreground">{item.after}</dd>
                    </div>
                  </dl>
                  <p className="mt-auto flex items-center gap-2 pt-5 text-xs text-muted-foreground">
                    <Timer className="size-4" aria-hidden="true" />
                    Turnaround: {item.turnaround}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
