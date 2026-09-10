import { useState, type FormEvent } from "react";
import { CalendarCheck, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./Reveal";

type Values = {
  name: string;
  phone: string;
  email: string;
  device: string;
  os: string;
  issue: string;
  sessionType: string;
  date: string;
  time: string;
};

const empty: Values = {
  name: "",
  phone: "",
  email: "",
  device: "",
  os: "",
  issue: "",
  sessionType: "",
  date: "",
  time: "",
};

const deviceOptions = ["Smartphone", "Laptop", "Desktop PC", "Tablet", "Other"];
const sessionOptions = ["Screen Share", "Video Call", "Phone Call"];
const timeSlots = [
  "09:00 – 11:00",
  "11:00 – 13:00",
  "13:00 – 15:00",
  "15:00 – 17:00",
  "17:00 – 19:00",
  "19:00 – 21:00",
];

function validate(values: Values) {
  const errors: Partial<Record<keyof Values, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.device) errors.device = "Select your device type.";
  if (values.os.trim().length < 2) errors.os = "Tell me which operating system you use.";
  if (values.issue.trim().length < 15)
    errors.issue = "Please describe the issue in at least 15 characters.";
  if (!values.sessionType) errors.sessionType = "Choose a session type.";
  if (!values.date) errors.date = "Pick a preferred date.";
  if (!values.time) errors.time = "Pick a preferred time slot.";
  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-destructive">
      {message}
    </p>
  );
}

export function Booking() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (key: keyof Values) => (value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    // TODO: connect to a booking API route.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSuccess(true);
    setValues(empty);
  };

  return (
    <section id="booking" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Book a <span className="text-gradient">Remote Session</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill in a few details and I'll confirm your slot by email, usually within a couple of
            hours.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            {success ? (
              <div role="status" className="py-8 text-center">
                <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">Request received</h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                  Thanks! I've got your session request and will confirm the time by email shortly.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => setSuccess(false)}>
                  Book another session
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-8">
                <fieldset className="space-y-5">
                  <legend className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                    Your details
                  </legend>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full name</Label>
                      <Input
                        id="name"
                        autoComplete="name"
                        className="mt-2 h-11"
                        value={values.name}
                        onChange={(e) => set("name")(e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      <FieldError id="name-error" message={errors.name} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        className="mt-2 h-11"
                        value={values.phone}
                        onChange={(e) => set("phone")(e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      <FieldError id="phone-error" message={errors.phone} />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className="mt-2 h-11"
                        value={values.email}
                        onChange={(e) => set("email")(e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      <FieldError id="email-error" message={errors.email} />
                    </div>
                  </div>
                </fieldset>

                <fieldset className="space-y-5">
                  <legend className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                    Your device &amp; issue
                  </legend>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="device">Device type</Label>
                      <Select value={values.device} onValueChange={set("device")}>
                        <SelectTrigger
                          id="device"
                          className="mt-2 h-11 w-full"
                          aria-invalid={Boolean(errors.device)}
                          aria-describedby={errors.device ? "device-error" : undefined}
                        >
                          <SelectValue placeholder="Select a device" />
                        </SelectTrigger>
                        <SelectContent>
                          {deviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FieldError id="device-error" message={errors.device} />
                    </div>
                    <div>
                      <Label htmlFor="os">Operating system</Label>
                      <Input
                        id="os"
                        placeholder="Windows 11, macOS 15, Android 15…"
                        className="mt-2 h-11"
                        value={values.os}
                        onChange={(e) => set("os")(e.target.value)}
                        aria-invalid={Boolean(errors.os)}
                        aria-describedby={errors.os ? "os-error" : undefined}
                      />
                      <FieldError id="os-error" message={errors.os} />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="issue">Issue description</Label>
                      <Textarea
                        id="issue"
                        rows={5}
                        placeholder="What's happening, when it started, and anything you already tried."
                        className="mt-2"
                        value={values.issue}
                        onChange={(e) => set("issue")(e.target.value)}
                        aria-invalid={Boolean(errors.issue)}
                        aria-describedby={errors.issue ? "issue-error" : undefined}
                      />
                      <FieldError id="issue-error" message={errors.issue} />
                    </div>
                  </div>
                </fieldset>

                <fieldset className="space-y-5">
                  <legend className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                    Session preferences
                  </legend>
                  <div className="grid gap-5 sm:grid-cols-3">
                    <div>
                      <Label htmlFor="sessionType">Session type</Label>
                      <Select value={values.sessionType} onValueChange={set("sessionType")}>
                        <SelectTrigger
                          id="sessionType"
                          className="mt-2 h-11 w-full"
                          aria-invalid={Boolean(errors.sessionType)}
                          aria-describedby={errors.sessionType ? "sessionType-error" : undefined}
                        >
                          <SelectValue placeholder="Choose" />
                        </SelectTrigger>
                        <SelectContent>
                          {sessionOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FieldError id="sessionType-error" message={errors.sessionType} />
                    </div>
                    <div>
                      <Label htmlFor="date">Preferred date</Label>
                      <Input
                        id="date"
                        type="date"
                        className="mt-2 h-11"
                        value={values.date}
                        onChange={(e) => set("date")(e.target.value)}
                        aria-invalid={Boolean(errors.date)}
                        aria-describedby={errors.date ? "date-error" : undefined}
                      />
                      <FieldError id="date-error" message={errors.date} />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred time slot</Label>
                      <Select value={values.time} onValueChange={set("time")}>
                        <SelectTrigger
                          id="time"
                          className="mt-2 h-11 w-full"
                          aria-invalid={Boolean(errors.time)}
                          aria-describedby={errors.time ? "time-error" : undefined}
                        >
                          <SelectValue placeholder="Choose" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FieldError id="time-error" message={errors.time} />
                    </div>
                  </div>
                </fieldset>

                <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                  {submitting ? (
                    <>
                      <Loader2 className="animate-spin" aria-hidden="true" />
                      Sending request…
                    </>
                  ) : (
                    <>
                      <CalendarCheck aria-hidden="true" />
                      Request my session
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
