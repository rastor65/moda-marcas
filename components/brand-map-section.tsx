"use client"

import { useMemo, useState } from "react"
import {
  Radar,
  Sparkles,
  Target,
  Compass,
  GitBranch,
  ArrowLeftRight,
  Info,
} from "lucide-react"

type BrandId = "Arturo Calle" | "gef" | "Totto" | "Mario Hernández" | "Vélez"
type ClusterId =
  | "luxuryLeather"
  | "craftLeather"
  | "formalMenswear"
  | "casualYouth"
  | "functionalAccessories"

const brandStyles: Record<
  BrandId,
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

// y: 0 = lujo / 100 = accesible
// x: 0 = casual / 100 = formal
const positioning: { brand: BrandId; x: number; y: number }[] = [
  { brand: "Mario Hernández", x: 35, y: 18 },
  { brand: "Vélez", x: 42, y: 32 },
  { brand: "Arturo Calle", x: 65, y: 40 },
  { brand: "gef", x: 30, y: 70 },
  { brand: "Totto", x: 78, y: 52 },
]

const brandClusterId: Record<BrandId, ClusterId> = {
  "Mario Hernández": "luxuryLeather",
  Vélez: "craftLeather",
  "Arturo Calle": "formalMenswear",
  gef: "casualYouth",
  Totto: "functionalAccessories",
}

const clustersMeta: Record<
  ClusterId,
  { label: string; description: string; gradient: string }
> = {
  luxuryLeather: {
    label: "Marroquinería de lujo premium",
    description: "Lujo aspiracional, exclusividad y narrativa fantasiosa.",
    gradient: "from-[#001b3b] via-[#0f3057] to-[#d4af37]",
  },
  craftLeather: {
    label: "Marroquinería artesanal",
    description: "Tradición, artesanía y calidez del cuero.",
    gradient: "from-[#4b2e19] via-[#8b5a2b] to-[#c28b50]",
  },
  formalMenswear: {
    label: "Moda masculina formal",
    description: "Vestuario ejecutivo y de oficina para hombres.",
    gradient: "from-[#004b3b] via-[#007a5c] to-[#37b47c]",
  },
  casualYouth: {
    label: "Moda casual juvenil",
    description: "Ropa casual, colorida y accesible para público joven.",
    gradient: "from-[#003c8f] via-white to-[#e30613]",
  },
  functionalAccessories: {
    label: "Accesorios funcionales",
    description:
      "Mochilas, morrales y maletas para estudio, trabajo y viaje.",
    gradient: "from-[#111111] via-[#e53935] to-[#ffb300]",
  },
}

const brandDetails: Record<
  BrandId,
  {
    cluster: string
    territory: string
    summary: string
    saturatedSegments: string[]
    opportunities: string[]
  }
> = {
  "Mario Hernández": {
    cluster: "Marroquinería de lujo premium",
    territory:
      "Bolsos, carteras y accesorios de cuero con énfasis en lujo, fantasía (unicornio dorado) y exclusividad.",
    summary:
      "Marca fuertemente asociada a marroquinería de alta gama. Compite en el territorio de lujo aspiracional, con narrativa de fantasía y sofisticación.",
    saturatedSegments: [
      "Marroquinería de lujo en cuero, compartida parcialmente con Vélez.",
      "Accesorios premium para público adulto de ingresos medios-altos y altos.",
    ],
    opportunities: [
      "Desarrollar una línea formal de prendas ready-to-wear que complemente la marroquinería premium.",
      "Incorporar una sublínea eco–luxury (materiales sostenibles de alta gama).",
      "Explorar colaboraciones cápsula con diseñadores o artistas para reforzar el storytelling del unicornio.",
    ],
  },
  Vélez: {
    cluster: "Marroquinería artesanal",
    territory:
      "Productos de cuero con narrativa centrada en la artesanía, la calidez de los materiales y la tradición.",
    summary:
      "Vélez se posiciona como marroquinería con fuerte raíz artesanal. Su fortaleza está en la calidad del cuero y la percepción de trabajo hecho a mano.",
    saturatedSegments: [
      "Marroquinería tradicional en cuero para uso cotidiano (bolsos, correas, billeteras).",
      "Segmento de público que valora la tradición y el origen de los materiales.",
    ],
    opportunities: [
      "Profundizar en una línea eco–friendly (curtiembres responsables, trazabilidad y certificaciones ambientales).",
      "Desarrollar accesorios tecnológicos (fundas premium para laptop, tablet, dispositivos).",
      "Explorar una línea femenina ejecutiva que combine artesanía y diseño contemporáneo.",
    ],
  },
  "Arturo Calle": {
    cluster: "Moda masculina formal",
    territory:
      "Trajes, camisas, pantalones y accesorios para hombre, orientados a entornos laborales, ejecutivos y eventos formales.",
    summary:
      "Marca líder en vestuario masculino formal en Colombia, asociada a calidad, precio accesible dentro del segmento y presencia nacional.",
    saturatedSegments: [
      "Moda masculina formal de oficina (trajes, camisas, pantalones de vestir).",
      "Segmento de hombres adultos que buscan vestuario para contextos laborales tradicionales.",
    ],
    opportunities: [
      "Crear una línea femenina ejecutiva que extienda el posicionamiento hacia ‘parejas ejecutivas’ o ‘total look corporativo’.",
      "Fortalecer una sublínea smart–casual (blazers, chinos, prendas híbridas trabajo–ocio).",
      "Introducir una colección cápsula de moda sostenible con tejidos reciclados o de bajo impacto.",
    ],
  },
  gef: {
    cluster: "Moda casual juvenil",
    territory:
      "Ropa casual, colorida y accesible para público joven y urbano, con énfasis en comodidad y tendencia.",
    summary:
      "GEF se posiciona como marca de moda casual juvenil, con fuerte presencia en básicos, jeans y prendas de uso diario.",
    saturatedSegments: [
      "Fast fashion casual dirigido a adolescentes y jóvenes adultos.",
      "Básicos y jeans en rangos de precio accesibles.",
    ],
    opportunities: [
      "Desarrollar una línea athleisure / sport que conecte deporte ligero y moda urbana.",
      "Crear una colección eco–conscious con mensajes explícitos de sostenibilidad.",
      "Lanzar cápsulas colaborativas con artistas, influencers o causas sociales (colecciones limitadas).",
    ],
  },
  Totto: {
    cluster: "Accesorios funcionales",
    territory:
      "Mochilas, morrales, maletas y accesorios funcionales para estudio, trabajo y viaje, con enfoque en resistencia y organización.",
    summary:
      "Totto domina el territorio de mochilas y morrales en entornos escolares y urbanos, con fuerte recordación visual.",
    saturatedSegments: [
      "Mochilas escolares y universitarias, morrales urbanos y maletas de viaje básicas.",
      "Segmento de estudiantes y jóvenes profesionales que buscan funcionalidad por encima de moda.",
    ],
    opportunities: [
      "Introducir una línea business–travel premium dirigida a ejecutivos que viajan frecuentemente.",
      "Desarrollar accesorios tecnológicos (fundas, organizadores de cables, cases modulares) con diseño más fashion.",
      "Explorar colaboraciones con marcas de moda o ilustradores para colecciones de mochilas de diseño.",
    ],
  },
}

const BrandMapSection = () => {
  const [selectedBrand, setSelectedBrand] = useState<BrandId>("Mario Hernández")
  const [hoveredBrand, setHoveredBrand] = useState<BrandId | null>(null)
  const [activeCluster, setActiveCluster] = useState<ClusterId | "all">("all")

  const selected = brandDetails[selectedBrand]
  const selectedStyle = brandStyles[selectedBrand]
  const selectedClusterId = brandClusterId[selectedBrand]
  const selectedClusterMeta = clustersMeta[selectedClusterId]

  const { closest, farthest } = useMemo(() => {
    const current = positioning.find((p) => p.brand === selectedBrand)
    if (!current) return { closest: null as BrandId | null, farthest: null as BrandId | null }

    let minD = Infinity
    let maxD = -Infinity
    let closestBrand: BrandId | null = null
    let farthestBrand: BrandId | null = null

    for (const point of positioning) {
      if (point.brand === selectedBrand) continue
      const dx = point.x - current.x
      const dy = point.y - current.y
      const d2 = dx * dx + dy * dy
      if (d2 < minD) {
        minD = d2
        closestBrand = point.brand
      }
      if (d2 > maxD) {
        maxD = d2
        farthestBrand = point.brand
      }
    }
    return { closest: closestBrand, farthest: farthestBrand }
  }, [selectedBrand])

  const hoveredPoint = hoveredBrand
    ? positioning.find((p) => p.brand === hoveredBrand) ?? null
    : null

  return (
    <section
      id="brand-map"
      className="py-20 md:py-28 px-4 md:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Encabezado e instrucciones */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              Mapa marcario · Interactivo
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Posicionamiento competitivo y oportunidades por marca
              </h2>
              <p className="text-sm md:text-base text-foreground/70">
                Este mapa ubica cada marca según dos ejes:{" "}
                <span className="font-medium">casual–formal</span> (horizontal) y{" "}
                <span className="font-medium">accesible–lujo</span> (vertical). A
                partir de esa lectura se identifican clústers estratégicos,
                segmentos saturados y oportunidades de expansión.
              </p>
            </div>
          </div>

          {/* Cómo usar el mapa */}
          <div className="rounded-2xl border border-border/80 bg-card/80 px-4 py-3.5 text-[11px] space-y-2 max-w-md">
            <div className="flex items-center gap-2 font-semibold">
              <Info className="w-4 h-4 text-primary" />
              <span>Cómo leer este mapa</span>
            </div>
            <ol className="space-y-1.5 text-muted-foreground">
              <li>
                <span className="font-semibold">1.</span> Elige una marca en la
                columna izquierda.
              </li>
              <li>
                <span className="font-semibold">2.</span> Observa su posición en
                el mapa y, si quieres, filtra por clúster.
              </li>
              <li>
                <span className="font-semibold">3.</span> Revisa en la columna
                derecha los segmentos saturados y las oportunidades de
                expansión.
              </li>
            </ol>
          </div>
        </div>

        {/* Layout principal: selección · mapa · análisis */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr,1.2fr,1.3fr] gap-6 lg:gap-8 items-start">
          {/* Columna 1: selección de marca y clúster */}
          <div className="space-y-4">
            {/* Selección de marca */}
            <div className="rounded-3xl border border-border/80 bg-card/80 px-4 py-4 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Target className="w-4 h-4 text-primary" />
                <span>1. Elige una marca</span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Selecciona una marca para ver su ubicación en el mapa y su
                lectura estratégica.
              </p>

              <div className="space-y-2">
                {(Object.keys(brandDetails) as BrandId[]).map((brand) => {
                  const style = brandStyles[brand]
                  const active = brand === selectedBrand
                  const inActiveCluster =
                    activeCluster === "all" ||
                    brandClusterId[brand] === activeCluster

                  if (!inActiveCluster && !active) {
                    // si el filtro de clúster está activo, ocultamos marcas que no pertenecen
                    // pero nunca ocultamos la seleccionada
                    return null
                  }

                  return (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => setSelectedBrand(brand)}
                      className={[
                        "w-full flex items-center justify-between gap-3 rounded-2xl border px-3 py-2 text-[11px] md:text-xs transition-colors",
                        active
                          ? "border-primary/80 bg-background text-foreground shadow-sm"
                          : "border-border/70 bg-background/60 hover:border-primary/50",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-background text-[11px] font-semibold text-foreground/80">
                          {style.initials}
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="font-semibold">
                            {brand === "gef" ? "GEF" : brand}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {brandDetails[brand].cluster}
                          </span>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Filtro de clúster */}
            <div className="rounded-3xl border border-border/80 bg-card/80 px-4 py-4 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <GitBranch className="w-4 h-4 text-primary" />
                <span>2. Filtra por clúster (opcional)</span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Puedes resaltar un grupo de marcas por territorio estratégico o
                ver todas al tiempo.
              </p>

              <div className="flex flex-wrap gap-2 text-[11px]">
                <button
                  type="button"
                  onClick={() => setActiveCluster("all")}
                  className={[
                    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 transition-colors",
                    activeCluster === "all"
                      ? "border-primary/80 bg-background text-foreground"
                      : "border-border/70 bg-background/70 hover:border-primary/40 text-muted-foreground",
                  ].join(" ")}
                >
                  <span className="h-1.5 w-4 rounded-full bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500" />
                  <span>Todos los clústers</span>
                </button>

                {(Object.keys(clustersMeta) as ClusterId[]).map((id) => {
                  const meta = clustersMeta[id]
                  const active = activeCluster === id
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActiveCluster(id)}
                      className={[
                        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 transition-colors",
                        active
                          ? "border-primary/80 bg-background text-foreground"
                          : "border-border/70 bg-background/70 hover:border-primary/40 text-muted-foreground",
                      ].join(" ")}
                    >
                      <span
                        className={`h-1.5 w-4 rounded-full bg-gradient-to-r ${meta.gradient}`}
                      />
                      <span className="truncate max-w-[150px]">
                        {meta.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Leyenda de ejes */}
            <div className="rounded-3xl border border-dashed border-border/80 bg-card/80 px-4 py-3 space-y-2 text-[11px] shadow-sm">
              <div className="flex items-center gap-2 font-medium text-muted-foreground">
                <Radar className="w-4 h-4 text-primary" />
                <span>3. Interpreta los ejes</span>
              </div>
              <div className="space-y-1.5 text-muted-foreground">
                <p>
                  <span className="font-semibold">Vertical:</span> de oferta
                  accesible (parte baja) a lujo premium (parte alta).
                </p>
                <p>
                  <span className="font-semibold">Horizontal:</span> de estilo
                  casual (izquierda) a formal / ejecutivo (derecha).
                </p>
              </div>
            </div>
          </div>

          {/* Columna 2: mapa central */}
          <div className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur shadow-sm px-5 md:px-6 py-6 space-y-5">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Mapa conceptual
              </p>
              <p className="text-sm text-foreground/80">
                Pasa el cursor por los puntos o haz clic para ver el detalle
                estratégico de cada marca.
              </p>
            </div>

            <div className="relative h-80 md:h-96 rounded-2xl border border-border/80 bg-background/90 overflow-hidden">
              {/* Marco interno */}
              <div className="absolute inset-4 rounded-xl border border-dashed border-border/60" />

              {/* Cuadrícula */}
              <div className="absolute inset-4 pointer-events-none">
                <div className="absolute inset-y-0 left-1/2 w-px bg-border/50" />
                <div className="absolute inset-x-0 top-1/2 h-px bg-border/50" />
              </div>

              {/* Etiquetas de ejes */}
              {/* Etiquetas de ejes: una palabra en cada esquina */}
              <div className="absolute inset-4 pointer-events-none text-[10px] text-muted-foreground font-medium">
                {/* Superior izquierda */}
                <span className="absolute left-1.5 top-1.5">Lujo</span>

                {/* Superior derecha */}
                <span className="absolute right-1.5 top-1.5">Formal</span>

                {/* Inferior izquierda */}
                <span className="absolute left-1.5 bottom-1.5">Accesible</span>

                {/* Inferior derecha */}
                <span className="absolute right-1.5 bottom-1.5">Casual</span>
              </div>

              {/* Tooltip */}
              {hoveredPoint && (
                <div
                  className="pointer-events-none absolute z-20 max-w-[190px] rounded-xl border border-border/80 bg-card/95 px-3 py-2 text-[10px] shadow-sm"
                  style={{
                    left: `${hoveredPoint.x}%`,
                    top: `${hoveredPoint.y - 8}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <p className="font-semibold mb-0.5">
                    {hoveredBrand === "gef" ? "GEF" : hoveredBrand}
                  </p>
                  <p className="text-[9px] text-muted-foreground">
                    {brandDetails[hoveredBrand!].cluster}
                  </p>
                  <p className="mt-1 text-[9px] text-foreground/70">
                    {brandDetails[hoveredBrand!].territory}
                  </p>
                </div>
              )}

              {/* Puntos de marcas */}
              {positioning.map((point) => {
                const isSelected = point.brand === selectedBrand
                const inActiveCluster =
                  activeCluster === "all" ||
                  brandClusterId[point.brand] === activeCluster
                const style = brandStyles[point.brand]

                return (
                  <button
                    key={point.brand}
                    type="button"
                    onClick={() => setSelectedBrand(point.brand)}
                    onMouseEnter={() => setHoveredBrand(point.brand)}
                    onMouseLeave={() =>
                      setHoveredBrand((prev) =>
                        prev === point.brand ? null : prev,
                      )
                    }
                    onFocus={() => setHoveredBrand(point.brand)}
                    onBlur={() =>
                      setHoveredBrand((prev) =>
                        prev === point.brand ? null : prev,
                      )
                    }
                    className={[
                      "group absolute flex items-center gap-1.5 text-[11px] rounded-full border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      isSelected
                        ? "px-3.5 py-1.5 bg-card/95 border-primary/70 shadow-md shadow-primary/25 scale-[1.03]"
                        : "px-2.5 py-1 bg-card/90 border-border/80 hover:border-primary/40 hover:shadow-sm hover:-translate-y-0.5",
                      inActiveCluster ? "opacity-100" : "opacity-30",
                    ].join(" ")}
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {isSelected && (
                      <span className="absolute -inset-1 rounded-full bg-primary/5 blur-sm" />
                    )}
                    <span
                      className="relative h-1.5 w-6 rounded-full"
                      style={{ background: style.gradient }}
                    />
                    <span className="relative font-semibold">
                      {point.brand === "gef" ? "GEF" : point.brand}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Columna 3: análisis estratégico */}
          <div className="rounded-3xl border border-border/80 bg-card/80 backdrop-blur px-5 md:px-6 py-6 space-y-5 shadow-sm">
            {/* Cabecera marca seleccionada */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-background text-[11px] font-semibold text-foreground/80">
                  {selectedStyle.initials}
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Marca seleccionada
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {selectedBrand === "gef" ? "GEF" : selectedBrand}
                  </h3>
                  <div className="inline-flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/80 px-2 py-0.5">
                      <Target className="w-3.5 h-3.5 text-primary" />
                      <span className="font-medium">
                        {selectedClusterMeta.label}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Territorio y resumen */}
            <div className="grid grid-cols-1 gap-3">
              <div className="rounded-2xl border border-border/80 bg-background/80 px-3.5 py-3 text-[11px] md:text-xs space-y-1.5">
                <p className="uppercase tracking-[0.18em] text-muted-foreground">
                  Territorio de marca
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  {selected.territory}
                </p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-background/80 px-3.5 py-3 text-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <Compass className="w-4 h-4 text-primary" />
                  <span>Lectura estratégica</span>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {selected.summary}
                </p>
              </div>
            </div>

            {/* Segmentos saturados vs oportunidades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="font-semibold text-foreground/90 text-xs md:text-sm">
                  Segmentos saturados
                </p>
                <ul className="space-y-1.5 text-[12px] md:text-[13px] text-foreground/80">
                  {selected.saturatedSegments.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-foreground/90 text-xs md:text-sm">
                  Oportunidades de expansión
                </p>
                <ul className="space-y-1.5 text-[12px] md:text-[13px] text-foreground/80">
                  {selected.opportunities.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Comparativa con otras marcas */}
            {(closest || farthest) && (
              <div className="rounded-2xl border border-dashed border-border/80 bg-background/70 px-3.5 py-3.5 text-[12px] md:text-[13px] space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <ArrowLeftRight className="w-4 h-4 text-primary" />
                  <span>Comparativa en el mapa</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {closest && (
                    <div className="space-y-1.5">
                      <p className="font-semibold text-foreground/90">
                        Vecina más próxima
                      </p>
                      <p className="text-foreground/85">
                        <span className="font-semibold">
                          {closest === "gef" ? "GEF" : closest}
                        </span>{" "}
                        se ubica cerca de{" "}
                        {selectedBrand === "gef" ? "GEF" : selectedBrand},{" "}
                        lo que indica un{" "}
                        <span className="font-medium">
                          territorio competitivo similar
                        </span>{" "}
                        dentro del mapa.
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Clúster: {brandDetails[closest].cluster}
                      </p>
                    </div>
                  )}
                  {farthest && (
                    <div className="space-y-1.5">
                      <p className="font-semibold text-foreground/90">
                        Marca más alejada
                      </p>
                      <p className="text-foreground/85">
                        <span className="font-semibold">
                          {farthest === "gef" ? "GEF" : farthest}
                        </span>{" "}
                        se sitúa en el extremo opuesto de{" "}
                        {selectedBrand === "gef" ? "GEF" : selectedBrand},
                        mostrando un{" "}
                        <span className="font-medium">
                          espacio de diferenciación muy claro
                        </span>
                        .
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Clúster: {brandDetails[farthest].cluster}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <p className="text-[11px] text-muted-foreground border-t border-border/70 pt-3">
              La interpretación es de carácter académico y se basa en el
              posicionamiento percibido de cada marca dentro del sector moda y
              marroquinería.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandMapSection
