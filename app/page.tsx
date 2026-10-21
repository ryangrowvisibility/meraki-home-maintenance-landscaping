import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(905) 724-2012";
const TEL = "tel:+19057242012";
const SMS = "sms:+19057242012";
const MAPS = "https://www.google.com/maps/search/?api=1&query=MERAKI%20HOME%20MAINTENANCE%20LANDSCAPING&query_place_id=ChIJ9V1cyuJCNa8RcploZ-CyRFA";

const services = [
  { icon: "leaf", name: "Lawn Care", text: "Ongoing lawn maintenance for homes in Ajax and Pickering, so the grass stays tidy without you giving up your weekends.", featured: true },
  { icon: "sprout", name: "Garden Bed Clean-ups & Weeding", text: "Pine needles, weeds and built-up debris cleared out of front and back gardens, leaving the beds fresh and ready for the season." },
  { icon: "grid", name: "Sod Installation", text: "Tired or patchy areas taken out and replaced with new sod, so you get a green, even lawn right away instead of waiting on seed." },
  { icon: "route", name: "Walkways", text: "Small walkway projects done on the schedule you were promised, a clean path through the yard that ties everything together." },
  { icon: "trash", name: "Old Garden Removal", text: "Overgrown or unwanted garden beds dug out and cleared. A popular first step before laying sod or a walkway in the same spot." },
  { icon: "truck", name: "Yard Waste Removal", text: "Garden waste and debris hauled away as part of the job, so you are not left with a pile of bags at the curb." },
  { icon: "home", name: "Property Maintenance", text: "A range of exterior jobs around the house. Many customers hire the crew once and then call back for the next thing on the list." },
];

const reviews = [
  { name: "Kim A.", job: "Several different jobs", text: "Has hired Meraki several times and been pleased every time with the results, the price and the attention to detail. Calls Stelios a personable, very reliable young man and recommends him and his crew without hesitation." },
  { name: "Katrin D.", job: "Garden bed clean-up", text: "Stelios' crew cleared the beds of pine needles and weeds and took away some extra waste too. Kind and professional." },
  { name: "Terry", job: "Walkway and new sod", text: "A small job: a short walkway, an old garden removed and sod laid. The crew showed up when they said they would, and he is happy with both areas." },
  { name: "Janice D.", job: "Landscaping project", text: "Stelios was great to deal with and delivered what he promised, with fair pricing and quality workmanship." },
  { name: "Alis A.", job: "Front and back yard", text: "Blown away by how both yards turned out. The team was very professional, and she plans to keep using them." },
  { name: "Karli R.", job: "Full service", text: "Friendly service, exceptional work, a quick turnaround and great prices from start to finish." },
];

const steps = [
  { icon: "phone", title: "Call or text Stelios", text: "Tell him what the yard needs. A photo or two is perfect." },
  { icon: "calendar", title: "Quick visit and fair quote", text: "He looks at the property and gives you a clear price." },
  { icon: "users", title: "The crew shows up on time", text: "Work gets done when promised, with constant updates." },
  { icon: "check", title: "Cleaned up and done", text: "Waste hauled away and a final look together." },
];

const faqs = [
  { q: "Which areas do you serve?", a: "Meraki works in Ajax and Pickering, Ontario. If you are close by, call and ask." },
  { q: "What are your hours?", a: "Listed hours are 9 a.m. to 5 p.m. Call or text to confirm a time that works for you." },
  { q: "Do you take small jobs?", a: "Yes. One customer hired the crew for a short walkway, removing an old garden and laying sod, and was happy with every part of it. Small jobs are welcome." },
  { q: "Do you haul away the waste?", a: "Yes. Yard waste and debris removal is part of the job, so you are not left with piles to deal with." },
  { q: "How quickly can you start?", a: "Customers regularly mention the quick turnaround. Call and Stelios will tell you his next opening." },
  { q: "How do I get a price?", a: `Call or text ${PHONE}. Describe the job and send a photo if you can, and Stelios will come take a look and give you a fair quote.` },
];

const photos = Array.from({ length: 13 }, (_, i) => i + 3);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Meraki Home Maintenance Landscaping",
  telephone: "+1-905-724-2012",
  image: "/images/photo1.jpg",
  areaServed: ["Ajax, ON", "Pickering, ON"],
  address: { "@type": "PostalAddress", addressLocality: "Ajax", addressRegion: "ON", addressCountry: "CA" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "8" },
  founder: { "@type": "Person", name: "Stelios" },
  hasMap: MAPS,
};

export default function Home() {
  return (
    <>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="hidden bg-brand-deep text-[0.9375rem] text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Ajax &amp; Pickering, Ontario</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> 9 a.m. to 5 p.m.</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between gap-6 px-5 md:px-6">
          <a href="#top" className="mark flex items-center gap-2.5" aria-label="Meraki Home Maintenance Landscaping, back to top">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white"><Icon name="leaf" className="leafy h-5 w-5" /></span>
            <span className="leading-none">
              <span className="block font-heading text-[1.25rem] font-extrabold text-brand-deep">Meraki</span>
              <span className="block pt-0.5 text-[0.8125rem] font-semibold text-muted">Home Maintenance &amp; Landscaping</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[1rem] font-semibold lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#work" className="hover:text-brand">Our Work</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="num hidden text-[1.125rem] font-bold text-brand-deep xl:block">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden !min-h-12 md:inline-flex"><Icon name="phone" className="ring h-5 w-5" /> Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-12 w-12 place-items-center rounded-full bg-cta text-white md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <div>
              <p className="rise eyebrow flex items-center gap-2 text-brand-deep"><Icon name="pin" className="h-4 w-4" /> Ajax &amp; Pickering, ON</p>
              <h1 className="rise d1 mt-4 text-brand-deep">Lawn Care &amp; Garden Clean-ups in Ajax and Pickering</h1>
              <p className="rise d2 mt-5 max-w-[34rem] text-[1.1875rem] text-muted">
                Weeds, pine needles, a tired old garden bed, a patchy lawn? Stelios and his crew clear it, fix it and haul the waste away. On time, at a fair price, with updates the whole way.
              </p>
              <div className="rise d3 mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn btn-cta"><Icon name="phone" className="ring h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn btn-outline"><Icon name="text" className="h-5 w-5" /> Text a photo of your yard</a>
              </div>
              <div className="rise d3 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[1rem] font-semibold">
                <span className="flex items-center gap-2"><Stars className="h-5 w-5" /> <span className="num">5.0</span></span>
                <a href={MAPS} target="_blank" rel="noopener" className="underline decoration-line underline-offset-4 hover:decoration-brand">8 Google reviews, all 5 stars</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Owner-led by Stelios</span>
              </div>
            </div>
            <div className="rise d2 relative">
              <img src="/images/photo1.jpg" alt="Lawn and garden work by Meraki in Ajax" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[0_30px_60px_-35px_oklch(0.33_0.09_148/.6)]" />
              <div className="absolute -bottom-8 left-4 right-4 rounded-2xl border border-line bg-white p-5 shadow-lg sm:left-auto sm:right-6 sm:w-80">
                <p className="font-heading text-lg font-extrabold text-brand-deep">Quick facts</p>
                <ul className="mt-2 space-y-1.5 text-[1rem]">
                  <li className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4 text-brand" /> Ajax and Pickering</li>
                  <li className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4 text-brand" /> 9 a.m. to 5 p.m.</li>
                  <li className="flex items-center gap-2"><Icon name="truck" className="h-4 w-4 text-brand" /> Yard waste hauled away</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Why neighbours hire Meraki" className="pt-14 md:pt-10">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[["thumb", "5.0 on Google", "every review 5 stars"], ["clock", "Shows up on time", "when promised"], ["tag", "Fair prices", "no surprises"], ["repeat", "Repeat customers", "they keep calling back"]].map(([i, a, b]) => (
              <li key={a} className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand"><Icon name={i} /></span>
                <span className="leading-tight"><span className="block font-bold text-brand-deep">{a}</span><span className="text-[0.9375rem] text-muted">{b}</span></span>
              </li>
            ))}
          </ul>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <p className="eyebrow text-brand">Services</p>
              <h2 className="mt-2 text-brand-deep">Lawn and garden care, plus the jobs in between</h2>
              <p className="mt-4 text-muted">From weekly lawn care to a full clean-up and new sod, here is what the Meraki crew takes care of.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal lift flex flex-col rounded-3xl border bg-white p-7 ${s.featured ? "border-2 border-brand" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-brand px-3 py-1 text-[0.8125rem] font-bold text-white">Most popular</span>}
                  </div>
                  <h3 className="mt-5 text-brand-deep">{s.name}</h3>
                  <p className="mt-3 flex-1 text-[1.0625rem] text-muted">{s.text}</p>
                  <a href={TEL} className="cardlink mt-5 inline-flex items-center gap-2 font-bold text-brand-deep">Ask Stelios about this <Icon name="arrow" className="arrow h-4 w-4" /></a>
                </article>
              ))}
              <div className="reveal flex flex-col justify-center rounded-3xl bg-brand-deep p-7 text-white">
                <p className="font-heading text-xl font-extrabold">Something else on the list?</p>
                <p className="mt-2 text-white/85">If it is outside and it needs doing, ask. The worst answer is a friendly no.</p>
                <a href={TEL} className="btn btn-cta mt-5 self-start"><Icon name="phone" className="ring h-5 w-5" /> {PHONE}</a>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div>
                <Stars className="h-6 w-6" />
                <h2 className="mt-3 text-brand-deep">Rated 5.0 from 8 Google reviews</h2>
                <p className="mt-2 text-muted">Every single one is five stars. Here is what neighbours said, paraphrased.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener" className="btn btn-outline">Read them on Google <Icon name="arrow" className="arrow h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-3xl border border-line bg-white p-6">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[1.0625rem]">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft font-bold text-brand-deep">{r.name[0]}</span>
                    <span className="leading-tight"><span className="block font-bold">{r.name}</span><span className="text-[0.9375rem] text-muted">{r.job} · Google</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <img src="/images/photo2.jpg" alt="A yard cared for by the Meraki crew" className="reveal aspect-[4/3] w-full rounded-3xl object-cover lg:aspect-[4/5]" loading="lazy" />
            <div className="reveal">
              <p className="eyebrow text-brand">About Meraki</p>
              <h2 className="mt-2 text-brand-deep">Stelios and a crew that cares about the details</h2>
              <p className="mt-5">Meraki Home Maintenance Landscaping is a lawn care and landscaping crew serving Ajax and Pickering, led by Stelios. You deal with him directly, from the first call to the last bag of yard waste.</p>
              <p className="mt-4">Customers describe him as personable and reliable, and the crew as professional and kind. They talk about fair prices, quality work and a quick turnaround, and about being kept in the loop the whole time. Several have hired Meraki more than once, and Stelios replies personally to every review.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[["chat", "Constant communication", "You always know what is happening."], ["clock", "On time, as promised", "The crew turns up when they say."], ["heart", "Kind, professional crew", "Respectful of your home and yard."], ["check", "Attention to detail", "Edges, beds and clean-up done right."]].map(([i, t, d]) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-cta/15 text-cta"><Icon name={i} className="h-5 w-5" /></span>
                    <span><span className="block font-bold">{t}</span><span className="text-[1rem] text-muted">{d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-2xl"><p className="eyebrow text-brand">How it works</p><h2 className="mt-2 text-brand-deep">Four easy steps</h2></div>
            <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-3xl border border-line bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="num grid h-11 w-11 place-items-center rounded-full bg-brand font-heading text-lg font-extrabold text-white">{i + 1}</span>
                    <Icon name={s.icon} className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="mt-5 text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-[1.0625rem] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-2xl"><p className="eyebrow text-brand">Our work</p><h2 className="mt-2 text-brand-deep">Recent yards in Ajax and Pickering</h2></div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((n, i) => (
                <div key={n} className={`zoom overflow-hidden rounded-2xl bg-brand-soft ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                  <img src={`/images/photo${n}.jpg`} alt={`Meraki lawn and garden project photo ${i + 1}`} loading="lazy" className="h-full min-h-40 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="reveal">
              <p className="eyebrow text-brand">Service area</p>
              <h2 className="mt-2 text-brand-deep">Proudly working in Ajax and Pickering</h2>
              <p className="mt-4 text-muted">A local crew for local yards, so getting to you is quick and easy.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Ajax", "Pickering"].map((t) => <li key={t} className="flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-semibold"><Icon name="pin" className="h-4 w-4 text-brand" /> {t}</li>)}
              </ul>
              <a href={TEL} className="btn btn-cta mt-8"><Icon name="phone" className="ring h-5 w-5" /> {PHONE}</a>
            </div>
            <div className="reveal overflow-hidden rounded-3xl border border-line bg-white">
              <iframe title="Map of Ajax and Pickering, Ontario" src="https://maps.google.com/maps?q=Ajax%2C%20ON&z=11&output=embed" className="h-[380px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="reveal"><p className="eyebrow text-brand">FAQ</p><h2 className="mt-2 text-brand-deep">Good questions, straight answers</h2></div>
            <div className="reveal space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-line bg-white px-6 py-5">
                  <summary className="flex items-start justify-between gap-6 text-[1.125rem] font-bold text-brand-deep">
                    {f.q}
                    <span className="tog mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-deep py-16 text-white md:py-20">
          <div className="reveal mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-white">Let&rsquo;s get your yard looking its best</h2>
              <p className="mt-3 max-w-xl text-white/85">Call or text Stelios at {PHONE}, 9 a.m. to 5 p.m. A quick photo of the yard is all it takes to get started.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={TEL} className="btn btn-cta"><Icon name="phone" className="ring h-5 w-5" /> Call {PHONE}</a>
              <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" /> Text Stelios</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-tint pb-28 pt-14 md:pb-10">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-heading text-xl font-extrabold text-brand-deep">Meraki Home Maintenance Landscaping</p>
            <p className="mt-3 max-w-sm text-[1rem] text-muted">Lawn care, garden clean-ups, sod, walkways and yard waste removal in Ajax and Pickering, Ontario.</p>
            <a href={TEL} className="num mt-5 block text-2xl font-extrabold text-brand-deep">{PHONE}</a>
            <p className="mt-1 text-[1rem] text-muted">Hours: 9 a.m. to 5 p.m.</p>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-3 space-y-1.5 text-[1rem] text-muted">{services.map((s) => <li key={s.name}><a href="#services" className="hover:text-ink">{s.name}</a></li>)}</ul>
          </div>
          <div>
            <p className="font-bold">Find us</p>
            <ul className="mt-3 space-y-1.5 text-[1rem] text-muted">
              <li><a href={MAPS} target="_blank" rel="noopener" className="hover:text-ink">Google reviews (5.0, 8)</a></li>
              <li><a href={MAPS} target="_blank" rel="noopener" className="hover:text-ink">Directions</a></li>
              <li>Ajax and Pickering, Ontario</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px] border-t border-line px-5 pt-6 text-[0.9375rem] text-muted md:px-6">© {new Date().getFullYear()} Meraki Home Maintenance Landscaping · Ajax, ON</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta !min-h-12"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn btn-outline !min-h-12"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
