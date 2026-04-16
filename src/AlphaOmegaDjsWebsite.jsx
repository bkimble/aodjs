import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Heart, Image as ImageIcon, ChevronRight } from "lucide-react";

const gold = "#D4AF37";
const softGold = "#E7C96B";
const bg = "#060606";
const border = "rgba(212,175,55,0.25)";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "images", label: "Images" },
  { id: "contact", label: "Contact" },
];

const galleryPlaceholders = [
  "Grand ballroom wedding reception!!",
  "Elegant outdoor ceremony setup",
  "Prom night dance floor lighting",
  "School function with premium DJ setup",
  "Birthday party celebration energy",
  "Private party with upscale ambiance",
];

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

function PageContainer({ children }) {
  return <div className="max-w-7xl mx-auto px-6 md:px-10">{children}</div>;
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl space-y-4 mb-10">
      <div className="uppercase tracking-[0.35em] text-xs" style={{ color: gold }}>
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-serif" style={{ color: "#f5e7b0" }}>
        {title}
      </h2>
      <p className="text-sm md:text-base leading-7 text-zinc-300">{text}</p>
    </div>
  );
}

/** Raster logo (1024×683) from `public/` — respects Vite `base` for GitHub Pages. */
function logoAssetUrl() {
  const base = import.meta.env.BASE_URL;
  const path = "alpha-omega-djs-logo.png";
  return base.endsWith("/") ? `${base}${path}` : `${base}/${path}`;
}

function LogoMark() {
  return (
    <div className="flex flex-col items-center justify-center text-center [transform:translateZ(0)]">
      <img
        src={logoAssetUrl()}
        alt="Alpha &amp; Omega DJs logo"
        className="w-full max-w-[min(100%,28rem)] sm:max-w-[32rem] h-auto object-contain select-none"
        width={1024}
        height={683}
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}

function HomePage({ setPage }) {
  return (
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
                <h1 className="text-5xl md:text-7xl font-serif leading-tight antialiased" style={{ color: "#f8edc0" }}>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <Card className="w-full max-w-2xl rounded-[2rem] border p-8 md:p-10 bg-gradient-to-b from-[#121212] to-[#090909] shadow-[0_0_50px_rgba(212,175,55,0.08)]" style={{ borderColor: border }}>
                <CardContent>
                  <LogoMark />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="py-20 md:py-24">
      <PageContainer>
        <SectionHeader
          eyebrow="About Us"
          title="Built for couples first and every unforgettable celebration."
          text="Replace this sample copy with your story, specialties, venues, and team details."
        />
      </PageContainer>
    </section>
  );
}

function ImagesPage() {
  return (
    <section className="py-20 md:py-24">
      <PageContainer>
        <SectionHeader eyebrow="Images" title="Gallery placeholders ready to replace." text="Swap these blocks with real event photos." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPlaceholders.map((item, idx) => (
            <motion.div key={item} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
              <Card className="overflow-hidden rounded-[2rem] border bg-[#0b0b0b]" style={{ borderColor: border }}>
                <div className="aspect-[4/5] bg-[linear-gradient(180deg,rgba(212,175,55,0.18),rgba(255,255,255,0.02))] flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl border flex items-center justify-center" style={{ borderColor: border, color: gold }}>
                      <ImageIcon size={28} />
                    </div>
                    <div className="text-lg font-serif" style={{ color: "#f6e4aa" }}>
                      {item}
                    </div>
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
        <SectionHeader eyebrow="Contact" title="A refined inquiry page." text="Replace with your real contact details and booking workflow." />
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <Card className="rounded-[2rem] border bg-[#0b0b0b]" style={{ borderColor: border }}>
            <CardContent className="p-8 md:p-10 space-y-8">
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
                    <div className="uppercase text-xs tracking-[0.25em]" style={{ color: gold }}>
                      {item.label}
                    </div>
                    <div className="text-zinc-200 text-lg mt-1">{item.value}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="rounded-[2rem] border bg-gradient-to-b from-[#111] to-[#0a0a0a]" style={{ borderColor: border }}>
            <CardContent className="p-8 md:p-10">
              <form className="grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input placeholder="Your Name" className="h-12 rounded-2xl border bg-black/20 text-white placeholder:text-zinc-500" style={{ borderColor: border }} />
                  <Input placeholder="Email Address" className="h-12 rounded-2xl border bg-black/20 text-white placeholder:text-zinc-500" style={{ borderColor: border }} />
                </div>
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
              <div className="text-xs uppercase tracking-[0.38em]" style={{ color: gold }}>
                Alpha &amp; Omega
              </div>
              <div className="text-lg md:text-xl font-serif" style={{ color: "#f3dd95" }}>
                DJs
              </div>
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
      <section aria-label="Page content">{pageContent}</section>
    </div>
  );
}
