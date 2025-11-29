"use client"

const brandStyles: Record<
  string,
  {
    gradient: string
    initials: string
  }
> = {
  "Arturo Calle": {
    gradient: "linear-gradient(to right, #004b3b, #007a5c, #37b47c)", // verde ejecutivo
    initials: "AC",
  },
  GEF: {
    gradient: "linear-gradient(to right, #003c8f, #ffffff, #e30613)", // bandera
    initials: "GE",
  },
  Totto: {
    gradient: "linear-gradient(to right, #111111, #e53935, #ffb300)", // negro-rojo-amarillo
    initials: "TO",
  },
  "Mario Hernández": {
    gradient: "linear-gradient(to right, #001b3b, #0f3057, #d4af37)", // azul + dorado
    initials: "MH",
  },
  Vélez: {
    gradient: "linear-gradient(to right, #4b2e19, #8b5a2b, #c28b50)", // cuero
    initials: "VE",
  },
}

// Ruta del PDF en tu proyecto (ajústala según dónde lo pongas)
const NIZA_PDF_URL = "/docs/clasificacion-niza.pdf"

// Mapa: texto de la clase -> página del PDF
const NIZA_PAGES: Record<string, number> = {
  "Clase 9": 40,
  "Clase 18": 45,
  "Clase 25": 49,
  "Clase 35": 54,
}

const ClassificationSection = () => {
  const classifications = [
    {
      brand: "Arturo Calle",
      type: "Nominativa",
      composition:
        'Nombre "ARTURO CALLE" en tipografía serif sobria y elegante.',
      dominant:
        "El nombre completo como eje central, asociado al apellido del fundador y a moda masculina formal.",
      niza: ["Clase 25", "Clase 35", "Clase 18"],
    },
    {
      brand: "GEF",
      type: "Mixta",
      composition:
        'Letras "GEF" en tipografía sans serif + recurso gráfico tipo bandera tricolor.',
      dominant:
        "Combinación de colores vibrantes y tipografía sencilla, asociada a moda casual juvenil y accesible.",
      niza: ["Clase 25", "Clase 35", "Clase 18"],
    },
    {
      brand: "Totto",
      type: "Nominativa",
      composition:
        'Palabra "TOTTO" en mayúsculas + dos círculos distintivos (rojo y amarillo).',
      dominant:
        "Los círculos de color, sumados al nombre repetido y al uso extensivo en morrales, maletas y accesorios.",
      niza: ["Clase 18", "Clase 25", "Clase 9", "Clase 35"],
    },
    {
      brand: "Mario Hernández",
      type: "Mixta",
      composition:
        'Nombre "MARIO HERNÁNDEZ" en serif + unicornio estilizado dorado como isotipo.',
      dominant:
        "Unicornio dorado como símbolo de lujo y fantasía, acompañado del nombre en mayúsculas con alto reconocimiento.",
      niza: ["Clase 18", "Clase 25", "Clase 35"],
    },
    {
      brand: "Vélez",
      type: "Mixta",
      composition:
        'Nombre "VÉLEZ" en tipografía minimalista, limpia y delgada, acompañado de paleta en tonos cuero.',
      dominant:
        "Simplicidad tipográfica y uso consistente de colores tierra que refuerzan la idea de cuero artesanal y calidad.",
      niza: ["Clase 18", "Clase 25", "Clase 35"],
    },
  ]

  const handleOpenNizaClass = (label: string) => {
    const page = NIZA_PAGES[label]
    if (!page) return

    // Abre el PDF en una nueva pestaña en la página correspondiente
    window.open(`${NIZA_PDF_URL}#page=${page}`, "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="classification"
      className="py-20 md:py-28 px-4 md:px-8 bg-accent/10"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Encabezado de sección */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              Actividad 1 · Auditoría Marcaria Express
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Clasificación de marcas por tipo, composición y clases Niza
              </h2>
              <p className="text-sm md:text-base text-foreground/70 max-w-2xl">
                Se analizan cinco marcas del sector moda, belleza y retail,
                identificando su naturaleza nominativa o mixta, la composición
                de sus elementos gráficos y verbales, y las clases Niza en las
                que se protegen sus productos y servicios.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-xs text-xs md:text-[11px]">
            <div className="rounded-2xl border border-border/70 bg-card/80 px-3 py-2.5">
              <p className="font-semibold">Tipos de marca</p>
              <p className="text-muted-foreground mt-0.5">
                Nominativa · Mixta
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/80 px-3 py-2.5">
              <p className="font-semibold">Clases clave</p>
              <p className="text-muted-foreground mt-0.5">
                18 · 25 · 35 · 9
              </p>
            </div>
          </div>
        </div>

        {/* Tabla / panel de clasificación */}
        <div className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm border-collapse">
              <thead className="bg-muted/60">
                <tr>
                  <th className="text-left py-4 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Marca
                  </th>
                  <th className="text-left py-4 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Tipo
                  </th>
                  <th className="text-left py-4 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Composición
                  </th>
                  <th className="text-left py-4 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Elementos dominantes
                  </th>
                  <th className="text-left py-4 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Clases Niza
                  </th>
                </tr>
              </thead>
              <tbody>
                {classifications.map((cls, index) => {
                  const style =
                    brandStyles[cls.brand] ??
                    ({
                      gradient:
                        "linear-gradient(to right, #0f172a, #1e293b, #334155)",
                      initials: cls.brand
                        .split(" ")
                        .map((p) => p[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase(),
                    } as const)

                  return (
                    <tr
                      key={cls.brand}
                      className={[
                        "border-t border-border/70",
                        index % 2 === 1 ? "bg-muted/20" : "bg-background/40",
                        "hover:bg-accent/40 transition-colors",
                      ].join(" ")}
                    >
                      {/* Marca */}
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-3">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border/70 bg-background text-[10px] font-semibold text-foreground/80">
                              {style.initials}
                            </div>
                            <span className="font-semibold text-foreground">
                              {cls.brand}
                            </span>
                          </div>
                          <div
                            className="h-1.5 w-full rounded-full"
                            style={{ background: style.gradient }}
                          />
                        </div>
                      </td>

                      {/* Tipo */}
                      <td className="py-4 px-4 align-top">
                        <span
                          className={[
                            "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold",
                            cls.type === "Nominativa"
                              ? "bg-primary/5 text-primary border border-primary/20"
                              : "bg-accent/60 text-foreground border border-border/70",
                          ].join(" ")}
                        >
                          {cls.type}
                        </span>
                      </td>

                      {/* Composición */}
                      <td className="py-4 px-4 align-top text-foreground/80 leading-relaxed">
                        {cls.composition}
                      </td>

                      {/* Elementos dominantes */}
                      <td className="py-4 px-4 align-top text-foreground/80 leading-relaxed">
                        {cls.dominant}
                      </td>

                      {/* Clases Niza */}
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-wrap gap-1.5">
                          {cls.niza.map((n) => (
                            <button
                              key={n}
                              type="button"
                              onClick={() => handleOpenNizaClass(n)}
                              className="inline-flex items-center rounded-full bg-accent/80 px-2.5 py-1 text-[11px] font-semibold text-foreground cursor-pointer hover:bg-accent/100 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-1 focus:ring-offset-card transition"
                              title={`Ver descripción de ${n} en la Clasificación de Niza`}
                            >
                              {n}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Nota al pie */}
          <div className="border-t border-border/70 px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-[11px] text-muted-foreground">
            <p>
              La clasificación se realiza con fines académicos, a partir de la
              observación del signo y su posible registro en las clases Niza
              relacionadas con prendas de vestir, marroquinería y servicios de
              retail.
            </p>
            <p className="italic">
              Referente: Clasificación Internacional de Productos y Servicios de
              Niza (OMPI).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassificationSection
