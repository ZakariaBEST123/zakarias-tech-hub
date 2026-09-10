import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const reviews = [
  {
    rating: 5,
    quote:
      "My laptop was unusable after a malware infection. Zakaria cleaned it in under an hour and explained every step as he went.",
    name: "Sara B.",
    meta: "Laptop · Virus removal",
  },
  {
    rating: 5,
    quote:
      "I thought I'd lost years of photos. He walked me through the recovery patiently and got almost everything back.",
    name: "Youssef E.",
    meta: "External drive · Data recovery",
  },
  {
    rating: 5,
    quote:
      "Booked in the morning, fixed by the afternoon. Honest pricing and no upselling — rare these days.",
    name: "Meryem T.",
    meta: "Desktop PC · Troubleshooting",
  },
  {
    rating: 4,
    quote:
      "Set up my new phone, migrated everything and sorted out my two-factor mess. Calm and clear the whole time.",
    name: "Anas R.",
    meta: "Smartphone · Setup help",
  },
  {
    rating: 5,
    quote:
      "My five-year-old machine boots in seconds now. He showed me exactly what was slowing it down.",
    name: "Laila K.",
    meta: "Laptop · Performance tuning",
  },
  {
    rating: 5,
    quote:
      "Remote session felt totally secure — I could see everything he did and end it any time. Highly recommend.",
    name: "Omar D.",
    meta: "Laptop · Remote diagnostics",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <p className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            "size-4",
            i < rating ? "fill-primary text-primary" : "text-muted-foreground",
          )}
        />
      ))}
    </p>
  );
}

export function Testimonials() {
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setOffset((v) => (v + 1) % reviews.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  const ordered = [...reviews.slice(offset), ...reviews.slice(0, offset)];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What clients <span className="text-gradient">say</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A few words from people whose devices are working again.
          </p>
        </Reveal>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          className="mt-10"
        >
          <ul className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {ordered.map((review) => (
              <li
                key={review.name}
                className="w-[85%] shrink-0 snap-center md:w-auto md:[&:nth-child(n+4)]:hidden lg:[&:nth-child(n+4)]:block lg:[&:nth-child(n+7)]:hidden"
              >
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <Quote className="size-6 text-primary/70" aria-hidden="true" />
                  <Stars rating={review.rating} />
                  <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    "{review.quote}"
                  </blockquote>
                  <figcaption className="mt-auto pt-5">
                    <span className="block text-sm font-semibold">{review.name}</span>
                    <span className="block text-xs text-muted-foreground">{review.meta}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
