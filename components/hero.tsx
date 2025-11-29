"use client"

const brandCards = [
  {
    name: "Arturo Calle",
    gradient: "linear-gradient(to right, #004b3b, #007a5c, #37b47c)", // verde ejecutivo
    role: "Moda masculina",
    detail: "Clases 25 · 35 · 18",
  },
  {
    name: "GEF",
    gradient: "linear-gradient(to right, #003c8f, #ffffff, #e30613)", // bandera
    role: "Moda casual juvenil",
    detail: "Clases 25 · 35",
  },
  {
    name: "Totto",
    gradient: "linear-gradient(to right, #111111, #e53935, #ffb300)", // negro-rojo-amarillo
    role: "Morrales y equipaje",
    detail: "Clases 9 · 18 · 25 · 35",
  },
  {
    name: "Mario Hernández",
    gradient: "linear-gradient(to right, #001b3b, #0f3057, #d4af37)", // azul + dorado
    role: "Marroquinería de lujo",
    detail: "Clases 18 · 25 · 35",
  },
  {
    name: "Vélez",
    gradient: "linear-gradient(to right, #4b2e19, #8b5a2b, #c28b50)", // cuero
    role: "Cuero artesanal",
    detail: "Clases 18 · 25 · 35",
  },
]

const teamMembers = [
  "Robert Damian Quintero Laverde",
  "Laura Taminéz",
  "Bryan J. Otero Arrieta",
  "Kevin Yair Cantillo Ojeda",
  "Yair Andrés Sarmiento Gil",
]

const Hero = () => {
  const scrollToBrands = () => {
    document.getElementById("brands")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 md:px-8 pt-24 md:pt-28 pb-16 md:pb-24 min-h-[calc(100vh-4rem)]"
    >
      {/* Fondo con profundidad */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 -top-24 h-64 bg-gradient-to-b from-primary/12 via-accent/10 to-transparent" />
        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute -left-52 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tr from-accent/18 via-primary/6 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.38),_transparent_60%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-stretch">
          {/* Columna izquierda (texto + CTA) */}
          <div className="md:col-span-3 flex flex-col justify-center gap-8">
            <div className="space-y-5">
              {/* Badge superior */}
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground backdrop-blur">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                Maestría en Gestión de la Tecnología y la Innovación
              </div>

              {/* Título */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-balance">
                Mapa Marcario del sector{" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-foreground bg-clip-text text-transparent">
                  Moda, Belleza y Retail
                </span>
              </h1>

              {/* Descripción */}
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
                <span className="font-semibold text-foreground">
                  Auditoría Marcaria Express – Actividad 1.
                </span>{" "}
                Desarrollo de un mapa marcario que integra clasificación por
                tipo de marca, clases Niza, elementos dominantes y cortejo
                marcario, para evaluar distintividad, riesgos de confusión y
                oportunidades de posicionamiento.
              </p>
            </div>

            {/* Stats + CTA */}
            <div className="space-y-6">
              {/* Stats cards */}
              <div className="grid grid-cols-3 max-w-md gap-3">
                <div className="rounded-2xl border border-border/70 bg-card/90 px-3 py-3 shadow-sm">
                  <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground">
                    Marcas
                  </p>
                  <p className="mt-1 text-2xl font-semibold">5</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Moda · marroquinería · equipaje
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-card/90 px-3 py-3 shadow-sm">
                  <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground">
                    Clases Niza
                  </p>
                  <p className="mt-1 text-2xl font-semibold">3+</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    18 · 25 · 35 (y asociadas)
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-card/90 px-3 py-3 shadow-sm">
                  <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground">
                    Entregables
                  </p>
                  <p className="mt-1 text-2xl font-semibold">4</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Hoja, mapa, fotografía y sustentación
                  </p>
                </div>
              </div>

              {/* CTA + subtítulo */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToBrands}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 md:px-8 py-2.5 md:py-3 text-sm font-semibold shadow-sm hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all group"
                >
                  Ver análisis de marcas
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-background/10 group-hover:translate-x-0.5 group-hover:scale-105 transition-transform">
                    →
                  </span>
                </button>

                <span className="text-xs md:text-sm text-muted-foreground max-w-xs">
                  Explora la clasificación por tipo de marca, los elementos
                  visuales dominantes y el mapa de riesgos de confusión
                  visual, fonética y conceptual.
                </span>
              </div>
            </div>
          </div>

          {/* Columna derecha (tarjeta + grid de marcas) */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="relative rounded-3xl border border-border/70 bg-card/85 backdrop-blur-xl shadow-lg px-6 py-7 md:px-7 md:py-8 flex flex-col gap-6 h-full">
              {/* Línea decorativa superior */}
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              {/* Encabezado tarjeta */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Actividad
                  </p>
                  <p className="text-sm font-semibold">
                    Hoja de trabajo – Mapa marcario
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Auditoría Marcaria Express · Equipo C
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Fecha
                  </p>
                  <p className="text-sm font-medium">
                    28 de noviembre de 2025
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Sector: Moda, Belleza y Retail
                  </p>
                </div>
              </div>

              {/* Grid de marcas (mejor uso de espacio) */}
              <div className="border-t border-border/60 pt-5 space-y-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Marcas del análisis
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {brandCards.map((brand) => (
                    <div
                      key={brand.name}
                      className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/90 px-3 py-3 text-xs md:text-sm flex flex-col gap-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-1"
                        style={{ background: brand.gradient }}
                      />
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-foreground/90">
                          {brand.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-muted-foreground">
                        {brand.role}
                      </span>
                      <span className="text-[11px] text-muted-foreground/80">
                        {brand.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrantes debajo, aprovechando el ancho */}
              <div className="border-t border-border/60 pt-5 space-y-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Integrantes
                </p>
                <div className="flex flex-wrap gap-2">
                  {teamMembers.map((member) => (
                    <span
                      key={member}
                      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-[11px] md:text-xs text-foreground/85"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary">
                        {member
                          .split(" ")
                          .map((p) => p[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </span>
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
