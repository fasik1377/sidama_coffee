import Image from "next/image";

const navItems = ["Club", "Team", "Fixtures", "News", "Fans", "Shop"];

const quickStats = [
  { value: "2026", label: "League champions" },
  { value: "1st", label: "Champion season" },
  { value: "90+", label: "Matchday moments" },
];

const fixtures = [
  {
    date: "Aug 18",
    competition: "Premier League",
    teams: "Sidama Buna vs Hawassa City",
    venue: "Hawassa Stadium",
    status: "Tickets open",
  },
  {
    date: "Aug 25",
    competition: "Cup Match",
    teams: "Adama City vs Sidama Buna",
    venue: "Adama Science Stadium",
    status: "Away day",
  },
  {
    date: "Sep 02",
    competition: "Premier League",
    teams: "Sidama Buna vs Wolkite City",
    venue: "Hawassa Stadium",
    status: "Preview live",
  },
];

const players = [
  { name: "Goalkeepers", detail: "Clean sheets, saves, match ratings" },
  { name: "Defenders", detail: "Tackles, blocks, minutes, discipline" },
  { name: "Midfielders", detail: "Assists, passing, tempo, player stories" },
  { name: "Forwards", detail: "Goals, form, highlights, interviews" },
];

const news = [
  {
    tag: "Champions",
    title: "Sidama Buna crowned league champions",
    copy: "The club celebrates a champion year with supporters, players, staff, and the Sidama community.",
  },
  {
    tag: "Matchday",
    title: "Hawassa Stadium ready for the next home fixture",
    copy: "Tickets, lineup updates, travel notes, and supporter information stay together in one match hub.",
  },
  {
    tag: "Community",
    title: "Supporters power the champion season",
    copy: "Fan memberships, polls, galleries, and club campaigns keep the stand alive beyond matchday.",
  },
];

const fanFeatures = [
  "Champion wall",
  "Fan polls",
  "Membership signup",
  "Photo gallery",
  "Match comments",
  "Newsletter",
];

const shopItems = ["Champion kit", "Training wear", "Scarves", "Coffee fan collection"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--brand-brown)] text-[var(--brand-brown)]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[rgba(255,210,63,0.24)] bg-[var(--brand-brown)]/95 text-white shadow-xl shadow-black/10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Sidama Buna home">
            <span className="grid size-14 place-items-center rounded-full bg-[var(--club-yellow)] p-1 shadow-md">
              <Image
                src="/sidama_coffee.jpg"
                alt="Sidama Buna Football Club logo"
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
            </span>
            <span className="leading-tight">
              <span className="sport-label block text-sm uppercase text-[var(--club-yellow)]">Sidama Buna</span>
              <span className="block text-xs font-bold text-white/72">Football Club</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-black uppercase text-white/78 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[var(--club-yellow)]">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#tickets"
            className="rounded-full bg-[var(--club-yellow)] px-5 py-2.5 text-sm font-black uppercase text-[var(--brand-brown)] shadow-lg shadow-black/20 transition hover:bg-[var(--cream)]"
          >
            Match Tickets
          </a>
        </div>
      </header>

      <section id="home" className="hero-match relative isolate overflow-hidden bg-[var(--brand-brown)] pt-24 text-white">
        <div className="absolute inset-0 -z-10">
          <div className="hero-grass h-full w-full" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,21,15,0.98)_0%,rgba(79,55,39,0.88)_48%,rgba(79,55,39,0.34)_100%)]" />
        </div>

        <div className="mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="reveal max-w-3xl">
            <p className="sport-label mb-5 inline-flex rounded-full border border-[var(--club-yellow)]/50 bg-[rgba(255,210,63,0.12)] px-4 py-2 text-xs uppercase text-[var(--club-yellow)]">
              This year&apos;s league champions
            </p>
            <h1 className="sport-title max-w-4xl text-5xl font-black uppercase leading-[0.88] text-white sm:text-7xl lg:text-8xl">
              Sidama Buna Owns The Champion Season
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/78">
              Fixtures, results, players, champion stories, tickets, fan membership, official shop, and club news in one polished home for Sidama Buna supporters.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#fixtures"
                className="rounded-full bg-[var(--club-yellow)] px-6 py-3 text-center text-sm font-black uppercase text-[var(--brand-brown)] transition hover:bg-[var(--cream)]"
              >
                View Fixtures
              </a>
              <a
                href="#fans"
                className="rounded-full border border-[rgba(255,248,231,0.45)] px-6 py-3 text-center text-sm font-black uppercase text-white transition hover:border-[var(--club-yellow)] hover:text-[var(--club-yellow)]"
              >
                Join Supporters
              </a>
            </div>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div key={stat.label} className="stat-tile border-l-4 border-[var(--club-yellow)] bg-[rgba(255,210,63,0.1)] px-4 py-3 backdrop-blur">
                  <strong className="sport-title block text-4xl font-black text-[var(--club-yellow)]">{stat.value}</strong>
                  <span className="mt-1 block text-sm font-bold text-white/70">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual relative min-h-[580px]" aria-label="Sidama Buna champion hero">
            <div className="champion-ribbon absolute left-0 top-2 z-20 border-2 border-[var(--club-yellow)] bg-[var(--cream)] p-5 text-[var(--brand-brown)] shadow-2xl">
              <p className="sport-label text-xs uppercase text-[var(--brand-brown)]/70">Champion Board</p>
              <p className="mt-3 text-3xl font-black uppercase leading-none">League Champions</p>
              <p className="mt-2 text-sm font-bold text-[var(--brand-brown)]/70">Trophy season, full match coverage, and supporter celebrations.</p>
            </div>

            <div className="crest-orbit absolute right-0 top-0 z-10 grid size-40 place-items-center rounded-full bg-[var(--club-yellow)] p-3 shadow-2xl md:size-48">
              <Image
                src="/sidama_coffee.jpg"
                alt="Sidama Buna Football Club crest"
                width={168}
                height={168}
                className="rounded-full"
                priority
              />
            </div>

            <div className="football-poster absolute bottom-0 right-0 h-[88%] w-[90%] overflow-hidden border-2 border-[rgba(255,210,63,0.3)] bg-[rgba(255,210,63,0.1)] shadow-2xl shadow-black/40">
              <div className="poster-stands" />
              <div className="poster-pitch" />
              <div className="poster-goal" />
              <div className="poster-player poster-player-main" />
              <div className="poster-player poster-player-left" />
              <div className="poster-player poster-player-right" />
              <div className="football-ball" />
              <div className="trophy-glow">Champions</div>
            </div>
          </div>
        </div>
      </section>

      <section id="club" className="section-dark py-20 text-[var(--cream)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="reveal">
            <p className="section-kicker text-[var(--club-yellow)]">About the club</p>
            <h2 className="section-title text-[var(--cream)]">Built from Sidama pride, carried by champions.</h2>
            <p className="mt-5 max-w-xl font-semibold leading-8 text-white/70">
              Sidama Buna&apos;s home page now feels like a real club platform: confident, visual, direct, and ready for supporters on matchday.
            </p>
          </div>
          <div className="image-grid">
            {["Club crest", "Champion night", "Matchday energy", "Sidama pride"].map((item) => (
              <article key={item} className="image-tile">
                <Image src="/sidama_coffee.jpg" alt={`${item} image`} width={180} height={180} className="rounded-full" />
                <span>{item}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Team and players</p>
              <h2 className="section-title max-w-3xl">Champion squad pages for every position.</h2>
            </div>
            <a href="#contact" className="sport-label text-sm uppercase text-[var(--brand-brown)]">Media requests</a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {players.map((player) => (
              <article key={player.name} className="brand-card motion-card group min-h-64 p-6 shadow-sm">
                <div className="kit-panel mb-8 h-24 border-b-4 border-[var(--club-yellow)]" />
                <h3 className="sport-title text-3xl font-black uppercase text-[var(--brand-brown)]">{player.name}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted-brown)]">{player.detail}</p>
                <button className="mt-6 rounded-full bg-[var(--brand-brown)] px-4 py-2 text-xs font-black uppercase text-[var(--club-yellow)]" type="button">
                  View squad
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fixtures" className="section-dark py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="reveal">
            <p className="section-kicker text-[var(--club-yellow)]">Fixtures and results</p>
            <h2 className="section-title text-white">The champion match center.</h2>
            <p className="mt-5 font-semibold leading-8 text-white/72">
              Upcoming fixtures, status labels, venue details, ticket actions, and matchday information are presented like an active club service.
            </p>
          </div>
          <div className="space-y-4">
            {fixtures.map((fixture) => (
              <article key={fixture.teams} className="fixture-row grid gap-4 border border-[rgba(255,210,63,0.24)] bg-[rgba(255,210,63,0.08)] p-5 backdrop-blur md:grid-cols-[90px_1fr_auto] md:items-center">
                <div>
                  <p className="sport-title text-2xl font-black text-[var(--club-yellow)]">{fixture.date}</p>
                  <p className="mt-1 text-xs font-black uppercase text-white/45">{fixture.competition}</p>
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase">{fixture.teams}</h3>
                  <p className="mt-1 text-sm font-semibold text-white/60">{fixture.venue}</p>
                </div>
                <span className="rounded-full border border-[var(--club-yellow)]/55 px-4 py-2 text-xs font-black uppercase text-[var(--club-yellow)]">
                  {fixture.status}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal">
            <p className="section-kicker">Latest news</p>
            <h2 className="section-title max-w-3xl">Champion stories, official updates, and matchday media.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {news.map((item) => (
              <article key={item.title} className="brand-card motion-card overflow-hidden">
                <div className="news-image flex h-44 items-center justify-center">
                  <Image src="/sidama_coffee.jpg" alt={`${item.title} image`} width={118} height={118} className="rounded-full shadow-xl" />
                </div>
                <div className="p-6">
                  <p className="sport-label text-xs uppercase text-[var(--brand-brown)]/70">{item.tag}</p>
                  <h3 className="mt-5 text-2xl font-black uppercase text-[var(--brand-brown)]">{item.title}</h3>
                  <p className="mt-4 font-semibold leading-7 text-[var(--muted-brown)]">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fans" className="bg-[var(--club-yellow)] py-20 text-[var(--brand-brown)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="reveal">
            <p className="section-kicker text-[var(--brand-brown)]">Fan zone</p>
            <h2 className="section-title">A digital stand for the champion supporters.</h2>
            <p className="mt-5 max-w-xl font-semibold leading-8 text-[var(--muted-brown)]">
              Fans can celebrate the title, submit memories, join memberships, vote in polls, and follow matchday conversations.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {fanFeatures.map((feature) => (
              <button key={feature} className="fan-button border border-[var(--brand-brown)]/15 bg-[var(--cream)] p-5 text-left font-black uppercase shadow-sm" type="button">
                {feature}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="bg-[#20150f] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="reveal">
            <p className="section-kicker text-[var(--club-yellow)]">Shop and tickets</p>
            <h2 className="section-title text-white">Champion merchandise and matchday sales.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {shopItems.map((item) => (
                <button key={item} className="shop-item border border-[rgba(255,210,63,0.28)] p-5 text-left text-sm font-black uppercase text-white/78" type="button">
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div id="tickets" className="ticket-panel bg-[var(--cream)] p-7 text-[var(--brand-brown)]">
            <p className="sport-label text-xs uppercase text-[var(--brand-brown)]/70">Ticketing system</p>
            <h3 className="mt-4 text-3xl font-black uppercase text-[var(--brand-brown)]">Reserve your place at the next match.</h3>
            <p className="mt-4 font-semibold leading-8 text-[var(--muted-brown)]">
              Fixture details, stand options, pricing, purchase status, and confirmation messaging are shaped to feel ready for real supporters.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="rounded-full bg-[var(--brand-brown)] px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-[var(--club-yellow)] hover:text-[var(--brand-brown)]" type="button">
                Buy tickets
              </button>
              <button className="rounded-full border border-[var(--brand-brown)]/30 px-6 py-3 text-sm font-black uppercase text-[var(--brand-brown)]" type="button">
                View seats
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-dark py-20 text-[var(--cream)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="reveal">
            <p className="section-kicker text-[var(--club-yellow)]">Contact</p>
            <h2 className="section-title text-[var(--cream)]">Clear channels for supporters, press, and partners.</h2>
          </div>
          <form className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="form-field" placeholder="Full name" aria-label="Full name" />
              <input className="form-field" placeholder="Email address" aria-label="Email address" />
            </div>
            <select className="form-field" aria-label="Inquiry type" defaultValue="">
              <option value="" disabled>Inquiry type</option>
              <option>Supporter question</option>
              <option>Media request</option>
              <option>Sponsorship inquiry</option>
              <option>Ticketing support</option>
            </select>
            <textarea className="form-field min-h-36 resize-y" placeholder="Message" aria-label="Message" />
            <button className="w-fit rounded-full bg-[var(--club-yellow)] px-7 py-3 text-sm font-black uppercase text-[var(--brand-brown)]" type="button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="professional-footer border-t border-[rgba(255,210,63,0.24)] bg-[#160e0a] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-16 place-items-center rounded-full bg-[var(--club-yellow)] p-1">
                <Image src="/sidama_coffee.jpg" alt="Sidama Buna crest" width={56} height={56} className="rounded-full" />
              </span>
              <div>
                <p className="sport-label text-sm uppercase text-[var(--club-yellow)]">Sidama Buna</p>
                <p className="text-sm font-bold text-white/60">Football Club</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm font-semibold leading-7 text-white/62">
              Official digital home for champion news, fixtures, players, tickets, shop, fans, and club communication.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase text-[var(--club-yellow)]">Club</h3>
            <div className="mt-4 grid gap-3 text-sm font-bold text-white/64">
              <a href="#club">About</a>
              <a href="#team">Team</a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase text-[var(--club-yellow)]">Matchday</h3>
            <div className="mt-4 grid gap-3 text-sm font-bold text-white/64">
              <a href="#fixtures">Fixtures</a>
              <a href="#tickets">Tickets</a>
              <a href="#fans">Fan zone</a>
              <a href="#shop">Shop</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase text-[var(--club-yellow)]">Champion updates</h3>
            <p className="mt-4 text-sm font-semibold leading-7 text-white/62">
              Get team news, match reminders, ticket alerts, and official champion-season announcements.
            </p>
            <div className="mt-5 flex">
              <input className="min-w-0 flex-1 bg-[var(--cream)] px-4 py-3 text-sm font-bold text-[var(--brand-brown)] outline-none" placeholder="Email address" aria-label="Footer email address" />
              <button className="bg-[var(--club-yellow)] px-5 text-sm font-black uppercase text-[var(--brand-brown)]" type="button">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-white/45">
          Sidama Buna Football Club - League Champions
        </div>
      </footer>
    </main>
  );
}
