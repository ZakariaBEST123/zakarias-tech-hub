import { useState, type FormEvent } from "react";
import { BatteryCharging, Smartphone, Plug, Droplets } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "./Reveal";

const teasers = [
  { icon: Smartphone, label: "Screen replacement" },
  { icon: BatteryCharging, label: "Battery replacement" },
  { icon: Plug, label: "Charging port repair" },
  { icon: Droplets, label: "Water damage rescue" },
];

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setDone(true);
  };

  return (
    <section className="py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl border border-primary/25 bg-surface bg-hero-glow p-6 shadow-soft sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <Badge className="bg-[image:var(--gradient-accent)] text-primary-foreground">
                  Coming Soon
                </Badge>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  In-person hardware repair
                </h2>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                  Hands-on repairs are launching soon in the Greater Casablanca area. Join the list
                  and you'll be first to know.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {teasers.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium"
                    >
                      <Icon className="size-4 text-primary" aria-hidden="true" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={onSubmit} noValidate className="lg:justify-self-end lg:w-full lg:max-w-md">
                <Label htmlFor="notify-email" className="text-sm">
                  Notify me at launch
                </Label>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  <Input
                    id="notify-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "notify-email-error" : undefined}
                    className="h-11"
                  />
                  <Button type="submit" className="h-11 shrink-0">
                    Notify Me
                  </Button>
                </div>
                {error && (
                  <p id="notify-email-error" role="alert" className="mt-2 text-sm text-destructive">
                    {error}
                  </p>
                )}
                {done && (
                  <p role="status" className="mt-2 text-sm text-primary">
                    You're on the list — thanks! I'll email you as soon as repairs open up.
                  </p>
                )}
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
