"use client"

import { useMemo } from "react"

const brandFinancials: Record<
  string,
  {
    year: number
    assets: number
    liabilities: number
    equity: number
  }
> = {
  "Arturo Calle": {
    year: 2024,
    assets: 20648963,
    liabilities: 1423651,
    equity: 19225312,
  },
  GEF: {
    year: 2024,
    assets: 972203384,
    liabilities: 558215421,
    equity: 413987963,
  },
  Totto: {
    year: 2024,
    assets: 577224439,
    liabilities: 374792690,
    equity: 202431749,
  },
  "Mario Hernández": {
    year: 2024,
    assets: 114237722,
    liabilities: 94075608,
    equity: 20162114,
  },
  Vélez: {
    year: 2024,
    assets: 581042577,
    liabilities: 397283801,
    equity: 183758766,
  },
}

// Formatea el número como moneda SIN convertir de M a pesos.
// Ej: 994910759  -> "$994.910.759"  y luego le agregamos "M"
const formatCOPM = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value)

const BrandFinancialsSection = () => {
  const orderedBrands = useMemo(
    () => ["Arturo Calle", "GEF", "Totto", "Mario Hernández", "Vélez"],
    []
  )

  return (
    <section
      id="financials"
      className="py-20 md:py-28 px-4 md:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              Análisis financiero · SIIS / Supersociedades
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Activos, pasivos y patrimonio de las marcas analizadas
              </h2>
              <p className="text-sm md:text-base text-foreground/70 max-w-2xl">
                Se presenta, por cada marca seleccionada, una síntesis de los
                principales indicadores de situación financiera: total de activos,
                pasivos y patrimonio, expresados en{" "}
                <span className="font-semibold">miles de pesos colombianos (M)</span>{" "}
                para la vigencia 2024.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card/80 px-4 py-3 text-[11px] space-y-1 max-w-xs">
            <p className="font-semibold">Nota metodológica</p>
            <p className="text-muted-foreground">
              Las cifras corresponden a los valores reportados en el Sistema de
              Información de Estados Financieros (SIIS) de Supersociedades como
              TOTAL ACTIVOS, TOTAL PASIVOS y TOTAL PATRIMONIO, en{" "}
              <span className="font-semibold">miles de pesos (M)</span>. En la
              tabla se conserva esta unidad, añadiendo la letra “M” al final,
              como en las tarjetas del SIIS.
            </p>
          </div>
        </div>

        {/* Tabla financiera */}
        <div className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm border-collapse">
              <thead className="bg-muted/60">
                <tr>
                  <th className="text-left py-4 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Marca
                  </th>
                  <th className="text-left py-4 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Año
                  </th>
                  <th className="text-left py-4 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Total activos
                  </th>
                  <th className="text-left py-4 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Total pasivos
                  </th>
                  <th className="text-left py-4 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Patrimonio
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderedBrands.map((brand, index) => {
                  const data = brandFinancials[brand]
                  if (!data) return null

                  return (
                    <tr
                      key={brand}
                      className={[
                        "border-t border-border/70",
                        index % 2 === 1 ? "bg-muted/20" : "bg-background/40",
                        "hover:bg-accent/40 transition-colors",
                      ].join(" ")}
                    >
                      <td className="py-4 px-4 align-top font-semibold">
                        {brand}
                      </td>
                      <td className="py-4 px-4 align-top text-foreground/80">
                        {data.year}
                      </td>

                      {/* Activos */}
                      <td className="py-4 px-4 align-top text-foreground/80">
                        <span className="inline-flex items-baseline gap-1">
                          <span>{formatCOPM(data.assets)}</span>
                          <span className="text-[10px] text-muted-foreground font-semibold">
                            M
                          </span>
                        </span>
                      </td>

                      {/* Pasivos */}
                      <td className="py-4 px-4 align-top text-foreground/80">
                        <span className="inline-flex items-baseline gap-1">
                          <span>{formatCOPM(data.liabilities)}</span>
                          <span className="text-[10px] text-muted-foreground font-semibold">
                            M
                          </span>
                        </span>
                      </td>

                      {/* Patrimonio */}
                      <td className="py-4 px-4 align-top text-foreground/80">
                        <span className="inline-flex items-baseline gap-1">
                          <span>{formatCOPM(data.equity)}</span>
                          <span className="text-[10px] text-muted-foreground font-semibold">
                            M
                          </span>
                        </span>
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
              Las cifras se presentan en la misma unidad reportada por
              Supersociedades: miles de pesos colombianos (M). Ejemplo de
              lectura: <span className="font-semibold">$994.910.759 M</span>{" "}
              equivale a 994.910.759 miles de pesos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandFinancialsSection
