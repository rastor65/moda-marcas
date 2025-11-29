"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type DistinctivenessItem = {
  brand: string
  type: "Distintiva" | "Evocativa" | "Descriptiva-Débil"
  strength: "Alta" | "Media-Alta" | "Baja-Media"
  justification: string
}

const brandStyles: Record<
  string,
  {
    gradient: string
    initials: string
  }
> = {
  "Arturo Calle": {
    gradient: "linear-gradient(to right, #004b3b, #007a5c, #37b47c)",
    initials: "AC",
  },
  gef: {
    gradient: "linear-gradient(to right, #003c8f, #ffffff, #e30613)",
    initials: "GE",
  },
  Totto: {
    gradient: "linear-gradient(to right, #111111, #e53935, #ffb300)",
    initials: "TO",
  },
  "Mario Hernández": {
    gradient: "linear-gradient(to right, #001b3b, #0f3057, #d4af37)",
    initials: "MH",
  },
  Vélez: {
    gradient: "linear-gradient(to right, #4b2e19, #8b5a2b, #c28b50)",
    initials: "VE",
  },
}

const DISTINCTIVENESS_SCALE = ["Baja", "Media", "Alta"] as const

const getStrengthIndex = (strength: DistinctivenessItem["strength"]) => {
  if (strength === "Alta") return 2
  if (strength === "Media-Alta") return 1
  return 0 // Baja-Media
}

const getTypeChipClasses = (type: DistinctivenessItem["type"]) => {
  if (type === "Distintiva") {
    return "bg-primary/10 text-primary border border-primary/30"
  }
  if (type === "Evocativa") {
    return "bg-amber-100/80 text-amber-900 border border-amber-200/80 dark:bg-amber-500/15 dark:text-amber-100 dark:border-amber-500/30"
  }
  return "bg-muted text-foreground/80 border border-border/70"
}

const DistinctivenessSection = () => {
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null)

  const distinctivenessData: DistinctivenessItem[] = [
    {
      brand: "Arturo Calle",
      type: "Distintiva",
      strength: "Alta",
      justification:
        'El nombre "Arturo Calle" corresponde a un apellido particular que no describe productos o servicios. Aunque se asocia a una persona, se ha consolidado como signo fuerte para moda masculina formal, acumulando alto goodwill y reconocimiento en el mercado colombiano.',
    },
    {
      brand: "gef",
      type: "Evocativa",
      strength: "Media-Alta",
      justification:
        'El signo "gef" es breve y no descriptivo en sí mismo, pero el uso de la bandera tricolor evoca juventud, moda casual y accesibilidad. La combinación de denominación + elemento gráfico genera una asociación clara con estilo informal, sin describir literalmente prendas de vestir.',
    },
    {
      brand: "Totto",
      type: "Evocativa",
      strength: "Media-Alta",
      justification:
        'El nombre "TOTTO" es corto, memorable y no describe mochilas o morrales. Los círculos rojo y amarillo refuerzan una imagen dinámica y funcional. La distintividad proviene de su propuesta visual y de la posición lograda en el segmento de equipaje y accesorios escolares y urbanos.',
    },
    {
      brand: "Mario Hernández",
      type: "Distintiva",
      strength: "Alta",
      justification:
        'Aunque "Hernández" es un apellido común, la combinación con "Mario" y, sobre todo, el unicornio dorado como isotipo, elevan la distintividad del signo. El unicornio introduce una carga simbólica de lujo y fantasía que diferencia la marca dentro de la marroquinería premium.',
    },
    {
      brand: "Vélez",
      type: "Descriptiva-Débil",
      strength: "Baja-Media",
      justification:
        'El nombre "Vélez" es un apellido frecuente en el contexto hispano. A nivel gráfico, prima la simplicidad tipográfica con pocos elementos diferenciadores intrínsecos. Su fortaleza marcaria se apoya más en la trayectoria, tradición artesanal y posicionamiento comercial, que en la creatividad del signo en sí.',
    },
  ]

  return (
    <section
      id="distinctiveness"
      className="py-20 md:py-28 px-4 md:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              Análisis de distintividad marcaria
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Evaluación de fortaleza y tipo de distintividad por marca
              </h2>
              <p className="text-sm md:text-base text-foreground/70 max-w-2xl">
                Se valora la capacidad de cada signo para individualizar el
                origen empresarial, teniendo en cuenta su carácter distintivo,
                evocativo o débil, así como la fuerza marcaria construida a
                través del uso en el mercado.
              </p>
            </div>
          </div>

          {/* Leyenda de tipos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] md:text-xs">
            <div className="rounded-2xl border border-primary/25 bg-primary/5 px-3 py-2.5">
              <p className="font-semibold text-primary">Distintiva</p>
              <p className="text-primary/80 mt-0.5">
                Signos con alta capacidad de diferenciación; no describen
                productos o servicios.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50 px-3 py-2.5 dark:bg-amber-500/10 dark:border-amber-500/40">
              <p className="font-semibold text-amber-900 dark:text-amber-100">
                Evocativa
              </p>
              <p className="text-amber-900/80 dark:text-amber-100/80 mt-0.5">
                Sugieren ideas o cualidades, pero sin describir literalmente
                el producto.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-muted px-3 py-2.5">
              <p className="font-semibold text-foreground/90">
                Descriptiva / Débil
              </p>
              <p className="text-muted-foreground mt-0.5">
                Uso de apellidos comunes, términos genéricos o escasa
                creatividad gráfica.
              </p>
            </div>
          </div>
        </div>

        {/* Lista de marcas (acordeones) */}
        <div className="space-y-3">
          {distinctivenessData.map((item) => {
            const isExpanded = expandedBrand === item.brand
            const brandKey = item.brand as keyof typeof brandStyles
            const style =
              brandStyles[brandKey] ||
              ({
                gradient:
                  "linear-gradient(to right, #0f172a, #1e293b, #334155)",
                initials: item.brand
                  .split(" ")
                  .map((p) => p[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase(),
              } as const)

            const strengthIndex = getStrengthIndex(item.strength)

            return (
              <div
                key={item.brand}
                className="rounded-2xl border border-border/80 bg-card/80 backdrop-blur shadow-sm overflow-hidden transition-colors hover:border-primary/40"
              >
                {/* Cinta de color superior por marca */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: style.gradient }}
                />

                <button
                  type="button"
                  onClick={() =>
                    setExpandedBrand(isExpanded ? null : item.brand)
                  }
                  aria-expanded={isExpanded}
                  className="w-full px-5 md:px-6 py-4 flex items-center justify-between gap-4 hover:bg-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* Avatar marca */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-background text-[11px] font-semibold text-foreground/80">
                      {style.initials}
                    </div>

                    {/* Nombre + chips */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-semibold text-base md:text-lg truncate">
                          {item.brand === "gef" ? "GEF" : item.brand}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={[
                              "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold",
                              getTypeChipClasses(item.type),
                            ].join(" ")}
                          >
                            Tipo: {item.type}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-background px-3 py-1 text-[11px] font-semibold border border-border/70 text-foreground/80">
                            Fuerza: {item.strength}
                          </span>
                        </div>
                      </div>

                      {/* Mini escala de fuerza marcaria */}
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-muted-foreground">
                          Fortaleza marcaria
                        </span>
                        <div className="flex items-center gap-1">
                          {DISTINCTIVENESS_SCALE.map((label, index) => (
                            <div
                              key={label}
                              className={[
                                "h-1.5 w-6 rounded-full transition-colors",
                                index <= strengthIndex
                                  ? "bg-primary/80"
                                  : "bg-muted",
                              ].join(" ")}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className={[
                      "shrink-0 w-5 h-5 text-muted-foreground transition-transform duration-200",
                      isExpanded ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                {/* Justificación */}
                {isExpanded && (
                  <div className="px-5 md:px-6 pb-5 pt-1 border-t border-border/70 bg-background/60">
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {item.justification}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Nota al pie */}
        <p className="text-[11px] md:text-xs text-muted-foreground mt-4">
          La valoración de distintividad se realiza con fines académicos,
          considerando tanto la estructura del signo (nombre y gráficos) como
          la fuerza adquirida por el uso y reconocimiento en el mercado
          colombiano.
        </p>
      </div>
    </section>
  )
}

export default DistinctivenessSection
