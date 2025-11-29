import { CheckCircle2, AlertTriangle, TrendingUp, Sparkles } from "lucide-react"

const ConclusionsSection = () => {
  const conclusions = [
    {
      question: "¿Cuál marca del sector es la más fuerte y por qué?",
      label: "Marca más fuerte",
      answer:
        "Arturo Calle se consolida como la marca más fuerte del grupo. Su fortaleza radica en más de 40 años de presencia continua en el mercado colombiano, un posicionamiento claro en moda masculina formal, una identidad visual centrada en un nombre propio fácilmente recordable y un altísimo nivel de reconocimiento. El apellido “Calle” ha trascendido su condición de nombre personal para convertirse en sinónimo de elegancia formal en Colombia, generando un goodwill marcario superior al de las demás marcas analizadas.",
      tone: "strong",
    },
    {
      question: "¿Cuál es la más débil o descriptiva?",
      label: "Marca más débil / descriptiva",
      answer:
        'Vélez presenta la posición más débil desde el punto de vista de distintividad intrínseca. Aunque cuenta con trayectoria y reputación, su signo depende en gran medida del reconocimiento histórico y de la tradición artesanal, más que de elementos gráficos o denominativos altamente diferenciadores. El nombre “Vélez” es un apellido común en español y no incorpora símbolos potentes que lo distingan marcariamente de forma inmediata, por lo que su fuerza descansa más en la experiencia de marca que en la estructura del signo.',
      tone: "weak",
    },
    {
      question: "¿Qué tendencias marcarias identifican en el sector?",
      label: "Tendencias del sector",
      answer:
        "En el sector se observan tendencias claras: (1) Fuerte especialización por nichos (marroquinería premium, moda formal masculina, casual juvenil y accesorios funcionales); (2) Uso estratégico de elementos simbólicos para reforzar posicionamiento (como el unicornio dorado de Mario Hernández); (3) Relevancia de la herencia, los apellidos y la historia de marca, especialmente en segmentos premium; (4) Preferencia por marcas mixtas que combinan componentes nominativos y figurativos para ampliar el espectro de protección; y (5) Coexistencia de propuestas tradicionales con marcas orientadas a públicos jóvenes y urbanos.",
      tone: "trend",
    },
    {
      question: "¿Qué oportunidades ven para crear nuevas marcas?",
      label: "Oportunidades de expansión",
      answer:
        "A partir del mapa marcario se identifican oportunidades nítidas: (1) Desarrollar marcas de moda femenina formal o ejecutiva que ocupen un territorio equivalente al de Arturo Calle, pero dirigido a mujeres; (2) Crear marcas de marroquinería sostenible con enfoque explícito en materiales eco-friendly, trazabilidad y responsabilidad ambiental; (3) Impulsar propuestas en accesorios de belleza y cosmética premium que conecten con el universo moda; (4) Diseñar líneas de ropa deportiva y athleisure que combinen comodidad, desempeño y diseño; y (5) Lanzar marcas digitales-first orientadas a públicos millennial y Gen Z, con fuerte presencia en canales online y narrativa de comunidad.",
      tone: "opportunity",
    },
  ]

  const iconByTone: Record<
    string,
    { Icon: typeof CheckCircle2; bg: string; dot: string }
  > = {
    strong: {
      Icon: CheckCircle2,
      bg: "bg-emerald-50/60 dark:bg-emerald-500/5",
      dot: "bg-emerald-500",
    },
    weak: {
      Icon: AlertTriangle,
      bg: "bg-amber-50/60 dark:bg-amber-500/5",
      dot: "bg-amber-500",
    },
    trend: {
      Icon: TrendingUp,
      bg: "bg-sky-50/60 dark:bg-sky-500/5",
      dot: "bg-sky-500",
    },
    opportunity: {
      Icon: Sparkles,
      bg: "bg-violet-50/60 dark:bg-violet-500/5",
      dot: "bg-violet-500",
    },
  }

  return (
    <section
      id="conclusions"
      className="py-20 md:py-28 px-4 md:px-8 bg-accent/10"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground backdrop-blur">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              Conclusiones · Equipo C
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Síntesis del análisis marcario
              </h2>
              <p className="text-sm md:text-base text-foreground/70 max-w-2xl">
                Resumen estructurado de los principales hallazgos sobre
                fortaleza marcaria, debilidades, tendencias del sector y
                oportunidades para nuevas marcas. Diseñado para una presentación
                oral de aproximadamente 2 minutos.
              </p>
            </div>
          </div>

          {/* Mini resumen en chips */}
          <div className="grid grid-cols-2 gap-3 text-[11px] md:text-xs max-w-xs">
            <div className="rounded-2xl border border-border/80 bg-card/80 px-3 py-2.5">
              <p className="font-semibold">Marca líder</p>
              <p className="text-muted-foreground mt-1">Arturo Calle</p>
            </div>
            <div className="rounded-2xl border border-border/80 bg-card/80 px-3 py-2.5">
              <p className="font-semibold">Segmento más débil</p>
              <p className="text-muted-foreground mt-1">
                Distintividad de Vélez
              </p>
            </div>
          </div>
        </div>

        {/* Cards de conclusiones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conclusions.map((item, idx) => {
            const meta = iconByTone[item.tone]
            const Icon = meta.Icon

            return (
              <article
                key={idx}
                className={`relative rounded-3xl border border-border/80 bg-card/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ${meta.bg} overflow-hidden`}
              >
                {/* Barra superior tenue */}
                <div className="absolute inset-x-4 top-0 h-1 rounded-b-full bg-gradient-to-r from-border/40 via-border/10 to-border/40" />

                <div className="p-5 md:p-6 space-y-4">
                  {/* Encabezado de la tarjeta */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-background/80">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {item.label}
                      </p>
                      <h3 className="text-sm md:text-base font-semibold text-foreground">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  {/* Contenido */}
                  <p className="text-[13px] md:text-sm text-foreground/80 leading-relaxed">
                    {item.answer}
                  </p>
                </div>

                {/* Footer sutil */}
                <div className="flex items-center justify-between px-5 md:px-6 pb-4 pt-1 text-[11px] text-muted-foreground border-t border-border/70">
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${meta.dot}`}
                    />
                    <span>
                      Conclusión {idx + 1} / {conclusions.length}
                    </span>
                  </span>
                  <span className="hidden sm:inline">
                    Insumo directo para la conclusión oral.
                  </span>
                </div>
              </article>
            )
          })}
        </div>

        {/* Cierre narrativo corto (para leer en la sustentación) */}
        <div className="rounded-3xl border border-dashed border-border/80 bg-background/80 px-5 md:px-6 py-4 md:py-5">
          <p className="text-[13px] md:text-sm text-foreground/75 leading-relaxed">
            El mapa marcario confirma que{" "}
            <span className="font-semibold">Arturo Calle</span> lidera en
            fortaleza y posicionamiento, mientras que{" "}
            <span className="font-semibold">Vélez</span> depende más de su
            historia que de una distintividad intrínseca del signo. El sector
            se organiza en clústers claros —marroquinería de lujo, marroquinería
            artesanal, moda formal masculina, casual juvenil y accesorios
            funcionales—, dejando espacios libres en moda femenina ejecutiva,
            propuestas eco–friendly y athleisure, donde podrían nacer nuevas
            marcas con alta diferenciación estratégica.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ConclusionsSection
