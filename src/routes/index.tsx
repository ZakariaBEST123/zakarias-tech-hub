import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { ComingSoon } from "@/components/site/ComingSoon";
import { Booking } from "@/components/site/Booking";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

const title = "Zakaria — Remote Phone & PC Tech Support";
const description =
  "Fast, secure remote support for phones and PCs: virus removal, troubleshooting, data recovery guidance and performance tuning. In-person hardware repair coming soon.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <ComingSoon />
        <Booking />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
