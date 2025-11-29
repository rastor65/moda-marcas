"use client"

import { useEffect, useState, type CSSProperties } from "react"
import Link from "next/link"

type NavItem = {
  label: string
  href: string
  isBrand?: boolean
  brandId?: "arturo" | "gef" | "totto" | "mh" | "velez"
}

const brandBarStyles: Record<NonNullable<NavItem["brandId"]>, CSSProperties> = {
  arturo: {
    background:
      "linear-gradient(to right, var(--brand-arturo-1), var(--brand-arturo-2), var(--brand-arturo-3))",
  },
  gef: {
    background:
      "linear-gradient(to right, var(--brand-gef-1), var(--brand-gef-2), var(--brand-gef-3))",
  },
  totto: {
    background:
      "linear-gradient(to right, var(--brand-totto-1), var(--brand-totto-2), var(--brand-totto-3))",
  },
  mh: {
    background:
      "linear-gradient(to right, var(--brand-mh-1), var(--brand-mh-2), var(--brand-mh-3))",
  },
  velez: {
    background:
      "linear-gradient(to right, var(--brand-velez-1), var(--brand-velez-2), var(--brand-velez-3))",
  },
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "/", isBrand: false },
  { label: "Actividad", href: "/#context", isBrand: false },

  // Marcas (con barra de color)
  {
    label: "Arturo Calle",
    href: "/brands/arturo-calle",
    isBrand: true,
    brandId: "arturo",
  },
  {
    label: "GEF",
    href: "/brands/gef",
    isBrand: true,
    brandId: "gef",
  },
  {
    label: "Totto",
    href: "/brands/totto",
    isBrand: true,
    brandId: "totto",
  },
  {
    label: "Mario Hernández",
    href: "/brands/mario-hernandez",
    isBrand: true,
    brandId: "mh",
  },
  {
    label: "Vélez",
    href: "/brands/velez",
    isBrand: true,
    brandId: "velez",
  },

  { label: "Análisis", href: "/#classification", isBrand: false },
  { label: "Conclusiones", href: "/#conclusions", isBrand: false },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-300",
        "border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-border/80 shadow-md"
          : "bg-background/70 backdrop-blur-lg border-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Logo + título */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
        >
          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/30 to-accent/80 opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full w-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm md:text-base font-semibold tracking-tight">
                MM
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-semibold tracking-tight">
              Mapa Marcario
            </span>
            <span className="hidden sm:inline text-xs text-muted-foreground tracking-wide">
              Moda · Belleza · Retail
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const baseClasses =
              "relative group px-3 py-2 text-xs md:text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"

            const barStyle =
              item.isBrand && item.brandId
                ? brandBarStyles[item.brandId]
                : undefined

            return (
              <Link key={item.href} href={item.href} className={baseClasses}>
                {item.isBrand ? (
                  // Marcas: texto + barra de colores
                  <span className="flex flex-col items-center gap-0.5">
                    <span>{item.label}</span>
                    <span
                      style={barStyle}
                      className="mt-0.5 h-1 w-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </span>
                ) : (
                  // Ítems normales
                  item.label
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Abrir menú de navegación"
          aria-expanded={mobileMenuOpen}
          className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-full border border-border/70 bg-background/80 backdrop-blur hover:bg-muted/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span
            className={[
              "absolute h-0.5 w-5 bg-foreground transition-transform duration-300",
              mobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5",
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-0.5 w-5 bg-foreground transition-opacity duration-200",
              mobileMenuOpen ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-0.5 w-5 bg-foreground transition-transform duration-300",
              mobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-border/70 bg-background/98 backdrop-blur-xl shadow-md animate-fade-down">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-col gap-1">
            {navItems.map((item) => {
              const baseClasses =
                "group px-2 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md transition-colors"

              const barStyle =
                item.isBrand && item.brandId
                  ? brandBarStyles[item.brandId]
                  : undefined

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={baseClasses}
                >
                  {item.isBrand ? (
                    <span className="flex flex-col gap-0.5">
                      <span>{item.label}</span>
                      <span
                        style={barStyle}
                        className="mt-0.5 h-1 w-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </span>
                  ) : (
                    item.label
                  )}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
