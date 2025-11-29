"use client"

import { AlertTriangle, ArrowRight } from "lucide-react"

type RiskLevel = "Bajo" | "Bajo-Medio"

interface RiskItem {
  collision: string
  visual: string
  phonetic: string
  conceptual: string
  conclusion: string
  level: RiskLevel
}

interface BrandConfusion {
  brand: string
  risks: RiskItem[]
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

const RISK_SCALE = ["Bajo", "Medio", "Alto"] as const

const getRiskIndex = (level: RiskLevel) => {
  if (level === "Bajo") return 0
  // Bajo-Medio lo ubicamos en el punto intermedio
  return 1
}

const ConfusionRiskSection = () => {
  const confusionAnalysis: BrandConfusion[] = [
    {
      brand: "Arturo Calle",
      risks: [
        {
          collision: "Mario Hernández",
          visual:
            "Ambas trabajan con tipografías serif sobrias y códigos de color formales, asociados al segmento premium.",
          phonetic:
            "No se observa similitud fonética relevante: “Arturo Calle” vs. “Mario Hernández”.",
          conceptual:
            "Coinciden en evocar elegancia y formalidad, pero Arturo Calle se concentra en moda masculina y Mario Hernández en marroquinería de lujo.",
          conclusion:
            "Riesgo BAJO a MEDIO. El solapamiento conceptual en el universo del lujo es parcial y se compensa con portafolios diferenciados.",
          level: "Bajo-Medio",
        },
      ],
    },
    {
      brand: "gef",
      risks: [
        {
          collision: "Otras marcas de moda casual",
          visual:
            "El uso de colores brillantes y el recurso tipo bandera genera una identidad más llamativa que competidoras de tonos neutros.",
          phonetic:
            "“GEF” es un signo corto y particular, sin coincidencias claras con denominaciones competidoras del mismo segmento.",
          conceptual:
            "Posicionamiento asociado a moda casual juvenil y accesible, que la separa de marcas más formales o de lujo.",
          conclusion:
            "Riesgo BAJO. La construcción visual y fonética permite distinguirla con facilidad dentro del segmento casual.",
          level: "Bajo",
        },
      ],
    },
    {
      brand: "Totto",
      risks: [
        {
          collision: "Ninguna marca del grupo analizado",
          visual:
            "La combinación del logotipo “TOTTO” con círculos rojo y amarillo es única dentro del conjunto evaluado.",
          phonetic:
            "Nombre breve, de sonoridad particular y sin homófonos evidentes en el kit de marcas.",
          conceptual:
            "Fuerte asociación a mochilas, morrales y equipaje funcional, diferenciándola de marcas de ropa o marroquinería clásica.",
          conclusion:
            "Riesgo BAJO. Su identidad visual y su nicho (equipaje y accesorios) están muy definidos frente a las demás.",
          level: "Bajo",
        },
      ],
    },
    {
      brand: "Mario Hernández",
      risks: [
        {
          collision: "Arturo Calle (parcialmente)",
          visual:
            "Ambas usan recursos sobrios y elegantes; sin embargo, el unicornio dorado de Mario Hernández introduce un elemento distintivo fuerte.",
          phonetic:
            "No existe proximidad fonética relevante entre las denominaciones.",
          conceptual:
            "Las dos se ubican en el territorio de lo premium, pero Mario Hernández se alinea más con marroquinería y accesorios de lujo.",
          conclusion:
            "Riesgo BAJO. El isotipo del unicornio y el énfasis en marroquinería de lujo reducen la posibilidad de confusión efectiva.",
          level: "Bajo",
        },
      ],
    },
    {
      brand: "Vélez",
      risks: [
        {
          collision: "Mario Hernández (ambas en marroquinería)",
          visual:
            "Vélez apuesta por una estética minimalista y tonos cuero; Mario Hernández incorpora su unicornio dorado como elemento icónico.",
          phonetic:
            "“Vélez” y “Mario Hernández” no comparten similitudes fonéticas relevantes.",
          conceptual:
            "Ambas se mueven en marroquinería, pero Vélez enfatiza lo artesanal y tradicional, mientras que Mario Hernández acentúa el lujo moderno.",
          conclusion:
            "Riesgo BAJO a MEDIO. Comparten categoría general de productos, pero su narrativa de marca y códigos visuales son diferenciados.",
          level: "Bajo-Medio",
        },
      ],
    },
  ]

  return (
    <section
      id="confusion"
      className="py-20 md:py-28 px-4 md:px-8 bg-accent/10"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              Cortejo marcario · Riesgo de confusión
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Análisis de similitud visual, fonética y conceptual
              </h2>
              <p className="text-sm md:text-base text-foreground/70 max-w-2xl">
                Se examina el riesgo de confusión entre las marcas del mapa
                marcario, valorando su cercanía visual, fonética y conceptual,
                así como la coincidencia en categorías de productos y
                posicionamiento.
              </p>
            </div>
          </div>

          {/* Leyenda de criterios */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] md:text-xs">
            <div className="rounded-2xl border border-border/80 bg-card/80 px-3 py-2.5">
              <p className="font-semibold">Visual</p>
              <p className="text-muted-foreground mt-0.5">
                Comparación de tipografías, colores, logotipos y composición
                gráfica.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/80 px-3 py-2.5">
              <p className="font-semibold">Fonético</p>
              <p className="text-muted-foreground mt-0.5">
                Similitud en la pronunciación, número de sílabas y ritmo del
                nombre.
              </p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/80 px-3 py-2.5">
              <p className="font-semibold">Conceptual</p>
              <p className="text-muted-foreground mt-0.5">
                Ideas que evocan, segmento de mercado y promesa de valor.
              </p>
            </div>
          </div>
        </div>

        {/* Lista de marcas y sus riesgos */}
        <div className="space-y-8">
          {confusionAnalysis.map((analysis) => {
            const style =
              brandStyles[analysis.brand as keyof typeof brandStyles] ||
              ({
                gradient:
                  "linear-gradient(to right, #0f172a, #1e293b, #334155)",
                initials: analysis.brand
                  .split(" ")
                  .map((p) => p[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase(),
              } as const)

            return (
              <div
                key={analysis.brand}
                className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur shadow-sm overflow-hidden"
              >
                {/* Cinta de color por marca */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: style.gradient }}
                />

                <div className="px-5 md:px-6 py-5 space-y-6">
                  {/* Header marca */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-background text-[11px] font-semibold text-foreground/80">
                        {style.initials}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">
                          {analysis.brand === "gef" ? "GEF" : analysis.brand}
                        </h3>
                        <p className="text-[11px] text-muted-foreground">
                          Evaluación de posibles colisiones marcarias
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-[11px] text-muted-foreground">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                      <span>Criterio: comparación interna del kit de marcas</span>
                    </div>
                  </div>

                  {/* Tarjetas de riesgo por colisión */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {analysis.risks.map((risk, idx) => {
                      const riskIndex = getRiskIndex(risk.level)

                      return (
                        <div
                          key={idx}
                          className="rounded-2xl border border-border/80 bg-background/70 px-4 py-4 space-y-4 hover:border-primary/40 transition-colors"
                        >
                          {/* Encabezado colisión */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                                Posible colisión con
                              </p>
                              <div className="flex items-center gap-2">
                                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                                <p className="font-semibold text-sm md:text-base">
                                  {risk.collision}
                                </p>
                              </div>
                            </div>

                            {/* Nivel de riesgo */}
                            <div className="text-right space-y-1">
                              <p className="text-[11px] text-muted-foreground">
                                Nivel de riesgo
                              </p>
                              <div className="flex items-center justify-end gap-1">
                                {RISK_SCALE.map((label, index) => (
                                  <div
                                    key={label}
                                    className={[
                                      "h-1.5 w-6 rounded-full",
                                      index <= riskIndex
                                        ? index === 2
                                          ? "bg-destructive/80"
                                          : "bg-amber-500/80"
                                        : "bg-muted",
                                    ].join(" ")}
                                  />
                                ))}
                              </div>
                              <p className="text-[11px] text-muted-foreground">
                                {risk.level}
                              </p>
                            </div>
                          </div>

                          {/* Detalle de análisis */}
                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="font-semibold text-foreground/90 mb-0.5">
                                Análisis visual
                              </p>
                              <p className="text-foreground/70 leading-relaxed">
                                {risk.visual}
                              </p>
                            </div>

                            <div>
                              <p className="font-semibold text-foreground/90 mb-0.5">
                                Análisis fonético
                              </p>
                              <p className="text-foreground/70 leading-relaxed">
                                {risk.phonetic}
                              </p>
                            </div>

                            <div>
                              <p className="font-semibold text-foreground/90 mb-0.5">
                                Análisis conceptual
                              </p>
                              <p className="text-foreground/70 leading-relaxed">
                                {risk.conceptual}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-border/70">
                              <p className="font-semibold text-foreground/90 mb-0.5">
                                Conclusión
                              </p>
                              <p className="text-xs font-semibold text-primary">
                                {risk.conclusion}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Nota al pie */}
        <p className="text-[11px] md:text-xs text-muted-foreground">
          El análisis de cortejo marcario se realiza con fines académicos,
          tomando como referencia criterios usuales en decisiones de registro
          (similitud visual, fonética y conceptual), sin constituir un
          dictamen jurídico de viabilidad de registro.
        </p>
      </div>
    </section>
  )
}

export default ConfusionRiskSection
