import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "How does a remote session actually work?",
    a: "You book a slot, I confirm by email with a link. At the agreed time we start a screen-share or remote-access session, I diagnose the issue live and talk you through the fix as I go.",
  },
  {
    q: "What software and tools do you use?",
    a: "Usually AnyDesk or TeamViewer for remote access, and Google Meet or Zoom when screen sharing is enough. I'll send simple install instructions before the session if you need them.",
  },
  {
    q: "Is my data private and secure during remote access?",
    a: "Yes. Access is session-based and only works while you approve it. You see every action on your own screen, nothing is recorded, and you can end the session at any moment.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "Bank transfer, card payment links and common mobile payment apps. Payment is due after the session, once you're happy with the result.",
  },
  {
    q: "How long does a typical fix take?",
    a: "Most software issues are resolved in 30 to 90 minutes. Data recovery can take longer, and I'll always give you a time estimate before starting.",
  },
  {
    q: "When will hardware repair be available?",
    a: "In-person hardware repair — screens, batteries, charging ports and water damage — is launching soon. Join the notify list in the Coming Soon section and you'll hear first.",
  },
];

export function Faq() {
  return (
    <section className="bg-surface/40 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you might want to know before your first session.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
