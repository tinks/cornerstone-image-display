import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import logomark from "@/assets/logomark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Offers & Advantages — Curated Perks for Your Team" },
      {
        name: "description",
        content:
          "Browse every offer we have available: software credits, consulting packages, travel perks and financial benefits, all in one place.",
      },
      { property: "og:title", content: "Offers & Advantages — Curated Perks for Your Team" },
      {
        property: "og:description",
        content:
          "Browse every offer we have available: software credits, consulting packages, travel perks and financial benefits, all in one place.",
      },
    ],
  }),
  component: Index,
});

type Offer = {
  title: string;
  summary: string;
  metric: string;
  category: string;
  badge?: string;
  action: string;
};

const categories = ["All", "Software", "Consulting", "Travel", "Financial"] as const;

const offers: Offer[] = [
  {
    title: "Cloud Platform Credits",
    summary:
      "Spin up staging environments and production workloads with a generous starting balance on our partner cloud.",
    metric: "$5,000 in credits",
    category: "Software",
    badge: "Limited time",
    action: "Claim offer",
  },
  {
    title: "Design System Audit",
    summary:
      "A senior product designer reviews your component library and hands over a prioritised clean-up roadmap.",
    metric: "3 sessions included",
    category: "Consulting",
    action: "Book a slot",
  },
  {
    title: "Analytics Suite",
    summary:
      "Full product analytics with unlimited events, funnels and cohort reporting for growing teams.",
    metric: "6 months free",
    category: "Software",
    badge: "New",
    action: "Get started",
  },
  {
    title: "Business Travel Rate",
    summary:
      "Corporate rates across 40 partner hotel groups plus flexible cancellation on every booking.",
    metric: "Up to 28% off",
    category: "Travel",
    action: "View details",
  },
  {
    title: "Fractional CFO Hours",
    summary:
      "Monthly financial modelling and board-reporting support from an operator who has scaled it before.",
    metric: "10 hours / month",
    category: "Financial",
    action: "Enquire",
  },
  {
    title: "Corporate Card & Spend",
    summary:
      "Issue virtual cards per team, automate receipt capture and close the month in a single afternoon.",
    metric: "1.5% cashback",
    category: "Financial",
    badge: "Popular",
    action: "Apply now",
  },
  {
    title: "Airport Lounge Access",
    summary:
      "Unlimited lounge entry for anyone travelling on company business, across 1,300 locations.",
    metric: "12 passes / year",
    category: "Travel",
    action: "Redeem",
  },
  {
    title: "Security Review Package",
    summary:
      "Penetration testing and a remediation workshop to get you audit-ready before your next enterprise deal.",
    metric: "Fixed-fee engagement",
    category: "Consulting",
    action: "Request scope",
  },
  {
    title: "Developer Tooling Bundle",
    summary:
      "CI minutes, error monitoring and code review automation bundled into one predictable seat price.",
    metric: "35% discount",
    category: "Software",
    action: "See bundle",
  },
];

function Index() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const visible = useMemo(
    () => (active === "All" ? offers : offers.filter((offer) => offer.category === active)),
    [active],
  );

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img src={logomark} alt="Company logomark" className="h-9 w-9 object-contain" />
            <span className="text-base font-semibold tracking-tight">Northlight</span>
          </div>
          <nav className="flex items-center gap-8 text-sm">
            <a className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block" href="#offers">
              Offers
            </a>
            <a className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block" href="#offers">
              How it works
            </a>
            <a
              className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              href="#offers"
            >
              Contact us
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="border-b border-border/70 py-20 sm:py-28">
          <span className="inline-flex items-center rounded-full bg-highlight px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-highlight-foreground">
            Offers &amp; Advantages
          </span>
          <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            Curated perks, services and partnerships.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Everything we have negotiated on your behalf, gathered in one calm place. Filter by
            category and claim what your team actually needs.
          </p>
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              ["Live offers", String(offers.length)],
              ["Categories", String(categories.length - 1)],
              ["Partners", "24"],
              ["Avg. saving", "31%"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="offers" className="py-14">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => {
              const count =
                category === "All"
                  ? offers.length
                  : offers.filter((offer) => offer.category === category).length;
              const isActive = category === active;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm transition-colors",
                    isActive
                      ? "border-primary bg-primary font-medium text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                  ].join(" ")}
                >
                  {category}
                  <span className="ml-2 opacity-60">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((offer) => (
              <article
                key={offer.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-editorial transition-all hover:-translate-y-0.5 hover:border-foreground/20"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-muted px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {offer.category}
                  </span>
                  {offer.badge ? (
                    <span className="rounded-full bg-highlight px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-highlight-foreground">
                      {offer.badge}
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tight">{offer.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{offer.summary}</p>
                <p className="mt-6 text-sm font-semibold tracking-tight">{offer.metric}</p>
                <div className="mt-6 border-t border-border pt-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-muted-foreground"
                  >
                    {offer.action}
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Northlight. All offers subject to terms.</span>
          <span className="text-[0.7rem] uppercase tracking-[0.16em]">Updated monthly</span>
        </div>
      </footer>
    </div>
  );
}
