import { useState, type FormEvent } from "react";
import { Phone, Mail, Globe2, MessageCircle, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./Reveal";

type Values = { name: string; email: string; subject: string; message: string };
const empty: Values = { name: "", email: "", subject: "", message: "" };

const hours = [
  { day: "Monday – Friday", time: "09:00 – 21:00" },
  { day: "Saturday", time: "10:00 – 18:00" },
  { day: "Sunday", time: "Emergencies only" },
];

export function Contact() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key: keyof Values, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const found: Partial<Record<keyof Values, string>> = {};
    if (values.name.trim().length < 2) found.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      found.email = "Please enter a valid email address.";
    if (values.subject.trim().length < 3) found.subject = "Add a short subject.";
    if (values.message.trim().length < 10) found.message = "Tell me a little more (10+ characters).";
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    // TODO: connect to a contact API route.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSent(true);
    setValues(empty);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Get in <span className="text-gradient">touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Questions before booking? Send a message and I'll reply the same day.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              {sent && (
                <p
                  role="status"
                  className="mb-6 flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 p-3 text-sm text-primary"
                >
                  <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
                  Message sent — thanks! I'll get back to you shortly.
                </p>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    autoComplete="name"
                    className="mt-2 h-11"
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="contact-name-error" role="alert" className="mt-1.5 text-sm text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 h-11"
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="contact-email-error" role="alert" className="mt-1.5 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input
                    id="contact-subject"
                    className="mt-2 h-11"
                    value={values.subject}
                    onChange={(e) => set("subject", e.target.value)}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="contact-subject-error" role="alert" className="mt-1.5 text-sm text-destructive">
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    rows={5}
                    className="mt-2"
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="contact-message-error" role="alert" className="mt-1.5 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="mt-6 w-full sm:w-auto">
                {submitting ? (
                  <>
                    <Loader2 className="animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send aria-hidden="true" />
                    Send message
                  </>
                )}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
              <h3 className="text-lg font-semibold">Contact details</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a className="hover:text-primary" href="tel:+212600000000">
                    +212 600 000 000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a className="break-all hover:text-primary" href="mailto:hello@zakaria-tech.com">
                    hello@zakaria-tech.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>Remote worldwide · GMT+1 (Casablanca)</span>
                </li>
              </ul>

              <h4 className="mt-8 text-sm font-semibold">Working hours</h4>
              <table className="mt-3 w-full text-sm">
                <caption className="sr-only">Weekly working hours</caption>
                <tbody>
                  {hours.map((row) => (
                    <tr key={row.day} className="border-b border-border/70 last:border-0">
                      <th scope="row" className="py-2 text-left font-medium">
                        {row.day}
                      </th>
                      <td className="py-2 text-right text-muted-foreground">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-8 flex gap-2">
                <Button asChild variant="outline" className="min-h-11">
                  <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer">
                    <MessageCircle aria-hidden="true" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="min-h-11">
                  <a href="mailto:hello@zakaria-tech.com">
                    <Mail aria-hidden="true" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
