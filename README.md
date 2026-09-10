# Zakaria Tech Solutions

Build a modern, professional, fully responsive website for Zakaria, an independent phone and PC technician who currently offers remote/online support only, with in-person hardware repair services launching soon. Use React, Tailwind CSS, and shadcn/ui components, clean semantic HTML, and accessible markup (labels, alt text, keyboard navigation, good contrast).

Overall design direction:
Modern, tech-forward, trustworthy. Dark navy/near-black background with an electric blue or teal accent, subtle gradients, soft shadows, rounded cards, clean sans-serif typography (e.g., Inter), clear hierarchy, smooth hover states, subtle scroll fade-in animations. Fully responsive, mobile-first.

1. Navbar
Sticky navbar with "Zakaria — Tech Support," links to Home, Services, Portfolio, Booking, About, Contact, and a highlighted "Book a Session" button. Hamburger menu on mobile.

2. Hero section
Headline focused on remote help (e.g., "Fast, Reliable Phone & PC Support — Anywhere, Online"). Supporting line explaining remote troubleshooting, screen sharing, and virtual consultations. Two CTAs: "Book a Session" (primary) and "View My Work" (secondary). Trust indicators below the fold (e.g., "100+ Sessions Completed," "Same-Day Availability," "Remote & Secure").

3. Services section
Title: "What I Fix — Online." Grid of cards for current remote-only services: Virus & Malware Removal, Software Troubleshooting & Optimization, OS Installation & Setup Guidance, Data Backup & Recovery Guidance, System Performance Tuning, Remote Diagnostics & Consultation, App/Account Setup Help. Each card: icon, name, short description, starting price (optional).

4. "Coming Soon" hardware repair teaser
A visually distinct section/banner (different background tint, "Coming Soon" badge) announcing upcoming in-person hardware repair services (screen replacement, battery replacement, charging port repair, water damage, etc.). Include a short teaser list, a "Notify Me" email signup input, and a brief note like "Launching soon in [your area]." Keep it short — this is a preview, not a full section.

5. Appointment booking section
Title: "Book a Remote Session." Form fields: Full Name, Phone Number, Email, Device Type (dropdown: Smartphone / Laptop / Desktop PC / Tablet / Other), Operating System, Issue Description (textarea), Preferred Session Type (dropdown: Screen Share / Video Call / Phone Call), Preferred Date, Preferred Time Slot. Client-side validation with inline errors, loading state on submit, success confirmation message/modal. Styled as a clean card, grouped logically if long.

6. Portfolio / Work Gallery
Title: "Recent Fixes." Filterable grid (All / Software / Data Recovery / Setup & Optimization) of case-study cards — each with a short before/after description (no physical device photos needed yet, since work is remote; can use screenshots, icons, or short write-ups instead), device type, and turnaround time.

7. Testimonials
Grid or carousel of 4–6 review cards: star rating, short quote, customer name, device/service type. Auto-scroll on desktop, swipeable on mobile.

8. About section
Two-column layout: photo/illustration + bio covering experience, remote-support approach, tools used (screen sharing, remote access software), and a personal note about reliability and honesty. Small stats row (sessions completed, average rating, response time).

9. Contact section
Lightweight contact form (Name, Email, Subject, Message) plus a contact info card: phone, email, service area/timezone, working hours (table), and social/WhatsApp icons.

10. FAQ section
Accordion with 5–6 questions: how remote sessions work, what software/tools are used, data privacy & security during remote access, payment methods, turnaround time, and "When will hardware repair be available?"

11. Footer
Logo/name, short tagline, quick links, contact info, social icons, working hours, copyright.

Technical details:
Reusable, well-structured components. Subtle scroll-triggered animations. Forms with proper validation states, ready to connect to a backend/API route later. SEO-friendly heading structure. Dark theme by default with good contrast; optional light/dark toggle.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://zakarias-tech-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4a07fb6c-92fb-4d8c-9d91-87fa8c2f9499).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
