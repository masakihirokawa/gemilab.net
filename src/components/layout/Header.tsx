"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { SearchModal } from "@/components/ui/SearchModal";
import { localePrefix } from "@/lib/locale";

interface SearchItem {
  title: string;
  slug: string;
  category?: string;
  description: string;
  type: "article" | "blog";
}

const MOBILE_ICON_BTN = {
  width: 32,
  height: 32,
  display: "flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  borderRadius: 4,
  border: "1px solid var(--border-subtle)",
  background: "var(--bg-surface)",
  cursor: "pointer" as const,
  fontSize: 14,
};

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchData, setSearchData] = useState<SearchItem[]>([]);
  const [levelOpen, setLevelOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Load search data lazily
  useEffect(() => {
    if (!searchOpen || searchData.length > 0) return;
    Promise.all([
      fetch("/api/search-data").then((r) => r.json()).catch(() => ({ articles: [], blog: [] })),
    ]).then(([data]) => {
      const items: typeof searchData = [];
      for (const a of data.articles || []) {
        items.push({ title: a.title, slug: a.slug, category: a.category, description: a.description, type: "article" });
      }
      for (const b of data.blog || []) {
        items.push({ title: b.title, slug: b.slug, description: b.description, type: "blog" });
      }
      setSearchData(items);
    });
  }, [searchOpen, searchData.length]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileOpen]);

  // Cmd/Ctrl+K shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const prefix = localePrefix(locale);
  const scrolled = scrollY > 50;
  const navItems = [
    { key: "premium", label: t("nav.premium"), href: `${prefix}/membership` },
    { key: "guides", label: t("nav.guides"), href: `${prefix}/guides` },
    { key: "geminiBasics", label: t("nav.geminiBasics"), href: `${prefix}/articles/gemini-basics` },
    { key: "geminiDev", label: t("nav.geminiDev"), href: `${prefix}/articles/gemini-dev` },
    { key: "geminiApi", label: t("nav.geminiApi"), href: `${prefix}/articles/gemini-api` },
    { key: "geminiAdvanced", label: t("nav.geminiAdvanced"), href: `${prefix}/articles/gemini-advanced` },
    { key: "geminiUpdates", label: t("nav.geminiUpdates"), href: `${prefix}/articles/gemini-updates` },
    { key: "geminiWorkspace", label: t("nav.geminiWorkspace"), href: `${prefix}/articles/gemini-workspace` },
    { key: "blog", label: t("nav.blog"), href: `${prefix}/blog` },
    { key: "tags", label: t("nav.tags"), href: `${prefix}/tags` },
  ];

  const levelItems = [
    { key: "beginner", label: t("levels.beginner"), href: `${prefix}/level/beginner`, icon: "◇", color: "var(--accent-green)" },
    { key: "intermediate", label: t("levels.intermediate"), href: `${prefix}/level/intermediate`, icon: "◆", color: "var(--accent-gold)" },
    { key: "advanced", label: t("levels.advanced"), href: `${prefix}/level/advanced`, icon: "◈", color: "var(--accent-coral)" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          padding: isMobile ? "0 16px" : "0 40px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "color-mix(in srgb, var(--bg-primary) 85%, transparent)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
          transition: "all 0.4s",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 7 : 11, flexShrink: 1, minWidth: 0, overflow: "hidden" }}>
          <a href={prefix || "/"} style={{ display: "flex", alignItems: "center", gap: isMobile ? 7 : 11, textDecoration: "none", minWidth: 0 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: isMobile ? 16 : 18, color: "var(--accent-coral)", fontWeight: 400, position: "relative" as const, top: isMobile ? 0 : 2, flexShrink: 0 }}>
              ◉
            </span>
            <span style={{ fontSize: isMobile ? 13 : 15, fontWeight: 500, letterSpacing: isMobile ? "0.04em" : "0.1em", color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {t("site.name")}
            </span>
          </a>
          {!isMobile && <LocaleSwitcher />}
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {/* Level Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setLevelOpen(true)}
              onMouseLeave={() => setLevelOpen(false)}
            >
              <button
                style={{
                  color: "var(--text-muted)",
                  background: "none",
                  border: "none",
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  padding: 0,
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  transition: "color 0.3s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                aria-expanded={levelOpen}
                aria-haspopup="true"
              >
                {t("nav.level")}
                <span style={{ fontSize: 9, opacity: 0.6, transition: "transform 0.2s", transform: levelOpen ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
              </button>
              {levelOpen && (
                <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", paddingTop: 8, zIndex: 200 }}>
                  <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: 8, padding: "6px 0", minWidth: 160, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
                    {levelItems.map(({ key, label, href, icon, color }) => (
                      <a key={key} href={href} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", textDecoration: "none", fontSize: 13, color: "var(--text-secondary)", transition: "background 0.15s", letterSpacing: "0.03em" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "color-mix(in srgb, var(--text-primary) 5%, transparent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <span style={{ color, fontSize: 14 }}>{icon}</span>
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navItems.map(({ key, label, href }) => (
              <a
                key={key}
                href={href}
                style={{
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: 13,
                  letterSpacing: "0.06em",
                  transition: "color 0.3s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {label}
              </a>
            ))}
            <a
              href={`${prefix}/support`}
              aria-label="Support us"
              style={{
                color: "var(--text-dim)",
                textDecoration: "none",
                fontSize: 14,
                transition: "color 0.3s, transform 0.3s",
                display: "inline-flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#e8647c";
                e.currentTarget.style.transform = "scale(1.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-dim)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ♥
            </a>
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="header-icon-btn"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 4,
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-surface)",
                color: "var(--text-muted)",
                fontSize: 12,
                cursor: "pointer",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              <span>{t("nav.search")}</span>
              <kbd style={{ fontSize: 10, color: "var(--text-dim)", marginLeft: 4 }}>⌘K</kbd>
            </button>
            <ThemeToggle />
          </nav>
        )}

        {/* Mobile controls — all icons 32×32 square, uniform styling */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 9, flexShrink: 0 }}>
            <a
              href={`${prefix}/support`}
              aria-label="Support us"
              style={{
                ...MOBILE_ICON_BTN,
                display: "inline-flex" as const,
                textDecoration: "none",
                color: "var(--text-dim)",
              }}
            >
              ♥
            </a>
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              style={{
                ...MOBILE_ICON_BTN,
                color: "var(--text-muted)",
              }}
            >
              ⌕
            </button>
            <LocaleSwitcher mobile />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              style={{
                ...MOBILE_ICON_BTN,
                color: "var(--text-secondary)",
                fontSize: 18,
                lineHeight: 1,
                paddingBottom: 4,
                margin: "0 1px",
              }}
            >
              ☰
            </button>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100dvh",
            background: "color-mix(in srgb, var(--bg-primary) 97%, transparent)",
            backdropFilter: "blur(20px)",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: 56,
            gap: 20,
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "none",
              border: "none",
              color: "var(--text-secondary)",
              fontSize: 28,
              cursor: "pointer",
            }}
          >
            ×
          </button>
          {/* Level links in mobile — top position */}
          <div style={{ width: "100%", maxWidth: 280, margin: "0 auto", paddingBottom: 4 }}>
            <span style={{ display: "block", textAlign: "center", fontSize: 9, fontFamily: "'DM Mono', monospace", color: "var(--text-dim)", letterSpacing: "0.15em", marginBottom: 8 }}>
              LEVEL
            </span>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              {levelItems.map(({ key, label, href, icon, color }) => (
                <a key={key} href={href} onClick={() => setMobileOpen(false)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, textDecoration: "none", fontSize: 11, color: "var(--text-secondary)", padding: "6px 12px", borderRadius: 6, border: "1px solid var(--border-subtle)", transition: "border-color 0.2s" }}
                >
                  <span style={{ color, fontSize: 14 }}>{icon}</span>
                  <span style={{ letterSpacing: "0.04em" }}>{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div style={{ width: "100%", maxWidth: 280, borderTop: "1px solid var(--border-subtle)", margin: "0 auto" }} />
          {navItems.map(({ key, label, href }) => (
            <a
              key={key}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: 15,
                letterSpacing: "0.06em",
                fontWeight: 400,
                padding: "4px 0",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href={`${prefix}/support`}
            onClick={() => setMobileOpen(false)}
            style={{
              color: "var(--text-dim)",
              textDecoration: "none",
              fontSize: 16,
              marginTop: 2,
              paddingBottom: 40,
              transition: "color 0.3s",
            }}
          >
            ♥
          </a>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} articles={searchData} />
    </>
  );
}
