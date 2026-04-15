import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Music2, Heart, Image as ImageIcon, ChevronRight } from "lucide-react";

const gold = "#D4AF37";
const softGold = "#E7C96B";
const bg = "#060606";
const panel = "#0E0E0E";
const border = "rgba(212,175,55,0.25)";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", style, children }) {
  return (
    <div className={cn("rounded-xl", className)} style={style}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", variant, type = "button", children, ...props }) {
  const variantClass = variant === "ghost" ? "bg-transparent" : "";
  return (
    <button type={type} className={cn("inline-flex items-center justify-center", variantClass, className)} {...props}>
      {children}
    </button>
  );
}

function Input({ className = "", ...props }) {
  return <input className={cn("w-full px-4", className)} {...props} />;
}

function Textarea({ className = "", ...props }) {
  return <textarea className={cn("w-full px-4 py-3", className)} {...props} />;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "images", label: "Images" },
  { id: "contact", label: "Contact" },
];

const galleryPlaceholders = [
  "Grand ballroom wedding reception",
  "Elegant outdoor ceremony setup",
  "Prom night dance floor lighting",
  "School function with premium DJ setup",
  "Birthday party celebration energy",
  "Private party with upscale ambiance",
];

function LogoMark() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-5">
      <div className="relative w-full max-w-[560px] aspect-[2.2/1]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[92%] h-[88%]">
            <div
              className="absolute left-[7%] top-[14%] h-[72%] w-[37%] rounded-full border-[14px]"
              style={{ borderColor: gold, borderRightColor: "transparent", transform: "rotate(-18deg)" }}
            />
            <div
              className="absolute right-[7%] top-[14%] h-[72%] w-[37%] rounded-full border-[14px]"
              style={{ borderColor: gold, borderLeftColor: "transparent", transform: "rotate(18deg)" }}
            />
            <div className="absolute inset-x-[18%] top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#f8e5a0] to-transparent" />
            <div className="absolute inset-x-[20%] top-1/2 -translate-y-1/2 flex items-center justify-center gap-[4px]">
              {[10, 16, 8, 20, 12, 28, 14, 22, 42, 70, 42, 22, 14, 28, 12, 20, 8, 16, 10].map((h, i) => (
                <div
                  key={i}
                  className="rounded-full bg-gradient-to-b from-[#fff0b8] via-[#f3d36a] to-[#b98a12] shadow-[0_0_12px_rgba(212,175,55,0.55)]"
                  style={{ width: 3, height: h }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl md:text-6xl tracking-[0.18em] font-serif uppercase" style={{ color: "#f3dd95" }}>
          Alpha &amp; Omega DJs
        </h1>
        <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      </div>
    </div>
  );
}

function PageContainer({ children }) {
  return <div className="max-w-7xl mx-auto px-6 md:px-10">{children}</div>;
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl space-y-4 mb-10">
      <div className="uppercase tracking-[0.35em] text-xs" style={{ color: gold }}>{eyebrow}</div>
      <h2 className="text-3xl md:text-5xl font-serif" style={{ color: "#f5e7b0" }}>{title}</h2>
      <p className="text-sm md:text-base leading-7 text-zinc-300">{text}</p>
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <div>
      <section className="relative overflow-hidden border-b" style={{ borderColor: border }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_35%),linear-gradient(180deg,rgba(212,175,55,0.04),transparent_35%)]" />
        <PageContainer>
          <div className="min-h-[88vh] flex items-center py-20 md:py-28 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
                <div className="inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em]" style={{ borderColor: border, color: softGold }}>
                  <Heart size={14} />
                  Weddings First • All Events Welcome
                </div>
                <div className="space-y-5">
                  <h1 className="text-5xl md:text-7xl font-serif leading-tight" style={{ color: "#f8edc0" }}>
                    Wedding-first entertainment for unforgettable receptions, proms, parties, school events, and milestone celebrations.
                  </h1>
                  <p className="text-lg md:text-xl leading-8 text-zinc-300 max-w-2xl">
                    Alpha &amp; Omega DJs specializes in weddings first, while also bringing the same polished energy, refined presentation, and packed dance floors to prom nights, birthday parties, school functions, and private events.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => setPage("contact")} className="rounded-2xl px-7 py-6 text-base bg-transparent border hover:bg-white/5" style={{ borderColor: gold, color: "#f7e3a0" }}>
                    Inquire Now
                    <ChevronRight className="ml-2" size={18} />
                  </Button>
                  <Button onClick={() => setPage("images")} variant="ghost" className="rounded-2xl px-7 py-6 text-base border text-zinc-100 hover:bg-white/5" style={{ borderColor: border }}>
                    View Gallery
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {[
                    ["Wedding Specialists", "Black-tie, ballroom, estate, and destination celebrations remain our signature focus"],
                    ["Events of All Kinds", "Proms, school dances, birthdays, private parties, and milestone celebrations"],
                    ["Tailored Experience", "Custom timelines, curated playlists, polished MC service, and seamless coordination"],
                  ].map(([title, text]) => (
                    <Card key={title} className="rounded-3xl bg-white/5 backdrop-blur border" style={{ borderColor: border }}>
                      <CardContent className="p-5">
                        <div className="text-sm uppercase tracking-[0.2em] mb-2" style={{ color: softGold }}>{title}</div>
                        <p className="text-sm leading-6 text-zinc-300">{text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex justify-center lg:justify-end">
                <div className="w-full max-w-2xl rounded-[2rem] border p-8 md:p-10 bg-gradient-to-b from-[#121212] to-[#090909] shadow-[0_0_50px_rgba(212,175,55,0.08)]" style={{ borderColor: border }}>
                  <LogoMark />
                </div>
              </motion.div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-20 md:py-24">
        <PageContainer>
          <SectionHeader
            eyebrow="Why Clients Choose Us"
            title="Wedding-focused entertainment with the flexibility for every kind of celebration."
            text="This homepage now positions weddings as the primary focus while also making room for prom, school functions, birthday parties, and private events. You can later replace the placeholder copy below with your real services, venues, testimonials, and package information."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Music2 size={22} />,
                title: "Curated Music Design",
                text: "From wedding receptions to prom nights and birthday parties, every playlist is tailored to the crowd, the moment, and the tone of the event.",
              },
              {
                icon: <Heart size={22} />,
                title: "Event-Ready Energy",
                text: "A polished approach that reads the room, respects your vision, and keeps the energy high for weddings, school functions, and private celebrations without feeling overdone.",
              },
              {
                icon: <ImageIcon size={22} />,
                title: "Luxury Presentation",
                text: "Sophisticated black-and-gold branding, elegant booth styling, and refined communication that elevates weddings and any upscale event alike.",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-[2rem] bg-[#0b0b0b] border" style={{ borderColor: border }}>
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center border" style={{ borderColor: border, color: gold }}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-serif" style={{ color: "#f8e7b0" }}>{item.title}</h3>
                  <p className="text-zinc-300 leading-7">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <section className="py-20 md:py-24">
      <PageContainer>
        <SectionHeader
          eyebrow="About Us"
          title="Built for couples first — and for clients planning any unforgettable celebration."
          text="This page is intentionally easy to customize later. Replace the sample paragraphs with your story, experience, service area, event specialties, and what sets Alpha & Omega DJs apart."
        />
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <Card className="rounded-[2rem] border bg-[#0b0b0b]" style={{ borderColor: border }}>
            <CardContent className="p-8 md:p-10 space-y-6 text-zinc-300 leading-8">
              <p>
                <span style={{ color: "#f2dea0" }} className="font-semibold">Placeholder company story:</span> Alpha &amp; Omega DJs was created to bring together exceptional music, elegant presentation, and a calm professional presence for weddings first, while also serving proms, school functions, birthday parties, and private celebrations.
              </p>
              <p>
                <span style={{ color: "#f2dea0" }} className="font-semibold">Placeholder brand promise:</span> We believe great event entertainment should feel effortless for the host, immersive for the guests, and perfectly aligned with the tone of the occasion — whether it is a wedding, a prom, a school function, or a private party.
              </p>
              <p>
                <span style={{ color: "#f2dea0" }} className="font-semibold">Placeholder specialties:</span> Luxury weddings, destination events, refined MC services, ceremony audio, cocktail hour ambiance, reception entertainment, prom nights, school dances, birthday parties, and packed dance floors.
              </p>
              <p>
                <span style={{ color: "#f2dea0" }} className="font-semibold">Replace later:</span> Add your real biography, years of experience, wedding philosophy, preferred venues, team information, and testimonials.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            {[
              ["Our Style", "Sophisticated, modern, and guest-centered with a luxury visual identity."],
              ["Our Process", "Consultation, planning, timeline coordination, music curation, and event execution."],
              ["Our Events", "Weddings remain our primary focus, alongside proms, school functions, birthday parties, private celebrations, and upscale events."],
            ].map(([title, text]) => (
              <Card key={title} className="rounded-[2rem] border bg-gradient-to-b from-[#111] to-[#0a0a0a]" style={{ borderColor: border }}>
                <CardContent className="p-7 space-y-3">
                  <div className="text-xs uppercase tracking-[0.25em]" style={{ color: gold }}>{title}</div>
                  <p className="text-zinc-300 leading-7">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function ImagesPage() {
  return (
    <section className="py-20 md:py-24">
      <PageContainer>
        <SectionHeader
          eyebrow="Images"
          title="A gallery page ready for wedding photos and all of your event highlights."
          text="For now, this page uses stylish placeholders. Later, you can swap these blocks with real wedding photos, prom shots, party images, school event coverage, Instagram embeds, venue photos, or branded event highlights."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPlaceholders.map((item, idx) => (
            <motion.div key={item} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
              <Card className="overflow-hidden rounded-[2rem] border bg-[#0b0b0b]" style={{ borderColor: border }}>
                <div className="aspect-[4/5] bg-[linear-gradient(180deg,rgba(212,175,55,0.18),rgba(255,255,255,0.02)),radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_45%)] flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl border flex items-center justify-center" style={{ borderColor: border, color: gold }}>
                      <ImageIcon size={28} />
                    </div>
                    <div className="text-lg font-serif" style={{ color: "#f6e4aa" }}>{item}</div>
                    <div className="text-sm text-zinc-400">Replace with your image later</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="py-20 md:py-24">
      <PageContainer>
        <SectionHeader
          eyebrow="Contact"
          title="A refined inquiry page for weddings and every kind of celebration."
          text="The form below is a visual placeholder. Replace the sample details with your real contact information, service area, booking form integration, and preferred inquiry workflow for weddings, proms, parties, and school events."
        />
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <Card className="rounded-[2rem] border bg-[#0b0b0b]" style={{ borderColor: border }}>
            <CardContent className="p-8 md:p-10 space-y-8">
              <div className="space-y-5">
                {[
                  { icon: <Mail size={18} />, label: "Email", value: "you@example.com" },
                  { icon: <Phone size={18} />, label: "Phone", value: "(000) 000-0000" },
                  { icon: <MapPin size={18} />, label: "Service Area", value: "Add your city, region, or destination coverage" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-2xl border flex items-center justify-center mt-1" style={{ borderColor: border, color: gold }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="uppercase text-xs tracking-[0.25em]" style={{ color: gold }}>{item.label}</div>
                      <div className="text-zinc-200 text-lg mt-1">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-[1.5rem] border p-5" style={{ borderColor: border }}>
                <div className="text-sm uppercase tracking-[0.25em] mb-2" style={{ color: gold }}>Booking Note</div>
                <p className="text-zinc-300 leading-7">
                  Add your preferred response time, the types of events you accept, your package starting rate, or a note inviting clients to share their wedding date, school, venue, or party details.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border bg-gradient-to-b from-[#111] to-[#0a0a0a]" style={{ borderColor: border }}>
            <CardContent className="p-8 md:p-10">
              <form className="grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input placeholder="Your Name" className="h-12 rounded-2xl border bg-black/20 text-white placeholder:text-zinc-500" style={{ borderColor: border }} />
                  <Input placeholder="Email Address" className="h-12 rounded-2xl border bg-black/20 text-white placeholder:text-zinc-500" style={{ borderColor: border }} />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Input placeholder="Event Date" className="h-12 rounded-2xl border bg-black/20 text-white placeholder:text-zinc-500" style={{ borderColor: border }} />
                  <Input placeholder="Venue / City" className="h-12 rounded-2xl border bg-black/20 text-white placeholder:text-zinc-500" style={{ borderColor: border }} />
                </div>
                <Input placeholder="How did you hear about us?" className="h-12 rounded-2xl border bg-black/20 text-white placeholder:text-zinc-500" style={{ borderColor: border }} />
                <Textarea placeholder="Tell us about your event vision..." className="min-h-[180px] rounded-[1.5rem] border bg-black/20 text-white placeholder:text-zinc-500" style={{ borderColor: border }} />
                <Button type="button" className="rounded-2xl h-12 bg-transparent border hover:bg-white/5 text-base" style={{ borderColor: gold, color: "#f6e3a6" }}>
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </PageContainer>
    </section>
  );
}

export default function AlphaOmegaDjsWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState("home");

  const pageContent = useMemo(() => {
    switch (page) {
      case "about":
        return <AboutPage />;
      case "images":
        return <ImagesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  }, [page]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: bg, color: "white" }}>
      <header className="sticky top-0 z-50 backdrop-blur border-b bg-black/70" style={{ borderColor: border }}>
        <PageContainer>
          <div className="h-20 flex items-center justify-between">
            <button onClick={() => setPage("home")} className="text-left">
              <div className="text-xs uppercase tracking-[0.38em]" style={{ color: gold }}>Alpha &amp; Omega</div>
              <div className="text-lg md:text-xl font-serif" style={{ color: "#f3dd95" }}>DJs</div>
            </button>

            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const active = page === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setPage(item.id)}
                    className="px-4 py-2 rounded-full text-sm tracking-[0.2em] uppercase transition"
                    style={{
                      color: active ? "#f7e4a6" : "#d4d4d8",
                      border: `1px solid ${active ? gold : "transparent"}`,
                      background: active ? "rgba(212,175,55,0.08)" : "transparent",
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle Menu">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-5 grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPage(item.id);
                    setMenuOpen(false);
                  }}
                  className="text-left rounded-2xl border px-4 py-3 uppercase tracking-[0.2em] text-sm"
                  style={{ borderColor: border, color: page === item.id ? "#f7e4a6" : "#e4e4e7" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </PageContainer>
      </header>

      <main>{pageContent}</main>

      <footer className="border-t mt-10" style={{ borderColor: border }}>
        <PageContainer>
          <div className="py-10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
            <div>
              <div className="uppercase text-xs tracking-[0.3em]" style={{ color: gold }}>Alpha &amp; Omega DJs</div>
              <div className="text-zinc-400 mt-2">Wedding-first entertainment for receptions, proms, parties, school functions, and milestone events.</div>
            </div>
            <div className="text-sm text-zinc-500">Customize the text, images, and contact details anytime.</div>
          </div>
        </PageContainer>
      </footer>
    </div>
  );
}
